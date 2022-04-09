import React, { useRef, useState } from 'react';
import s from './Contact.module.css'
import stock from '../../styles/button.module.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
    
    const form = useRef();

    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nvh2yft', 'template_az19t1m', form.current, 'LxthUZIwsFh3nNKw_')
          .then((result) => {
              console.log(result.text);
              setDone(true);
              form.placeholder.value=''
          }, (error) => {
              console.log(error.text);
          });
      };
    return (

        <div className={s.contactForm}>
            <div className={s.wLeft}>
                <div className={s.awesome}>
                    <span>Get in touch</span>
                    <span>Contact me</span>
                </div>
            <div className={`${s.blur} ${s.sBlur}`} style={{background:'#ABF1FF94'}}/>
            </div>
            <div className={s.cRight}>
                <form ref={form} onSubmit={sendEmail} >
                    <input type="text" name='user_name' className={s.user} placeholder='Name'/>
                    <input type="text" name='user_email' className={s.user} placeholder='Email'/>
                    <textarea name="message" className={s.user} placeholder="Message"  />
                    <input type="submit" value="Send" className={stock.button}/>
                    <span>{done && 'Thanks for contactin me!'}</span>
                    <div className={`${s.blur} ${s.cBlur}`} style={{background:'var(--purple)'}}/>
                    
                </form>
            </div>
        </div>
    );
};

export default Contact;