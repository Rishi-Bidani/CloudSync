const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const DATA_FOLDER = path.join(__dirname, "../..", "DATA");
const fsw = require("./fsWrap");
const fsWrapper = require("./fsWrap");
require('dotenv').config({path: path.join(__dirname, "..", ".env")})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, DATA_FOLDER);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({storage: storage}).any();

const checkToken = async (req, res, next) => {
    const token = process.env.TOKEN;
    const {authorisation} = req.headers;
    if (token === authorisation) {
        next()
    } else {
        res.status(403).end()
    }
}

router.post("/data", checkToken, (req, res) => {
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

router.post("/dirs", async (req, res) => {
    const forPath = req.body.dir;
    console.log(forPath)
    const filesAndFolders = await fsWrapper.getFilesAndDirs(forPath);
    res.json(filesAndFolders)
})

router.post("/downloadfile", (req, res) => {
    const {relPath} = req.body;
    console.log(relPath)
    const fullPath = path.join(DATA_FOLDER, relPath);
    res.sendFile(fullPath, err => {
        if (err) {
            console.log(err)
        }
    })

})
module.exports = router;
