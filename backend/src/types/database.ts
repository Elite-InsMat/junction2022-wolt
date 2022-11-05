import { Collection } from 'mongodb'

export interface DatabaseCollections{
    restaurants: Collection<Restaurant>,
    orders: Collection<Order>,
    items: Collection<Item>,
    users: Collection<User>
}

export interface User {
    _id: string,
    location: {
        lat: number,
        long: number
    }
}

export interface Restaurant {
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

export interface Item {
    [restaurantId: string]: {
        _id:string,
        name:string,
        description: string,
        price: number,
        coverImage: string
    }
}

export interface Order {
    _id:string,
    host: string,
    orderStatus: {
        public: boolean,
        expires?: number
    },
    orderedItems: {
        [userId:string] : string []
    }
}