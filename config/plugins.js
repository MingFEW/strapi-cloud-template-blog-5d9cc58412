module.exports = () => ({
  "strapi-csv-import-export": {
    config: {
      authorizedExports: ["api::machine.machine"],
      authorizedImports: ["api::machine.machine"]
    }
  }
});
