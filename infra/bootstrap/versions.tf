terraform {
  required_version = ">= 1.11"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.71"
    }
  }

  # Bootstrap starts with local state because the state bucket doesn't exist
  # yet. After the first apply, move it into the bucket it created (see README):
  #
  # backend "s3" {
  #   bucket       = "<state_bucket output>"
  #   key          = "bootstrap/terraform.tfstate"
  #   region       = "ca-central-1"
  #   use_lockfile = true
  #   encrypt      = true
  # }
}

provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project   = var.project
      Stack     = "bootstrap"
      ManagedBy = "terraform"
    }
  }
}
