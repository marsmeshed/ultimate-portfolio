import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="contact-form">
      {sent ? (
        <h2>Message Sent!</h2>
      ) : (
        <div>
          <h2>Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Contact;