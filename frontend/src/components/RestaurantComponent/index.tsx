import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom'
import './styles.scss';


type Props = {
    text: string,
    img: string,
    targetLink?: string
}

const RestaurantComponent = ({ text, img, targetLink }: Props) => {

    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate(targetLink ?? "/", { replace: true }), [navigate]);

    return (
        <div onClick={handleOnClick} className='restaurant-component-container'>
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
