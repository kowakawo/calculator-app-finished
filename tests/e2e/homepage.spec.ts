import { test, expect } from '@playwright/test';


test.describe("PXL Homepage", () => {

    test.beforeEach(async ({page}) => {
        await page.goto("https://www.hogeschoolpxl.be/");
    });

    test("contains Socials", async ({page}) => {
        await expect (page.locator("body")).toContainText("Socials");
    });

      
    test("Sid-in link returns OK response", async ({page}) => {

        const sidInLink = page.getByRole("link", {name: "SID-in"});

        const responsePromise = page.waitForResponse(response => 
            response.url().includes("https://www.pxl.be/toekomstige-studenten/studie-kiezen/studie-informatiedagen-sid-in/"));

        await sidInLink.click();

        const response = await responsePromise;

        expect(response.ok()).toBeTruthy();
    });



});
