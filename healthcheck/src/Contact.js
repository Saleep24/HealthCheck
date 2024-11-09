// src/Contact.js

import React, { useState } from 'react';
import './Contact.css'; // Import CSS for styling

function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setIsError(false);
        setIsSuccess(false);

        const form = event.target;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/mayznvpp", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setIsSuccess(true);
                form.reset();
            } else {
                setIsError(true);
            }
        } catch (error) {
            setIsError(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            
            <form id="contactForm" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    minLength="2"
                    required
                />
                <input
                    type="email"
                    name="_replyto"
                    placeholder="Your Email"
                    required
                />
                <input
                    type="text"
                    name="_subject"
                    placeholder="Subject"
                />
                <textarea
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    required
                ></textarea>
                
                <button type="submit" className="btn" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {/* Loader */}
                {isSubmitting && (
                    <div id="submit-loader">
                        <div className="text-loader">Sending...</div>
                        <div className="s-loader">
                            <div className="bounce1"></div>
                            <div className="bounce2"></div>
                            <div className="bounce3"></div>
                        </div>
                    </div>
                )}
            </form>

            {/* Message Status */}
            {isError && (
                <div id="message-warning">
                    Something went wrong. Please try again.
                </div>
            )}
            {isSuccess && (
                <div id="message-success">
                    <i className="fa fa-check"></i> Your message was sent, thank you!
                </div>
            )}
        </div>
    );
}

export default Contact;
