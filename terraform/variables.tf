variable "heroku_email" {
  type        = string
  description = "email used with heroku provider"
}

variable "heroku_api_key" {
  type        = string
  description = "api key to use with heroku provider"
}

variable "github_access_token" {
  type        = string
  description = "token to use github provider"
}

variable "github_main_branch" {
  type        = string
  description = "main branch used for deploy"
  default     = "main"
}

variable "aws_region" {
  type        = string
  default     = "us-east-1"
  description = "default aws region resources are created at"
}

variable "aws_admin_access_key" {
  type        = string
  description = "access key for aws admin"
}

variable "aws_admin_secret_key" {
  type        = string
  description = "secret for aws admin"
}

variable "vercel_api_token" {
  type        = string
  description = "api token for vercel"
}
