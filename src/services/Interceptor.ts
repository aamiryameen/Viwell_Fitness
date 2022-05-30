import axios from 'axios';
import { BASE_URL } from './index';

let axiosInstance = axios.create({
    baseURL: `${BASE_URL}`,

});
axiosInstance.interceptors.request.use(function (config: any) {
    if (config.data) {
        config.data = JSON.stringify(config.data)
    }
    return config;
}, function (error: any) {
    return Promise.reject(error);
});
axiosInstance.interceptors.response.use(function (response: any) {
    return response;
}, function (error: any) {
    return Promise.reject(error);
});

export default axiosInstance;
