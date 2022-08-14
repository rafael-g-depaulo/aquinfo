resource "aws_iam_user" "s3-user" {
  name = "aquinfo-s3-user"
}

resource "aws_iam_access_key" "s3-user-credentials" {
  user = aws_iam_user.s3-user.name
}

resource "aws_iam_policy" "s3-crud-access" {
  name   = "S3CrudAccess"
  policy = file("./aws-policies/s3-crud-policy.json")
}

resource "aws_iam_user_policy_attachment" "s3-user-s3-crud-access" {
  user       = aws_iam_user.s3-user.name
  policy_arn = aws_iam_policy.s3-crud-access.arn
}

resource "aws_s3_bucket" "aquinfo-images" {
  bucket = "aquinfo-images"

  tags = {
    Description = "Bucket for saving images uploaded for aquinfo project"
    CreatedAt   = "2022/08/14"
  }
}
