import api from "config/api";

export const postPoints = (amount: number)=> api.post('user/points', {amount});

export const getUserData = ()=> api.get('user/me');

export const getUserHistory = ()=> api.get('user/history');