import { test, expect } from '@playwright/test';
    
    
test.describe("PXL SID-in", () => {

    test.beforeEach(async ({page}) => {
        await page.goto("https://www.pxl.be/toekomstige-studenten/studie-kiezen/studie-informatiedagen-sid-in/");
    });

    test("Page has correct title", async ({page})=> {
         await expect(page).toHaveTitle("SID-in | Hogeschool PXL");
    });

    test("Page contains string Sid-in Genk", async ({page}) => {
        await expect(page.locator("body")).toContainText("Sid-in Genk");
    });
    
    
    test("Page has a working link named sid-in Genk", async ({page}) => {
        const link = page.getByRole("link", {name: "sid-in Genk"});

        await expect(link).toBeVisible();
        const responsePromise = page.waitForResponse(resp => 
            resp.url().toLowerCase().includes("genk"));
        
        await link.click();
        const resp = await responsePromise;
        expect(resp.ok()).toBeTruthy();

    });

    test("Zaterdag 31 januari 2026 is visible on page", async ({page}) => {
        await expect(page.getByText(/zaterdag 31 januari 2026/i)).toBeVisible();
    });
   
});