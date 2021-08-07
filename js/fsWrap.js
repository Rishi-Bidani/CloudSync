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
        await fs.promises.appendFile(path.resolve("../ignored", "err.txt"), message);
        return;
    }
}

module.exports = FSWrapper;
