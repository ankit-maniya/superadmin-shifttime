import sAxios from "../Axios"

export default class UserService {
    static async getUser(userId = localStorage.getItem('userId')) {
        const response = await sAxios.get(`/customers/${userId}`)
        return response.data
    }

    static async login(email, password, clientId) {
        const response = await sAxios.post(`/users/login/`, {
            email,
            password,
            clientId,
            loginWith: 0
        }, {
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        })

        console.log("response", response?.data);

        return response?.data
    }
}  