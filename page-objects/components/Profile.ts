import { expect, Locator, Page } from "@playwright/test";

export class Profile {
    readonly page: Page;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly phoneField: Locator;
    readonly positionField: Locator;
    readonly birthdayDateField: Locator;
    readonly submitButton: Locator;
    readonly cancelButton: Locator;

    constructor(page:Page) {
        this.page = page;
        this.firstNameField = page.locator("#first-name");
        this.lastNameField = page.locator("#last-name");
        this.phoneField = page.locator("#phone");
        this.positionField = page.locator(".md-select-value[name=position-id]");
        this.birthdayDateField = page.locator(".field-birthday .md-input");
        this.submitButton = page.locator("[data-qa=profile-submit-button]");
        this.cancelButton = page.locator("[data-qa=profile-cancel-button]");
    };

    async fillFirstNameField(firstName: string) {
        await this.firstNameField.fill(firstName);
    }; 

    async fillLastNameField(lastName: string) {
        await this.lastNameField.fill(lastName);
    };

    async fillPositionField(position: string) {
        await this.positionField.click();
        await this.page.getByRole('button', {name: position}).click();
    };

    async fillPhoneField(phone: string) {
        await this.phoneField.fill(phone);
    };

    async fillBirthdayDate(birthday: string) {
        await this.birthdayDateField.fill(birthday);
        await (await this.page.waitForSelector("text=Ok")).click();
    };

    async clickSubmitButton() {
        await this.submitButton.click();
    };

    async clickCancelButton() {
        await this.cancelButton.click();
    };
};