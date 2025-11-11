const { defineConfig } = require('cypress');
require('dotenv').config(); // load .env file

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL,
    env: {
      USERNAME: process.env.CYPRESS_USERNAME,
      PASSWORD: process.env.CYPRESS_PASSWORD,
    },
    setupNodeEvents(on, config) {
      console.log('Loaded ENV:', config.env);
      return config;
    },
  },
});
