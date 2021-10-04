import axios from "axios";
// const path = require("path");
const url = "http://localhost:5000/posts";

export default class RequestFiles {
  static async getFilesandFolders(forPath) {
    const data = await axios.post(`${url}/dirs`, {
      dir: forPath,
    });
    return data;
  }
}
