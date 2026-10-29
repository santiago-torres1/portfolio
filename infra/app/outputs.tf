output "site_url" {
  description = "Public URL of the site (custom domain if configured)."
  value       = "https://${local.use_custom_domain ? var.domain_names[0] : aws_cloudfront_distribution.site.domain_name}"
}

output "cloudfront_distribution_id" {
  value = aws_cloudfront_distribution.site.id
}

output "cloudfront_domain_name" {
  description = "Point custom-domain DNS (CNAME/ALIAS) here."
  value       = aws_cloudfront_distribution.site.domain_name
}

output "lambda_function_name" {
  value = aws_lambda_function.app.function_name
}
