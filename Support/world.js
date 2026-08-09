const {setWorldConstructor} = require('@cucumber/cucumber')


export class customWorld{
    constructor(){
        this.browser = null;
        this.context = null;
        this.page = null;

        this.loginPage = null
        this.productPage = null;

    }
}

setWorldConstructor(customWorld)