import axios from "axios";
import { BACKEND_URL } from "../configs";
import Utils from "../Utils";

const sAxios = axios.create({   
    baseURL: BACKEND_URL,
});


sAxios.interceptors.request.use(async (config) => {
    if (Utils.getCurrentUser()) {
        const token = Utils.getCurrentUser()?.token;
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

sAxios.interceptors.response.use((response) => {
    return response;
}, async (error) => {
    let response = {};
    
    if(error?.response?.data) {
        response = error.response.data;
    }

    await Utils.handleResponseError(response);
});

export default sAxios