export default class KeyGen {
    constructor(len) {
        this.availableChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        this.totalChars = len;
        this.key = "";
    }

    returnKey() {
        for (let i = 0; i < this.totalChars; i++) {
            const index = Math.floor(Math.random() * this.availableChars.length);
            this.key += this.availableChars[index]
        }
        return this.key;
    }
}