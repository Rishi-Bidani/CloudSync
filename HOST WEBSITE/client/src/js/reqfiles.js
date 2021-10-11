import axios from "axios";
// const path = require("path");
const url = "http://localhost:5000/posts";

export default class RequestFiles {
    static async getFilesandFolders(forPath, sessionId) {
        const data = await axios.post(`${url}/dirs`, {
            dir: forPath,
            sessionId: sessionId
        });
        return data;
    }

    static async reqFileDownload(fileName, relPath, sessionId) {
        const response =
            await axios.post(
                `${url}/downloadfile`, {
                    relPath,
                    sessionId
                }, {
                    headers: {
                        Authorisation: "token"
                    },
                    responseType: "arraybuffer"
                })
        try {
            const blob = new Blob([response.data]);
            const link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.download = fileName;
            link.click();
        } catch (err) {
            console.log(err)
        }

    }
}
