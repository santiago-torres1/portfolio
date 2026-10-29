# GitHub Actions authenticates with short-lived OIDC tokens; no AWS keys are
# stored in GitHub.
#   - plan:   assumable by pull_request jobs; read-only + state lock.
#   - deploy: assumable only by jobs in the GitHub "production" environment.

resource "aws_iam_openid_connect_provider" "github" {
  count = var.create_github_oidc_provider ? 1 : 0

  url            = "https://token.actions.githubusercontent.com"
  client_id_list = ["sts.amazonaws.com"]
}

data "aws_iam_openid_connect_provider" "github" {
  count = var.create_github_oidc_provider ? 0 : 1

  url = "https://token.actions.githubusercontent.com"
}

locals {
  github_oidc_provider_arn = (var.create_github_oidc_provider
    ? aws_iam_openid_connect_provider.github[0].arn
    : data.aws_iam_openid_connect_provider.github[0].arn
  )

  app_state_prefix = "app/"
  app_state_lock   = "${local.app_state_prefix}terraform.tfstate.tflock"
}

data "aws_iam_policy_document" "github_trust" {
  for_each = {
    plan   = "repo:${var.github_repository}:pull_request"
    deploy = "repo:${var.github_repository}:environment:${var.github_environment}"
  }

  statement {
    actions = ["sts:AssumeRoleWithWebIdentity"]

    principals {
      type        = "Federated"
      identifiers = [local.github_oidc_provider_arn]
    }

    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:aud"
      values   = ["sts.amazonaws.com"]
    }

    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:sub"
      values   = [each.value]
    }
  }
}

# ---------------------------------------------------------------------------
# Read access shared by both roles (what `terraform plan` needs)
# ---------------------------------------------------------------------------

data "aws_iam_policy_document" "app_read" {
  statement {
    sid       = "StateList"
    actions   = ["s3:ListBucket"]
    resources = [aws_s3_bucket.state.arn]
  }

  statement {
    sid       = "StateRead"
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.state.arn}/${local.app_state_prefix}*"]
  }

  statement {
    sid       = "StateLock"
    actions   = ["s3:PutObject", "s3:DeleteObject"]
    resources = ["${aws_s3_bucket.state.arn}/${local.app_state_lock}"]
  }

  statement {
    sid       = "EcrRead"
    actions   = ["ecr:DescribeRepositories", "ecr:DescribeImages", "ecr:ListTagsForResource"]
    resources = [aws_ecr_repository.app.arn]
  }

  statement {
    sid       = "LambdaRoleRead"
    actions   = ["iam:GetRole"]
    resources = [aws_iam_role.lambda.arn]
  }

  statement {
    sid       = "LambdaRead"
    actions   = ["lambda:Get*", "lambda:List*"]
    resources = [local.function_arn, "${local.function_arn}:*"]
  }

  statement {
    sid       = "LogsDescribe"
    actions   = ["logs:DescribeLogGroups"]
    resources = ["*"]
  }

  statement {
    sid       = "LogsRead"
    actions   = ["logs:ListTagsForResource", "logs:ListTagsLogGroup"]
    resources = [local.log_group_arn, "${local.log_group_arn}:*"]
  }

  statement {
    sid       = "CloudFrontRead"
    actions   = ["cloudfront:Get*", "cloudfront:List*"]
    resources = ["*"]
  }
}

# ---------------------------------------------------------------------------
# Write access for the deploy role, scoped to this project's resources
# ---------------------------------------------------------------------------

data "aws_iam_policy_document" "app_deploy" {
  statement {
    sid       = "StateWrite"
    actions   = ["s3:PutObject", "s3:DeleteObject"]
    resources = ["${aws_s3_bucket.state.arn}/${local.app_state_prefix}*"]
  }

  statement {
    sid       = "EcrLogin"
    actions   = ["ecr:GetAuthorizationToken"]
    resources = ["*"]
  }

  statement {
    sid = "EcrPush"
    actions = [
      "ecr:BatchCheckLayerAvailability",
      "ecr:BatchGetImage",
      "ecr:CompleteLayerUpload",
      "ecr:GetDownloadUrlForLayer",
      "ecr:InitiateLayerUpload",
      "ecr:PutImage",
      "ecr:UploadLayerPart",
    ]
    resources = [aws_ecr_repository.app.arn]
  }

  statement {
    sid       = "LambdaManage"
    actions   = ["lambda:*"]
    resources = [local.function_arn, "${local.function_arn}:*"]
  }

  statement {
    sid       = "PassLambdaRole"
    actions   = ["iam:PassRole"]
    resources = [aws_iam_role.lambda.arn]

    condition {
      test     = "StringEquals"
      variable = "iam:PassedToService"
      values   = ["lambda.amazonaws.com"]
    }
  }

  statement {
    sid = "LogsManage"
    actions = [
      "logs:CreateLogGroup",
      "logs:DeleteLogGroup",
      "logs:PutRetentionPolicy",
      "logs:DeleteRetentionPolicy",
      "logs:TagResource",
      "logs:UntagResource",
      "logs:TagLogGroup",
      "logs:UntagLogGroup",
    ]
    resources = [local.log_group_arn, "${local.log_group_arn}:*"]
  }

  # CloudFront doesn't support resource-level scoping on create calls.
  statement {
    sid = "CloudFrontManage"
    actions = [
      "cloudfront:CreateDistribution",
      "cloudfront:UpdateDistribution",
      "cloudfront:DeleteDistribution",
      "cloudfront:TagResource",
      "cloudfront:UntagResource",
      "cloudfront:CreateInvalidation",
      "cloudfront:CreateOriginAccessControl",
      "cloudfront:UpdateOriginAccessControl",
      "cloudfront:DeleteOriginAccessControl",
      "cloudfront:CreateCachePolicy",
      "cloudfront:UpdateCachePolicy",
      "cloudfront:DeleteCachePolicy",
    ]
    resources = ["*"]
  }

  # Only needed when attaching a custom domain certificate to CloudFront.
  statement {
    sid       = "AcmRead"
    actions   = ["acm:DescribeCertificate", "acm:ListCertificates"]
    resources = ["*"]
  }
}

resource "aws_iam_role" "github_plan" {
  name               = "${var.project}-github-plan"
  assume_role_policy = data.aws_iam_policy_document.github_trust["plan"].json
}

resource "aws_iam_role_policy" "github_plan_read" {
  name   = "app-read"
  role   = aws_iam_role.github_plan.id
  policy = data.aws_iam_policy_document.app_read.json
}

resource "aws_iam_role" "github_deploy" {
  name               = "${var.project}-github-deploy"
  assume_role_policy = data.aws_iam_policy_document.github_trust["deploy"].json
}

resource "aws_iam_role_policy" "github_deploy_read" {
  name   = "app-read"
  role   = aws_iam_role.github_deploy.id
  policy = data.aws_iam_policy_document.app_read.json
}

resource "aws_iam_role_policy" "github_deploy_write" {
  name   = "app-deploy"
  role   = aws_iam_role.github_deploy.id
  policy = data.aws_iam_policy_document.app_deploy.json
}
