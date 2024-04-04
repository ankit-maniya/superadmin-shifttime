import sAxios from "../Axios"
import { ROLES } from "../constant";

export default class UserService {
    static async getUser(userId = localStorage.getItem('userId')) {
        const response = await sAxios.get(`/users/${userId}`)
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

        console.log("login response", response?.data);

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

    static async updateUser(id, formData) {
        const response = await sAxios.put(`/users/${id}`, {
            ...formData
        }, {
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        })

        console.log("update user response", response?.data);

        return response?.data
    }

    static async deleteUser(id) {
        const response = await sAxios.delete(`/users/${id}`)

        console.log("Delete Response", response?.data);

        return response?.data;
    }

    static async getAllAdmin() {
        const query = `?query={"isActive": true, "role": "${ROLES.ADMIN}"}`
        const response = await sAxios.get(`/users${query}`)
        return response?.data
    }
}  