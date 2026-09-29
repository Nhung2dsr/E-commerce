import { test } from '../../src/fixtures/product.fixture';
import { expect, Page } from '@playwright/test';
import { ProductDetailPage } from '../../src/pages/product.page';

test.describe('Product display', async() => {
    // Pre-condition
    test.beforeEach(async ({ page }) => {
       
        await test.step('Goto site', async () => {
            await page.goto('https://e-commerce-dev.betterbytesvn.com/');
        });
    });

    test ('PRODUCT_001 - Verify product page hiển thị đúng với thông tin sản phẩm', async({ productDetailPage }) =>{
        
        await test.step('Truy cập trang chi tiết sản phẩm', async() => {
            // Arrange
            const testData = {
                ten: "FullStack Automation QA với Playwright Typescript",
                giaGoc: "2.499.000",
                giaKM: "1.749.000",
                mota: "Khoá học automation test từ chưa biết gì, với Playwright TypeScript"
            }

            // Action
            await productDetailPage.gotoProductDetail();
        
            // Verify trang web hiển thị thành công với đầy đủ ảnh, tiêu đề, mô tả, giá
            await expect (productDetailPage.imgProduct).toBeVisible();
            await expect (productDetailPage.titleProduct).toHaveText(testData.ten);
            await expect (productDetailPage.describeProduct).toHaveText(testData.mota);
            await expect (productDetailPage.priceGoc).toContainText(testData.giaGoc);
            await expect (productDetailPage.priceKM).toContainText(testData.giaKM);

            // Verify button thêm vào giỏ hàng enable và có thể thêm sản phẩm vào giỏ hàng
            await expect (productDetailPage.btnAddCart).toBeEnabled();

            await (productDetailPage.btnAddCart).click();
            await expect (productDetailPage.successMessage).toBeVisible();
                       
        });

        await test.step('Click sang tab review', async() => {
            // Action
            productDetailPage.gotoReview();

            // Assertion
            await expect (productDetailPage.noReviews).toBeVisible();
        });
    });
});

test.describe('Product review hoạt động', async() =>{
    // Pre-condition

    test.beforeEach(async ({ page }) => {
        await test.step('Goto site', async () => {
            await page.goto('https://e-commerce-dev.betterbytesvn.com/');           
        });
    });

    test ('PRODUCT_002 - Verify tính năng product review hoạt động đúng', async({ page, browser, productDetailPage }) =>{

        const testData = {
            contentCheckbox: "Save my name, email, and website in this browser for the next time I comment.",
            verifyText: "Your review is awaiting approval"
        }

        await test.step ('Truy cập trang chi tiết sản phẩm và click sang tab review', async() => {
            // Action
            productDetailPage.gotoProductDetail();
            productDetailPage.gotoReview();

            // Assertion
            // Chưa có review nào
            await expect (productDetailPage.noReviews).toBeVisible();

            // Hiển thị form submit review với đầy đủ thông tin
            await expect (productDetailPage.yourRating).toBeVisible();

            await expect (productDetailPage.yourReview).toBeVisible();

            await expect (productDetailPage.name).toBeVisible();

            await expect (productDetailPage.email).toBeVisible();

            await expect (productDetailPage.checkboxSaveInfo).toBeVisible();

            await expect (productDetailPage.labelSaveInfo).toHaveText(testData.contentCheckbox);

        });

        await test.step('Thực hiện viết review', async() =>{
            // Action
            await productDetailPage.writeReview(5,'Khóa học chất lượng', 'Phạm Nhung', 'nhung2005@gmail.com')

            // Verify thông tin review hiển thị trên trang sản phẩm với dòng text: "Your review is awaiting approval"
            await expect (productDetailPage.reviewSuccess).toHaveText(testData.verifyText);
        });

        await test.step('Refresh trình duyệt hiện tại', async() =>{
            // Action
            await page.reload();

            // Assertion
            await expect (productDetailPage.reviewSuccess).toHaveText(testData.verifyText);
        });

        await test.step('Mở 1 trình duyệt khác, truy cập trang sản phẩm', async() =>{
            const newContext = await browser.newContext();

            const newPage = await newContext.newPage();

            const newProductPage = new ProductDetailPage(newPage);

            await newPage.goto('https://e-commerce-dev.betterbytesvn.com/product/fullstack-automation-qa-voi-playwright-typescript/');

            await newProductPage.gotoReview();

            // Assertion
            await expect (newProductPage.noReviews).toBeVisible();
        });
    });   
});