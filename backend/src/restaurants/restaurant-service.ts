import { collections } from "../app"

export const getRestaurants = async () => {
    return await collections.restaurants.find().toArray();
}