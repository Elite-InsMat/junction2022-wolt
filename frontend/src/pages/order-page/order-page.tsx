import React from "react"
import './order-page.scss'
import Map from "../../components/Map/Map"


const OrderPage = () => {
    return (
        <div className="order-page-container">
            <div className="order-page-info-container">
                {/* TODO: Make this dynamic */}
                <h2>Waiting for new Participants</h2>
                <div className="order-page-info-card">
                    <div className="order-info-card-addresses">

                    </div>

                    <div className="order-info-card-text">
                        {/* TODO: Make this dynamic with order status */}
                        <h3>Your order is waiting for Participants</h3>
                        <p>
                            We&apos;re searching for participants near you who are interested
                            in ordering from the same place as you, so you can save on delivery. If you&apos;re in a hurry, you can skip the wait and pay for the delivery in full
                        </p>
                    </div>
                    <div className="number-component-container">
                        {/* TODO: add number components and button */}
                    </div>
                </div>
            </div>

            <div className="order-page-map">
                <Map restaurantLocation={{
                    lat: 60.17,
                    lng: 24.95
                }} targetLocation={{
                    lat: 61.1699,
                    lng: 24.9384
                }} />
            </div>
        </div>
    )

}

export default OrderPage;