'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    message: '',
    inquiryType: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // Postgres columns are lowercase by default if created unquoted.
    // Mapping inquiryType to inquirytype.
    const submissionData = {
      fname: formData.fname,
      lname: formData.lname,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      inquirytype: formData.inquiryType 
    };

    const { error } = await supabase
      .from('contact_requests')
      .insert([submissionData]);

    if (error) {
      console.error('Error submitting form:', error);
      setStatus('Error sending message. Please try again.');
    } else {
      setStatus('Message sent successfully!');
      setFormData({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        message: '',
        inquiryType: ''
      });
    }
  };

  return (
    <div className="contact-us-form">
      <div className="section-title">
        <h2 className="text-anime-style-2" data-cursor="-opaque">Contact <span>me</span></h2>
      </div>

      <div className="contact-form">
        {/* Contact Form Start */}
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
              <select 
                name="inquiryType" 
                className="form-control" 
                id="inquiryType" 
                required
                value={formData.inquiryType}
                onChange={handleChange}
              >
                <option value="" disabled>Select Category</option>
                <option value="Products">Products</option>
                <option value="Services">Services</option>
                <option value="Training">Training</option>
              </select>
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
              <button type="submit" className="btn-default"><span>submit message</span></button>
              <div id="msgSubmit" className="h3 text-center hidden"></div>
              {status && <div className="h3 text-center">{status}</div>}
            </div>
          </div>
        </form>
        {/* Contact Form End */}
      </div>
    </div>
  );
}
