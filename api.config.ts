import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    testDir: "tests/api", 
    timeout: 30000,
    expect: {
        timeout: 10000,
    },
    retries: 1,
    reporter: [
        ["list"],
        ["html"],
    ],

    use: {
        baseURL: "https://myretro.school.smartup.ru/api/",
        headless: true,
        actionTimeout: 10000,
        extraHTTPHeaders: {
            'Accept': "application/json;charset=UTF-8",
            'Cookie': "myretro=Fe26.2**293a9ae4447c030ee5b85f70d5185d3c2d3d4c6ba92ed81a5f3b58a341cec0e8*X70Pvck62OPWIu02yUyPHA*zXld6QfOCFCzUg3pYePq2w**f65699906fa11213c2546a8f34d40d74d543fce6c56a771a05db5718130260f1*NxWcMySDutFoJieauLbYm33wt_PVCeUBcy0qnKODiOQ",

        },
    },


};

export default config;