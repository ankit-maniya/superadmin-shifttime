import sAxios from "../Axios"

export default class StripeService {
    static async addProductToCart() {
        const response = await sAxios.post(`/payment/`, {
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        })

        console.log("payment response", response?.data);

        return response?.data
    }
}