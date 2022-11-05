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

export interface Order {
    _id : number,
    name : string,
    text : string,
    img : string,
}