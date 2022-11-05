import { collections } from "../app"

export const getItems = async (restaurantId: string) => {
    return await collections.items.find( { _id: restaurantId }).toArray();
}