import React from 'react';
import './textComponentStyles.css';


type Props = {
    text: string

}

const TextComponent = ({ text }: Props) => {
    return (
        <div className='text'>
            <span>{text}</span>
        </div>
    );
}

export default TextComponent;
