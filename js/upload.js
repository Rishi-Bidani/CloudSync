const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const path = require("path");
const files = require("./fsWrap");

const stream = (filepath) => {
    new Promise((resolve, reject) => {
        resolve(filepath);
    });
};

class Upload {
    static async createFormData(filepath) {
        let form = new FormData();
        form.append(path.basename(filepath), await stream);
        return form;
    }
    static async uploadfile(formData) {
        axios
            .post("http://localhost:5000/posts/data", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then(() => {
                console.log("uploaded!");
            })
            .catch((err) => {
                console.log(err);
                files.errorWrite("Could not Upload!!");
            });
    }
}

module.exports = Upload;
