import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly signinLink: Locator;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signinLink = page.locator(".signin");
        this.emailField = page.locator("#email");
        this.passwordField = page.locator("#password");
        this.loginButton = page.locator(".button-login");
        this.errorMessage = page.locator("text=Error: Authentication failed: Wrong login or password");
    };

    async visitMyRetro() {
        await this.page.goto("https://myretro.school.smartup.ru/");
    };

    async login(email: string, password: string) {
        await this.signinLink.click();
        await this.emailField.type(email);
        await this.passwordField.type(password);
        await this.loginButton.click();
    };

    async assertErrorMessage() {
        await expect(this.errorMessage).toContainText("Error: Authentication failed: Wrong login or password");
    };
};