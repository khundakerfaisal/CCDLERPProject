class CSPage {
    constructor(page) {
        this.page = page;
        this.defaultRootMenu = page.getByTitle('Home Menu');
        this.purchaseMenu = page.getByRole('menuitem', { name: 'Purchase' });
        this.orderRootMenu = page.getByRole('button', { name: 'Orders' })
        this.csSubMenu = page.getByRole('menuitem', { name: 'Comparative Statement' })

    }
    async CCLCSPage(){
        await this.defaultRootMenu.click();
        await this.purchaseMenu.click();
        await this.orderRootMenu.click();
        await this.csSubMenu.click();
    }
}
export default CSPage;