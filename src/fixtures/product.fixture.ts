import { test as base } from '@playwright/test'
import { ProductDetailPage } from '../pages/product.page'

export const test = base.extend<{

    productDetailPage: ProductDetailPage

}> ({

    productDetailPage: async ({ page }, use) => {
        const productDetailPage = new ProductDetailPage(page);
        await use(productDetailPage); 
    }

})