import axios,{AxiosRequestConfig} from 'axios';
import { GetUserLocalStorage } from '../context/AuthProvider/util';

export const Api = axios.create({
    baseURL : 'http://grc.greendocs.net/api/'
})

export const ApiAuth = axios.create({
    baseURL : 'http://grcauth.greendocs.net/'
})

Api.interceptors.request.use(
    function (config: AxiosRequestConfig) {
        const user = GetUserLocalStorage();

        if (config.headers === undefined) {
            config.headers = {};
        }

        config.headers.Authorization = `Bearer ${user.token}`;
        config.headers.scope = 'greendocs';

        return config;
    }, 
    function (error) {
        return Promise.reject(error);
});