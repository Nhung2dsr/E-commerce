import {test, expect} from '@playwright/test'
import { Product } from '../../src/product.page';
import { Page } from '@playwright/test';

test.describe('Product - display', async() => {
    // Pre-condition
    let page: Page;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();

        await test.step('Goto site', async () => {
            await page.goto('https://e-commerce-dev.betterbytesvn.com/');
        });
    });

    test ('PRODUCT_001 - Verify product page hiển thị đúng với thông tin sản phẩm', async() =>{
        
        await test.step('Truy cập trang chi tiết sản phẩm', async() => {
            // Arrange
            const productPage = new Product(page);

            const testData = {
                ten: "FullStack Automation QA với Playwright Typescript",
                giaGoc: "2.499.000",
                giaKM: "1.749.000",
                mota: "Khoá học automation test từ chưa biết gì, với Playwright TypeScript"
            }
            // Action
            await productPage.gotoProductDetail();
        
            // Verify trang web hiển thị thành công với đầy đủ ảnh, tiêu đề, mô tả, giá
            await expect (productPage.imgProduct).toBeVisible();
            await expect (productPage.titleProduct).toHaveText(testData.ten);
            await expect (productPage.describeProduct).toHaveText(testData.mota);
            await expect (productPage.priceGoc).toContainText(testData.giaGoc);
            await expect (productPage.priceKM).toContainText(testData.giaKM);

            // Verify button thêm vào giỏ hàng enable và có thể thêm sản phẩm vào giỏ hàng
            await expect (productPage.btnAddCart).toBeEnabled();

            await (productPage.btnAddCart).click();
            await expect (productPage.successMessage).toBeVisible();
                       
        });
    });

});