const SUCCESS_MESSAGE_SELECTOR = '[id="checkout_complete_container"]'

export class CheckoutComplete {

    verifySuccessMessage() {
        cy.get(SUCCESS_MESSAGE_SELECTOR).should('be.visible').contains("THANK YOU FOR YOUR ORDER")
    }
}