import { collections } from "../app"

export const getOrders = async (userId:string) => {
    return await collections.orders.find( {_id: userId }).toArray();
}