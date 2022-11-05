import { Collection } from 'mongodb'

export interface DatabaseCollections{
    restaurants: Collection<Restaurant>,
    orders: Collection<Order>
}

interface User {
    _id: string,
    location: {
        lat: number,
        long: number
    }
}

interface Restaurant {
    _id:string,
    name:string,
    coverImage:string,
    location: {
        friendlyName: string,
        coordinates: {
            lat: number,
            long: number
        }
    }
}

interface Order {
    _id:string,
    orderStatus: string,
    orderedItems: {
        [userId:string] : string []
    }
}