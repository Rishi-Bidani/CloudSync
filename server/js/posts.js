const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const DATA_FOLDER = path.join(__dirname, "../..", "DATA");
const fsw = require("./fsWrap");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, DATA_FOLDER);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage }).any();

router.post("/data", (req, res) => {
    // The following is the middleware for formdata content
    upload(req, res, async (err) => {
        if (err) {
            res.redirect(req.headers.referer + "/error.html");
        }
        if (!req.files) {
            res.redirect(req.headers.referer + "/error.html");
        } else {
            // All req content is valid here => Perform all file based logic here
            console.log(req.body.relpath);
            console.log(req.files);
            const initialPath = req.files[0].path;
            const finalPath = path.join(req.files[0].destination, req.body.relpath);
            await fsw.move(initialPath, finalPath);
            res.json("Received File");
        }
    });
    // res.status(201).end("Uploaded");
});

module.exports = router;
