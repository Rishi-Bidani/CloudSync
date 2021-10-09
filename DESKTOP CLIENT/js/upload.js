const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const path = require("path");
const { fsw, SETTINGS_FILE_PATH } = require("./fsWrap");;

const SETTINGS_FILE = require(SETTINGS_FILE_PATH);
const stream = async (filepath) => {
    // return new Promise((resolve, reject) => {
    //     resolve(fs.createReadStream(filepath));
    // });
    return await fs.createReadStream(filepath)
};

class Upload {
    static async createFormData(filepath, relPath) {
        let form = new FormData();
        form.append(path.basename(filepath), await stream(filepath));
        form.append("relpath", relPath);
        return form;
    }
    static async uploadfile(formData) {
        // console.log(formData);
        const formHeaders = formData.getHeaders();
        const url = "http://localhost:5000/posts/data";
        try {
            const response = await axios({
                method: "post",
                url: url,
                data: await formData,
                maxContentLength: Infinity,
                maxBodyLength: Infinity,
                headers: {
                    ...formHeaders,
                    Authorisation: SETTINGS_FILE.Token
                },
            });
            // console.log(response);
            console.log("Uploaded!");
        } catch (error) {
            console.log(error);
            fsw.errorWrite("Could Not Upload!");
        }
    }
}

module.exports = Upload;
