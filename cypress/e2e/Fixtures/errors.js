class SignInErrors {

    worngCredentialsError() {
        cy.get('.login-box').then(errorForWrongUser => {
            expect(errorForWrongUser).to.have.text('Epic sadface: Username and password do not match any user in this service')
        })
    }

    usernameRequiredError() {
        cy.get('.login-box').then(errorForWrongUser => {
            expect(errorForWrongUser).to.have.text('Epic sadface: Username is required')
        })
    }

    passwordRequiredError() {
        cy.get('.login-box').then(errorForWrongUser => {
            expect(errorForWrongUser).to.have.text('Epic sadface: Password is required')
        })
    }

    lockedUserError() {
        cy.get('.login-box').then(errorForWrongUser => {
            expect(errorForWrongUser).to.have.text('Epic sadface: Sorry, this user has been locked out.')
        })
    }
}

export const usernameError = new SignInErrors()
