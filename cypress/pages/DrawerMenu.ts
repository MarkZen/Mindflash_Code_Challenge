import { Login } from "./Login"

const ALL_ITEMS_SELECTOR = '[id="inventory_sidebar_link"]'
const ABOUT_SELECTOR = '[id="about_sidebar_link"]'
const LOGOUT_SELECTOR = '[id="logout_sidebar_link"]'
const RESET_APP_STATE_SELECTOR = '[id="reset_sidebar_link"]'

export class DrawerMenu {

    constructor() { }

    verifyAllItemsDisplayed() {
        cy.get(ALL_ITEMS_SELECTOR).should('be.visible')
        return this
    }

    verifyAboutDisplayed() {
        cy.get(ABOUT_SELECTOR).should('be.visible')
        return this
    }

    verifyLogoutDisplayed() {
        cy.get(LOGOUT_SELECTOR).should('be.visible')
        return this
    }

    verifyResetAppStateDisplayed() {
        cy.get(RESET_APP_STATE_SELECTOR).should('be.visible')
        return this
    }

    verifyAllMenuItemsDisplayed() {
        this.verifyAllItemsDisplayed()
        this.verifyAboutDisplayed()
        this.verifyLogoutDisplayed()
        this.verifyResetAppStateDisplayed()
    }

    clickLogout() {
        cy.get(LOGOUT_SELECTOR).click()
        return new Login()
    }
}