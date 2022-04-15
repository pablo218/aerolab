import { create } from 'apisauce';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const token = process.env.REACT_APP_TOKEN;

const api = create({
    baseURL: BASE_URL,
    headers: { 
        'Content-Type': 'application/json', 
        Accept: 'application/json', 
        Authorization: token
    } 
})

export default api;