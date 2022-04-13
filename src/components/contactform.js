import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {

    return (
            
    <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" data-netlify-recaptcha="true" hidden>
      <input name="bot-field" />
      <input type="text" name="name"/>
      <input type="email" name="email"/>
      <input type="text" name="subject"/>
      <textarea name="message"/>
      <div data-netlify-recaptcha="true"></div>
    </form>

    )
}