import React from 'react';
import s from './Navbar.module.css'
import stock from './../../styles/button.module.css'
import Toogle from '../Toogle/Toogle';

const Navbar = () => {
    return (
        <div className={s.nWrapper}>
           <div className={s.nLeft}>
               <div className={s.nName}>Alexander</div>
               <Toogle />
           </div>
           <div className={s.nRight}>
               <div className={s.nList}>
                   <ul style={{listStyleType:'none'}}>
                       <li>Home</li>
                       <li>Services</li>
                       <li>Experience</li>
                       <li>Portfolio</li>
                       <li>Testimonials</li>
                   </ul>
               </div>
               <button className={`${stock.button} ${s.nButton}`}>
                   Contact us
               </button>
           </div>
        </div>
    );
};

export default Navbar;