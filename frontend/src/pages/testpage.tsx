import React from "react";
import RestaurantComponent from "../components/RestaurantComponent";
import OngoingOrderSelectionComponent from "../components/OngoingOrderSelectionComponent";




const TestPage = () => {
    return (
        <div>
            <OngoingOrderSelectionComponent orderName="Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa urna. Duis non mollis." img="https://i.media.fi/incoming/ujb6vi/7260078.jpg/alternates/FREE_1440/7260078.jpg"/>
            <OngoingOrderSelectionComponent orderName="Plant Burger" text="Pioneered by our master chef,the plant burger will shake your tastebuds" img="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cow_%28Fleckvieh_breed%29_Oeschinensee_Slaunger_2009-07-07.jpg"/>
        </div>
    )

}

export default TestPage;