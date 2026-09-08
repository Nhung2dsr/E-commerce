# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product\product.spec.ts >> Product review hoạt động >> PRODUCT_002 - Verify tính năng product review hoạt động đúng
- Location: tests\product\product.spec.ts:69:9

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('//p[@class = "meta"]')
Expected: "Your review is awaiting approval"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('//p[@class = "meta"]')

```

```yaml
- link "Skip to the content":
  - /url: "#site-content"
- paragraph:
  - link "E-commerce site testing":
    - /url: https://e-commerce-dev.betterbytesvn.com/
- paragraph: Website thực hành – hoctest.com
- search:
  - textbox "Search products..."
  - combobox:
    - option "All Categories" [selected]
    - option "Uncategorized"
  - button
- button "0 0 $":
  - img
  - text: 0 0 $
- link "My Account":
  - /url: https://e-commerce-dev.betterbytesvn.com/my-account/
  - img
- navigation:
  - list:
    - listitem:
      - link "Trang chủ":
        - /url: https://e-commerce-dev.betterbytesvn.com/
    - listitem:
      - link "Danh sách khoá học":
        - /url: https://e-commerce-dev.betterbytesvn.com/shop/
    - listitem:
      - link "Blog":
        - /url: https://e-commerce-dev.betterbytesvn.com/blog/
- main:
  - article:
    - text: Sale!
    - button "View full-screen image gallery"
    - link "FullStack Automation QA với Playwright Typescript":
      - /url: https://e-commerce-dev.betterbytesvn.com/wp-content/uploads/2026/06/6074295_d042.jpg
      - img "FullStack Automation QA với Playwright Typescript"
    - heading "FullStack Automation QA với Playwright Typescript" [level=1]
    - paragraph: "Original price was: 2.499.000 $. Current price is: 1.749.000 $."
    - paragraph: Khoá học automation test từ chưa biết gì, với Playwright TypeScript
    - text: FullStack Automation QA với Playwright Typescript quantity
    - spinbutton "Product quantity": "1"
    - button "Add to cart"
    - iframe
    - text: "SKU: FULLSTACK-AUTOMATION-QA-VOI-PLAYWRIGHT-TYPESCRIPT Category:"
    - link "Uncategorized":
      - /url: https://e-commerce-dev.betterbytesvn.com/product-category/uncategorized/
    - tablist:
      - tab "Description" [selected]
      - tab "Reviews (0)"
    - tabpanel "Description":
      - heading "Description" [level=2]
      - paragraph: Khoá học automation test từ chưa biết gì, với Playwright TypeScript
    - heading "Related products" [level=2]
    - list:
      - listitem:
        - 'link "Sale! ISTQB Testing with Generative AI (CT-GenAI) tiếng Việt ISTQB Testing with Generative AI (CT-GenAI) tiếng Việt Original price was: 599.000 $. Current price is: 279.000 $."':
          - /url: https://e-commerce-dev.betterbytesvn.com/product/istqb-testing-with-generative-ai-ct-genai-tieng-viet/
          - text: Sale!
          - img "ISTQB Testing with Generative AI (CT-GenAI) tiếng Việt"
          - heading "ISTQB Testing with Generative AI (CT-GenAI) tiếng Việt" [level=2]
          - text: "Original price was: 599.000 $. Current price is: 279.000 $."
        - 'button "Add to cart: “ISTQB Testing with Generative AI (CT-GenAI) tiếng Việt”"': Add to cart
      - listitem:
        - 'link "Sale! ISTQB Foundation Tiếng Việt - đã chỉnh sửa ISTQB Foundation Tiếng Việt – đã chỉnh sửa Original price was: 599.000 $. Current price is: 279.000 $."':
          - /url: https://e-commerce-dev.betterbytesvn.com/product/istqb-foundation-tieng-viet/
          - text: Sale!
          - img "ISTQB Foundation Tiếng Việt - đã chỉnh sửa"
          - heading "ISTQB Foundation Tiếng Việt – đã chỉnh sửa" [level=2]
          - text: "Original price was: 599.000 $. Current price is: 279.000 $."
        - 'button "Add to cart: “ISTQB Foundation Tiếng Việt - đã chỉnh sửa”"': Add to cart
      - listitem:
        - 'link "Sale! ISTQB - Test Automation Engineer (CTAL-TAE) Tiếng Việt ISTQB – Test Automation Engineer (CTAL-TAE) Tiếng Việt Original price was: 599.000 $. Current price is: 279.000 $."':
          - /url: https://e-commerce-dev.betterbytesvn.com/product/istqb-test-automation-engineer-ctal-tae-tieng-viet/
          - text: Sale!
          - img "ISTQB - Test Automation Engineer (CTAL-TAE) Tiếng Việt"
          - heading "ISTQB – Test Automation Engineer (CTAL-TAE) Tiếng Việt" [level=2]
          - text: "Original price was: 599.000 $. Current price is: 279.000 $."
        - 'button "Add to cart: “ISTQB - Test Automation Engineer (CTAL-TAE) Tiếng Việt”"': Add to cart
      - listitem:
        - 'link "Sale! API automation Testing với Playwright TypeScript API automation Testing với Playwright TypeScript Original price was: 599.000 $. Current price is: 579.000 $."':
          - /url: https://e-commerce-dev.betterbytesvn.com/product/api-automation-testing-voi-playwright-typescript/
          - text: Sale!
          - img "API automation Testing với Playwright TypeScript"
          - heading "API automation Testing với Playwright TypeScript" [level=2]
          - text: "Original price was: 599.000 $. Current price is: 579.000 $."
        - 'button "Add to cart: “API automation Testing với Playwright TypeScript”"': Add to cart
  - complementary:
    - heading "Các comment gần đây" [level=2]
    - list:
      - listitem:
        - article:
          - link "admin":
            - /url: https://e-commerce-dev.betterbytesvn.com
          - text: "on"
          - link "The Complete Graphic Design For Beginners":
            - /url: https://e-commerce-dev.betterbytesvn.com/the-complete-graphic-design-for-beginners-2/#comment-1219
    - heading "Categories" [level=2]
    - list:
      - listitem:
        - link "Courses":
          - /url: https://e-commerce-dev.betterbytesvn.com/category/courses/
      - listitem:
        - link "Uncategorized":
          - /url: https://e-commerce-dev.betterbytesvn.com/category/uncategorized/
