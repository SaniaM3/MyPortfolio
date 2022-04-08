import React from 'react';
import s from './Services.module.css'
import stock from '../../styles/button.module.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'

const Services = () => {
    return (
        <div className={s.services}>
            <div className={s.awesome}>
                <span>My awesome</span>
                <span>services</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ea 
                    <br />
                    at temporibus doloremque obcaecati deleniti voluptas quod dicta earum libero?
                </span>
                <button className={`${stock.button} ${s.sButton}`}>Download CV</button>
                <div className={`${s.blur} ${s.sBlur}`} style={{background:'#ABF1FF94'}}/>
            </div>
            <div className={s.cards}>
                right
            </div>
        </div>
    );
};

export default Services;