import { test, expect } from '@playwright/test';
import LoginPage from '../Pages/LoginPage';
import PurchaseRequisition from '../Pages/PurchaseRequisition';

test.describe('Purchase Requisittion',() => {
 test.beforeEach(async({page})=>{
    const loginPage=new LoginPage(page);
    await loginPage.goto();
    await loginPage.CCLLogin("Admin","admin");

 })

 test("Create Purchase Requisition",async({page})=>{
    const purchaseRequisition=new PurchaseRequisition(page);
    await purchaseRequisition.CCLPurchaseRequisition();
 })
});
// npx playwright test tests/purchaseRequisition.spec.js --debug