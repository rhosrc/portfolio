import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {

    return (
        <div className='contact-form container'>
            <form name="contact" method="POST">
                <div className='row pt-5 mx-auto'>
                <input type="hidden" name="form-name" value="contact" />
                    <div class="hidden">
                    <label>
                        Don’t fill this out if you’re human: <input name="bot-field" />
                    </label>
                    </div>
                    <div className='col-8 form-group mx-auto'>
                        <label for="from_name">Name *</label>
                        <input required type="text" className='form-control' name="name" id='name'/>
                    </div>
                    <div className='col-8 form-group pt-2 mx-auto'>
                        <label for="reply_to">Email Address *</label>
                        <input required type="email" className='form-control' name="email" id='email'/>
                    </div>
                    <div className='col-8 form-group pt-2 mx-auto'>
                        <label for="subject">Subject *</label>
                        <input required type="text" className='form-control' name="subject" id='subject'/>
                    </div>
                    <div className='col-8 form-group pt-2 mx-auto'>
                        <label for="message">Message *</label>
                        <textarea required rows='10' type="text" className='form-control' name="message" id='message'/>
                    </div>
                    <div data-netlify-recaptcha="true"></div>
                    <div className='col-8 pt-3 mx-auto'>
                        <input type="submit" className='btn gray' value='Send Message'/>
                    </div>
                </div>
            </form>
        </div>
    )
}