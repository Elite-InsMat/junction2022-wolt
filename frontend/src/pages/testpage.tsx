import React from "react";
import { InformationBlock } from "../components/InformationBlock";




const TestPage = () => {
    return (
        <div>
            <div style={{ display: "flex", gap: "20px", margin: "20px 5px" }}>
                <InformationBlock title="Delivery Price" value="7.90" suffix="€" />
                <InformationBlock title="Waiting For" value="4:30" />
            </div>


        </div>
    )

}

export default TestPage;