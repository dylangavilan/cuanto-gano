import axios from "axios";

const BASE_URL = 'https://dolarapi.com/v1'

const api = axios.create({
    baseURL: BASE_URL
})

export default api
