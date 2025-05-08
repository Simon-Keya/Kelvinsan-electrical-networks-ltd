'use client';

import { EnvelopeIcon, PencilSquareIcon, UserIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }

    console.log(formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
    setError('');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-20 px-6 animate-fadeIn">
      <div className="w-full max-w-3xl bg-white/40 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-10 md:p-14 transition-all duration-300">
        <h2 className="text-4xl font-extrabold text-center text-black text-primary mb-8 tracking-tight drop-shadow-lg">
          Get in Touch
        </h2>
        <p className="text-center text-gray-700 text-lg mb-10 max-w-xl mx-auto">
          We would love to hear from you! Whether you have a question, a project idea, or just want to say hello — drop us a message below and we will get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 text-black">
          {/* Name Field */}
          <div className="relative">
            <UserIcon className="absolute left-4 top-3.5 w-5 h-5 text-primary" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm placeholder-gray-500 transition"
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <EnvelopeIcon className="absolute left-4 top-3.5 w-5 h-5 text-primary" />
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm placeholder-gray-500 transition"
            />
          </div>

          {/* Message Field */}
          <div className="relative">
            <PencilSquareIcon className="absolute left-4 top-4 w-5 h-5 text-primary" />
            <textarea
              name="message"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm placeholder-gray-500 transition resize-none"
            />
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
            className="w-full bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white font-bold text-lg py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 tracking-wider"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
