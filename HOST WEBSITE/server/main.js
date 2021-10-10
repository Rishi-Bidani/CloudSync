const express = require("express");
const app = express();
const http = require("http").Server(app);
const path = require("path");
const cors = require("cors");
const session = require("express-session");
require('dotenv').config({path: path.join(__dirname, ".env")});
// MiddleWare
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

const {NODE_ENV, SESS_SECRET, SESS_NAME} = process.env;
const IN_PROD = NODE_ENV === "production";
const SESS_LIFETIME = 1000 * 60 * 60 * 2 // Two Hours
const sessionObject = {
    name: SESS_NAME,
    resave: false,
    saveUninitialized: false,
    secret: SESS_SECRET,
    cookie: {
        maxAge: SESS_LIFETIME,
        sameSite: true,
        secure: IN_PROD,
    },
};
// Use the session configurations
app.use(session(sessionObject))

// Any posts requests will be handled by the following file
const posts = require("./js/posts");
app.use("/posts", posts);

app.use(express.static(path.join(__dirname, "public")));

app.get("/.*/", (req, res) => {
    // res.send("Hello World");
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

const port = process.env.PORT || 5000;
http.listen(port, () => {
    console.log("Website live on: " + `http://localhost:${port}`);
});
