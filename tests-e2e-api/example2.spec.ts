import {test, expect} from "@playwright/test";

test ("Check page title", async ({page}) => {
    await page.goto("https://example.com/");
    const pageTitle = page.locator("h1");
    await expect(pageTitle).toContainText("Example Domain");
});

test("Клики @tag1", async ({page}) => {
    await page.goto("https://myretro.school.smartup.ru/");
    await page.click(".signin");
    await page.click(".button-login");
    
    const errorMessage = page.locator("text=Error: Authentication failed: Wrong login or password");

    await expect(errorMessage).toContainText("Error: Authentication failed: Wrong login or password");
});


test.skip("Селекторы", async({page}) => {
    await page.click("tittle");
    await page.click("#id123");
    await page.click(".class123");
    await page.click("[data-qa=login-submit-button]");
    await page.click(".button-content .md-button.button-login");
    await page.click(".class123:visible");
    await page.click("text=some text");
    await page.click("//button");
});



test.describe.parallel("Первый тестовый набор", () => {
    test.beforeEach(async ({page}) => {
        await page.goto("https://myretro.school.smartup.ru/");
});


    test("Ввод данных", async ({page}) => {
        //await page.goto("https://myretro.school.smartup.ru/");
        await page.click(".signin");
        await page.type("#email", "wrong email");
        await page.type("#password", "wrong password");
        await page.click(".button-login");
        
        const errorMessage = page.locator("text=Error: Authentication failed: Wrong login or password");
        
        await expect(errorMessage).toContainText("Error: Authentication failed: Wrong login or password");
    });
    
    test("Ассерты @tag1", async ({page}) => {
        //await page.goto("https://myretro.school.smartup.ru/");
        await expect(page).toHaveURL("https://myretro.school.smartup.ru/");
        await expect(page).toHaveTitle("MyRetro");
    
        const logo = page.locator(".logo");
        await expect(logo).toBeVisible();
        await expect(logo).toHaveText("MyRetro");
        
        const signInDialog = page.locator(".dialog");
        await expect(signInDialog).not.toBeVisible();
    });
});


test("Смена языка", async ({page}) => {
    await page.goto("https://myretro.school.smartup.ru/");
    await page.click("[data-testid=lang-switcher-to-ru]");

    const signin = page.locator(".signin");
    await expect(signin).toContainText("Войти");
    const buttonSupport = page.locator(".row .button.support");
    await expect(buttonSupport).toContainText("Поддержка");
    const buttonFeedback = page.locator(".row > div > a:nth-child(2)");
    await expect(buttonFeedback).toContainText("Оставить отзыв");

    const buttonRU = page.locator(".active");
    await expect(buttonRU).toContainText("RU");
});





