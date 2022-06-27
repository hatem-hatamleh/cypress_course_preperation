const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '2rqixn',
  e2e: {
    baseUrl: "https://qacart-todo.herokuapp.com",
    viewportWidth: 1536,
    viewportHeight: 960,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
