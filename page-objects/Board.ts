import { expect, Locator, Page } from "@playwright/test";

export class Board {
    readonly page: Page;
    readonly goodButton: Locator;
    readonly cardText: Locator;

    constructor(page:Page) {
        this.page = page;
        this.goodButton = page.getByRole("button", { name: "Good" });
        this.cardText = page.locator(".row .content");
    };

    async addNewCard(textCard: string) {
        await this.goodButton.click();
        await this.cardText.type(textCard);
        await this.page.keyboard.press("Enter");
    };

};