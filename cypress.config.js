const { defineConfig } = require('cypress')
require('dotenv').config() // load .env file

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter", // use cypress-mochawesome-reporter with plugin for auto-merge
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: true,      // IMPORTANT: overwrite to prevent multiple reports
    html: true,
    json: true,
    charts: true,
    reportPageTitle: "Test Report",
    autoOpen: false,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
  },

  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL,

    env: {
      USERNAME: process.env.CYPRESS_USERNAME,
      PASSWORD: process.env.CYPRESS_PASSWORD,
    },

    setupNodeEvents(on, config) {
      console.log("Loaded ENV:", config.env)
      // Use cypress-mochawesome-reporter plugin which auto-merges reports
      require('cypress-mochawesome-reporter/plugin')(on)
      return config
    },
  },
})
