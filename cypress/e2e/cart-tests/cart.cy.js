/// <reference types="cypress" />

import { userForLogIn } from "../fixtures/users";

beforeEach(('Open test application and Log In'), () => {
    cy.openPage();
    userForLogIn.standard_user()
})

function addRandomItems(count) {
    cy.get('.btn_inventory').then(($buttons) => {
        const indices = Cypress._.sampleSize([...Array($buttons.length).keys()], count)
        indices.forEach(i => cy.wrap($buttons[i]).click())
    })
}

it('Add 1 random item in cart', () => {
    addRandomItems(1)
    cy.get('.shopping_cart_badge').should('have.text', '1')
    cy.get('.shopping_cart_link').click()
    cy.get('.cart_list .cart_item').should('have.length', 1)
})

it('Add 3 random items in cart', () => {
    addRandomItems(3)
    cy.get('.shopping_cart_badge').should('have.text', '3')
    cy.get('.shopping_cart_link').click()
    cy.get('.cart_list .cart_item').should('have.length', 3)
})

it('Add all items in cart', () => {
    cy.get('.btn_inventory').then(($buttons) => {
        const countItems = $buttons.length
    addRandomItems(countItems)
    cy.get('.shopping_cart_badge').should('have.text', String(countItems))
    cy.get('.shopping_cart_link').click()
    cy.get('.cart_list .cart_item').should('have.length', countItems)
    })
})

it('Add and remove 1 random item in cart', () => {
    addRandomItems(1)
    cy.get('.shopping_cart_badge').should('have.text', '1')
    cy.get('.shopping_cart_link').click()
    cy.get('.cart_list .cart_item').should('have.length', 1)
})

it('Add 3 random items in cart', () => {
    addRandomItems(3)
    cy.get('.shopping_cart_badge').should('have.text', '3')
    cy.get('.shopping_cart_link').click()
    cy.get('.cart_list .cart_item').should('have.length', 3)
})

it('Add all items in cart', () => {
    cy.get('.btn_inventory').then(($buttons) => {
        const countItems = $buttons.length
    addRandomItems(countItems)
    cy.get('.shopping_cart_badge').should('have.text', String(countItems))
    cy.get('.shopping_cart_link').click()
    cy.get('.cart_list .cart_item').should('have.length', countItems)
    })
})