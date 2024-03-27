import { test, expect } from "@playwright/test";
import { LoginPage } from "../../page-objects/LoginPage";

test.describe.parallel("Login and Logout", () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.visitMyRetro();
    });

    test("Login with invalid credentials", async ({ page }) => {
        await loginPage.login("wrong email", "wrong password");
        await loginPage.assertErrorMessage();
    });

    //Positive  test
    test("Login and Logout with credentials", async ({ page }) => {
        await loginPage.login("chernova3012@gmail.com", "Z0RkW6dNbi9JjAGNYs81");

        const headerTitle = page.locator(".blueprint .header .title");
        await expect(headerTitle).toBeVisible();

        await page.click(".col .logout");

        const signinButton = page.locator(".main .signin");
        await expect(signinButton).toBeVisible();
    });
});