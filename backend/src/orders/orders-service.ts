import { ObjectId } from "mongodb";
import axios from 'axios'
import { collections } from "../app"
import { Order } from "../types/database";
import { CreateOrderPayload, JoinOrderPayload, WoltFeePayLoad } from "../types/payloads";
import { wolt } from "../config";

export const getUserOrders = async (userId:string) => {
    return await collections.orders.find( { _id: userId }).toArray();
}

export const createNewOrder = async (payload: CreateOrderPayload) => {
    const order: Order = {
        _id: new ObjectId().toString(),
        host: payload.host,
        orderStatus: {
            public: payload.public
        },
        orderedItems: {
            [payload.host]: payload.items
        },
        pickup: payload.restaurant
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

    const newFee = axios.get(wolt.feeUrl,{ data: {} })
}