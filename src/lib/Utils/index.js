export default class Utils {
    static async handleResponseError(response) {
        console.log("data ::1 ", response);

        if (response.type === "ERROR") {
            throw Error(response.message);
        }

        return response
    }

    static getCurrentUser() {
        return JSON.parse(localStorage.getItem('currUser'));
    }

    static getLocalStorage(key) {
        return localStorage.getItem(key);
    }

    static setLocalStorage(key, value) {
        localStorage.setItem(key, value);
    }
}  