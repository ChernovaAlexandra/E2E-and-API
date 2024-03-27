import { test, expect } from "@playwright/test";
import { LoginPage } from "../../page-objects/LoginPage";
import { MyBoardsPage } from "../../page-objects/MyBoardsPage";
import { Board } from "../../page-objects/Board";

test.describe.parallel("Work with 3 Columns Board", () => {
    let loginPage: LoginPage;
    let myBoardsPage: MyBoardsPage;
    let board: Board;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        myBoardsPage = new MyBoardsPage(page);
        board = new Board(page);
        await loginPage.visitMyRetro();
        await loginPage.login("chernova3012@gmail.com", "Z0RkW6dNbi9JjAGNYs81");

        await myBoardsPage.fillNewBoardForm("Test project 123", 3, "Good - Bad - Actions");
        await myBoardsPage.clickStartRetroButton();

    await expect(page).toHaveURL(/board/);
});

test.afterEach(async ({ page }) => {
    await page.goto("/");
    const deleteButton = page.locator(".row.content > div:nth-child(2)").getByText("DELETE");
    await deleteButton.click();
    await page.getByRole("button", { name: "yes" }).click();
});


test("Add New Card in Good Column ", async ({ page }) => {
    await board.addNewCard("test content");
    const cardContent = page.locator(".row .content");
    await expect(cardContent).toHaveText("test content");
});

});