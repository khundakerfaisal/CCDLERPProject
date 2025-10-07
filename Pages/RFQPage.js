class RFQPage{
    constructor(page){
        this.page=page;
        this.defaultRootMenu = page.getByTitle('Home Menu');

        // Purchase menu remains the same
        this.purchaseMenu = page.getByRole('menuitem', { name: 'Purchase' });
        this.orderRootMenu = page.getByRole('button', { name: 'Orders' })
        this.RfqSubMenu = page.getByRole('menuitem', { name: 'Request For Quotation' })
        this.createNewRfq = page.getByRole('button', { name: 'New' })
    }
    async CCLRfq(){
        await this.defaultRootMenu.click();
        await this.purchaseMenu.click();
        await this.orderRootMenu.click();
        await this.RfqSubMenu.click();
        await this.createNewRfq.click();
    }
}
export default RFQPage;