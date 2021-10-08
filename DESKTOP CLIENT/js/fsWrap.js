const fs = require("fs-extra");
const path = require("path");

const HomeDir =
    process.env.APPDATA ||
    (process.platform == "darwin"
        ? process.env.HOME + "/Library/Preferences"
        : process.env.HOME + "/.local/share");
const ERROR_FILE = path.join(HomeDir, "CloudSync", "err.txt");
const SETTINGS_FILE_PATH = path.join(HomeDir, "CloudSync", "settings.json");

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
        try {
            await fs.ensureFile(ERROR_FILE);
            const logStream = fs.createWriteStream(ERROR_FILE, { flags: "a" });
            logStream.write(`${new Date().toString()} ${message}\n`);
            logStream.end("");
        } catch (error) {
            logStream.write(`${new Date().toString()} + ${error}\n`);
            logStream.end("");
        }
    }
    static async fileSize(filepath) {
        const MB = 1024 ** 2;
        const fileStat = await fs.promises.stat(filepath);
        const sizeToReturn =
            fileStat.size / MB > 1 ? fileStat.size / MB + "-mb" : fileStat.size + "-kb";
        return sizeToReturn;
    }
}

module.exports = {
    fsw: FSWrapper,
    SETTINGS_FILE_PATH
};
