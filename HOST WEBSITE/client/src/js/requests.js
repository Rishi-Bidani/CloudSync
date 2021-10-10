import axios from "axios"

const url = "http://localhost:5000/posts";

export default class Post {
    static async login(data) {
        return await axios.post(`${url}/login`, {
            data
        })
    }

    static async checkLogin(){
        return await axios.post(`${url}/check-login`)
    }
}