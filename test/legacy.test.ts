import {test} from "@playwright/test";
import {expect} from "allure-playwright";
import * as allure from "allure-js-commons";

test("allure test", async ({page}) => {
    await allure.owner("Artem Eroshenko")
    await allure.severity("Critical")
    await allure.issue("https://jira.company.com/AE-13", "AE-13")
    await allure.link("https://playwright.dev/", "Base URL")

    await allure.feature("Base Page")
    await allure.story("Get started link")

    await test.step("Open main page", async () => {
        await page.goto("https://playwright.dev/");
        await allure.attachment("text attachment", "something.txt", "text/plain")
    })
    await test.step("Click on 'Get started' link", async () => {
        await page.getByRole('link', {name: 'Get started'}).click()
    })
    await test.step("Heading should be 'Installation'", async () => {
        await expect(page.getByRole('heading', {name: 'Installation'})).toBeVisible()
    })
});
