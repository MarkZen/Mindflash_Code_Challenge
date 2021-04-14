import { Login } from "../pages/Login"
import { Products } from "../pages/Products"

let login: Login = new Login()
let products: Products = new Products()

beforeEach(() => {
    login.navigateToLogin()
        .typeUserName('standard_user')
        .typePassword('secret_sauce')
        .clickSuccessfulLogin()
})

describe('products page tests', () => {

    before(function () {
        cy.fixture('backpackDetails').then(function (backpackDetails) {
            this.backpackDetails = backpackDetails
        })
    })

    it('verify first item details', function () {
        products.verifyItemDetails(0, this.backpackDetails.name, this.backpackDetails.description, this.backpackDetails.price)
    })

    it('verify sort order', function () {
        products.selectSort("Name (A to Z)")
            .verifySortOrder("Name (A to Z)")
            .selectSort("Name (Z to A)")
            .verifySortOrder("Name (Z to A)")
            .selectSort("Price (low to high)")
            .verifySortOrder("Price (low to high)")
            .selectSort("Price (high to low)")
            .verifySortOrder("Price (high to low)")
    })
})