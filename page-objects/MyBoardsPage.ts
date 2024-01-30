import { expect, Locator, Page } from "@playwright/test";

export class MyBoardsPage {
    readonly page: Page;
    readonly addNewBoardButton: Locator;
    readonly projectNameField: Locator;
    readonly columnsNumberField: Locator;
    readonly columnsNamesField: Locator;
    readonly startRetroButton: Locator;
    readonly hamburgerCheckbox: Locator;
    readonly profileMenu: Locator;
    readonly actionItemsMenu: Locator;
    readonly mentionsMenu: Locator;

    constructor(page:Page) {
        this.page = page;
        this.addNewBoardButton = page.getByTestId("add-new-board");
        this.projectNameField = page.locator("[data-qa=new-board-project-name]");
        this.columnsNumberField = page.getByTestId("new-board-columns-number");
        this.columnsNamesField = page.getByTestId("new-board-column-names");
        this.startRetroButton = page.getByTestId("start-retro-button");
        this.hamburgerCheckbox = page.locator(".hamburger-checkbox");
        this.profileMenu = page.getByTestId("profile-option");
        this.actionItemsMenu = page.getByTestId("action-items-option");
        this.mentionsMenu = page.getByTestId("mentions-option");
    };

    async fillNewBoardForm(projectName: string, columnsNumber: number, columnsName: string) {
        await this.addNewBoardButton.click();
        await this.projectNameField.type(projectName);
        await this.columnsNumberField.click();
        await this.page.click("text=- " + (columnsNumber) + " -");
        await this.columnsNamesField.click();
        await this.page.click("text=- " + (columnsNumber) + " - " + (columnsName));
    };

    async clickStartRetroButton() {
        await this.startRetroButton.click();
    };

    async openProfileMenu() {
        await this.hamburgerCheckbox.click();
        await this.profileMenu.click();
    };
    
    async openActionItemsMenu() {
        await this.hamburgerCheckbox.click();
        await this.actionItemsMenu.click();
    };

    async openMentionsMenu() {
        await this.hamburgerCheckbox.click();
        await this.mentionsMenu.click();
    };
};