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