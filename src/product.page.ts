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
    }

    // Phương thức
    async gotoProductDetail(){
        await this.itemProduct.click();
    }

}