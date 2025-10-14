class LocalPoPage {
    constructor(page) {
        this.page = page;
        this.defaultRootMenu = page.getByTitle('Home Menu');
        this.purchaseMenu = page.getByRole('menuitem', { name: 'Purchase' });
        this.orderRootMenu = page.getByRole('button', { name: 'Orders' })
        this.localPoSubMenu = page.getByRole('menuitem', { name: 'Local Purchase' })
        this.localPoFirstItem = page.locator('.o_data_row').first()
        // this.createButton = page.getByRole('button', { name: 'Compare' })
        // this.editButton = page.getByRole('button', { name: 'Edit' })
        // this.awardedQty = page.locator('.o_purchase_selected_qty').first()
        // this.saveButton = page.getByRole('button', { name: 'Save' })
        // this.sendForApprovalButton = page.locator('#btn_send_for_approval');
        // this.ApprovedButton = page.getByRole('button', { name: 'Approve', exact: true })

    }
    async CCLLocalPo() {
        await this.defaultRootMenu.click();
        await this.purchaseMenu.click();
        await this.orderRootMenu.click();
        await this.localPoSubMenu.click();
        await this.localPoFirstItem.click();
        await this.page.waitForTimeout(1000);
        // await this.createButton.click();
        // await this.page.waitForTimeout(1000);
        // await this.editButton.click();
        // await this.page.waitForTimeout(1000);
        // await this.awardedQty.fill('2');
        // await this.page.waitForTimeout(1000);
        // await this.saveButton.click();
        // await this.page.waitForTimeout(4000);
        // await this.sendForApprovalButton.waitFor({ state: 'visible', timeout: 10000 });
        // await this.sendForApprovalButton.scrollIntoViewIfNeeded();
        // await this.sendForApprovalButton.click();
        // await this.page.waitForTimeout(3000);
        // await this.ApprovedButton.click();
        // await this.page.waitForTimeout(3000);
        // await this.ApprovedButton.click();
        // await this.page.waitForTimeout(3000);
        // await this.page.pause();

    }
}
export default LocalPoPage;