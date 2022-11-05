import { collections } from "../app"

export const getOrders = async () => {
    return await collections.orders.find().toArray();
}