resource "mongodbatlas_project" "atlas-website-project" {
  org_id = var.atlas_org_id
  name   = var.atlas_project_name
}

resource "mongodbatlas_cluster" "showcase-cluster" {
  project_id   = mongodbatlas_project.atlas-website-project.id
  name         = "${var.atlas_project_name}-test-cluster"
  cluster_type = "REPLICASET"
  replication_specs {
    num_shards = 1
    regions_config {
      region_name     = var.atlas_region
      electable_nodes = 3
      priority        = 7
      read_only_nodes = 0
    }
  }
  cloud_backup                 = false
  auto_scaling_disk_gb_enabled = true
  mongo_db_major_version       = "7.0"
  # Provider Settings "block"
  provider_name               = var.cloud_provider
  provider_disk_type_name     = "P6"
  provider_instance_size_name = var.cluster_instance_size_name
}
