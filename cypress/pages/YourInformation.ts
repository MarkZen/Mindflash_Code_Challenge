import { CheckoutOverview } from "./CheckoutOverview"

const FIRST_NAME_SELECTOR = '[data-test="firstName"]'
const LAST_NAME_SELECTOR = '[data-test="lastName"]'
const ZIP_CODE_SELECTOR = '[data-test="postalCode"]'
const CONTINUE_SELECTOR = '[data-test="continue"]'

export class YourInformation {

    constructor() { }

    typeFirstName(firstName: string) {
        cy.get(FIRST_NAME_SELECTOR).type(firstName)
        return this
    }

    typeLastName(lastName: string) {
        cy.get(LAST_NAME_SELECTOR).type(lastName)
        return this
    }

    typeZipCode(zipCode: string) {
        cy.get(ZIP_CODE_SELECTOR).type(zipCode)
        return this
    }

    clickContinue() {
        cy.get(CONTINUE_SELECTOR).click()
        return new CheckoutOverview()
    }

}