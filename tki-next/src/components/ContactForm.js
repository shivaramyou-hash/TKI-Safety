'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState(null); // null, 'submitting', 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setStatus('success');
      // Reset form after a brief delay or immediately
      setFormData({ fname: '', lname: '', email: '', phone: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus(null), 5000);
    }, 1500);
  };

  return (
    <form id="contactForm" onSubmit={handleSubmit} className="wow fadeInUp" data-wow-delay="0.5s">
      <div className="row">
        <div className="form-group col-md-6 mb-4">
          <input 
            type="text" 
            name="fname" 
            className="form-control" 
            id="fname" 
            placeholder="Enter first name" 
            required 
            value={formData.fname}
            onChange={handleChange}
          />
          <div className="help-block with-errors"></div>
        </div>

        <div className="form-group col-md-6 mb-4">
          <input 
            type="text" 
            name="lname" 
            className="form-control" 
            id="lname" 
            placeholder="Enter last name" 
            required 
            value={formData.lname}
            onChange={handleChange}
          />
          <div className="help-block with-errors"></div>
        </div>

        <div className="form-group col-md-12 mb-4">
          <input 
            type="email" 
            name="email" 
            className="form-control" 
            id="email" 
            placeholder="Enter your e-mail" 
            required 
            value={formData.email}
            onChange={handleChange}
          />
          <div className="help-block with-errors"></div>
        </div>

        <div className="form-group col-md-12 mb-4">
          <input 
            type="text" 
            name="phone" 
            className="form-control" 
            id="phone" 
            placeholder="Enter your phone no." 
            required 
            value={formData.phone}
            onChange={handleChange}
          />
          <div className="help-block with-errors"></div>
        </div>

        <div className="form-group col-md-12 mb-5">
          <textarea 
            name="message" 
            className="form-control" 
            id="message" 
            rows="4" 
            placeholder="Write Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <div className="help-block with-errors"></div>
        </div>

        <div className="col-md-12">
          <button type="submit" className="btn-default" disabled={status === 'submitting'}>
            <span>{status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'submit message'}</span>
          </button>
          <div id="msgSubmit" className="h3 hidden"></div>
        </div>
      </div>
    </form>
  );
}
