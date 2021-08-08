const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const path = require("path");
const files = require("./fsWrap");

const stream = (filepath) => {
    return new Promise((resolve, reject) => {
        resolve(fs.createReadStream(filepath));
    });
};

class Upload {
    static async createFormData(filepath) {
        let form = new FormData();
        form.append(path.basename(filepath), await stream(filepath));
        return form;
    }
    static async uploadfile(formData) {
        console.log(formData);
        const formHeaders = formData.getHeaders();
        axios
            .post("http://localhost:5000/posts/data", formData, {
                headers: {
                    ...formHeaders,
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
