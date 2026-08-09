Feature: Validating login functionality

Scenario: user login with valid credentials


Given I open the saucedemo page
When I enter username
When I enters password
And I click on login button
Then I should see the products page



    