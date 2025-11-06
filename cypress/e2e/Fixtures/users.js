
class ValidUsers {

    standard_user() {
        cy.get('[placeholder="Username"]').type('standard_user')
        cy.get('[placeholder="Password"]').type('secret_sauce')
        cy.get('#login-button').click()
    }

    problem_user() {
        cy.get('[placeholder="Username"]').type('problem_user')
        cy.get('[placeholder="Password"]').type('secret_sauce')
        cy.get('#login-button').click()
    }

    performance_glitch_user() {
        cy.get('[placeholder="Username"]').type('performance_glitch_user')
        cy.get('[placeholder="Password"]').type('secret_sauce')
        cy.get('#login-button').click()
    }

    error_user() {
        cy.get('[placeholder="Username"]').type('error_user')
        cy.get('[placeholder="Password"]').type('secret_sauce')
        cy.get('#login-button').click()
    }

    visual_user() {
        cy.get('[placeholder="Username"]').type('visual_user')
        cy.get('[placeholder="Password"]').type('secret_sauce')
        cy.get('#login-button').click()
    }

    locked_out_user() {
        cy.get('[placeholder="Username"]').type('locked_out_user')
        cy.get('[placeholder="Password"]').type('secret_sauce')
        cy.get('#login-button').click()
    }
}

class InvalidUsers {

    wrong_user_name() {
        cy.get('[placeholder="Username"]').type('wrong_user_name')
        cy.get('[placeholder="Password"]').type('secret_sauce')
        cy.get('#login-button').click()

    }

    wrong_password() {
        cy.get('[placeholder="Username"]').type('standard_user')
        cy.get('[placeholder="Password"]').type('wrong_password')
        cy.get('#login-button').click()

    }
}

class CustomUser {

    custom_user_credentials(customUsername, customPassword) {
        cy.get('[placeholder="Username"]').type(customUsername)
        cy.get('[placeholder="Password"]').type(customPassword)
        cy.get('#login-button').click()

    }

}

export const customUserForLogIn = new CustomUser();
export const userForLogIn = new ValidUsers();
export const invalidUserForLigIn = new InvalidUsers();