data "github_repository" "repository" {
  full_name = "rafael-g-depaulo/siga-water"
}


data "github_branch" "main-branch" {
  repository = data.github_repository.repository.full_name
  branch     = data.github_repository.repository.default_branch
}
