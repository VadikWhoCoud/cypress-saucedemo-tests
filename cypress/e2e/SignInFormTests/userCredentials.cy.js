/// <reference types="cypress" />

import { usernameError } from "../Fixtures/errors";
import { invalidUserForLigIn, userForLogIn, customUserForLogIn } from "../Fixtures/users";

beforeEach(('Open test application'), () => {
    cy.openPage();
})

it('Username standard_user', () => {
    userForLogIn.standard_user()
    cy.shouldBeOnPage('inventory')
})

it('Username problem_user', () => {
    userForLogIn.problem_user()
    cy.shouldBeOnPage('inventory')
})

it('Username performance_glitch_user', () => {
    userForLogIn.performance_glitch_user()
    cy.shouldBeOnPage('inventory')
})

it('Username error_user', () => {
    userForLogIn.error_user()
    cy.shouldBeOnPage('inventory')
})

it('Username visual_user', () => {
    userForLogIn.visual_user()
    cy.shouldBeOnPage('inventory')
})

it('Username locked_out_user', () => {
    userForLogIn.locked_out_user()
    usernameError.lockedUserError()
})


it('Wrong user name', () => {
    invalidUserForLigIn.wrong_user_name()
    usernameError.worngCredentialsError()
})

it('Username with wrong password', () => {
    invalidUserForLigIn.wrong_password()
    usernameError.worngCredentialsError()
})

it('Custom user', () => {
    customUserForLogIn.custom_user_credentials('Vadik', 'Vadik123')
    usernameError.worngCredentialsError()
})