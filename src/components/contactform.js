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
        <form name="contact" data-netlify="true" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
                <div className='col-8 form-group mx-auto'>
                    <label for="name">Name *</label>
                    <input required value={state.name} onChange={handleChange} type="text" className='form-control' name='name' id='from_name'/>
                </div>
                <div className='col-8 form-group pt-2 mx-auto'>
                    <label for="email">Email Address *</label>
                    <input required value={state.email} onChange={handleChange} type="email" className='form-control' name='email' id='reply_to'/>
                </div>
                <div className='col-8 form-group pt-2 mx-auto'>
                    <label for="subject">Subject *</label>
                    <input required value={state.subject} onChange={handleChange} type="text" className='form-control' name='subject' id='subject'/>
                </div>
                <div className='col-8 form-group pt-2 mx-auto'>
                    <label for="message">Message *</label>
                    <textarea required value={state.message} onChange={handleChange} rows='10' type="text" className='form-control' name='message' id='message'/>
                </div>
                <div className='col-8 pt-3 mx-auto'>
                    <input type="submit" className='btn gray' value='Send Message'/>
                </div>
        
        </form>
         }
        </>
    );
}


export default ContactUs;