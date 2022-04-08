import React from 'react';
import s from './Works.module.css'
import stock from '../../styles/button.module.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'


const Works = () => {
    return (
        <div className={s.works}>
            <div className={s.awesome}>
                <span>Works for All these</span>
                <span>Brands and Clients</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ea 
                    <br />
                    at temporibus doloremque obcaecati deleniti voluptas quod dicta earum libero?
                    <br />
                    at temporibus doloremque obcaecati deleniti voluptas quod dicta earum libero?
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ea 
                </span>
                <button className={`${stock.button} ${s.sButton}`}>Hire Me</button>
                <div className={`${s.blur} ${s.sBlur}`} style={{background:'#ABF1FF94'}}/>
                </div>
                <div className={s.wRight}>
                    <div className={s.wMainCircle}>
                        <div className={s.wSecCircle}>
                            <img src={Upwork} alt="" />
                        </div>
                        <div className={s.wSecCircle}>
                            <img src={Fiverr} alt="" />
                        </div>
                        <div className={s.wSecCircle}>
                            <img src={Shopify} alt="" />
                        </div>
                        <div className={s.wSecCircle}>
                            <img src={Facebook} alt="" />
                        </div>
                        <div className={s.wSecCircle}>
                            <img src={Amazon} alt="" />
                        </div>
                    </div>
                    <div className={`${s.wBackCircle} ${s.blueCircle}`}></div>
                    <div className={`${s.wBackCircle} ${s.yellowCircle}`}></div>
                </div>

        </div>
    );
};

export default Works;