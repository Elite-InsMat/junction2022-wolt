import { collections } from "../app"

export const getRestaurants = async () => {
    const result = await collections.restaurants.find().toArray();
    console.log(result)
    return result
}