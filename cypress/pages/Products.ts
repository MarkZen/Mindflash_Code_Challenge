import { DrawerMenu } from "./DrawerMenu"
import { ShoppingCart } from "./ShoppingCart"

const URL_PATH = 'https://www.saucedemo.com/inventory.html'
const DRAWER_MENU_BUTTON_SELECTOR = '[id="react-burger-menu-btn"]'
const INVENTORY_ITEM_SELECTOR = '[class="inventory_item"]'
const ITEM_NAME_SELECTOR = '[class="inventory_item_name"]'
const ITEM_DESCRIPTION_SELECTOR = '[class="inventory_item_desc"]'
const ITEM_PRICE_SELECTOR = '[class="inventory_item_price"]'
const SORT_MENU_SELECTOR = '[data-test="product_sort_container"]'
const ADD_TO_CART_SELECTOR = '[data-test="add-to-cart-<itemname>"]'
const SHOPPING_CART_SELECTOR = '[id="shopping_cart_container"]'
const CART_BADGE_SELECTOR = '[class="shopping_cart_badge"]'

export class Products {

    constructor() { }

    verifySuccessfulLogin() {
        cy.url().should('eq', URL_PATH)
        return this
    }

    openDrawerMenu() {
        cy.get(DRAWER_MENU_BUTTON_SELECTOR).click()
        return new DrawerMenu()
    }

    verifyItemName(itemNumber: number, itemName: string) {
        cy.get(INVENTORY_ITEM_SELECTOR).eq(itemNumber).within(() => {
            cy.get(ITEM_NAME_SELECTOR).should('be.visible').contains(itemName)
        })
        return this
    }

    verifyItemDescription(itemNumber: number, itemDescription: string) {
        cy.get(INVENTORY_ITEM_SELECTOR).eq(itemNumber).within(() => {
            cy.get(ITEM_DESCRIPTION_SELECTOR).should('be.visible').contains(itemDescription)
        })
        return this
    }

    verifyItemPrice(itemNumber: number, itemPrice: string) {
        cy.get(INVENTORY_ITEM_SELECTOR).eq(itemNumber).within(() => {
            cy.get(ITEM_PRICE_SELECTOR).should('be.visible').contains(itemPrice)
        })
        return this
    }

    verifyItemDetails(itemNumber: number, itemName: string, itemDescription: string, itemPrice: string) {
        this.verifyItemName(itemNumber, itemName)
        this.verifyItemDescription(itemNumber, itemDescription)
        this.verifyItemPrice(itemNumber, itemPrice)
        return this
    }

    selectSort(sort: "Name (A to Z)" | "Name (Z to A)" | "Price (low to high)" | "Price (high to low)") {
        cy.get(SORT_MENU_SELECTOR).select(sort)
        return this
    }

    verifySortOrder(sort: "Name (A to Z)" | "Name (Z to A)" | "Price (low to high)" | "Price (high to low)") {
        if (sort == "Name (A to Z)") {
            cy.fixture('itemNamesAZ').then(function (namesAZ) {
                this.namesAZ = namesAZ
                for (let x = 0; x <= this.namesAZ.length - 1; x++) {
                    cy.get(INVENTORY_ITEM_SELECTOR).eq(x).within(() => {
                        cy.get(ITEM_NAME_SELECTOR).should('be.visible').contains(this.namesAZ[x].name)
                    })
                }
            })
        }
        if (sort == "Name (Z to A)") {
            cy.fixture('itemNamesZA').then(function (namesZA) {
                this.namesZA = namesZA
                for (let x = 0; x <= this.namesZA.length - 1; x++) {
                    cy.get(INVENTORY_ITEM_SELECTOR).eq(x).within(() => {
                        cy.get(ITEM_NAME_SELECTOR).should('be.visible').contains(this.namesZA[x].name)
                    })
                }
            })
        }
        if (sort == "Price (low to high)") {
            cy.fixture('itemNamesLH').then(function (namesLH) {
                this.namesLH = namesLH
                for (let x = 0; x <= this.namesAZ.length - 1; x++) {
                    cy.get(INVENTORY_ITEM_SELECTOR).eq(x).within(() => {
                        cy.get(ITEM_NAME_SELECTOR).should('be.visible').contains(this.namesLH[x].name)
                    })
                }
            })
        }
        if (sort == "Price (high to low)") {
            cy.fixture('itemNamesHL').then(function (namesHL) {
                this.namesHL = namesHL
                for (let x = 0; x <= this.namesHL.length - 1; x++) {
                    cy.get(INVENTORY_ITEM_SELECTOR).eq(x).within(() => {
                        cy.get(ITEM_NAME_SELECTOR).should('be.visible').contains(this.namesHL[x].name)
                    })
                }
            })
        }
        return this
    }

    clickAddToCart(itemName: "sauce-labs-backpack" | "sauce-labs-onesie") {
        cy.get(ADD_TO_CART_SELECTOR.replace('<itemname>', itemName)).click()
        return this
    }
    
    clickShoppingCart() {
        cy.get(SHOPPING_CART_SELECTOR).click()
        return new ShoppingCart()
    }

    verifyBadgeNumber(badgeNumber: string) {
        cy.get(CART_BADGE_SELECTOR).should('be.visible').contains(badgeNumber)
        return this
    }

}