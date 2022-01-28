import axios from 'axios';
import { GetUserLocalStorage } from '../context/AuthProvider/util';

export const Api = axios.create({
    baseURL : 'http://grc.greendocs.net/'
})

export const ApiAuth = axios.create({
    baseURL : 'http://grcauth.greendocs.net/api/'
})

Api.interceptors.request.use(
    function (config) {
        const user = GetUserLocalStorage();

        //config.headers.Authorization = user.token;

    return config;
    }, function (error) {
        return Promise.reject(error);
});