import { create } from 'apisauce';

const BASE_URL = "https://coding-challenge-api.aerolab.co/";

// const token = process.env.REACT_APP_TOKEN;

const api = create({
    baseURL: BASE_URL,
    headers: { 
        'Content-Type': 'application/json', 
        Accept: 'application/json', 
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU1N2I3OTA2MWMwNDAwMjE0ZmRiZDUiLCJpYXQiOjE2NDk3NjkzMzd9.IgNsYZTHuw-KHYM1dyFQeYOzDC4gvQ7hPb95SUNhEpo'
    } 
})

export default api;