resource "azurerm_storage_account" "showcase_sa" {
  name                     = "jzshowcasesa"
  resource_group_name      = data.azurerm_resource_group.showcase_rg.name
  location                 = data.azurerm_resource_group.showcase_rg.location
  account_tier             = "Standard"
  account_replication_type = "GRS"

  tags = {
    environment = "staging"
  }
}

resource "azurerm_storage_container" "showcase_images" {
  name                  = "showcase-images"
  storage_account_id    = azurerm_storage_account.showcase_sa.id
  container_access_type = "blob"
}

resource "azurerm_storage_container" "showcase_docs" {
  name                  = "showcase-docs"
  storage_account_id    = azurerm_storage_account.showcase_sa.id
  container_access_type = "blob"
}

resource "azurerm_cdn_profile" "example" {
  name                = "showcase-cdn-profile"
  resource_group_name = data.azurerm_resource_group.showcase_rg.name
  location            = data.azurerm_resource_group.showcase_rg.location
  sku                 = "Standard_Microsoft"

  tags = {
    Name = "ShowcaseCDN"
  }
}

resource "azurerm_cdn_endpoint" "showcase_cdn_endpoint" {
  name                = "showcase-content"
  resource_group_name = data.azurerm_resource_group.showcase_rg.name
  location            = data.azurerm_resource_group.showcase_rg.location
  profile_name        = azurerm_cdn_profile.example.name

  origin {
    name      = "showcasesa"
    host_name = "${azurerm_storage_account.showcase_sa.name}.blob.core.windows.net"
    }
}