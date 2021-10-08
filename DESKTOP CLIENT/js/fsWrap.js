const fs = require("fs-extra");
const path = require("path");

const HomeDir =
    process.env.APPDATA ||
    (process.platform == "darwin"
        ? process.env.HOME + "/Library/Preferences"
        : process.env.HOME + "/.local/share");
const ERROR_FILE = path.join(HomeDir, "CloudSync", "err.txt");
const SETTINGS_FILE = path.join(HomeDir, "CloudSync", "settings.json");

// Create settings.json if it doesn't exist
async function createSettingsJson() {
    const settings = {
        watchFolder: "",
        ignoreFiles: ["", ""],
        token: "",
    }
    try {
        await fs.ensureFile(SETTINGS_FILE)
        await fs.writeJSON(SETTINGS_FILE, settings, {
            spaces: "\t",
            EOL: "\n"
        })
    } catch (error) {
        console.log(error)
    }
}
createSettingsJson()

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

module.exports = FSWrapper;
