import axios from "axios";
const path = require("path");
const url = "post";

export default class RequestFiles {
    static async getFilesandFolders(forPath) {
        const data = await axios.post(`${url}/dirs`, {
            dir: forPath
        });
        console.log(data);
        return data
    }
}