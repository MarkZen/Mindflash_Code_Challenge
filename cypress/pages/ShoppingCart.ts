import { YourInformation } from "./YourInformation";

const CHECKOUT_SELECTOR = '[data-test="checkout"]'

export class ShoppingCart {

    constructor() { }

    clickCheckout() {
        cy.get(CHECKOUT_SELECTOR).click()
        return new YourInformation()
    }
}