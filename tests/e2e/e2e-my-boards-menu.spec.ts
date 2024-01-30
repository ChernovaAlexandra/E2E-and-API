import {test, expect} from "@playwright/test";
import { LoginPage } from "../../page-objects/LoginPage";
import { MyBoardsPage } from "../../page-objects/MyBoardsPage";

test.describe.parallel("Boards Menu", () => {
    let loginPage: LoginPage;
    let myBoardsPage: MyBoardsPage;
    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        myBoardsPage = new MyBoardsPage(page);
        await loginPage.visitMyRetro();
        await loginPage.login("chernova3012@gmail.com", "Z0RkW6dNbi9JjAGNYs81");
});

test("Check Action Items Menu Option", async ({page}) => {
    await myBoardsPage.openActionItemsMenu();
   
    const actionItemsTitle = page.locator("[data-qa=action-items-title]");
    await expect(actionItemsTitle).toHaveText("Action Items");
    await expect(page).toHaveURL("https://myretro.school.smartup.ru/action_items");
}); 

test("Check Mentions Menu Option", async ({page}) => {
    await myBoardsPage.openMentionsMenu();
   
    const mentionsTitle = page.locator("[data-qa=mentions-title]");
    await expect(mentionsTitle).toHaveText("Mentions");
    await expect(page).toHaveURL("https://myretro.school.smartup.ru/mentions");
}); 
});