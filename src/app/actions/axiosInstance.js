import axios from 'axios';
import 'babel-polyfill';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
});

export default axiosInstance;