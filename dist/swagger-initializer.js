window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [
          {url: "./item-master/item-master.yaml", name: "ITEM MASTER"},
          {url: "./item-category/item-category.yaml", name: "ITEM CATEGORY"},
          {url: "./item-composition/item-composition.yaml", name: "ITEM COMPOSITION"},
          {url: "./item-description/item-description.yaml", name: "ITEM DESCRIPTION"},
          {url: "./item-tax/item-tax.yaml", name: "ITEM TAX"},
          {url: "./barcode/barcode.yaml", name: "BARCODES"},
          {url: "./season/season.yaml", name: "SEASON"},
          {url: "./customer/customer.yaml", name: "CUSTOMERS"},
          {url: "./employee/employee.yaml", name: "EMPLOYEES"},
          {url: "./pricelist/pricelist.yaml", name: "PRICELISTS"},
          {url: "./stock/stock.yaml", name: "STOCK SNAPSHOT"},
          {url: "./stock-movement/stock-movement.yaml", name: "STOCK MOVEMENTS"},
          {url: "./transaction/transaction.yaml", name: "TRANSACTIONS"},
          {url: "./brand/brand.yaml", name: "BRANDS"},
          {url: "./category/category.yaml", name: "CATEGORIES"},
          {url: "./season/season.yaml", name: "SEASONS"},

        ],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
