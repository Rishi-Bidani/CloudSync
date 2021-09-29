const fs = require("fs");
const { stat } = require("fs/promises");
const path = require("path");
const DATA_FOLDER = path.join(__dirname, "../..", "DATA");

class fsWrapper {
    static async move(file, destination) {
        try {
            await fs.move(file, destination, { overwrite: true });
        } catch (error) {
            console.error(error);
        }
    }

    static async getFilesAndDirs(forPath) {
        const folders = [];
        const files = [];
        const fixedpath = path.join(DATA_FOLDER, forPath);
        console.log(fixedpath)
        const read = await fs.promises.readdir(fixedpath, {
            withFileTypes: true,
        });
        for (const file of read) {
            if (file.isFile()) {
                files.push({
                    fileName: file.name,
                    fileExtension: path.extname(file.name),
                    fileSize: Number.parseFloat(fs.statSync(path.join(forPath, file.name)).size / 1024).toFixed(3),
                });
            } else if (file.isDirectory()) {
                folders.push(file.name);
            }
        }
        return {
            folders,
            files
        }
    }
}

module.exports = fsWrapper;
