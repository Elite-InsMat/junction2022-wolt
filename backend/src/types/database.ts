import { Collection } from 'mongodb'

export interface DatabaseCollections{
    restaurants: Collection<Restaurant>,
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