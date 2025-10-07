import {test,expect} from "@playwright/test"
import LoginPage from "../Pages/LoginPage"
import RFQPage from "../Pages/RFQPage"

test.describe("Create Rfq",()=>{
    test.beforeEach(async({page})=>{
        const loginPage=new LoginPage(page);
        loginPage.CCLLogin();
    })
    test("Create New RFQ",async({page})=>{
        const rfqPage=new RFQPage(page);
        rfqPage.CCLRfq();
    })
})