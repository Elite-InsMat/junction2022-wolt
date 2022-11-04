import React, { useState } from "react";
import "./BlueButtonStyles.scss"

type Props = {
    text : string,
    onClick : () => void
}

const BlueButton = ({ text, onClick } : Props) =>  {

    return(
        <div>
            <button className="bluebutton" onClick={() => onClick}>
                <span className="text">
                    {text}
                </span>
            </button>
        </div>
    );
    
};

export default BlueButton;