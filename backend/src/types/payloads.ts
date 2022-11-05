export interface WoltOrderPayload {
    pickup: {
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
      location: {
        formatted_address: string,
        coordinates: {
          lat: number,
          lon: number
        }
      },
      contact_details: {
        name: string,
        phone_number: string,
        send_tracking_link_sms: boolean
      },
      comment: string
    },
    customer_support: {
      email: string,
      phone_number: string,
      url: string
    },
    merchant_order_reference_id?: string,
    is_no_contact: boolean,
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
        type: "pre_delivery_courier_tip"
        price: {
          amount: number,
          currency: string
        }
      }
    ],
    min_preparation_time_minutes: number,
    scheduled_dropoff_time?: number
}

export interface WoltFeePayLoad {
  pickup: {
      location: {
          lat:number,
          long:number
      }
  },
  dropoff: {
      location: {
          lat:number,
          long:number
      }
  }
}

export interface CreateOrderPayload {
  public: boolean,
  expires?: number,
  restaurantId: string,
  host: string
  items: string []
}

export interface JoinOrderPayload {
  userId: string,
  orderId: string,
  items: string []
}
export interface ItemsPayload {
    restaurantId: string
}