import React, { useState, useEffect } from "react"
import axios from "axios";
import OngoingOrderSelectionComponent from "../../components/OngoingOrderSelectionComponent";
import { Order } from "../../types";
import './order-page.scss'
import Map from "../../components/Map/Map"


const OrderPage = () => {

    const [orders, setOrders] = useState<Order[]>([]);
    const [user, setUser] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function getUser() {
            try {
                const json = await axios.get('http://localhost:8232/user', {data : {name : "John Doe"}});
                setUser(json.data);
            } catch (error) {
                console.log(error)
            }
        }
        getUser()
      }, []);

      useEffect(() => {
        async function getRecipeData() {
          try{
              const json = await axios.get('http://localhost:8232/orders', {data : {userId : user._id}});
              setOrders(json.data);
          }
          catch(err: any){
            setError(err.message);
          }   
        }
        getRecipeData()
      }, [user]);


    return (
        
        <div className="order-page-container">
            <div className="order-page-info-container">
                {/* TODO: Make this dynamic */}
                <h2>Waiting for new Participants</h2>
                <div className="order-page-info-card">
                    <div className="order-info-card-text">
                        {/* TODO: Make this dynamic with order status */}
                        <h3>Your order is waiting for Participants</h3>
                        <p>
                            We&apos;re searching for participants near you who are interested
                            in ordering from the same place as you, so you can save on delivery. If you&apos;re in a hurry, you can skip the wait and pay for the delivery in full
                        </p>
                    </div>
                    <div className="order-info-card-addresses">
                        {orders.map((order) => <OngoingOrderSelectionComponent 
                             orderName={order.name}
                                text={order.text}
                                img={order.img}
                                key={order._id}/>)}
                    </div>

                    <div className="number-component-container">
                        {/* TODO: add number components and button */}
                    </div>
                </div>
            </div>

            <div className="order-page-map">
                <Map restaurantLocation={{
                    lat: 70,
                    lng: 40
                }} targetLocation={{
                    lat: 60.1699,
                    lng: 24.9384
                }} />
            </div>
        </div>
    )

}

export default OrderPage;