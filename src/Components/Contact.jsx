import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">

        {/* Left Side: Contact Info */}
        <div className="contact-info-panel">
          <h1>Get in<br />Touch.</h1>
          <p className="contact-subtext">Have a question or need help with a custom order? Our team is always here to assist you.</p>

          <div className="info-block">
            <h4>Address</h4>
            <p>Emerald Complex,<br />South Bazar, Kannur - 670002 </p>
          </div>

          <div className="info-block">
            <h4>Contact Details</h4>
            <p>Phone: +91 9633 01 2939<br />Email: colordropknr@gmail.com</p>
          </div>

          <div className="info-block">
            <h4>Business Hours</h4>
            <p>Mon - Sat: 9:00 AM - 6:00 PM<br />Sun: Closed</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="contact-form-panel">
          <h2>Send us a Message</h2>
          <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }}>
            <div className="input-row">
              <div className="input-group">
                <label>First Name</label>
                <input type="text" placeholder="John" required />
              </div>
              <div className="input-group">
                <label>Last Name</label>
                <input type="text" placeholder="Doe" required />
              </div>
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" required />
            </div>

            <div className="input-group">
              <label>Subject</label>
              <input type="text" placeholder="How can we help?" required />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea placeholder="Write your message here..." rows="5" required></textarea>
            </div>

            <button type="submit" className="submit-btn">SEND MESSAGE</button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;