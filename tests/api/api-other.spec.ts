import {test, expect } from "@playwright/test";

test.describe.parallel("Other API endpoints testing", () => {
    
    test("Get info about user", async ({request}) => {
        const response = await request.get("me");
       
        const responseBody = JSON.parse(await response.text());
        console.log(responseBody);

        expect(response.status()).toBe(200);
        expect(responseBody.id).toBe(23);
        expect(responseBody.username).toBe("chernova3012");
        expect(responseBody.email).toBe("chernova3012@gmail.com");
        expect(responseBody.position.id).toBe(1);
    }); 

    test("Return template of board parameters", async ({request}) => {
        const response = await request.get("templates");

        const responseBody = JSON.parse(await response.text());
        console.log(responseBody);
        console.log(responseBody[0].columns);

        expect(response.status()).toBe(200);
        expect(responseBody[0].id).toBe(1);
        expect(responseBody[0].columns[0].name).toBe("Good");
    
    });
});