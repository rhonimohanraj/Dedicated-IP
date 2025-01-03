terraform {
  required_providers {
    arvan = {
      source = "terraform.arvancloud.ir/arvancloud/iaas"
    }
  }
  backend "gcs" {}
}

provider "arvan" {
  api_key = var.arvan_token
}

provider "google" {
  region      = var.gcp_region
  project     = var.gcp_project_id
  credentials = file(var.gcp_credentials_path)
}