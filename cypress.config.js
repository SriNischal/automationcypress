const { defineConfig } = require("cypress");
const { verifyDownloadTasks } = require('cy-verify-downloads');

  module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
  e2e: {
    //pageLoadTimeout : 6000,
    baseUrl : "https://demoqa.com",
  setupNodeEvents(on, config) {
    const getCompareSnapshotsPlugin = require("cypress-image-diff-js/dist/plugin");
    getCompareSnapshotsPlugin(on, config, verifyDownloadTasks);
      
  }}
});
