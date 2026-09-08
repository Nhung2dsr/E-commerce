import {test, expect} from '@playwright/test'
import { Product } from '../../src/pages/product.page';
import { Page } from '@playwright/test';

test.describe('Product display', async() => {
    // Pre-condition
    let page: Page;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();

        await test.step('Goto site', async () => {
            await page.goto('https://e-commerce-dev.betterbytesvn.com/');
        });
    });

    test ('PRODUCT_001 - Verify product page hiển thị đúng với thông tin sản phẩm', async() =>{
        const productPage = new Product(page);

        await test.step('Truy cập trang chi tiết sản phẩm', async() => {
            // Arrange
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

        await test.step('Click sang tab review', async() => {
            // Action
            productPage.gotoReview();

            // Assertion
            await expect (productPage.noReviews).toBeVisible();
        });
    });
});

test.describe('Product review hoạt động', async() =>{
    // Pre-condition
    let page: Page;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();

        await test.step('Goto site', async () => {
            await page.goto('https://e-commerce-dev.betterbytesvn.com/');           
        });
    });

    test ('PRODUCT_002 - Verify tính năng product review hoạt động đúng', async({ browser }) =>{

        const productPage = new Product(page);

        const testData = {
            contentCheckbox: "Save my name, email, and website in this browser for the next time I comment.",
            verifyText: "Your review is awaiting approval"
        }

        await test.step ('Truy cập trang chi tiết sản phẩm và click sang tab review', async() => {
            // Action
            productPage.gotoProductDetail();
            productPage.gotoReview();

            // Assertion
            // Chưa có review nào
            await expect (productPage.noReviews).toBeVisible();

            // Hiển thị form submit review với đầy đủ thông tin
            await expect (productPage.yourRating).toBeVisible();

            await expect (productPage.yourReview).toBeVisible();

            await expect (productPage.name).toBeVisible();

            await expect (productPage.email).toBeVisible();

            await expect (productPage.checkboxSaveInfo).toBeVisible();

            await expect (productPage.labelSaveInfo).toHaveText(testData.contentCheckbox);

        });

        await test.step('Thực hiện viết review', async() =>{
            // Action
            await productPage.writeReview(5,'Khóa học chất lượng', 'Phạm Nhung', 'nhung123@gmail.com')

            // Verify thông tin review hiển thị trên trang sản phẩm với dòng text: "Your review is awaiting approval"
            await expect (productPage.reviewSuccess).toHaveText(testData.verifyText);
        });

        await test.step('Refresh trình duyệt hiện tại', async() =>{
            // Action
            await page.reload();

            // Assertion
            await expect (productPage.reviewSuccess).toHaveText(testData.verifyText);
        });

        await test.step('Mở 1 trình duyệt khác, truy cập trang sản phẩm', async() =>{
            const newContext = await browser.newContext();

            const newPage = await newContext.newPage();

            const newProductPage = new Product(newPage);

            await newPage.goto('https://e-commerce-dev.betterbytesvn.com/product/fullstack-automation-qa-voi-playwright-typescript/');

            // Assertion
            await expect (newProductPage.noReviews).toBeVisible();
        });
    });   
});


