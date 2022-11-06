import axios from "axios"
import { google } from "../config"
import { Order, User } from "../types/database-types"
import { Coordinate } from "../types/util-types"
import middlePointCalculator from "./middlePoint"

export const pickupAndDropoffPoints = async (orderId:string,collections:any) => {
    const order: Order | null = await collections.orders.findOne({_id:orderId})

    if(!order) {
        throw Error('Order not found')
    }

    const host = await collections.users.findOne({ _id:order.host})

    if(!host){
        throw Error('Cannot find order host')
    }
    const participants = await collections.users.find({ _id: {$in:Object.keys(order.orderedItems)}}).toArray();

    const dropoffCoordinate = middlePointCalculator(participants.map( (user: User) => {
        return user.location.coordinates
    }))

    const dropoffAddress = (await fetchAddress(dropoffCoordinate)).results[0].formatted_address

    return {
        pickupAddress: order.pickup.location.friendlyName,
        dropoffAddress: dropoffAddress
    }
}

const fetchAddress =  async (coordinate:Coordinate) => {
    if(!google.baseUrl){
        return
    }

    const res = await axios.get(google.baseUrl,{params: {latlng: `${coordinate.lat},${coordinate.long}`,key:google.key}})
    return res.data
}