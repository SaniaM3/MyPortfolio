import React from 'react';
import s from './Intro.module.css'
import stock from './../../styles/button.module.css'

const Intro = () => {
    return (
        <div className={s.intro}>
            <div className={s.iLeft}>
                <div className={s.iName}>
                    <span>Hi! I Am</span>
                    <span>Alexander Masko</span>
                    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis exercitationem tempora amet expedita quam neque maiores explicabo, soluta minima earum?</span>
                </div>
                <button className={`${stock.button} ${s.iButton}`}>Here me</button>
                </div>
            <div className={s.iRight}>
                I am right side
            </div>
        </div>
        
    );
};
export default Intro;