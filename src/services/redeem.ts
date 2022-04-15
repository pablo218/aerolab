import api from "config/api";

export const getRedeems = (productId: string)=> api.post('redeem', {productId:productId} )