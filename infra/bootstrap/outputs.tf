output "state_bucket" {
  description = "S3 bucket holding Terraform state for both stacks."
  value       = aws_s3_bucket.state.bucket
}

output "ecr_repository_url" {
  value = aws_ecr_repository.app.repository_url
}

output "plan_role_arn" {
  value = aws_iam_role.github_plan.arn
}

output "deploy_role_arn" {
  value = aws_iam_role.github_deploy.arn
}

output "github_variables" {
  description = "Run these to configure the repository variables the workflows read."
  value       = <<-EOT
    gh variable set AWS_REGION          --repo ${var.github_repository} --body ${var.aws_region}
    gh variable set AWS_PLAN_ROLE_ARN   --repo ${var.github_repository} --body ${aws_iam_role.github_plan.arn}
    gh variable set AWS_DEPLOY_ROLE_ARN --repo ${var.github_repository} --body ${aws_iam_role.github_deploy.arn}
    gh variable set TF_STATE_BUCKET     --repo ${var.github_repository} --body ${aws_s3_bucket.state.bucket}
    gh variable set ECR_REPOSITORY      --repo ${var.github_repository} --body ${aws_ecr_repository.app.name}
  EOT
}
