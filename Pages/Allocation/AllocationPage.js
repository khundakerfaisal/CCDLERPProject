import { AllocationNumber } from "../Utils/utility";

class AllocationPage {
    constructor(page) {
        this.page = page;

        this.homeMenu = page.locator("//button[@title='Home Menu']");
        this.allocationMenu = page.locator(
            "//a[@data-menu-xmlid='transport_delivery.allocation_number_parent_menu']"
        );
        this.vehicleAllocationMenu = page.locator(
            "//a[@data-menu-xmlid='transport_delivery.allocation_number_menu']"
        );

        this.createNewButton = page.locator(".btn-primary");

        this.inputTripType = page.locator("#trip_type_id_0");
        this.inputTransportType = page.locator("#transport_type_0");
        this.selectVehicle = page.locator("#vehicle_id_0");

        this.inputCustomer = page.getByRole('combobox', { name: 'Partner' });

        this.inputDeliveryAdvice = page.getByRole('combobox', { name: 'Delivery Advise' });

        this.saveButton = page.locator(
            "//button[@data-tooltip='Save manually']"
        );

        this.submitButton = page.locator("[name='action_submit']");

        this.allocationNumber = page.locator("//div[@name='name']//span");
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

    async allocationEntryPage() {
        await this.homeMenu.click();

        await this.allocationMenu.click();

        await this.vehicleAllocationMenu.click();

        await this.createNewButton.nth(2).click();

        // Trip Type
        await this.inputTripType.fill("Sales");
        await this.inputTripType.press("Enter");

        // Transport Type
        await this.inputTransportType.selectOption({
            label: "CNF Cost",
        });

        // Select customer

        await this.inputCustomer.fill("credit Test");
        await this.inputCustomer.press("Enter");



        await this.inputDeliveryAdvice.fill("DA");
        await this.inputDeliveryAdvice.press("Enter");

       

        // Select vehicle again
        await this.selectVehicle.press("ArrowDown");
        await this.selectVehicle.press("Enter");

        await this.saveButton.click();



        const allocationNo = (
            await this.allocationNumber.textContent()
        ).trim();

        await AllocationNumber.saveAllocationNumber(allocationNo);
        await this.submitButton.click();
    }
}
export default AllocationPage;