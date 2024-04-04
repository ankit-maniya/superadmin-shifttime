import sAxios from "../Axios"
import { ROLES } from "../constant"

export default class AdminService {

    static async getAllAdmin() {
        const query = `?query={"isActive": true, "role": "${ROLES.ADMIN}"}`
        const response = await sAxios.get(`/users${query}`)
        return response?.data
    }
}  