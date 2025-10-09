class LoginPage {
    constructor(page) {
        this.page = page;
    
        // this.userNameInput = page.getByLabel("Email");
        this.userNameInput = page.getByRole("textbox", { name: "Email" });
        this.passwordInput = page.getByRole("textbox", { name: "Password" });
        this.clickButton = page.getByRole("button", { name: "Log in" })

    }
    async goto() {
        await this.page.goto("http://192.168.3.187:7071/web/login");
    }
    async CCLLogin(username, password) {
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.clickButton.click();

    }

}
export default LoginPage;