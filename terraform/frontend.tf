resource "vercel_project" "frontend_app" {
  name = "siga-water"

  framework        = "nextjs"
  build_command    = "yarn nx build front --prod"
  output_directory = "dist/apps/front/.next"

  git_repository = {
    type = "github"
    repo = github_repository.github-repo.full_name
  }

  environment = [
    {
      key   = "NX_API_HOST"
      value = heroku_app.api.web_url
      target = [
        "production", "preview", "development"
      ]
    }
  ]
}
