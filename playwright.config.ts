import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
    timeout: 30000,
    expect: {
        timeout: 5000,
    },
    retries: 1,
    reporter: [
        ["list"],
        ["html"],
    ],

    use: {
        baseURL: "https://myretro.school.smartup.ru/",
        headless: false,
        viewport: {width: 1280, height: 720},
        actionTimeout: 5000,
        video: "retain-on-failure",
        screenshot: "only-on-failure",
    },

    projects: [
        {
            name: "chromium",
            use: { ...devices["Desktop Chrome"]},
        },
        {
            name: "firefox",
            use: { ...devices["Desktop Firefox"]},
        },
        {
            name: "webkit",
            use: { ...devices["Desktop Safari"]},
        },
    ],
};

export default config;