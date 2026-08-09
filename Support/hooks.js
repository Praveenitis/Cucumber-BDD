const {Before, After, BeforeAll, AfterAll, BeforeStep, AfterStep,Status} = require('@cucumber/cucumber')

const {chromium, firefox, webkit} = require("@playwright/test")


Before(async function () {

    this.broswer = await chromium.launch({headless: false, slowMo: 1000})
    this.context = await this.broswer.newContext({viewport: {width: 1230, height: 1090},permissions:[]})
    this.page = await this.context.newPage()
})

AfterStep(async function(scenerio){
    if(scenerio.result?.status==Status.FAILED){
        await this.page.screenshot()

        this.attach(scrn, "images/png")
    }
})