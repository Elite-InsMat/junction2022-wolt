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
                            People near you are ordering from these restaurants. Order from one of these restaurants to save in delivery costs.
                        </p>
                    </div>
                    <div className="order-info-card-addresses">
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