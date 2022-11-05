import React, { useEffect, useState } from "react";
import axios from 'axios'
import RestaurantComponent from "../../components/RestaurantComponent";
import { Restaurant } from "../../types";
import './frontpage.scss'


const FrontPage = () => {
const [restaurants, setRestaurants] = useState<Restaurant[]>([])
const [error, setError] = useState<string | null>(null)

useEffect(() => {
  async function getRecipeData() {
    try{
        const json = await axios.get('http://localhost:8232/restaurants');
        setRestaurants(json.data);
    }
    catch(err: any){
      setError(err.message);
    }   
  }

  getRecipeData()
}, []);
    if (error){
        return <p>{error}</p>
    }
    else if (!restaurants){
        return <p>Loading restaurants...</p>
    }
    else{
        return (
            <div>
                <div>
                    <h1>Ongoing orders near you</h1>
                    <p>Nope</p>
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

export default FrontPage;