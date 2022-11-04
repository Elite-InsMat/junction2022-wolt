import React from "react";
import RestaurantComponent from "../components/RestaurantComponent";


import TextComponent from "../components/TextComponent";
import RestaurantOrderOuterContainerBox from "../components/RestaurantOrderOuterContainerBox/RestaurantOrderOuterContainerBox";


const TestPage = () => {
    return (
        <div>
            <RestaurantComponent text="aaaaa" img="https://i.media.fi/incoming/ujb6vi/7260078.jpg/alternates/FREE_1440/7260078.jpg" />
            <RestaurantComponent text="eeeee" img="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cow_%28Fleckvieh_breed%29_Oeschinensee_Slaunger_2009-07-07.jpg" />
            <RestaurantOrderOuterContainerBox />
        </div>
    )

}

export default TestPage;