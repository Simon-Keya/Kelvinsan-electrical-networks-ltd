'use client';

import { EnvelopeIcon, PencilSquareIcon, UserIcon } from '@heroicons/react/24/outline';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const SERVICE_ID = 'service_w0vaxqh';
  const TEMPLATE_ID = 'template_3qekbzp';
  const USER_ID = 'NiawJSFgdDfxZx5Wa';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }

    setError('');
    setLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then(() => {
        toast.success('Message sent successfully! 🚀');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        toast.error('Failed to send message. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-20 px-6 animate-fadeIn">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full max-w-3xl bg-white/40 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-10 md:p-14 transition-all duration-300">
        <h2 className="text-4xl font-extrabold text-center text-black text-primary mb-8 tracking-tight drop-shadow-lg">
          Get in Touch
        </h2>
        <p className="text-center text-gray-700 text-lg mb-10 max-w-xl mx-auto">
          We would love to hear from you! Whether you have a question, a project idea, or just want to say hello — drop us a message below and we will get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8 text-black">
          {/* Floating Name Field */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="peer w-full pl-12 pr-4 pt-5 pb-2 rounded-xl bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm placeholder-transparent transition"
              placeholder="Your Name"
            />
            <UserIcon className="absolute left-4 top-4 w-5 h-5 text-primary" />
            <label className="absolute left-12 top-2 text-gray-600 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-600">
              Your Name
            </label>
          </div>

          {/* Floating Email Field */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="peer w-full pl-12 pr-4 pt-5 pb-2 rounded-xl bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm placeholder-transparent transition"
              placeholder="you@example.com"
            />
            <EnvelopeIcon className="absolute left-4 top-4 w-5 h-5 text-primary" />
            <label className="absolute left-12 top-2 text-gray-600 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-600">
              Email Address
            </label>
          </div>

          {/* Floating Message Field */}
          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="peer w-full pl-12 pr-4 pt-5 pb-2 rounded-xl bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm placeholder-transparent transition resize-none"
              placeholder="Your message..."
            />
            <PencilSquareIcon className="absolute left-4 top-4 w-5 h-5 text-primary" />
            <label className="absolute left-12 top-2 text-gray-600 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-600">
              Your Message
            </label>
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm font-semibold text-center animate-pulse">
              {error}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading ? 'opacity-60 cursor-not-allowed' : ''
            } bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white font-bold text-lg py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 tracking-wider`}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}
