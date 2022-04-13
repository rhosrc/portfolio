import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {

    return (
        <div className='contact-form container'>
            <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" data-netlify-recaptcha="true" hidden>
      <input name="bot-field" />
      <input type="text" name="name"/>
      <input type="email" name="email"/>
      <input type="text" name="subject"/>
      <textarea name="message"/>
      <div data-netlify-recaptcha="true"></div>
      <input type="submit" className='btn gray' value='Send Message'/>
    </form>
            <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            
                
                <div className='row pt-5 mx-auto'>
                
                    <div className='col-8 form-group mx-auto'>
                        <label for="name">Name *</label>
                        <input required type="text" className='form-control' name="name"/>
                    </div>
                    <div className='col-8 form-group pt-2 mx-auto'>
                        <label for="email">Email Address *</label>
                        <input required type="email" className='form-control' name="email"/>
                    </div>
                    <div className='col-8 form-group pt-2 mx-auto'>
                        <label for="subject">Subject *</label>
                        <input required type="text" className='form-control' name="subject"/>
                    </div>
                    <div className='col-8 form-group pt-2 mx-auto'>
                        <label for="message">Message *</label>
                        <textarea required rows='10' type="text" className='form-control' name="message"/>
                    </div>
                    <div className='col-8 pt-3 mx-auto'>
                        <input type="submit" className='btn gray' value='Send Message'/>
                    </div>
                </div>
            </form>
        </div>
    )
}