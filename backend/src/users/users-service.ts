import { collections } from "../app"

export const getUser = async (userName:string) => {
    return await collections.users.findOne({ name: userName });
}