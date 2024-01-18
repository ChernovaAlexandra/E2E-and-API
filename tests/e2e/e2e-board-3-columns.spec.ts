import { test, expect } from "@playwright/test";

test.describe.parallel("Work with 3 Columns Board", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://myretro.school.smartup.ru/");
        await page.click(".signin");
        await page.type("#email", "chernova3012@gmail.com");
        await page.type("#password", "Z0RkW6dNbi9JjAGNYs81");
        await page.click(".button-login");

        await page.getByTestId("add-new-board").click();
        await page.type("[data-qa=new-board-project-name]", "Test project123");
        await page.getByTestId("new-board-columns-number").click();
        await page.click("text=- 3 -");
        await page.getByTestId("new-board-column-names").click();
        await page.click("text=- 3 - Good - Bad - Actions");
        await page.getByTestId("start-retro-button").click();
        await expect(page).toHaveURL(/board/);
    });

    test.afterEach(async ({ page }) => {
        await page.goto("/");
        const deleteButton = page.locator(".row.content > div:nth-child(2)").getByText("DELETE");
        await deleteButton.click();
        await page.getByRole("button", {name: "yes"}).click();

    });


    test("Add New Card in Good Column ", async ({ page }) => {
        await page.getByRole("button", { name: "Good" }).click();
        await page.type(".row .content", "test content");
        await page.keyboard.press("Enter");

        const cardContent = page.locator(".row .content");
        await expect(cardContent).toHaveText("test content");

    });

});