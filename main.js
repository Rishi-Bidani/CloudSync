const fs = require("fs");
const chokidar = require("chokidar");
const path = require("path");

// Initialize watcher.
const watcher = chokidar.watch(path.resolve("."), {
    ignored: /(^|[\/\\])\../, // ignore dotfiles
    persistent: true,
});

watcher
    .unwatch(["./node_modules/*"])
    .on("add", function (DocPath) {
        console.log("File", DocPath, "has been added");
    })
    .on("change", function (DocPath) {
        console.log("File", DocPath, "has been changed");
    })
    .on("unlink", function (DocPath) {
        console.log("File", DocPath, "has been removed");
    })
    .on("error", function (error) {
        console.error("Error happened", error);
    });
