import React from "react";
import "./TextBoxRounded.scss"

type Props = {
    text : string
};

const TextBoxRounded = ({ text } : Props) => {
    return(
        <div className="TextBoxRounded">
            {text}
        </div>
    );
};

export default TextBoxRounded;