import { test, expect} from '@playwright/test'
import { HomePage } from '../../src/pages/home.page';
    
test.describe ('Home - test display', async() => {
    
    test ('HOME_001 - Verify Home page loads successfully', async({ page }) => {
        const homePage = new HomePage(page);
        // Action
        await homePage.goToSite();

        // Assersion
        // Title: E-commerce site testing
        await expect(homePage.title).toHaveText('E-commerce site testing');

        // Search bar: hiển thị với placeholder: "Search products..."
        await expect(homePage.searchBar).toBeVisible();

        // Hover vào icon user, hiển thị text "My account"
        await (homePage.iconUser).hover();
        await expect(homePage.iconUser).toBeVisible();

        //  Menu hiển thị: "Trang chủ", "Danh sách khoá học", "Blog"
        const testData = {
            menu: ["Trang chủ", "Danh sách khoá học", "Blog"]
        };
            
        for (let i = 0; i < 3; i++){
            await expect(homePage.menuItems.nth(i)).toHaveText(testData.menu[i]);
        }
    });
});

test.describe ('Home - search function', async() => {
    // Pre-condition
    test.beforeEach(async({ page }) =>{
        await test.step('Goto site: https://e-commerce-dev.betterbytesvn.com/', async() =>{
            await page.goto(" https://e-commerce-dev.betterbytesvn.com/");
        });       
    })
    test ('HOME_002 - Verify search function work correctly', async({page}) => {
        // Arrange
        const homePage = new HomePage(page);
        
        await test.step('Search keyword: "ISTQB"', async() => {
            // Action
            await homePage.serarch("ISTQB");

            // Verify search keyword
            await expect(homePage.searchResultTitle).toContainText('ISTQB');

            // Verify result count text is displayed
            await expect(homePage.numOfResult).toBeVisible();

            // Verify all product names contain ISTQB
            const count = await homePage.resultItems.count();

            for (let i = 0; i < count; i++) {
                await expect(homePage.resultItems.nth(i)).toContainText('ISTQB', { ignoreCase: true });
            };
        });      
    });
});
