import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Button from './Button';

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <motion.form 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="bg-dark-200 rounded-lg p-6 shadow-lg border border-dark-300"
    >
      {formStatus === 'success' ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-success-900/20 border border-success-700 text-success-300 p-4 rounded-md mb-6"
        >
          <p>Your message has been sent successfully. We'll get back to you soon!</p>
        </motion.div>
      ) : formStatus === 'error' ? (
        <div className="bg-error-900/20 border border-error-700 text-error-300 p-4 rounded-md mb-6">
          <p>There was an error sending your message. Please try again.</p>
        </div>
      ) : null}
      
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-300 mb-2">
          {t('contact.form.name')}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-dark-300 border border-dark-400 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-white"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-300 mb-2">
          {t('contact.form.email')}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-dark-300 border border-dark-400 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-white"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-300 mb-2">
          {t('contact.form.message')}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 bg-dark-300 border border-dark-400 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-white resize-none"
        />
      </div>
      
      <Button 
        type="submit" 
        variant="primary" 
        size="lg"
        className="w-full"
      >
        {formStatus === 'submitting' ? (
          <span className="flex items-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : (
          t('contact.form.submit')
        )}
      </Button>
    </motion.form>
  );
};

export default ContactForm;