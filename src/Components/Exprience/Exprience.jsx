import React from 'react';
import s from './Exprience.module.css'

const Exprience = () => {
    return (
        <div className={s.experience}>
            <div className={s.achievement}>
                <div className={s.circle}>8+</div>
                <span>years</span>
                <span>Experience</span>
            </div>
            <div className={s.achievement}>
                <div className={s.circle}>8+</div>
                <span>completed</span>
                <span>projects</span>
            </div>
            <div className={s.achievement}>
                <div className={s.circle}>8+</div>
                <span>companies</span>
                <span>work</span>
            </div>
        </div>
    );
};

export default Exprience;