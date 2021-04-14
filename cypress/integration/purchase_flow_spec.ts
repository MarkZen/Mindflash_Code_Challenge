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

describe('purchase flow tests', () => {

    it('verify two items purchase', function() {
        products.clickAddToCart("sauce-labs-backpack")
        .clickAddToCart("sauce-labs-onesie")
        .clickShoppingCart()
        .clickCheckout()
        .typeFirstName("mark")
        .typeLastName("tester")
        .typeZipCode("55555")
        .clickContinue()
        .verifyTwoItemTotal(29.99, 7.99)
        .clickFinish()
        .verifySuccessMessage()
    })

    it('verify cancelled item purchase', function () {
        products.clickAddToCart("sauce-labs-onesie")
        .clickShoppingCart()
        .clickCheckout()
        .typeFirstName("mark")
        .typeLastName("tester")
        .typeZipCode("55555")
        .clickContinue()
        .clickCancel()
        .verifySuccessfulLogin()
        .verifyBadgeNumber("1")
    })
})