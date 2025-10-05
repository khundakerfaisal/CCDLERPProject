class PurchaseRequisition {
    constructor(page) {
        this.page = page;

        // Use title attribute to locate Home Menu button
       this.defaultRootMenu = page.getByTitle('Home Menu');

        // Purchase menu remains the same
        this.purchaseMenu = page.getByRole('menuitem', { name: 'Purchase' });
    }

    async CCLPurchaseRequisition() {
        // Wait for the Home Menu button to be visible and click
 await this.defaultRootMenu.waitFor({ state: 'visible' });
        await this.defaultRootMenu.click();

        // Wait for the Purchase menu item to be visible and click
        await this.purchaseMenu.waitFor({ state: 'visible' });
        await this.purchaseMenu.click();
    }
}

export default PurchaseRequisition;
