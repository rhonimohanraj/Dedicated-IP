terraform {
  required_providers {
    arvan = {
      source = "terraform.arvancloud.ir/arvancloud/iaas"
      version = "0.7.16"
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