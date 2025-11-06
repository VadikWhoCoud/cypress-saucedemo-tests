import { defineConfig } from "cypress";


const pages = {
  home: '/',
  inventory: '/inventory.html',
  cart: '/cart.html',
  checkOutOne: '/checkout-step-one.html',
  checkOutTwo: '/checkout-step-two.html'
};

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com',
    env: { pages }
  },
});