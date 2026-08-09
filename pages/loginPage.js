import {expect} from "@playwright/test"


export class loginPage {


    constructor(page){
        this.page = page;
        this.username = '[id="user-name"]'
        this.password = '[id="password"]'
        this.loginbtn = '[id="login-button"]'
        this.prodTitle = '[data-test="title"]'
    }

    async navigate(){
        await this.page.goto("/")
    }

    async enterUsername(user){
        await this.page.locator(this.username).fill(user)

    }

    async enterPassword(pass){
        await this.page.locator(this.password).fill(pass)

    }

    async Click(){
        await this.page.locator(this.loginbtn).click()

    }

    async verifyDashboard(){
        await expect(this.page.locator(this.prodTitle)).toBeVisible()
    }
}