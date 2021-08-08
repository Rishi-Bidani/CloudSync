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
    console.log(req.body);
    console.log(req.files);
    upload(req, res, (err) => {
        if (err) {
            res.redirect(req.headers.referer + "/error.html");
            return;
        }

        if (!req.files) {
            res.redirect(req.headers.referer + "/error.html");
            return;
        } else {
            //Implement your own logic if needed. Like moving the file, renaming the file, etc.
            res.redirect(req.headers.referer);
        }
    });
    // res.status(201).end("Uploaded");
});

module.exports = router;
