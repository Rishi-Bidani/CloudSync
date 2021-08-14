const fs = require("fs");
const path = require("path");

class FSWrapper {
    static async findFileExists(filePath) {
        if (fs.existsSync(filePath)) {
            return true;
        } else {
            await FSWrapper.errorWrite(`${filePath} does not exist\n`);
            return false;
        }
    }
    static async errorWrite(message) {
        await fs.promises.appendFile(path.resolve("ignored", "err.txt"), message);
        return;
    }
    static async fileSize(filepath) {
        const MB = 1024 ** 2;
        const fileStat = await fs.promises.stat(filepath);
        const sizeToReturn =
            fileStat.size / MB > 1 ? fileStat.size / MB + "-mb" : fileStat.size + "-kb";
        return sizeToReturn;
    }
}

module.exports = FSWrapper;
