class DeliveryAdvicePage {
    constructor(page) {
        this.page = page;

        // Menu
        this.homeMenu = page.locator("//button[@title='Home Menu']");
        this.salesMenu = page.locator("//a[@data-menu-xmlid='sale.sale_menu_root']");
        this.orderMenu = page.locator("//button[@data-menu-xmlid='sale.sale_order_menu']");
        this.deliveryAdviceMenu = page.locator("//a[@data-menu-xmlid='sales_order.menu_delivery_advise']");

        // Buttons
        this.createButton = page.locator(".btn-primary").nth(2);
        this.saveButton = page.locator("//button[@data-tooltip='Save manually']");
        this.requestApproveButton = page.locator("[name='action_request_approve']");
        this.approveButton = page.locator("//button[@name='action_submit']//span[text()='Approve']/..");

        // Form
        this.location = page.locator("#location_id_0");
        this.deliveryAddress = page.locator("#delivery_address_0");
        this.labourOffice = page.locator("#labor_office_0");
        this.customer = page.locator("input[placeholder='Select Customer']");
        this.executive = page.getByRole('combobox', { name: 'Sales Executive' });

        // DO Line
        this.addLine = page.locator("text=Add a line");
        this.doLine = page.locator("[name='do_line_id']");
        this.doInput = page.locator("//td[@name='do_line_id']//input");

        // Site buttons
        this.addSiteButtons = page.locator("button[name='action_open_retailer_popup']");
        // this.requestToApproveButton = page.getByRole('button', { name: 'Request To Approve' });
        // this.ApproveButton = page.getByRole('button', { name: 'Approve' });


    }
    async selectAutocomplete(field, value) {

        await field.waitFor({ state: "visible" });

        await field.click();

        await field.fill(value);

        const option = this.page
            .locator(".o-autocomplete--dropdown-item")
            .filter({ hasText: value })
            .first();

        await option.waitFor({
            state: "visible",
            timeout: 15000
        });

        await option.click();

    }

    async createDeliveryAdvice() {

        // Navigate
        await this.homeMenu.click();
        await this.salesMenu.click();
        await this.orderMenu.click();
        await this.deliveryAdviceMenu.click();

        await this.createButton.click();




        // Location
        await this.selectAutocomplete(
            this.location,
            "Main Store/Cement Plant Main Store"
        );

        // Delivery Address
        await this.deliveryAddress.fill("Chittagong");

        // Labour Office
        await this.labourOffice.selectOption({ label: "Labor Office" });

        // Customer
        // Customer

        await this.selectAutocomplete(
            this.customer,
            "credit Test"
        );

        await this.selectAutocomplete(
            this.executive,
            "Md. Zahid Hasan"
        );


        // Scroll
        await this.page.mouse.wheel(0, 1000);

        // Add Line 1st
        await this.addLine.click();
        await this.doInput.click();
        await this.doInput.fill("DO");
        await this.doInput.press("Enter");



        // Add Line 2nd
        await this.addLine.click();
        await this.doInput.click();
        await this.doInput.fill("DO");
        await this.doInput.press("Enter");


        // Save
        await this.page.mouse.wheel(0, -1000);

        await this.saveButton.click();

        // First Site
        await this.fillSiteInformation(0, false);

        // Second Site
        await this.fillSiteInformation(1, true);
        // await this.fillSiteInformation(2, true);

        // Approval
        await this.requestApproveButton.click();

        await this.approveButton.waitFor({
            state: "visible"
        });

        await this.approveButton.click();
    }

    async fillSiteInformation(index, selectSecond) {

        const button = this.addSiteButtons.nth(index);

        await button.scrollIntoViewIfNeeded();

        await button.click();

        const modal = this.page.locator(".modal-content");

        // await expect(modal).toBeVisible();

        const retailerCell = modal.locator("//td[@name='retailer_id']");
        await retailerCell.click();

        const retailerInput = modal.locator("//td[@name='retailer_id']//input");

        await retailerInput.click();

        if (selectSecond) {
            await retailerInput.press("ArrowDown");
        }

        await retailerInput.press("Enter");

        const saveClose = modal.locator("button[name='action_confirm']");

        await saveClose.click();

        // await expect(modal).toBeHidden();
    }
}

export default DeliveryAdvicePage;