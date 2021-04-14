import { Products } from "../pages/Products"

const URL_PATH = 'https://www.saucedemo.com/'
const USERNAME_SELECTOR = '[data-test="username"]'
const PASSWORD_SELECTOR = '[data-test="password"]'
const LOGIN_BUTTON_SELECTOR = '[data-test="login-button"]'
const LOCKED_OUT_MESSAGE_SELECTOR = '[data-test="error"]'

export class Login {

    constructor() { }

    navigateToLogin() {
        cy.visit(URL_PATH).url().should('eq', URL_PATH)
        return this
    }

    verifyLoginPageDisplayed() {
        cy.url().should('eq', URL_PATH)
        return this
    }

    typeUserName(username: string) {
        cy.get(USERNAME_SELECTOR).type(username)
        return this
    }

    typePassword(password: string) {
        cy.get(PASSWORD_SELECTOR).type(password)
        return this
    }

    clickSuccessfulLogin() {
        cy.get(LOGIN_BUTTON_SELECTOR).click()
        return new Products()
    }

    clickLockedOutLogin() {
        cy.get(LOGIN_BUTTON_SELECTOR).click()
        return this
    }

    verifyLockedOutMessageDisplayed() {
        cy.get(LOCKED_OUT_MESSAGE_SELECTOR)
            .should('be.visible')
            .contains('Epic sadface: Sorry, this user has been locked out.')
        return this
    }
}
