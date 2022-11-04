import React, { useState } from "react";
import "./BlueButtonStyles.scss"

type Props = {
    text : string
}

const BlueButton = ({ text } : Props) =>  {

    return(
        <div>
            <button className="bluebutton">
                <span className="text">
                    {text}
                </span>
            </button>
        </div>
    );
    
};

export default BlueButton;