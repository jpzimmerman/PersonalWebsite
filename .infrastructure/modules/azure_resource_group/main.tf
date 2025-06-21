resource "azurerm_resource_group" "showcase_rg" {
  name     = "showcase-rg"
  location = var.location

  tags = {
    Name        = "showcase-rg"
    Description = "Resource group for personal website"
  }

}