import React from 'react';
import s from './Card.module.css'

const Card = ({emoji, heading, detail, }) => {
    return (
        <div className={s.card}>
            <img src={emoji} alt="" />
            <span>{heading}</span>
            <span>{detail}</span>
            <button className={s.cButton}>Learn More</button>
        </div>
    );
};

export default Card;