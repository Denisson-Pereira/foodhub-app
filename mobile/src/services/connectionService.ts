import axios from "axios"

export const URL_BASE = "http://10.0.0.206:8080"

export const connectionService = axios.create({
    baseURL: URL_BASE
});