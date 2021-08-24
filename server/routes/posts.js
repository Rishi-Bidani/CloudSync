const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const DATA_FOLDER = path.join(__dirname, "../..", "DATA");
console.log(DATA_FOLDER);

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
    upload(req, res, (err) => {
        if (err) {
            res.redirect(req.headers.referer + "/error.html");
        }
        if (!req.files) {
            res.redirect(req.headers.referer + "/error.html");
        } else {
            // All req content is valid here => Perform all file based logic here
            console.log(req.body);
            console.log(req.files);
            res.json("Received File");
        }
    });
    // res.status(201).end("Uploaded");
});

module.exports = router;
