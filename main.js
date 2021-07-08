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
    .on("change", function (path) {
        console.log("File", path, "has been changed");
    })
    .on("unlink", function (path) {
        console.log("File", path, "has been removed");
    })
    .on("error", function (error) {
        console.error("Error happened", error);
    });
