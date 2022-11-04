import React from "react";
import "./RestaurantOrderContainerBoxStyles.scss"

type Props = {
    bgcolor: string
}

const RestaurantOrderContainerOuterBox = ({ bgcolor } : Props) => {

    return (
        <div className="RestaurantOrderContainerBox" style={{backgroundColor: bgcolor}}>
        </div>
    );
};

export default RestaurantOrderContainerOuterBox;