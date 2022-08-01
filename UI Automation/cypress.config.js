const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "defaultCommandTimeout": 30000,
    "viewportHeight": 1080,
    "viewportWidth": 1920,

env:{
  url:"https://www.shop-apotheke.com/nx/login/",
  usernaem: "huzaif.imtiaz1408@gmail.com",
  password:"Pa$$w0rd!"
},

    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
