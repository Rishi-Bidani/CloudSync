const fs = require("fs");
const chokidar = require("chokidar");
const path = require("path");
const upload = require("./js/upload");
const { fsw, SETTINGS_FILE_PATH } = require("./js/fsWrap");

const SETTINGS_FILE = require(SETTINGS_FILE_PATH);
// Check if settings.json exists
function checkSettings() {
    if (fs.existsSync(SETTINGS_FILE_PATH)) {
        return
    } else {
        console.error("settings.json does not exist")
        process.exit()
    }
}
checkSettings()

// Check if settings and __dirname is same
console.log("PLEASE CHECK IF THE FOLLOWING MATCH, IN CASE OF ANY ERROR");
console.log("settings: ", SETTINGS_FILE.WatchFolder);
console.log("dirname: ", path.join(__dirname, "test"), "\n\n");

// const WATCHED = path.join(__dirname, "test");
const WATCHED = path.join(SETTINGS_FILE.WatchFolder)
// const UNWATCHED = ["./node_modules/*", "./ignored/*"];
const UNWATCHED = [...SETTINGS_FILE.Ignore]

// Initialize watcher.
const watcher = chokidar.watch(path.resolve(WATCHED), {
    ignored: /(^|[\/\\])\../, // ignore dotfiles
    persistent: true,
});

function main() {
    watcher
        .unwatch(UNWATCHED)
        .on("add", async (DocPath) => {
            console.log(DocPath)
            const size = await fsw.fileSize(DocPath);

            // Check file size and uplaod only if it is above 1kb
            if (parseInt(size.split("-")[0]) >= 1) {
                console.log("File", DocPath, "has been added");

                if (await fsw.findFileExists(DocPath)) {
                    try {
                        const form = await upload.createFormData(DocPath, DocPath.split(WATCHED)[1]);
                        await upload.uploadfile(form);
                    } catch (error) {
                        console.log(error)
                    }
                }
            }
        })
        .on("change", async (DocPath) => {
            if (await fsw.findFileExists(DocPath)) {
                const form = await upload.createFormData(DocPath, DocPath.split(WATCHED)[1]);
                await upload.uploadfile(form);
                // console.log(form);
            } else {
                console.log("error");
            }
            console.log("File", DocPath, "has been changed");
        })
        .on("unlink", function (DocPath) {
            console.log("File", DocPath, "has been removed");
        })
        .on("error", function (error) {
            console.error("Error happened", error);
        });
}

main();
