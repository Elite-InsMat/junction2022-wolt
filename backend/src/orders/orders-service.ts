import { ObjectId } from "mongodb";
import { collections } from "../app"
import { Order } from "../types/database-types";
import { CreateOrderPayload, JoinOrderPayload, WoltOrderPayload } from "../types/payloads";
import { allowedDistance, wolt } from "../config";
import distanceBetweenPoints from "../utils/distanceBetweenPoints";
import middlePointCalculator from "../utils/middlePoint";
import axios from "axios";
import { pickupAndDropoffPoints } from "../utils/pick-and-drop";

export const getUserOrders = async (userId:string) => {
    return await collections.orders.find( { _id: userId }).toArray();
}

export const getNearbyOngoingOrders = async (userId:string) => {
    const user = await collections.users.findOne({_id:userId})

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

    return await collections.orders.find({host:{$in: allNearbyHosts}, "orderStatus.public":true }).toArray()
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
    return order._id
}

export const joinOrder = async (payload: JoinOrderPayload) => {
    const publicOrder = await collections.orders.findOne({_id:payload.orderId, "orderStatus.public":true})

    if(!publicOrder) {
        throw Error('Could not find any order')
    }

    if(publicOrder.orderStatus.expires){
        if(publicOrder.orderStatus.expires < Date.now()){
            throw Error('Order already expired')
        }
    }

    const participants = Object.keys(publicOrder.orderedItems)

    if(participants.includes(payload.userId)){
        throw Error('User already in order')
    }

    await collections.orders.updateOne({ _id: payload.orderId }, {
        $set: {
            orderedItems:{    
                ...publicOrder.orderedItems,
                [payload.userId]: payload.items
            }
        }
    })
}

export const createWoltOrder = async (orderId:string) => {

    if(!orderId){
        throw Error('No order id')
    }

    const order: Order | null = await collections.orders.findOne({_id:orderId})
    if(!order){
        throw Error('No order found')
    }
    const host = await collections.users.findOne({ _id:order.host})

    if(!host){
        throw Error('No host found')
    }

    const participants = await collections.users.find({ _id: {$in:Object.keys(order.orderedItems)}}).toArray();

    const pointData = await pickupAndDropoffPoints(orderId,collections)

    const payload: WoltOrderPayload = {
        pickup: {
            location: {
                formatted_address:pointData.pickupAddress,
            },
            comment: "Nice comment there!",
            contact_details: {
                name: "NAME",
                phone_number: "+358123456789",
                send_tracking_link_sms: false
            }
        },
        dropoff: {
            location: {
                formatted_address:pointData.dropoffAddress,
            },
            contact_details: {
                name: host.name,
                phone_number: "+358123456789",
                send_tracking_link_sms: false
            },
            comment: 'Nice comment here!'
        },
        customer_support: {
            email: "string",
            phone_number: "string",
            url: "string"
        },
        merchant_order_reference_id: null,
        is_no_contact: false,
        contents: [
            {
                count: 1,
                description: 'plastic bag',
                identifier: '12345',
                tags: ['alcohol']
            }
        ],
        tips: [],
        min_preparation_time_minutes: 10*participants.length,
        scheduled_dropoff_time: null
    }

    const config = {
        headers: { Authorization: `Bearer ${wolt.key}` }
    };

    const res = await axios.post(wolt.orderUrl, payload, config)
    return (res.data)
}