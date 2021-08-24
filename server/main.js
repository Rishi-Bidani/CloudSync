const express = require("express");
const app = express();
const http = require("http").Server(app);
const path = require("path");
const cors = require("cors");

// MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

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
