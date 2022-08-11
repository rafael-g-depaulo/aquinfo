resource "heroku_app" "api" {
  name = "aquinfo-api"
  region = "us"

  config_vars = {
    "TEST" = "value being tested"
  }

  buildpacks = ["heroku/nodejs"]
}

resource "heroku_addon" "postgres-database" {
  app_id = heroku_app.api.id
  plan = "heroku-postgresql:hobby-dev"
}

resource "heroku_build" "api-build" {
  
}
