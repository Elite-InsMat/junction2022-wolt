import React from 'react';
import './informationBlockStyles.scss';


type Props = {
    title: string,
    value: string,
    suffix?: string
}

const InformationBlock = ({ title, value, suffix }: Props) => {
    return (
        <div className='information-block-container'>
            <span className='information-title'>{title}</span>
            <span className='information-value'>{value}{suffix}</span>
        </div>
    );
}

export default InformationBlock;
