//  contact js file
//  Vishva Patel 
//  301302055
//  28-09-2024
import React, { useState } from 'react';

export default function Contact() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message Sent!');
  };



  return (

    <div className="contact">

      <div className="contact-info-panel">
        <h4>Contact Info</h4>
        <hr></hr>
        <h5><strong>Phone:</strong> (647) 710-8604</h5>
        <h5><strong>Email:</strong> vishvapatel59267@gmail.com</h5>
      </div>
      <h1>Get in Touch</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <textarea name="message" placeholder="Message" onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );


}

