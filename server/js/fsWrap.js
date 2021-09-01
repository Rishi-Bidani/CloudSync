const fs = require("fs-extra");

class fsWrapper {
    static async move(file, destination) {
        try {
            await fs.move(file, destination, { overwrite: true });
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = fsWrapper;
