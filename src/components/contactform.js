import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {

    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_d2ux57n', 'template_1bqhreb', form.current, 'dyp1fhF9GDIreN8pd')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        
        e.target.reset();
    }


    return (
        <div className='contact-form container'>
        <form ref={form} onSubmit={sendEmail}>
            <div className='row pt-5 mx-auto'>
                <div className='col-8 form-group mx-auto'>
                    <label for="from_name">Name *</label>
                    <input required type="text" className='form-control' name='from_name' id='from_name'/>
                </div>
                <div className='col-8 form-group pt-2 mx-auto'>
                    <label for="reply_to">Email Address *</label>
                    <input required type="email" className='form-control' name='reply_to' id='reply_to'/>
                </div>
                <div className='col-8 form-group pt-2 mx-auto'>
                    <label for="subject">Subject *</label>
                    <input required type="text" className='form-control' name='subject' id='subject'/>
                </div>
                <div className='col-8 form-group pt-2 mx-auto'>
                    <label for="message">Message *</label>
                    <textarea required rows='10' type="text" className='form-control' name='message' id='message'/>
                </div>
                <div className='col-8 pt-3 mx-auto'>
                    <input type="submit" className='btn gray' value='Send Message'/>
                </div>
            </div>
        </form>
        </div>
    )
}