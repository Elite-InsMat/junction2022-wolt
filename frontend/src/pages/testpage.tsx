import React from "react";
import OngoingOrderSelectionComponent from "../components/OngoingOrderSelectionComponent";
import { InformationBlock } from "../components/InformationBlock";
import Map from "../components/Map/Map";





const TestPage = () => {


    return (
        <div>
            <OngoingOrderSelectionComponent orderName="Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa urna. Duis non mollis." img="https://i.media.fi/incoming/ujb6vi/7260078.jpg/alternates/FREE_1440/7260078.jpg" />
            <OngoingOrderSelectionComponent orderName="Plant Burger" text="Pioneered by our master chef,the plant burger will shake your tastebuds" img="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cow_%28Fleckvieh_breed%29_Oeschinensee_Slaunger_2009-07-07.jpg" />
            <div style={{ display: "flex", gap: "20px", margin: "20px 5px" }}>
                <InformationBlock title="Delivery Price" value="7.90" suffix="€" />
                <InformationBlock title="Waiting For" value="4:30" />
            </div>

            <Map restaurantLocation={{
                lat: 60.8,
                lng: 24.95
            }} targetLocation={{
                lat: 60.1699,
                lng: 24.9384
            }} />
        </div>
    )

}

export default TestPage;