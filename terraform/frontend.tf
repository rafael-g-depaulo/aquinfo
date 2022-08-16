resource "vercel_project" "frontend_app" {
  name = "siga-water"

  framework        = "nextjs"
  build_command    = "yarn nx build front --prod"
  output_directory = "dist/apps/front/.next"

  git_repository = {
    type = "github"
    repo = github_repository.github-repo.full_name
  }
}
