const {Given, When, Then} = require('@cucumber/cucumber')

const {loginPage} = require('../pages/loginPage')

const {Login} = require('../Support/hooks')

let login



Given('I open the saucedemo page', function ({page}) {
 login = new loginPage(this.page)
 login.navigate("https://www.saucedemo.com/")
});

When('I enter username', function () {
  login.enterUsername("standard_user")
  
});

When('I enters password', function () {
  login.enterPassword("secret_sauce")

});

When('I click on login button', function () {
  login.Click()
});

Then('I should see the products page', function () {
  login.verifyDashboard()
});