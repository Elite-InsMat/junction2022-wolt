import { Collection } from 'mongodb'

export interface DatabaseCollections{
    restaurants: Collection<Restaurant>,
    orders: Collection<Order>
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
    participants: string [],
    orderdItems: string [],
}