import React from 'react';
import s from './Intro.module.css'
import stock from './../../styles/button.module.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';

const Intro = () => {
    return (
        <div className={s.intro}>
            <div className={s.iLeft}>
                <div className={s.iName}>
                    <span>Hi! I Am</span>
                    <span>Alexander Masko</span>
                    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis exercitationem tempora amet expedita quam neque maiores explicabo, soluta minima earum?</span>
                </div>
                <button className={`${stock.button} ${s.iButton}`}>Hire me</button>
                <div className={s.iIcons}>
                    <a href="https://github.com/SaniaM3"><img src={Github} alt="github" /></a>
                    <a href="https://www.linkedin.com/in/saniam3/"><img src={LinkedIn} alt="linkenid" /></a>
                    <a href="https://www.instagram.com/sania_m3/"><img src={Instagram} alt="instagram" /></a>
                    
                </div>
                </div>
            <div className={s.iRight}>
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <img src={glassesimoji} alt="" />
                <div style={{top:'-4%', left:'68%'}}>
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
                </div>
                <div style={{top:'18rem', left:'5rem'}}>
                    <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
                </div>
                <div className={s.blur} style={{background:'rgb(233 210 255)'}}>
                <div className={s.blur} style={{background:'#C1F5FF', top:'18rem', width:'21rem', height:'11rem', left:'-26rem'}}></div>
                </div>
            </div>
        </div>
        
    );
};
export default Intro;