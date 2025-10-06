class PurchaseRequisition {
    constructor(page) {
        this.page = page;

        // Use title attribute to locate Home Menu button
        this.defaultRootMenu = page.getByTitle('Home Menu');

        // Purchase menu remains the same
        this.purchaseMenu = page.getByRole('menuitem', { name: 'Purchase' });
        this.orderRootMenu=page.getByRole('button',{name:'Orders'})
        this.purchaseRequestSubMenu=page.getByRole('menuitem',{name:'Purchase Requisition'})
    }

    async CCLPurchaseRequisition() {
        await this.defaultRootMenu.click();
        await this.purchaseMenu.click();
        await this.orderRootMenu.click();
       
    }
}

export default PurchaseRequisition;
