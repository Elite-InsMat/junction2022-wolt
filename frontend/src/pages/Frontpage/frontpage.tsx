import React, { useEffect, useState } from "react";
import axios from 'axios'
import RestaurantComponent from "../../components/RestaurantComponent";
import { Restaurant, Order } from "../../types";
import './frontpage.scss'



const TestPage = () => {

    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [onGoing, setOnGoing] = useState<Order[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // const socket = (window as any).io('http://localhost:3002');
        // socket.on('test1', (d: any) => {
        //     console.log(d)
        // })
        async function getData() {
            try {
                const recipeData = await axios.get('http://localhost:8232/restaurants');
                setRestaurants(recipeData.data);
                const userData = await axios.post('http://localhost:8232/user', { userName: "John Doe" });
                const onGoingData = await axios.post('http://localhost:8232/orders/ongoing', { userId: userData.data._id });
                setOnGoing(onGoingData.data);
                console.log(onGoingData.data);

            }
            catch (err: any) {
                setError(err.message);
            }
        }
        getData()
    }, []);

    // useEffect(() => {
    // const socket = (window as any).io('http://localhost:3002');
    // socket.on('test1', (d: any) => {
    //     console.log(d)
    // })
    // }, []);

    if (error) {
        return <p>{error}</p>
    }
    else if (!restaurants) {
        return <p>Loading restaurants...</p>
    }
    else {
        return (
            <div>
                <div>
                    <h1>Ongoing orders near you</h1>
                </div>
                <div className="center-div">

                    <div>
                        {onGoing.map((element) => (<RestaurantComponent key={element.pickup._id} text={element.pickup.name} img={element.pickup.coverImage} />))}
                    </div>
                </div>

                <div>
                    <h1>Find other amazing restaurants</h1>
                    <div className="center-div">
                        <div className="frontpage-restaurant-container">
                            {restaurants.map((restaurant) => (<RestaurantComponent key={restaurant._id} text={restaurant.name} img={restaurant.coverImage} />))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TestPage;