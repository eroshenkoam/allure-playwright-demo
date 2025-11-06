import {expect, test} from "@playwright/test";
import * as allure from "allure-js-commons";

test("simple test", async ({page}) => {

    await allure.owner("eroshenkoam");
    await allure.severity("Critical");

    await allure.issue("https://jira.com/browse/AE-1", "AE-1")
    await allure.link("https://playwright.dev", "Base URL")

    await test.step("Open main page", async () => {
        await page.goto("https://playwright.dev");
    })

    await test.step("Click on Get started button", async () => {
        await page.getByRole("link", {"name": "Get started"}).click();
    })

    await test.step("Page header should be Installation", async () => {
        await expect(page.getByRole("heading", {"name": "Installation"})).toBeVisible();
    })

});