- contentinfo:
  - text: Theme by
  - link "EnvoThemes":
    - /url: https://envothemes.com/
- status
```

# Test source

```ts
  7   |     let page: Page;
  8   | 
  9   |     test.beforeAll(async ({ browser }) => {
  10  |         page = await browser.newPage();
  11  | 
  12  |         await test.step('Goto site', async () => {
  13  |             await page.goto('https://e-commerce-dev.betterbytesvn.com/');
  14  |         });
  15  |     });
  16  | 
  17  |     test ('PRODUCT_001 - Verify product page hiển thị đúng với thông tin sản phẩm', async() =>{
  18  |         const productPage = new Product(page);
  19  | 
  20  |         await test.step('Truy cập trang chi tiết sản phẩm', async() => {
  21  |             // Arrange
  22  |             const testData = {
  23  |                 ten: "FullStack Automation QA với Playwright Typescript",
  24  |                 giaGoc: "2.499.000",
  25  |                 giaKM: "1.749.000",
  26  |                 mota: "Khoá học automation test từ chưa biết gì, với Playwright TypeScript"
  27  |             }
  28  | 
  29  |             // Action
  30  |             await productPage.gotoProductDetail();
  31  |         
  32  |             // Verify trang web hiển thị thành công với đầy đủ ảnh, tiêu đề, mô tả, giá
  33  |             await expect (productPage.imgProduct).toBeVisible();
  34  |             await expect (productPage.titleProduct).toHaveText(testData.ten);
  35  |             await expect (productPage.describeProduct).toHaveText(testData.mota);
  36  |             await expect (productPage.priceGoc).toContainText(testData.giaGoc);
  37  |             await expect (productPage.priceKM).toContainText(testData.giaKM);
  38  | 
  39  |             // Verify button thêm vào giỏ hàng enable và có thể thêm sản phẩm vào giỏ hàng
  40  |             await expect (productPage.btnAddCart).toBeEnabled();
  41  | 
  42  |             await (productPage.btnAddCart).click();
  43  |             await expect (productPage.successMessage).toBeVisible();
  44  |                        
  45  |         });
  46  | 
  47  |         await test.step('Click sang tab review', async() => {
  48  |             // Action
  49  |             productPage.gotoReview();
  50  | 
  51  |             // Assertion
  52  |             await expect (productPage.noReviews).toBeVisible();
  53  |         });
  54  |     });
  55  | });
  56  | 
  57  | test.describe('Product review hoạt động', async() =>{
  58  |     // Pre-condition
  59  |     let page: Page;
  60  | 
  61  |     test.beforeAll(async ({ browser }) => {
  62  |         page = await browser.newPage();
  63  | 
  64  |         await test.step('Goto site', async () => {
  65  |             await page.goto('https://e-commerce-dev.betterbytesvn.com/');           
  66  |         });
  67  |     });
  68  | 
  69  |     test ('PRODUCT_002 - Verify tính năng product review hoạt động đúng', async({ browser }) =>{
  70  | 
  71  |         const productPage = new Product(page);
  72  | 
  73  |         const testData = {
  74  |             contentCheckbox: "Save my name, email, and website in this browser for the next time I comment.",
  75  |             verifyText: "Your review is awaiting approval"
  76  |         }
  77  | 
  78  |         await test.step ('Truy cập trang chi tiết sản phẩm và click sang tab review', async() => {
  79  |             // Action
  80  |             productPage.gotoProductDetail();
  81  |             productPage.gotoReview();
  82  | 
  83  |             // Assertion
  84  |             // Chưa có review nào
  85  |             await expect (productPage.noReviews).toBeVisible();
  86  | 
  87  |             // Hiển thị form submit review với đầy đủ thông tin
  88  |             await expect (productPage.yourRating).toBeVisible();
  89  | 
  90  |             await expect (productPage.yourReview).toBeVisible();
  91  | 
  92  |             await expect (productPage.name).toBeVisible();
  93  | 
  94  |             await expect (productPage.email).toBeVisible();
  95  | 
  96  |             await expect (productPage.checkboxSaveInfo).toBeVisible();
  97  | 
  98  |             await expect (productPage.labelSaveInfo).toHaveText(testData.contentCheckbox);
  99  | 
  100 |         });
  101 | 
  102 |         await test.step('Thực hiện viết review', async() =>{
  103 |             // Action
  104 |             await productPage.writeReview(5,'Khóa học chất lượng', 'Phạm Nhung', 'ptnhung@gmail.com')
  105 | 
  106 |             // Verify thông tin review hiển thị trên trang sản phẩm với dòng text: "Your review is awaiting approval"
> 107 |             await expect (productPage.reviewSuccess).toHaveText(testData.verifyText);
      |                                                      ^ Error: expect(locator).toHaveText(expected) failed
  108 |         });
  109 | 
  110 |         await test.step('Refresh trình duyệt hiện tại', async() =>{
  111 |             // Action
  112 |             await page.reload();
  113 | 
  114 |             // Assertion
  115 |             await expect (productPage.reviewSuccess).toHaveText(testData.verifyText);
  116 |         });
  117 | 
  118 |         await test.step('Mở 1 trình duyệt khác, truy cập trang sản phẩm', async() =>{
  119 |             const newContext = await browser.newContext();
  120 | 
  121 |             const newPage = await newContext.newPage();
  122 | 
  123 |             const newProductPage = new Product(newPage);
  124 | 
  125 |             await newPage.goto('https://e-commerce-dev.betterbytesvn.com/product/fullstack-automation-qa-voi-playwright-typescript/');
  126 | 
  127 |             // Assertion
  128 |             await expect (newProductPage.noReviews).toBeVisible();
  129 |         });
  130 |     });   
  131 | });
  132 | 
  133 | 
  134 | 
```