const fs = require("fs-extra");
const fsn = require("fs/promises");
const path = require("path");
const DATA_FOLDER = path.join(__dirname, "../..", "DATA");

class fsWrapper {
    static async move(file, destination) {
        try {
            if (file !== destination) {
                await fs.move(file, destination, {overwrite: true});
            }
        } catch (error) {
            console.error(error);
        }
    }

    static async getFilesAndDirs(forPath) {
        const folders = [];
        const files = [];
        const fixedpath = path.join(DATA_FOLDER, forPath);
        console.log(fixedpath)
        const read = await fsn.readdir(fixedpath, {
            withFileTypes: true,
        });
        const MB = (byteSize) => {
            return (byteSize / (1024 * 1024)).toFixed(3)
        }
        const KB = (byteSize) => {
            return (byteSize / 1024).toFixed(3)
        }
        for (const file of read) {
            if (file.isFile()) {
                const fileSizeBytes =
                    Number.parseFloat(
                        fs.statSync(path.join(fixedpath, file.name)).size
                    ).toFixed(3)
                files.push({
                    fileName: file.name,
                    fileExtension: path.extname(file.name),
                    fileSize: KB(fileSizeBytes) >= 1 ? MB(fileSizeBytes) : KB(fileSizeBytes),
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
