import { collections } from "../app"

export const getItems = async (restaurantId: string) => {
    const items = await collections.items.find( { _id: restaurantId }).toArray(); 
    return items
}