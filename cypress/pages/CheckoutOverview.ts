import { CheckoutComplete } from "./CheckoutComplete"
import { Products } from "./Products"

const ITEM_TOTAL_SELECTOR = '[class="summary_subtotal_label"]'
const TAX_AMOUNT_SELECTOR = '[class="summary_tax_label"]'
const TOTAL_AFTER_TAX_SELECTOR = '[class="summary_total_label"]'
const FINISH_SELECTOR = '[data-test="finish"]'
const CANCEL_SELECTOR = '[data-test="cancel"]'

export class CheckoutOverview {

    constructor() { }

    //I would prefer a way to accept any number of arguments and add them together to make this more flexible 
    //I know theres a way to use a function as a parameter, then we could use an array and add all the array values together
    verifyTwoItemTotal(amount1: number, amount2: number) {
        let expectedTotal = +(amount1 + amount2).toFixed(2)
        cy.get(ITEM_TOTAL_SELECTOR).should('be.visible').contains(expectedTotal.toFixed(2))
        let tax = +(expectedTotal * .08).toFixed(2)
        cy.get(TAX_AMOUNT_SELECTOR).should('be.visible').contains(tax)
        let totalAfterTax = (expectedTotal + tax)
        cy.get(TOTAL_AFTER_TAX_SELECTOR).should('be.visible').contains(totalAfterTax.toFixed(2))
        return this
    }

    clickFinish() {
        cy.get(FINISH_SELECTOR).click()
        return new CheckoutComplete()
    }

    clickCancel() {
        cy.get(CANCEL_SELECTOR).click()
        return new Products()
    }
}