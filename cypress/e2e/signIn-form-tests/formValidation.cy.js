/// <reference types="cypress" />

import { usernameError } from "../fixtures/errors";


beforeEach(('Open test application'), () => {
    cy.openPage();
})

it('Sign in form without Username', () => {
    cy.get('[placeholder="Password"]').type('secret_sauce')
    cy.get('#login-button').click()
    usernameError.usernameRequiredError()
})

it('Sign in form without Password', () => {
    cy.get('[placeholder="Username"]').type('standard_user')
    cy.get('#login-button').click()
    usernameError.passwordRequiredError()
})

it('Sign in form without Username and Password', () => {
    // Expected: button inactive
    // cy.get('#login-button').should('be.disabled')

    cy.get('#login-button').click()
    // Current error message
    usernameError.usernameRequiredError()
    
})