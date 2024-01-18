import {test, expect} from "@playwright/test";

test.describe.parallel("My Boards Page", () => {
    test.beforeEach(async ({page}) => {
        await page.goto("https://myretro.school.smartup.ru/");
        await page.click(".signin");
        await page.type("#email", "chernova3012@gmail.com");
        await page.type("#password", "Z0RkW6dNbi9JjAGNYs81");
        await page.click(".button-login");
});

test("Create New Board with 3 Columns", async ({page}) => {
    await page.getByTestId("add-new-board").click();
    await page.type("[data-qa=new-board-project-name]", "Test project");
    await page.getByTestId("new-board-columns-number").click();
    await page.click("text=- 3 -");
    await page.getByTestId("new-board-column-names").click();
    await page.click("text=- 3 - Good - Bad - Actions");
    await page.getByTestId("start-retro-button").click();

    const boardTitle = page.locator("[data-qa=board-project-title]");
    await expect(boardTitle).toHaveText("Test project");
    await expect(page).toHaveURL(/board/);
}); 

test("Create New Board with 4 Columns", async ({page}) => {
    await page.getByTestId("add-new-board").click();
    await page.type("[data-qa=new-board-project-name]", "Test project 4");
    await page.getByTestId("new-board-columns-number").click();
    await page.click("text=- 4 -");
    await page.getByTestId("new-board-column-names").click();
    await page.click("text=- 4 - Good - Bad - Keep - Actions");
    await page.getByTestId("start-retro-button").click();

    const boardTitle = page.locator("[data-qa=board-project-title]");
    await expect(boardTitle).toHaveText("Test project 4");
    await expect(page).toHaveURL(/board/);
}); 

});