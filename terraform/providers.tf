terraform {
  required_providers {
    heroku = {
      source  = "heroku/heroku"
      version = "5.1.2"
    }

    github = {
      source  = "integrations/github"
      version = "~> 4.0"
    }

    aws = {
      source  = "hashicorp/aws"
      version = "4.26.0"
    }

    vercel = {
      source  = "vercel/vercel"
      version = "0.6.2"
    }
  }

  backend "remote" {
    organization = "aquinfo"
    workspaces {
      name = "siga-water"
    }
  }
}

provider "heroku" {
  email   = var.heroku_email
  api_key = var.heroku_api_key
}

# Configure the GitHub Provider
provider "github" {
  owner = "rafael-g-depaulo"
  token = var.github_access_token
}

provider "aws" {
  region     = var.aws_region
  access_key = var.aws_admin_access_key
  secret_key = var.aws_admin_secret_key
}

provider "vercel" {
  api_token = var.vercel_api_token
}
