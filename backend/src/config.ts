import { config } from 'dotenv';
config();

export const port = process.env.PORT ? process.env.PORT : 8232

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

export const costReduce = 0.5

export const wolt = {
    key: process.env.API_TOKEN_KEY,
    baseUrl: process.env.API_BASEURL,
    merchantId: process.env.MERCHANT_ID,
    orderUrl:`${process.env.API_BASEURL}merchants/${process.env.MERCHANT_ID}/delivery-order`,
    feeUrl: `${process.env.API_BASEURL}merchants/${process.env.MERCHANT_ID}/delivery-fee`
}