import React, { useState } from 'react';
import "./Contact.scss";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Contact() {
    let imgURL = "/static/favicon.png";

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        // fetch('/some-api', { method: form.method, body: formData });
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);

        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <div className='contact'>
                <Helmet>
                    <title>Rajababu Shah - Contact</title>
                </Helmet>
                <div className="contact-info">
                    <div className="contact-data-row">
                        <div className="icon-img">
                            <i className="fa-solid fa-phone-volume"></i>
                        </div>
                        <div className="contact-data">
                            <h3>(+91) 7319806300</h3>
                        </div>
                    </div>
                    <div className="contact-data-row">
                        <div className="icon-img">
                            <i className="fa-solid fa-location-arrow"></i>
                        </div>
                        <div className="contact-data">
                            <h3>New Delhi, India</h3>
                        </div>
                    </div>
                    <div className="contact-data-row">
                        <div className="icon-img">
                            <i className="fa-solid fa-at"></i>
                        </div>
                        <div className="contact-data">
                            <h3>rajababushah.in@gmail.com</h3>
                        </div>
                    </div>
                    <div className="contact-data-row">
                        <div className="icon-img">
                            <i className="fa-solid fa-globe"></i>
                        </div>
                        <div className="contact-data">
                            <h3>https://rajababushah.vercel.app</h3>
                        </div>
                    </div>
                </div>

                <hr style={{ width: "80%", margin: "1px auto" }} />

                <div className="contact-form">
                    <form method="post" onSubmit={handleSubmit}>
                        <label htmlFor="name">
                            <span className="label-title">Name</span><br />
                            <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} required /> <br />
                        </label>
                        <label htmlFor="email">
                            <span className="label-title">Email </span> <br />
                            <input type="email" id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required /> <br />
                        </label>
                        <label htmlFor="message">
                            <span className="label-title">Message</span> <br />
                            <textarea name="message" id="message" height="30px" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea> <br />
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <p className='copyright-info'>&copy; Copyright reserved; lifetime ownership</p>
        </div>
    )
}

export default Contact;