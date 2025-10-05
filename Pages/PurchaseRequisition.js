class PurchaseRequisition{
    constructor(page){
        this.page=page;
        this.rootMenu=page.getByRole('button', { name: '' })
        this.purchaseMenu=page.getByRole('menuitem', { name: 'Purchase' }).first()
    }
    async CCLPurchaseRequisition(){
        await this.rootMenu.click();
        await this.purchaseMenu.click();
    }
}
export default PurchaseRequisition;