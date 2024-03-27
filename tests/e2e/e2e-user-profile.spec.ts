import {test, expect} from "@playwright/test";
import { LoginPage } from "../../page-objects/LoginPage";
import { MyBoardsPage } from "../../page-objects/MyBoardsPage";
import { Profile } from "../../page-objects/components/Profile";


test.describe.parallel("User Profile", () => {
    let loginPage: LoginPage;
    let myBoardsPage: MyBoardsPage;
    let profile: Profile;

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        myBoardsPage = new MyBoardsPage(page);
        profile = new Profile(page);
        await loginPage.visitMyRetro();
        await loginPage.login("chernova3012@gmail.com", "Z0RkW6dNbi9JjAGNYs81");
});

test("Change First Name and Cancel", async ({page}) => {
    await myBoardsPage.openProfileMenu();
    await profile.fillFirstNameField("Cancel first name"); 
    await profile.clickCancelButton();
    await myBoardsPage.openProfileMenu();
    
    const firstNameField = page.locator("#first-name");
    await expect(firstNameField).not.toHaveValue("Cancel first name");
});


test("Change First Name and Submit", async ({page}) => {
    await myBoardsPage.openProfileMenu();
    await profile.fillFirstNameField("Submit first name");
    await profile.clickSubmitButton();
    await myBoardsPage.openProfileMenu();

    const firstNameField = page.locator("#first-name");
    await expect(firstNameField).toHaveValue("Submit first name");
});

test("Check Email Field", async ({page}) => {
    await myBoardsPage.openProfileMenu();

    const email = page.locator("#email");
    await expect(email).toHaveValue("chernova3012@gmail.com");
});


test("Change Position and Submit", async ({page}) => {
    await myBoardsPage.openProfileMenu();
    await profile.fillPositionField("product owner");
    await profile.clickSubmitButton();
    await myBoardsPage.openProfileMenu();
    
    const position = page.locator(".md-select-value[name=position-id]");
    await expect(position).toHaveValue("product owner");
});

test("Change Work Experience and Submit", async ({page}) => {
    await myBoardsPage.openProfileMenu();
    await page.fill("#workExperience", "11");
    await profile.clickSubmitButton();
    await myBoardsPage.openProfileMenu();

    const experience = page.locator("#workExperience");
    await expect(experience).toHaveValue("11");
});

test.only("Change Birthday and Submit", async ({page}) => {
    await myBoardsPage.openProfileMenu();
    
    await page.fill(".field-birthday .md-input", "2000-09-28");
    await (await page.waitForSelector("text=Ok")).click();

    await profile.clickSubmitButton();
    await myBoardsPage.openProfileMenu();

    const birthdayDate = page.locator(".field-birthday .md-input");
    await expect(birthdayDate).toHaveValue("2000-09-28");
}); 


test("Change Last Name and Cancel", async ({page}) => {
    await myBoardsPage.openProfileMenu();
    await profile.fillLastNameField("Cancel last name");
    await profile.clickCancelButton();
    await myBoardsPage.openProfileMenu();
    
    const lastNameField = page.locator("#last-name");
    await expect(lastNameField).not.toHaveValue("Cancel last name");
});

test("Change Last Name and Submit", async ({page}) => {
    await myBoardsPage.openProfileMenu();
    await profile.fillLastNameField("Submit last name");
    await profile.clickSubmitButton();
    await myBoardsPage.openProfileMenu();

    const lastNameField = page.locator("#last-name");
    await expect(lastNameField).toHaveValue("Submit last name");
});

test("Change Phone and Cancel", async ({page}) => {
    await myBoardsPage.openProfileMenu();
    await profile.fillPhoneField("88005553535");
    await profile.clickCancelButton();
    await myBoardsPage.openProfileMenu();
    
    const phoneField = page.locator("#phone");
    await expect(phoneField).not.toHaveValue("88005553535");
});

test("Change Phone and Submit", async ({page}) => {
    await myBoardsPage.openProfileMenu();
    await profile.fillPhoneField("98887776655")
    await profile.clickSubmitButton();
    await myBoardsPage.openProfileMenu();

    const phoneField = page.locator("#phone");
    await expect(phoneField).toHaveValue("98887776655");
});
});

