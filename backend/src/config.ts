import { config } from 'dotenv';
config();

export const port = process.env.PORT

export const database = {
    mongoUri: process.env.MONGO_URI || '',
    dbName: 'wolt',
    collections: {
        restaurants: 'restaurants',
        orders:'orders',
        users:'users',
        items:'items'
    }
}

export const wolt = {
    key: process.env.API_TOKEN_KEY,
    baseUrl: process.env.API_BASEURL,
    merchantId: process.env.MERCHANT_ID
}