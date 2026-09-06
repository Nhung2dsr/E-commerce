import { Locator, Page } from "@playwright/test"

export class HomePage{
    // Thuộc tính
    page: Page;
    title: Locator;
    searchBar: Locator;
    searchButton: Locator;
    iconUser: Locator;
    menuItems: Locator;
    searchResultTitle: Locator;
    numOfResult: Locator;
    resultItems: Locator;

    // Hàm tạo
    constructor(page: Page){
        this.page = page;
        this.title = page.locator('//a[@rel = "home"]');
        this.iconUser = page.locator('//a[@data-tooltip = "My Account"]');
        this.menuItems = page.locator('//ul[@id="menu-primary-menu"]//li');
        this.searchBar = page.locator('//input[@placeholder = "Search products..."]');
        this.searchButton = page.locator('//button[@class= "header-search-button"]');
        this.searchResultTitle = page.locator('//h1[@class = "woocommerce-products-header__title page-title"]');
        this.numOfResult = page.locator('//p[@class="woocommerce-result-count"]');
        this.resultItems = page.locator('//ul[@class = "products columns-4"]');
    }   

    // Phương thức
    async goToSite(){
        await this.page.goto('https://e-commerce-dev.betterbytesvn.com/');
    }

    // Tìm kiếm
    async serarch(keyword: string){
        await this.searchBar.fill(keyword);
        await this.searchButton.click();
    }

}