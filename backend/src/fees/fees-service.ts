import axios from "axios";
import { collections } from "../app"
import { wolt } from "../config";
import { WoltFeePayLoad } from "../types/payloads";
import { pickupAndDropoffPoints } from "../utils/pick-and-drop";

export const getFee = async (orderId: string) => {
    const order = await collections.orders.findOne( { _id: orderId });

    if(!order){
        throw Error('No order found')
    }

    const pointData = await pickupAndDropoffPoints(orderId,collections)

    const payload: WoltFeePayLoad = {
        pickup: {
            formatted_address: pointData.pickupAddress
        },
        dropoff: {
            formatted_address: pointData.dropoffAddress
        }
    }

    const config = {
        headers: { Authorization: `Bearer ${wolt.key}` }
    };

    const res = await axios.post(wolt.feeUrl,payload,config)

    console.log(res.data)

    return res
}