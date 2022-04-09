import React from 'react';
import s from './Footer.module.css'
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
    return (
        <div className={s.footer}>
            <img src={Wave} alt="" style={{width:'100%'}}/>
            <div className={s.fContent}>
                <span>Amasko18@gmail.com</span>
                <div className={s.fIcons}>
                    <Insta color='white' size='3rem'/>
                    <Facebook color='white' size='3rem'/>
                    <Gitub color='white' size='3rem'/>
                </div>
            </div>
        </div>
    );
};

export default Footer;