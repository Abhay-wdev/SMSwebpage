'use client';

import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2, Smartphone } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const ContactForm = () => {
 
  const WEB3FORMS_API_KEY = '7b7f830a-9a11-433c-ade7-ff1a7129773d';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_API_KEY,
          ...formData
        })
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          submitting: false,
          submitted: true,
          error: null
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to submit form. Please try again.'
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
       

      <AnimatePresence>
        {status.submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3 mb-4"
          >
            <CheckCircle className="w-5 h-5 text-green-500" />
            <p className="text-green-800">Message sent successfully! We'll be in touch soon.</p>
          </motion.div>
        )}

        {status.error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3 mb-4"
          >
            <AlertCircle className="w-5 h-5 text-red-500" />
            <p className="text-red-800">{status.error}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
          />
        </div>

        <div className="relative">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
            className="w-full px-4 py-3 pl-11 rounded-lg border border-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
          />
          <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
        </div>

        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows={6}
          className="w-full px-4 py-3 rounded-lg border border-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none"
        />

        <button
          type="submit"
          disabled={status.submitting}
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-8 rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {status.submitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
