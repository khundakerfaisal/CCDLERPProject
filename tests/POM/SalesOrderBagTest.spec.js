import { test } from "@playwright/test";
import fs from "fs";

import LoginPage from "../../Pages/LoginPage";
import SalesOrderInputPage from "../../Pages/Sales/salesOrder";
import DeliveryAdvicePage from "../../Pages/Sales/DeliveryAdvice";
import FleetPage from "../../Pages/Fleet/Fleet";
import AllocationPage from "../../Pages/Allocation/AllocationPage";


const user = JSON.parse(
    fs.readFileSync("./tests/resources/User.json", "utf8")
);


test.describe("Sales Flow - SO to Allocation", () => {

    // Important: dependent tests must run in order
    test.describe.configure({
        mode: "serial"
    });


    test.beforeEach(async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await loginPage.CCLLogin(
            user.pilotUsername,
            user.pilotPassword
        );

    });


    test("Create New SO", async ({ page }) => {

        const salesOrderPage = new SalesOrderInputPage(page);

        await salesOrderPage.CCDLCreateSalesOrder();

    });


    test("Create New Delivery Advice", async ({ page }) => {

        const deliveryAdvice = new DeliveryAdvicePage(page);

        await deliveryAdvice.createDeliveryAdvice();

    });

    test("Create New Fleet Entry ", async ({ page }) => {

        const fleet = new FleetPage(page);

        await fleet.createFleet();

    });


    test("Create New Allocation", async ({ page }) => {

        const allocationPage = new AllocationPage(page);

        await allocationPage.allocationEntryPage();

    });


});

// npx playwright test tests/POM/SalesOrderBagTest.spec.js