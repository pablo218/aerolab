export interface Product   {
    _id: string,
    name: string,
    cost: number,
    category: string,
    img: {
      url: string,
      hdUrl: string
    }
}

export interface UserData {
  id: string,
  name: string,
  points: number,
  redeemHistory: any,
  createDate: string
}