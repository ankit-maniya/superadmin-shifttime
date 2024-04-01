import sAxios from "../Axios"

export default class UserService {
    static async getUser(userId = localStorage.getItem('userId')) {
        const response = await sAxios.get(`/customers/${userId}`)
        return response.data
    }

    static async login(formData) {
        const response = await sAxios.post(`/users/login/`, {
            ...formData,
            loginWith: 0
        }, {
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        })

        console.log("response", response?.data);

        return response?.data
    }

    static async signup(formData) {
        const response = await sAxios.post(`/users/signup/`, {
            ...formData
        }, {
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        })

        console.log("signup response", response?.data);

        return response?.data
    }
}  