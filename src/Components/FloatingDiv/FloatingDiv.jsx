import React from 'react';
import s from './FloatingDiv.module.css'

const FloatingDiv = ({image, txt1, txt2}) => {
    return (
        <div className={s.floatingDiv}>
            <img src={image} alt="" />
            <span>
                {txt1}
                <br />
                {txt2}
            </span>
        </div>
    );
};

export default FloatingDiv;