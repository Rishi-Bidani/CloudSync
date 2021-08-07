const fs = require("fs");
const chokidar = require("chokidar");
const path = require("path");
const files = require("./js/fsWrap");
const upload = require("./js/upload");

// Initialize watcher.
const watcher = chokidar.watch(path.resolve("."), {
    ignored: /(^|[\/\\])\../, // ignore dotfiles
    persistent: true,
});

function main() {
    watcher
        .unwatch(["./node_modules/*", "./ignored"])
        .on("add", function (DocPath) {
            console.log("File", DocPath, "has been added");
        })
        .on("change", async (DocPath) => {
            if (await files.findFileExists(DocPath)) {
                const form = await upload.createFormData(DocPath);
                await upload.uploadfile(form);
                console.log(form);
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
