import React from 'react';
import './styles.scss';


type Props = {
    text: string,
    img: string
}

const RestaurantComponent = ({ text, img }: Props) => {
    return (
        <div className='restaurant-component-container'>
            <span className='title'>
                Restaurant
            </span>
            <span className='name'>
                {text}
            </span>
            <img src={img} />

        </div>
    );
}

export default RestaurantComponent;
