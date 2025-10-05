provider "aws" { region = "us-east-1" }

resource "aws_s3_bucket" "test" {
  bucket = "public-bucket-example"
  acl    = "public-read" # misconfiguration
}
