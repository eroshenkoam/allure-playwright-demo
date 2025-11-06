import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  timeout: 5000,
  testDir: "./test",
  reporter: [
    ["list"],
    ["allure-playwright", {
      resultsDir: "allure-results",
    }]
  ],
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
  outputDir: "test-results/",
};

export default config;
