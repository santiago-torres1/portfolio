data "aws_ecr_repository" "app" {
  name = var.project
}

data "aws_iam_role" "lambda" {
  name = "${var.project}-lambda"
}

locals {
  function_name = var.project
  # Plans don't need a real image; first apply gets one from the CD pipeline.
  initial_image_uri = coalesce(var.image_uri, "${data.aws_ecr_repository.app.repository_url}:latest")
}

resource "aws_cloudwatch_log_group" "app" {
  name              = "/aws/lambda/${local.function_name}"
  retention_in_days = var.log_retention_days
}

resource "aws_lambda_function" "app" {
  function_name = local.function_name
  description   = "Next.js portfolio served through the Lambda Web Adapter"
  role          = data.aws_iam_role.lambda.arn

  package_type  = "Image"
  image_uri     = local.initial_image_uri
  architectures = [var.lambda_architecture]

  memory_size                    = var.lambda_memory_mb
  timeout                        = var.lambda_timeout_seconds
  reserved_concurrent_executions = var.reserved_concurrency

  logging_config {
    log_format = "Text"
    log_group  = aws_cloudwatch_log_group.app.name
  }

  lifecycle {
    # Code deploys are done by the CD pipeline (update-function-code).
    ignore_changes = [image_uri]
  }
}

# Only CloudFront can call the URL: AWS_IAM auth + OAC request signing.
resource "aws_lambda_function_url" "app" {
  function_name      = aws_lambda_function.app.function_name
  authorization_type = "AWS_IAM"
}

# Function URLs need both permissions (InvokeFunctionUrl and InvokeFunction).
resource "aws_lambda_permission" "cloudfront_invoke_url" {
  statement_id           = "AllowCloudFrontInvokeFunctionUrl"
  action                 = "lambda:InvokeFunctionUrl"
  function_name          = aws_lambda_function.app.function_name
  principal              = "cloudfront.amazonaws.com"
  source_arn             = aws_cloudfront_distribution.site.arn
  function_url_auth_type = "AWS_IAM"
}

resource "aws_lambda_permission" "cloudfront_invoke" {
  statement_id             = "AllowCloudFrontInvokeFunction"
  action                   = "lambda:InvokeFunction"
  function_name            = aws_lambda_function.app.function_name
  principal                = "cloudfront.amazonaws.com"
  source_arn               = aws_cloudfront_distribution.site.arn
  invoked_via_function_url = true
}
