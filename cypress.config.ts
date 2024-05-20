import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) { },
    baseUrl: 'http://localhost:4321',
    testIsolation: false
  },
});
