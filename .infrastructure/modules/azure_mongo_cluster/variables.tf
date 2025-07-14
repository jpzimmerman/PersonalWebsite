variable "atlas_org_id" {
  type        = string
  description = "Name for Atlas organization where resources will be grouped"
}

variable "atlas_project_name" {
  type        = string
  description = "Name for project in MongoDb Atlas"
}

variable "atlas_region" {
  type        = string
  description = "Atlas region where resources will be provisioned"
}

variable "cloud_provider" {
  type        = string
  description = "Cloud provider that will host Atlas resources"

}

variable "cluster_instance_size_name" {
  type        = string
  description = "Size label for cluster instance to be used in MongoDB cluster provisioning"

}