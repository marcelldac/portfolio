import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) { },
    baseUrl: 'https://developermarcell.vercel.app/',
    testIsolation: false
  },
});
