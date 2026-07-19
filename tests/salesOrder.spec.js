import { test, expect } from "@playwright/test";
import LoginPage from "../Pages/LoginPage";
import SalesOrderInputPage from "../Pages/salesOrder";

// test.describe("Create CS", () => {

//     test.beforeEach(async ({ page }) => {
//         const loginPage = new LoginPage(page);
//         await loginPage.goto();
//         await loginPage.CCLLogin("Admin", "1234");
//     });

//     test("Create New SO", async ({ page }) => {
//         const salesOrderPage = new SalesOrderInputPage(page);
//         await salesOrderPage.CCDLCreateSalesOrder();
//     });

// });


test.describe.configure({ mode: "parallel" });

test.describe("Create CS", () => {

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.CCLLogin("Admin", "1234");
    });


    for (let i = 1; i <= 3; i++) {

        test(`Create New SO - ${i}`, async ({ page }) => {

            const salesOrderPage = new SalesOrderInputPage(page);

            await salesOrderPage.CCDLCreateSalesOrder();

        });

    }

});

//npx playwright test tests/localPo.spec.js