import {test, expect} from "@playwright/test";

test.describe.parallel("Login and Logout", () => {
    test.beforeEach(async ({page}) => {
        await page.goto("https://myretro.school.smartup.ru/");
});


    test("Login with invalid credentials", async ({page}) => {
        await page.click(".signin");
        await page.type("#email", "wrong email");
        await page.type("#password", "wrong password");
        await page.click(".button-login");
        
        const errorMessage = page.locator("text=Error: Authentication failed: Wrong login or password");
        
        await expect(errorMessage).toContainText("Error: Authentication failed: Wrong login or password");
    });

//Positive  test
test("Login and Logout with credentials", async ({page}) => {
    await page.click(".signin");
    await page.type("#email", "chernova3012@gmail.com");
    await page.type("#password", "Z0RkW6dNbi9JjAGNYs81");
    await page.click(".button-login");

    const headerTitle = page.locator(".blueprint .header .title");
    await expect(headerTitle).toBeVisible();

    await page.click(".col .logout");

    const signinButton = page.locator(".main .signin");
    await expect(signinButton).toBeVisible();
});
});