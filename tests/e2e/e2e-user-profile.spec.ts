import {test, expect} from "@playwright/test";

test.describe.parallel("User Profile", () => {
    test.beforeEach(async ({page}) => {
        await page.goto("https://myretro.school.smartup.ru/");
        await page.click(".signin");
        await page.type("#email", "chernova3012@gmail.com");
        await page.type("#password", "Z0RkW6dNbi9JjAGNYs81");
        await page.click(".button-login");
});

test("Change First Name and Cancel", async ({page}) => {
    await page.click(".hamburger-checkbox");
    //await page.click("[data-qa=profile-option]");
    await page.getByTestId("profile-option").click();
    
    const firstNameField = page.locator("#first-name");
    //await page.type("#first-name", "Cancel first name");

    await firstNameField.fill("Cancel first name");

    await page.click("[data-qa=profile-cancel-button]");
    await page.click(".hamburger-checkbox");
    await page.getByTestId("profile-option").click();

    await expect(firstNameField).not.toHaveValue("Cancel first name");
});


test("Change First Name and Submit", async ({page}) => {
    await page.click(".hamburger-checkbox");
    await page.getByTestId("profile-option").click();
    
    const firstNameField = page.locator("#first-name");
    await firstNameField.fill("Submit first name");

    await page.click("[data-qa=profile-submit-button]");
    await page.click(".hamburger-checkbox");
    await page.getByTestId("profile-option").click();

    await expect(firstNameField).toHaveValue("Submit first name");
});

test("Check Email Field", async ({page}) => {
    await page.click(".hamburger-checkbox");
    await page.getByTestId("profile-option").click();
    
    const email = page.locator("#email");
    await expect(email).toHaveValue("chernova3012@gmail.com");
});


test("Change Position and Submit", async ({page}) => {
    await page.click(".hamburger-checkbox");
    await page.getByTestId("profile-option").click();
    await page.click(".md-select-value[name=position-id]");
    await page.getByRole('button', {name: 'product owner'}).click();

    await page.click("[data-qa=profile-submit-button]");
    await page.click(".hamburger-checkbox");
    await page.getByTestId("profile-option").click();

    const position = page.locator(".md-select-value[name=position-id]");
    await expect(position).toHaveValue("product owner");
});

test("Change Work Experience and Submit", async ({page}) => {
    await page.click(".hamburger-checkbox");
    await page.getByTestId("profile-option").click();
    await page.fill("#workExperience", "11");
    
    await page.click("[data-qa=profile-submit-button]");
    await page.click(".hamburger-checkbox");
    await page.getByTestId("profile-option").click();

    const experience = page.locator("#workExperience");
    await expect(experience).toHaveValue("11");
});

test("Change Birthday and Submit", async ({page}) => {
    await page.click(".hamburger-checkbox");
    await page.getByTestId("profile-option").click();
    await page.fill(".field-birthday .md-input", "2000-09-22");

    (await page.waitForSelector("text=Ok")).click();

    await page.click("[data-qa=profile-submit-button]");
    await page.click(".hamburger-checkbox");
    await page.getByTestId("profile-option").click();

    const birthdayDate = page.locator(".field-birthday .md-input");
    await expect(birthdayDate).toHaveValue("2000-09-22");
}); 


test("Change Last Name and Cancel", async ({page}) => {
    await page.click(".hamburger-checkbox");
    await page.getByTestId("profile-option").click();
    
    const lastNameField = page.locator("#last-name");
    await lastNameField.fill("Cancel last name");

    await page.click("[data-qa=profile-cancel-button]");
    await page.click(".hamburger-checkbox");
    await page.getByTestId("profile-option").click();

    await expect(lastNameField).not.toHaveValue("Cancel last name");
});

test("Change Last Name and Submit", async ({page}) => {
    await page.click(".hamburger-checkbox");
    await page.getByTestId("profile-option").click();
    
    const lastNameField = page.locator("#last-name");
    await lastNameField.fill("Submit last name");

    await page.click("[data-qa=profile-submit-button]");
    await page.click(".hamburger-checkbox");
    await page.getByTestId("profile-option").click();

    await expect(lastNameField).toHaveValue("Submit last name");
});

test("Change Phone and Cancel", async ({page}) => {
    await page.click(".hamburger-checkbox");
    await page.getByTestId("profile-option").click();

    const phoneField = page.locator("#phone");
    await phoneField.fill("88005553535");

    await page.click("[data-qa=profile-cancel-button]");
    await page.click(".hamburger-checkbox");
    await page.getByTestId("profile-option").click();
    
    await expect(phoneField).not.toHaveValue("88005553535");
});

test("Change Phone and Submit", async ({page}) => {
    await page.click(".hamburger-checkbox");
    await page.getByTestId("profile-option").click();

    const phoneField = page.locator("#phone");
    await phoneField.fill("98887776655");

    await page.click("[data-qa=profile-submit-button]");
    await page.click(".hamburger-checkbox");
    await page.getByTestId("profile-option").click();
    
    await expect(phoneField).toHaveValue("98887776655");
});
});

