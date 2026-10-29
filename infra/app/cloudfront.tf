data "aws_cloudfront_cache_policy" "caching_optimized" {
  name = "Managed-CachingOptimized"
}

# Forwards viewer headers/query strings but not Host: the function URL only
# answers to its own hostname.
data "aws_cloudfront_origin_request_policy" "all_viewer_except_host" {
  name = "Managed-AllViewerExceptHostHeader"
}

data "aws_cloudfront_response_headers_policy" "security_headers" {
  name = "Managed-SecurityHeadersPolicy"
}

resource "aws_cloudfront_origin_access_control" "lambda" {
  name                              = "${var.project}-lambda"
  description                       = "Signs CloudFront requests to the ${var.project} function URL"
  origin_access_control_origin_type = "lambda"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# Pages are prerendered and sent with `s-maxage=31536000`, so CloudFront keeps
# them until the next deploy invalidates the cache. Next.js returns either HTML
# or an RSC payload from the same URL depending on these request headers (and
# the `_rsc` query string); CloudFront ignores `Vary`, so they must be part of
# the cache key.
resource "aws_cloudfront_cache_policy" "next" {
  name        = "${var.project}-next"
  comment     = "Honour origin Cache-Control; key on Next.js RSC headers"
  min_ttl     = 0
  default_ttl = 0
  max_ttl     = 31536000

  parameters_in_cache_key_and_forwarded_to_origin {
    enable_accept_encoding_brotli = true
    enable_accept_encoding_gzip   = true

    cookies_config {
      cookie_behavior = "none"
    }

    headers_config {
      header_behavior = "whitelist"
      headers {
        items = [
          "rsc",
          "next-router-prefetch",
          "next-router-state-tree",
          "next-router-segment-prefetch",
          "next-url",
        ]
      }
    }

    query_strings_config {
      query_string_behavior = "all"
    }
  }
}

locals {
  lambda_origin_id  = "lambda"
  function_url_host = split("/", aws_lambda_function_url.app.function_url)[2]
  use_custom_domain = length(var.domain_names) > 0
}

resource "aws_cloudfront_distribution" "site" {
  enabled         = true
  comment         = "${var.project}: Next.js on Lambda"
  is_ipv6_enabled = true
  http_version    = "http2and3"
  price_class     = var.price_class
  aliases         = var.domain_names

  origin {
    origin_id                = local.lambda_origin_id
    domain_name              = local.function_url_host
    origin_access_control_id = aws_cloudfront_origin_access_control.lambda.id

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "https-only"
      origin_ssl_protocols   = ["TLSv1.2"]
    }
  }

  # Read-only site: GET/HEAD only also sidesteps OAC's signed-body requirement
  # for POST/PUT to Lambda origins.
  default_cache_behavior {
    target_origin_id           = local.lambda_origin_id
    viewer_protocol_policy     = "redirect-to-https"
    allowed_methods            = ["GET", "HEAD", "OPTIONS"]
    cached_methods             = ["GET", "HEAD"]
    compress                   = true
    cache_policy_id            = aws_cloudfront_cache_policy.next.id
    origin_request_policy_id   = data.aws_cloudfront_origin_request_policy.all_viewer_except_host.id
    response_headers_policy_id = data.aws_cloudfront_response_headers_policy.security_headers.id
  }

  # Hashed, immutable build assets.
  ordered_cache_behavior {
    path_pattern               = "/_next/static/*"
    target_origin_id           = local.lambda_origin_id
    viewer_protocol_policy     = "redirect-to-https"
    allowed_methods            = ["GET", "HEAD"]
    cached_methods             = ["GET", "HEAD"]
    compress                   = true
    cache_policy_id            = data.aws_cloudfront_cache_policy.caching_optimized.id
    response_headers_policy_id = data.aws_cloudfront_response_headers_policy.security_headers.id
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = !local.use_custom_domain
    acm_certificate_arn            = local.use_custom_domain ? var.acm_certificate_arn : null
    ssl_support_method             = local.use_custom_domain ? "sni-only" : null
    # The default *.cloudfront.net certificate only accepts "TLSv1".
    minimum_protocol_version = local.use_custom_domain ? "TLSv1.2_2021" : "TLSv1"
  }
}
