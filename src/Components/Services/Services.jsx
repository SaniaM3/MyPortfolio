import React from 'react';
import s from './Services.module.css'
import stock from '../../styles/button.module.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card';
import Resume from './Alexandrs Resume.pdf'

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
                <a href={Resume} download>
                <button className={`${stock.button} ${s.sButton}`}>Download CV</button>
                </a>
                <div className={`${s.blur} ${s.sBlur}`} style={{background:'#ABF1FF94'}}/>
            </div>
            <div className={s.cards}>
                <div style={{left:'14rem'}}>
                    <Card emoji = {HeartEmoji} heading = {'Design'} detail = {'Figma, Scetch, Photoshop'}/>
                </div>
                <div style={{top:'12rem', left:'-4rem'}}>
                    <Card emoji = {Glasses} heading = {'Developer'} detail = {'Html, Css, JS, React'}/>
                </div>
                <div style={{top:'19rem', left:'12rem'}}>
                    <Card emoji = {Humble} heading = {'UI/UX'} detail = {'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem '}/>
                </div>
                <div className={`${s.blur} ${s.sBlur2}`} style={{background:'var(--purple)'}}/>
            </div>
        </div>
    );
};

export default Services;