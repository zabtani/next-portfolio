import axios from 'axios';
import type { AxiosRequestConfig, AxiosInstance } from 'axios';
export const BE_URL = 'http://127.0.0.1:8000/portfolio/';
const SERVER_CONFIG: AxiosRequestConfig = { baseURL: BE_URL };
const INSTANCE = axios.create(SERVER_CONFIG);
const REQUEST: AxiosInstance = INSTANCE;
export default REQUEST;
