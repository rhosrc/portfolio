import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {

    return (
            
    <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <input name="bot-field" />
      <input type="text" name="name"/>
      <input type="email" name="email"/>
      <input type="text" name="subject"/>
      <textarea name="message"/>
      <div data-netlify-recaptcha="true"></div>
      <button type="submit">Send</button>
    </form>

    )
}