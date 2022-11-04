import React from 'react';
import './textComponentStyles.scss';


type Props = {
    text: string
}

const TextComponent = ({ text }: Props) => {
    return (
        <div>
            <span className='text'>{text}</span>
            <span className='asd'>asdsad</span>
        </div>
    );
}

export default TextComponent;
