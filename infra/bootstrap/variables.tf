variable "aws_region" {
  description = "Region for the state bucket, ECR repository, and the app stack."
  type        = string
  default     = "ca-central-1"
}

variable "project" {
  description = "Name prefix for every resource. The app stack must use the same value."
  type        = string
  default     = "portfolio"
}

variable "github_repository" {
  description = "GitHub repository (owner/name) allowed to assume the CI/CD roles."
  type        = string
  default     = "santiago-torres1/portfolio"
}

variable "github_environment" {
  description = "GitHub environment whose jobs may assume the deploy role."
  type        = string
  default     = "production"
}

variable "create_github_oidc_provider" {
  description = "Create the GitHub OIDC provider. Set to false if the account already has one."
  type        = bool
  default     = true
}

variable "ecr_images_to_keep" {
  description = "Number of images kept in ECR; older ones are expired."
  type        = number
  default     = 10
}

variable "budget_limit_usd" {
  description = "Monthly cost budget for the whole account, in USD."
  type        = number
  default     = 5
}

variable "budget_alert_email" {
  description = "Email for budget alerts. Leave empty to skip creating the budget."
  type        = string
  default     = ""
}
