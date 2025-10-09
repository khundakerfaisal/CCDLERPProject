class PurchaseRequisition {
    constructor(page) {
        this.page = page;

        // Use title attribute to locate Home Menu button
        this.defaultRootMenu = page.getByTitle('Home Menu');

        // Purchase menu remains the same
        this.purchaseMenu = page.getByRole('menuitem', { name: 'Purchase' });
        this.orderRootMenu = page.getByRole('button', { name: 'Orders' })
        this.purchaseRequestSubMenu = page.getByRole('menuitem', { name: 'Purchase Requisition' })
        this.createNewPR = page.getByRole('button', { name: 'New' })
        this.selectPriority = page.getByLabel('Priority')
        this.selectDepartment = page.getByRole('textbox', { name: 'Department' })
        this.selectBudget = page.getByRole('textbox', { name: 'Budget' })
        this.selectBudgetChoose = page.locator('.o-autocomplete--dropdown-item').first()
        this.selectRequestType = page.getByRole('combobox', { name: 'Requisition Type' })
        this.selectPRType = page.getByRole('combobox', { name: 'PR Type' })
        this.selectAddLine = page.getByRole('button', { name: 'Add a line' })

        // this.selectProductLine = page.getByRole('row', { name: 'Sub Parent budget - Budget' }).getByRole('combobox').first()
        this.selectProductLine = page.locator('.o_data_cell').first()
        this.prProducts = page.getByRole('option', { name: 'CEMENT A' })
        this.prQty = page.getByRole('textbox').nth(3)
        this.prSave = page.getByRole('button', { name: 'Save manually' })
        this.prSubmit = page.getByRole('button', { name: 'Submit' })
        this.prHoDApprove = page.getByRole('button', { name: 'Approve' })
        this.prGMApprove = page.getByRole('button', { name: 'Approve' })
    }

    async CCLPurchaseRequisition() {
        await this.defaultRootMenu.click();
        await this.purchaseMenu.click();
        await this.orderRootMenu.click();
        await this.purchaseRequestSubMenu.click();
        await this.createNewPR.click();
        await this.selectPriority.click();
        await this.page.keyboard.press('ArrowUp');    // move selection up
        await this.page.keyboard.press('ArrowUp');    // move selection up
        await this.page.keyboard.press('Enter');      // confirm selection

        await this.selectDepartment.click();
        // await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Enter');


        await this.selectBudget.click();
        await this.page.waitForSelector('.o-autocomplete--dropdown-item', { state: 'visible' });
        await this.selectBudgetChoose.click();
        await this.page.keyboard.press('Enter');

        await this.selectRequestType.click();
        await this.page.keyboard.press('ArrowDown');   // navigate to "High"
        await this.page.keyboard.press('Enter');

        await this.selectPRType.click();
        await this.page.keyboard.press('ArrowDown');   // navigate to "High"
        await this.page.keyboard.press('Enter');

        await this.selectAddLine.click();
        await this.selectProductLine.click();
        await this.prProducts.click();
        await this.prQty.fill('4');
        await this.prSave.click();
        await this.prSubmit.click();
        await this.prHoDApprove.click();
        await this.prGMApprove.click();
        // await this.page.pause();
    }
}

export default PurchaseRequisition;
