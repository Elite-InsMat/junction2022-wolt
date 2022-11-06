import React from 'react';
import './styles.scss';


type Props = {
    orderName: string,
    text: string,
    img: string,
}

const OngoingOrderSelectionComponent = ({ orderName, text, img }: Props) => {
    return (
        <div className='order-selection-container'>
            <span>
                {orderName}
            </span>
            <p>
                {text}
            </p>
            <img src={img} />

        </div>
    );
}

export default OngoingOrderSelectionComponent;
