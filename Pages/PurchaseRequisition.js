class PurchaseRequisition{
    constructor(page){
        this.page=page;
        this.rootMenu=page.getByRole("button",{name:"Home Menu"})
        this.purchaseMenu=page.getByRole("menuitem",{name:"Purchase"})
    }
    async CCLPurchaseRequisition(){
        this.rootMenu.click();
        this.purchaseMenu.click();
    }
}
export default PurchaseRequisition;