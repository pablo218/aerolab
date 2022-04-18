import api from "config/api";

export const postRedeems = (productId: string)=> api.post('redeem', {productId:productId} )