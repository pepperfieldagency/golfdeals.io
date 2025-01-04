import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { submitContactForm } from '../../services/contactService';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      await submitContactForm(formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const inputClasses = `
    block w-full px-4 py-3 rounded-lg
    border-2 border-gray-200
    bg-gray-50
    focus:bg-white
    focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200
    transition-all duration-200
    placeholder:text-gray-400
    text-gray-900
    [&_option[value=""]]:text-gray-400
  `;

  const labelClasses = `
    block text-sm font-medium text-gray-700 mb-1.5
  `;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className={labelClasses}>
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClasses}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className={labelClasses}>
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className={`${inputClasses} ${!formData.subject && 'text-gray-400'}`}
          >
            <option value="" className="text-gray-400">Select a subject</option>
            <option value="general" className="text-gray-900">General Inquiry</option>
            <option value="support" className="text-gray-900">Customer Support</option>
            <option value="partnership" className="text-gray-900">Partnership Opportunity</option>
            <option value="feedback" className="text-gray-900">Feedback</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className={labelClasses}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="How can we help you?"
            value={formData.message}
            onChange={handleChange}
            className={`${inputClasses} resize-none`}
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="
              w-full flex items-center justify-center gap-2 
              px-6 py-3.5 
              text-base font-medium text-white
              bg-gradient-to-r from-emerald-500 to-emerald-600
              hover:from-emerald-600 hover:to-emerald-700
              rounded-lg shadow-lg hover:shadow-xl
              transform hover:scale-[1.02]
              transition-all duration-200
              disabled:opacity-50 disabled:cursor-not-allowed
              disabled:hover:scale-100
            "
          >
            {status === 'submitting' ? (
              'Sending...'
            ) : (
              <>
                Send Message
                <Send className="h-5 w-5" />
              </>
            )}
          </button>
        </div>

        {status === 'success' && (
          <div className="p-4 bg-emerald-50 text-emerald-700 rounded-lg text-center border border-emerald-200">
            Thank you for your message! We'll get back to you soon.
          </div>
        )}

        {status === 'error' && (
          <div className="p-4 bg-red-50 text-red-700 rounded-lg text-center border border-red-200">
            Something went wrong. Please try again later.
          </div>
        )}
      </form>
    </div>
  );
}