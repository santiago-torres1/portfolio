variable "aws_region" {
  description = "Region for the Lambda function. Must match the bootstrap stack."
  type        = string
  default     = "ca-central-1"
}

variable "project" {
  description = "Name prefix shared with the bootstrap stack (ECR repo, Lambda role)."
  type        = string
  default     = "portfolio"
}

variable "image_uri" {
  description = <<-EOT
    Container image for the function. Only used when the function is first
    created; after that the CD pipeline ships new images with
    `aws lambda update-function-code`, so Terraform ignores this attribute.
  EOT
  type        = string
  default     = null
}

variable "lambda_architecture" {
  description = "arm64 is ~20% cheaper; the CD workflow builds on an arm64 runner to match."
  type        = string
  default     = "arm64"

  validation {
    condition     = contains(["arm64", "x86_64"], var.lambda_architecture)
    error_message = "lambda_architecture must be arm64 or x86_64."
  }
}

variable "lambda_memory_mb" {
  description = "Memory (and proportional CPU) for the function. More memory = faster cold starts."
  type        = number
  default     = 1024
}

variable "lambda_timeout_seconds" {
  type    = number
  default = 10
}

variable "reserved_concurrency" {
  description = <<-EOT
    Cap on concurrent executions, a guard against runaway cost. -1 means
    unreserved. New accounts often have a total quota of 10, which doesn't
    leave room to reserve any.
  EOT
  type        = number
  default     = -1
}

variable "log_retention_days" {
  type    = number
  default = 14
}

variable "price_class" {
  description = "PriceClass_100 serves from North America and Europe edges only (cheapest)."
  type        = string
  default     = "PriceClass_100"
}

variable "domain_names" {
  description = "Optional custom domains (CloudFront aliases). Requires acm_certificate_arn."
  type        = list(string)
  default     = []
}

variable "acm_certificate_arn" {
  description = "ACM certificate in us-east-1 covering domain_names."
  type        = string
  default     = null

  validation {
    condition     = length(var.domain_names) == 0 || var.acm_certificate_arn != null
    error_message = "acm_certificate_arn is required when domain_names is set."
  }
}
