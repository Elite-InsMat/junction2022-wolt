import React, { useState, useEffect } from "react"
import axios from "axios";
import OngoingOrderSelectionComponent from "../../components/OngoingOrderSelectionComponent";
import { Order } from "../../types";
import './order-page.scss'

const OrderPage = () => {

    const [orders, setOrders] = useState<Order[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function getRecipeData() {
          try{
              const json = await axios.get('http://localhost:8232/orders');
              setOrders(json.data);
          }
          catch(err: any){
            setError(err.message);
          }   
        }
      
        getRecipeData()
      }, []);


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
                <img src="https://i.imgur.com/eBg83xo.jpg"></img>
           </div>
        </div>
    )

}

export default OrderPage;