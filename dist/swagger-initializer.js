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
          {url: "./made-in/made-in.yaml", name: "MADEIN"},
          {url: "./barcode/barcode.yaml", name: "BARCODES"},
          {url: "./division/division.yaml", name: "DIVISION"},
          {url: "./digital-assets/digital-assets.yaml", name: "DIGITAL ASSETS"},
          {url: "./season/season.yaml", name: "SEASON"},
          {url: "./delivery/delivery.yaml", name: "DELIVERY"},
          {url: "./gender/gender.yaml", name: "GENDER"},
          {url: "./merchandise-category/merchandise-category.yaml", name: "MERCHANDISE CATEGORY"},
          {url: "./merchandise-group/merchandise-group.yaml", name: "MERCHANDISE GROUP"},
          {url: "./packaging-type/packaging-type.yaml", name: "PACKAGING TYPE"},
          {url: "./product/product.yaml", name: "PRODUCT"},
          {url: "./product-kind/product-kind.yaml", name: "PRODUCT KIND"},
          {url: "./product-type/product-type.yaml", name: "PRODUCT TYPE"},
          {url: "./range-name/range-name.yaml", name: "RANGE NAME"},
          {url: "./customer/customer.yaml", name: "CUSTOMERS"},
          {url: "./employee/employee.yaml", name: "EMPLOYEES"},
          {url: "./pricelist/pricelist.yaml", name: "PRICELISTS"},
          {url: "./stock/stock.yaml", name: "STOCK SNAPSHOT"},
          {url: "./stock-movement/stock-movement.yaml", name: "STOCK MOVEMENTS"},
          {url: "./transaction/transaction.yaml", name: "TRANSACTIONS"},
          {url: "./brand/brand.yaml", name: "BRANDS"},
          {url: "./category/category.yaml", name: "CATEGORIES"},
          {url: "./store/store.yaml", name: "STORES"},
          {url: "./underline/underline.yaml", name: "UNDERLINE"},
          {url: "./theme/theme.yaml", name: "THEME"},
          {url: "./commodity-code/commodity-code.yaml", name: "COMMODITY-CODE"},
          {url: "./color/color.yaml", name: "COLOR"},
          {url: "./collection/collection.yaml", name: "COLLECTION"},
          {url: "./cites/cites.yaml", name: "WASHINGTON DECLARATION"},
          {url: "./capsule-special-projects/capsule-special-projects.yaml", name: "CAPSULE SPECIAL PROJECTS"},
          {url: "./forwarding-agent/forwarding-agent.yaml", name: "FORWARDING AGENT"},
          {url: "./store/store.yaml", name: "STORES"},

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
