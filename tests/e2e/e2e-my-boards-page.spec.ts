import {test, expect} from "@playwright/test";
import { LoginPage } from "../../page-objects/LoginPage";
import { MyBoardsPage } from "../../page-objects/MyBoardsPage";

test.describe.parallel("My Boards Page", () => {
    let loginPage: LoginPage;
    let myBoardsPage: MyBoardsPage;

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        myBoardsPage = new MyBoardsPage(page);
        await loginPage.visitMyRetro();
        await loginPage.login("chernova3012@gmail.com", "Z0RkW6dNbi9JjAGNYs81");
});

test("Create New Board with 3 Columns", async ({page}) => {
    await myBoardsPage.fillNewBoardForm("Test project", 3, "Good - Bad - Actions");
    await myBoardsPage.clickStartRetroButton();

    const boardTitle = page.locator("[data-qa=board-project-title]");
    await expect(boardTitle).toHaveText("Test project");
    await expect(page).toHaveURL(/board/);
}); 

test("Create New Board with 4 Columns", async ({page}) => {
    await myBoardsPage.fillNewBoardForm("Test project 4", 4, "Good - Bad - Keep - Actions");
    await myBoardsPage.clickStartRetroButton();

    const boardTitle = page.locator("[data-qa=board-project-title]");
    await expect(boardTitle).toHaveText("Test project 4");
    await expect(page).toHaveURL(/board/);
}); 

});