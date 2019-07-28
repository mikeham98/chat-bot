import axios from 'axios';
import 'babel-polyfill';

const axiosInstance = axios.create({
    baseURL: process.env.API_URL,
});

export default axiosInstance;