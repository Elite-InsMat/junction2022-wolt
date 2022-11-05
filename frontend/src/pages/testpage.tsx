import React from "react";
import OngoingOrderSelectionComponent from "../components/OngoingOrderSelectionComponent";
import { InformationBlock } from "../components/InformationBlock";
import Map from "../components/Map/Map";





const TestPage = () => {


    return (
        <div>
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