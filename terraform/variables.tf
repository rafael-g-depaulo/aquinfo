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
