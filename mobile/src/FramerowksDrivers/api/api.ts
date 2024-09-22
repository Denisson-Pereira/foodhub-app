import axios from "axios";

export const api = axios.create({
    baseURL: 'http://10.0.0.206:8080',
    headers: { 'Content-Type': 'application/json' }
});