import { ObjectId } from "mongodb";
import { collections } from "../app"
import { Order, User } from "../types/database";
import { CreateOrderPayload, JoinOrderPayload } from "../types/payloads";
import { allowedDistance, wolt } from "../config";
import distanceBetweenPoints from "../utils/distanceBetweenPoints";

export const getUserOrders = async (userId:string) => {
    return await collections.orders.find( { _id: userId }).toArray();
}

export const getOngoingOrders = async (userId:string) => {
    const user = (await collections.users.findOne({_id:userId}))

    if(!user){
        throw Error('User missing')
    }

    if(!user.location){
        throw Error('User location missing')
    }

    const allHosts = (await collections.orders.find().toArray()).map( order => order.host)
    const allHostLocations = await collections.users.find({_id:{$in:allHosts}}).toArray()

    const allNearbyHosts = allHostLocations.map( h => {
        const distance = distanceBetweenPoints(h.location.coordinates,user.location.coordinates)
        if(distance <= allowedDistance){
            if(h._id){
                return h._id
            }
        }
    }) as string []

    return await collections.orders.find({host:{$in: allNearbyHosts}}).toArray()
}

export const createNewOrder = async (payload: CreateOrderPayload) => {

    const pickup = await collections.restaurants.findOne({_id: payload.restaurantId})

    if(!pickup) {
        throw Error('Cannot get pickup location!')
    } 

    const order: Order = {
        _id: new ObjectId().toString(),
        host: payload.host,
        orderStatus: {
            public: payload.public
        },
        orderedItems: {
            [payload.host]: payload.items
        },
        pickup: pickup
    }

    if(payload.public && payload.expires) {
        order.orderStatus.expires = payload.expires
    }
    
    await collections.orders.insertOne(order)
}

export const joinOrder = async (payload: JoinOrderPayload) => {
    const order = await collections.orders.findOne({_id:payload.orderId})

    if(!order) {
        throw Error('Could not find any order')
    }

    const participants = Object.keys(order.orderedItems)

    if(participants.includes(payload.userId)){
        throw Error('User already in order')
    }

    await collections.orders.updateOne({ _id: payload.orderId }, {
        $set: {
            orderedItems:{    
                ...order.orderedItems,
                [payload.userId]: payload.items
            }
        }
    })
}