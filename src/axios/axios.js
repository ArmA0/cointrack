import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://pro-api.coingecko.com/api/v3/'
})