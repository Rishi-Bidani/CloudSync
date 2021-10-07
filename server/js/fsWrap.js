const fs = require("fs-extra");
const fsn = require("fs/promises");
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
        const read = await fsn.promises.readdir(fixedpath, {
            withFileTypes: true,
        });
        for (const file of read) {
            if (file.isFile()) {
                files.push({
                    fileName: file.name,
                    fileExtension: path.extname(file.name),
                    fileSize: Number.parseFloat(parseFloat(fsn.statSync(path.join(fixedpath, file.name)).size / 1024).toFixed(3),
                });
            } else if (file.isDirectory()) {
                folders.push(file.name);
            } else {
                console.log("NEITHER FILE NOR FOLDER")
            }
        }
        return {
            folders,
            files
        }
    }
}

module.exports = fsWrapper;
