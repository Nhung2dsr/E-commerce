import { Locator, Page } from "@playwright/test";

export class Product {
    page: Page
    itemProduct: Locator
    imgProduct: Locator
    titleProduct: Locator
    priceGoc: Locator
    priceKM: Locator
    describeProduct: Locator
    btnAddCart: Locator
    successMessage: Locator
    tabReview: Locator
    noReviews: Locator
    yourRating: Locator
    yourReview: Locator
    name: Locator
    email: Locator
    checkboxSaveInfo: Locator
    labelSaveInfo: Locator
    reviewSuccess: Locator
    submit: Locator

    constructor(page: Page){
        this.page = page;
        this.itemProduct = page.locator('//a[normalize-space(text())="FullStack Automation QA với Playwright Typescript"]');
        this.imgProduct = page.locator('//img[@src="https://e-commerce-dev.betterbytesvn.com/wp-content/uploads/2026/06/6074295_d042.jpg" and @class = "zoomImg"]');
        this.titleProduct = page.locator('//h1[@class ="product_title entry-title"]');
        this.priceGoc = page.locator('//div[contains(@class,"summary") and contains(@class,"entry-summary")]//p[contains(@class,"price")]//del//span[contains(@class,"woocommerce-Price-amount")]');
        this.priceKM = page.locator('//div[contains(@class,"summary") and contains(@class,"entry-summary")]//p[contains(@class,"price")]//ins//span[contains(@class,"woocommerce-Price-amount")]');
        this.describeProduct = page.locator('//div[@class = "woocommerce-product-details__short-description"]');
        this.btnAddCart = page.locator('//button[@name = "add-to-cart"]');
        this.successMessage = page.locator('//div[@class = "woocommerce-message"]');
        this.tabReview = page.locator('//a[@href= "#tab-reviews"]');
        this.noReviews = page.locator('//p[@class="stars"]');
        this.yourRating = page.locator('//span[@role= "group"]');
        this.yourReview = page.locator('//textarea[@id = "comment"]');
        this.name = page.locator('//input[@id = "author"]');
        this.email = page.locator('//input[@id = "email"]');
        this.checkboxSaveInfo = page.locator('#wp-comment-cookies-consent');
        this.labelSaveInfo = page.locator('label[for="wp-comment-cookies-consent"]');
        this.submit = page.locator('#submit');
        this.reviewSuccess = page.locator('//p[@class = "meta"]');

    }

    // Phương thức
    async gotoProductDetail(){
        await this.itemProduct.click();
    }

    async gotoReview(){
        await this.tabReview.click();
    }

    async selectRating(rating: number) {
        await this.yourRating.locator(`.star-${rating}`).click();
    }

    async writeReview(rating: number, review: string, name: string, email: string) {
        await this.selectRating(rating);
        await this.yourReview.fill(review);
        await this.name.fill(name);
        await this.email.fill(email);
        await this.checkboxSaveInfo.check();
        await this.submit.click();
    }

}