import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(process.env.REACT_APP_EMAIL_JS_SERVICE_ID, process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY).then(
      () => {
        setLoading(false);
        setIsFormSubmitted(true);
      },
      (error) => {
        setLoading(false);
        setError('Server error');
        console.log(error.text);
      }
    );
  };

  return (
    <>
      {!isFormSubmitted && <h2 className="head-text">Take a coffee & chat with me</h2>}
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:contact@islamdudaev.com" className="p-text">
            contact@islamdudaev.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.location} alt="location" />
          <span className="p-text">Glasgow, United Kingdom</span>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form className="app__footer-form app__flex" ref={form} onSubmit={handleSubmit}>
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="user_name" required />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="user_email" required />
          </div>
          <div>
            <textarea className="p-text" placeholder="Your Message" name="message" required />
          </div>
          <button type="submit" className="p-text">
            {!loading ? 'Send Message' : 'Sending...'}
            {error}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg');
