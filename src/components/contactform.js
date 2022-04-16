import React, { useState } from 'react'

function ContactUs() {
    const [state, setState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        formSubmitted: false
    });

    const encode = (data) => {
        const {name, email, subject, message} = data
        return `form-name=contact&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&subject=${encodeURIComponent(subject)}&message=${encodeURIComponent(message)}`
    }

    function handleChange(e) {
        setState({...state, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await fetch('/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: encode(state)
        })
        setState({...state, formSubmitted: true});

        setTimeout(() => setState({
            name: "",
            email: "",
            subject: "",
            message: "",
            formSubmitted: false}), 3000)
    }


    return (
        <>
        {state.formSubmitted ? <p>Thank you for contacting me!</p> :
        <form name="contact" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <div className='row pt-5 mx-auto'>
                <div class="hidden">
                    <label>
                        <input name="bot-field" />
                    </label>
                </div>
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
         }
        </>
    );
}

export default ContactUs;