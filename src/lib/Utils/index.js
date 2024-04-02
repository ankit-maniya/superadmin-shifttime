export default class Utils {
    static async handleResponseError(response) {
        console.log("data ::1 ", response);

        if (response.type === "ERROR") {
            throw Error(response.message);
        }

        return response
    }

    static hasWindowObject() {
        return typeof window !== 'undefined';
    }

    static async logout() {
        if (this.hasWindowObject()) {
            localStorage.removeItem('currUser');
        }
    }

    static getCurrentUser() {
        if (this.hasWindowObject()) {
            return JSON.parse(window.localStorage.getItem('currUser'));
        }

        return null;
    }

    static getLocalStorage(key) {
        if (this.hasWindowObject()) {
            return localStorage.getItem(key);
        }

        return null;
    }

    static setLocalStorage(key, value) {
        if (this.hasWindowObject()) {
            localStorage.setItem(key, value);
        }
    }
}  