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

describe('drawer menu tests', () => {

    it('verify all menu items are displayed', () => {
        products.openDrawerMenu()
            .verifyAllMenuItemsDisplayed()
    })

    it('verify logout successful', () => {
        products.openDrawerMenu()
            .clickLogout()
            .verifyLoginPageDisplayed()
    })
})