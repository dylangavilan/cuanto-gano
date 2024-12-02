import axios from "axios";

const BASE_URL = 'https://dolarapi.com/v1'

const api = axios.create({
    baseURL: BASE_URL
})

export default api

const bcraApi = axios.create({
    baseURL: 'https://api.estadisticasbcra.com',
    headers:{
        Authorization: 
        `BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjQ1NDI4MzEsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJkeWxhbi5nYXZpbGFuMzJAZ21haWwuY29tIn0.h7dfMvdAMJoCdNb273YVOAsBCWVk8AVn-Z2ofZfTr-1w5Z1w82-P1C8Ti1WOsJHVePIE_5CRRXaVe4gyO8N20w`

    }
})