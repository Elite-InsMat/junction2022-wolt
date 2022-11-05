import { MongoClient } from "mongodb";
import { database } from "./config";
import { DatabaseCollections } from "./types/database";

export const startDb = async () => {
    try {
        const mongoClient = new MongoClient(database.mongoUri, { connectTimeoutMS: 10000 })
        return mongoClient
    } catch(err) {
        console.log(err)
    }
}

export const getCollections = async(mc:MongoClient): Promise<DatabaseCollections> => {
    return {
        restaurants: mc.db(database.dbName).collection(database.collections.restaurants),
        orders: mc.db(database.dbName).collection(database.collections.orders)
    }
}