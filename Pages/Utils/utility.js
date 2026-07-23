import fs from "fs";
import path from "path";

export function generateNumber() {

    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    const hour = String(now.getHours()).padStart(2, "0");
    const minute = String(now.getMinutes()).padStart(2, "0");
    const second = String(now.getSeconds()).padStart(2, "0");

    return `AUTO-${year}${month}${day}-${hour}${minute}${second}`;
}

export function generateRandomAmount(min = 1000, max = 10000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getAllocationNumber() {
    const filePath = "./tests/resources/allocationNumber.json";


    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

    if (!Array.isArray(data) || data.length === 0) {
        throw new Error("allocationNumber.json is empty.");
    }

    return data.at(-1).AllocationNumber;
}


export class AllocationNumber {

    static async scrollDown(page) {
        await page.evaluate(() => window.scrollBy(0, 1000));
    }

    static async scrollUp(page) {
        await page.evaluate(() => window.scrollBy(0, -1000));
    }



    static async getAllocationNumber() {

        const filePath = "./tests/resources/allocationNumber.json";

        const data = JSON.parse(
            fs.readFileSync(filePath, "utf8")
        );

        return data[data.length - 1];
    }


    static async saveAllocationNumber(allocationNumber) {


        const filePath = "./tests/resources/allocationNumber.json";

        let json = [];

        if (fs.existsSync(filePath)) {

            const content = fs.readFileSync(
                filePath,
                "utf8"
            ).trim();

            if (content) {
                json = JSON.parse(content);
            }
        }


        json.push({
            AllocationNumber: allocationNumber
        });


        fs.writeFileSync(
            filePath,
            JSON.stringify(json, null, 2),
            "utf8"
        );


        return allocationNumber;
    }
}