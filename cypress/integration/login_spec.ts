import { Login } from "../pages/Login"

let url = "https://www.saucedemo.com/"
let login: Login = new Login()
const PASSWORD = 'secret_sauce'

beforeEach(() => {
    login.navigateToLogin()
});

describe('login tests', () => {

    it('test standard user login', () => {
        login.typeUserName('standard_user')
            .typePassword(PASSWORD)
            .clickSuccessfulLogin()
            .verifySuccessfulLogin()
    });

    it('test locked out user login', () => {
        login.typeUserName('locked_out_user')
            .typePassword(PASSWORD)
            .clickLockedOutLogin()
            .verifyLockedOutMessageDisplayed()
    })

    it('test performance glitch user login', () => {
        login.typeUserName('performance_glitch_user')
            .typePassword(PASSWORD)
            .clickSuccessfulLogin()
            .verifySuccessfulLogin()
    })
})
