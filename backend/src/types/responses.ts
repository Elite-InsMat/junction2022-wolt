import { Item } from "./database"

export interface FeeResponse {
    created_at: string,
    pickup: {
      location: {
        formatted_address?: string,
        coordinates: {
          lat: number,
          lon: number
        }
      }
    },
    dropoff: {
      location: {
        formatted_address?: string,
        coordinates: {
          lat: number,
          lon: number
        }
      }
    },
    fee: {
      amount: number,
      currency: string
    },
    time_estimate_minutes?: number,
    scheduled_dropoff_time?: string
}

export type ItemsResponse = Item []

export interface OrderResponse {
    pickup: {
        eta: string,
        location: {
        formatted_address: string,
        coordinates: {
            lat: number,
            lon: number
        }
        },
        comment: string,
        contact_details: {
        name: string,
        phone_number: string,
        send_tracking_link_sms: boolean
        }
    },
    dropoff: {
        eta: string,
        location: {
        formatted_address: string,
        coordinates: {
            lat: number,
            lon: number
        }
        },
        comment: string,
        contact_details: {
        name: string,
        phone_number: string,
        send_tracking_link_sms: boolean
        }
    },
    scheduled_dropoff_time?: string,
    customer_support: {
        email: string,
        phone_number: string,
        url: string
    },
    is_no_contact: boolean,
    merchant_order_reference_id?: string,
    contents: [
        {
        count: number,
        description: string,
        identifier: string,
        tags: [string]
        }
    ],
    tips: [
        {
        type: "pre_delivery_courier_tip",
        price: {
            amount: number,
            currency: string
        }
        }
    ],
    price: {
        amount: number,
        currency: string
    },
    tracking: {
        id: string,
        url: string
    },
    wolt_order_reference_id: string,
    min_preparation_time_minutes: number
}
