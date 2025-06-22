resource "azurerm_service_plan" "showcase_service_plan" {
  name                = "showcase-service-plan"
  resource_group_name = data.azurerm_resource_group.showcase_rg.name
  location            = data.azurerm_resource_group.showcase_rg.location
  os_type             = "Linux"
  sku_name            = "F1"
}

resource "azurerm_linux_web_app" "showcase_frontend" {
  name                = "showcase-frontend"
  resource_group_name = data.azurerm_resource_group.showcase_rg.name
  location            = azurerm_service_plan.showcase_service_plan.location
  service_plan_id     = azurerm_service_plan.showcase_service_plan.id
  app_settings        = {}

  site_config {
    always_on = false
    application_stack {
      node_version = "20-lts"
    }
  }
}