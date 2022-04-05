import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



export const ContactUs = () => {
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qrupvvn', 'template_1bqhreb', form.current, 'dyp1fhF9GDIreN8pd')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        
        e.target.reset();
    }

    return (
        <div className='container'>
            <form ref={form} onSubmit={sendEmail}>
                <div className='row pt-5 mx-auto'>
                    <div className='col-8 form-group mx-auto'>
                        <input type="text" className='form-control' placeholder='Name' name='from_name'/>
                    </div>
                    <div className='col-8 form-group pt-2 mx-auto'>
                        <input type="email" className='form-control' placeholder='Email Address' name='reply_to'/>
                    </div>
                    <div className='col-8 form-group pt-2 mx-auto'>
                        <input type="text" className='form-control' placeholder='Subject' name='subject'/>
                    </div>
                    <div className='col-8 form-group pt-2 mx-auto'>
                        <textarea rows='10' type="text" className='form-control' placeholder='Your Message' name='message'/>
                    </div>
                    <div className='col-8 pt-3 mx-auto'>
                        <input type="submit" className='btn gray' value='Send Message'/>
                    </div>
                </div>
            </form>
        </div>
    )
}