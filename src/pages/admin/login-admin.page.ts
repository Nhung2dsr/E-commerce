import { Locator, Page } from "@playwright/test";

export class LoginAdmin {

    page: Page

    inputUsername: Locator
    inputPassword: Locator
    btnLogin: Locator


    constructor (page: Page){
        this.page = page;
        this.inputUsername = page.locator("//input[@id='user_login']");
        this.inputPassword = page.locator("//input[@id='user_pass']");
        this.btnLogin = page.getByRole('button', {name: 'Log In'});
    }
     
    async gotoLoginAdmin(){

        
    }
}