import { config } from 'dotenv';
config();

export const port = process.env.PORT
export const merchantId = process.env.MERCHANT_ID

export const database = {
    mongoUri: process.env.MONGO_URI || '',
    dbName: 'wolt',
    collections: {
        restaurants: 'restaurants',
        orders:'orders',
        users:'users'
    }
}