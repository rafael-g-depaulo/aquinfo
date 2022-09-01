resource "heroku_app" "api" {
  name   = "aquinfo-api"
  region = "us"

  config_vars = {
    S3_ACCESS_KEY_ID = aws_iam_access_key.s3-user-credentials.id
    S3_ACCESS_SECRET = aws_iam_access_key.s3-user-credentials.secret
    S3_BUCKET        = aws_s3_bucket.aquinfo-images.bucket
    S3_REGION        = aws_s3_bucket.aquinfo-images.region
    JWT_SECRET       = var.api_jwt_secret
  }

  buildpacks = ["heroku/nodejs"]
}

resource "heroku_addon" "postgres-database" {
  app_id = heroku_app.api.id
  plan   = "heroku-postgresql:hobby-dev"
}

resource "heroku_build" "api-build" {
  app_id = heroku_app.api.id

  source {
    url     = "${github_repository.github-repo.html_url}/tarball/${github_repository.github-repo.default_branch}"
    version = github_branch.main-branch.sha
  }

}
