class RFQPage {
    constructor(page) {
        this.page = page;
        this.defaultRootMenu = page.getByTitle('Home Menu');

        // Purchase menu remains the same
        this.purchaseMenu = page.getByRole('menuitem', { name: 'Purchase' });
        this.orderRootMenu = page.getByRole('button', { name: 'Orders' })
        this.RfqSubMenu = page.getByRole('menuitem', { name: 'Request For Quotation' })
        this.createNewRfq = page.getByRole('button', { name: 'New' })
        this.selectPR = page.getByRole('combobox', { name: 'Purchase Requisition' })
        this.saveRfq = page.getByRole('button', { name: 'Save manually' })
        this.confirmRfq = page.getByRole('button', { name: 'Confirm' })
        this.createQuotation = page.getByRole('button', { name: ' Create Quotation' })
        this.selectPartner = page.getByRole('combobox', { name: 'Partner' })
        this.priceInputs = page.locator('td[name="price_unit"] input.o_input');
    }
    async CCLRfq() {
        await this.defaultRootMenu.click();
        await this.purchaseMenu.click();
        await this.orderRootMenu.click();
        await this.RfqSubMenu.click();
        await this.createNewRfq.click();
        await this.selectPR.click();
        await this.page.keyboard.press('Enter');
        await this.saveRfq.click();
        await this.confirmRfq.click();
        await this.createQuotation.click();
        await this.selectPartner.click();
        await this.page.keyboard.press('ArrowDown')
        await this.page.keyboard.press('Enter');
        await this.page.keyboard.press('ArrowDown')
        await this.page.keyboard.press('ArrowDown')
        await this.page.keyboard.press('ArrowDown')
        await this.page.keyboard.press('Enter');
        await this.page.keyboard.press('ArrowDown')
        await this.page.keyboard.press('ArrowDown')
        await this.page.keyboard.press('ArrowDown')
        await this.page.keyboard.press('Enter');

        const priceInputs = this.page.locator('td[name="price_unit"] input.o_input');
        await priceInputs.first().waitFor({ state: 'visible' });

        const count = await priceInputs.count();
        for (let i = 0; i < count; i++) {
            await priceInputs.nth(i).fill(`${(i + 1) * 100}`);
        }

        await this.page.pause();
    }
}
export default RFQPage;