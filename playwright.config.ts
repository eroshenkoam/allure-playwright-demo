import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  timeout: 5000,
  testDir: "./test",
  reporter: [
    ["list"],
    ["html", { outputFolder: "./playwright-report" }],
    [
      "allure-playwright",
      {
        outputFolder: "./out/allure-results",
        environmentInfo: {
          node_version: process.version,
        },
      },
    ],
  ],
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
};

export default config;
