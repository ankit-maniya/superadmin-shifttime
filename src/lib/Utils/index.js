export default class Utils {
    static async handleResponseError(response) {
        console.log("data ::1 ", response);

        if (response.type === "ERROR") {
            throw Error(response.message);
        }

        return response
    }

    static async logout() {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('currUser');
        }
    }

    static getCurrentUser() {
        if (typeof window !== 'undefined') {
            return JSON.parse(window.localStorage.getItem('currUser'));
        }

        return null;
    }

    static getLocalStorage(key) {
        if (typeof window !== 'undefined') {
            return localStorage.getItem(key);
        }

        return null;
    }

    static setLocalStorage(key, value) {
        if (typeof window !== 'undefined') {
            localStorage.setItem(key, value);
        }
    }
}  