// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// import 'cypress-iframe';



Cypress.Commands.add('openPage', (pageName = 'home') => {
    const pages = Cypress.env('pages');
    const path = pages[pageName];

    if (!path) {
        throw new Error(`Can't find "${pageName}" in pages list`)
    }

    cy.visit(path)
})

Cypress.Commands.add('shouldBeOnPage', (pageName) => {
  const pages = Cypress.env('pages');
  cy.url().should('include', pages[pageName]);
});
