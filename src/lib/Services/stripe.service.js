import sAxios from "../Axios"

export default class StripeService {
    static async addProductToCart(checkOutInfo) {
        const response = await sAxios.post(`/stripe/checkout`, {
            ...checkOutInfo
        }, {
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        })

        console.log("payment response", response?.data);

        return response?.data
    }

    static async getCurrentActivePlanOfCustomer(customerId) {
        const query = `?customerId=${customerId}`
        const response = await sAxios.get(`/stripe/customer/activeplan${query}`, {
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        })

        console.log("getCurrentActivePlanOfCustomer response", response?.data);

        return response?.data
    }

    static async getAllProducts() {
        const response = await sAxios.get(`/stripe/products`)

        console.log("getAllProducts response", response?.data);

        return response?.data
    }
}