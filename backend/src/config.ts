import { config } from 'dotenv';
config();

export const port = process.env.PORT ? process.env.PORT : 8232
export const merchantId = process.env.MERCHANT_ID

export const database = {
    mongoUri: process.env.MONGO_URI || '',
    dbName: 'wolt',
    collections: {
        restaurants: 'restaurants'
    }
}