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
