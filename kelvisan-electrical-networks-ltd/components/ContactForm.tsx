'use client';

import { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-base-200 py-20 px-6">
      <div className="w-full max-w-2xl bg-base-100 p-10 rounded-3xl shadow-2xl">
        <h2 className="text-4xl font-extrabold text-center text-primary mb-8 tracking-tight">
          Get in Touch
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-6 text-black">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold text-black">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              className="input input-bordered w-full text-black bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold text-black">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="input input-bordered w-full text-black bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold text-black">Message</span>
            </label>
            <textarea
              name="message"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
              required
              className="textarea textarea-bordered w-full text-black bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              rows={6}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full font-bold text-lg py-3 tracking-wide uppercase hover:scale-105 transition-transform duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
