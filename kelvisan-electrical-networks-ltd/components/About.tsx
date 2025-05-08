'use client';

import { EyeIcon, LightBulbIcon, StarIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section className="min-h-screen py-16 bg-sky-100">
      <div className="container mx-auto px-6 md:px-12">

        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12"
        >
          Our Company
        </motion.h1>

        {/* Who We Are Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-gray-900 max-w-5xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">
            Who Are We
          </h2>
          <p className="text-lg leading-relaxed">
            <span className="font-semibold text-gray-800">Kelvinsan Electrical Networks Ltd</span> is a leading provider of comprehensive electrical, networking, and software solutions based in Kenya. Since our inception, we have committed ourselves to delivering top-notch services that combine innovation, reliability, and long-term value for both businesses and individuals.
          </p>
        </motion.div>

        {/* Mission, Vision, Core Values */}
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          {[
            {
              title: 'Our Mission',
              icon: <LightBulbIcon className="w-4 h-4 text-gray-700 group-hover:text-blue-500 transition duration-300 mb-2" />,
              text: 'Empower businesses and individuals through innovative electrical, networking, and software solutions that ensure efficiency, security, and sustainable growth.',
            },
            {
              title: 'Our Vision',
              icon: <EyeIcon className="w-4 h-4 text-gray-700 group-hover:text-blue-500 transition duration-300 mb-2" />,
              text: 'To be East Africa’s most trusted provider of cutting-edge electrical and IT infrastructure solutions — setting new standards in quality, innovation, and customer satisfaction.',
            },
            {
              title: 'Our Core Values',
              icon: <StarIcon className="w-4 h-4 text-gray-700 group-hover:text-blue-500 transition duration-300 mb-2" />,
              text: (
                <ul className="space-y-1 text-left text-gray-900">
                  <li>✓ Integrity</li>
                  <li>✓ Innovation</li>
                  <li>✓ Excellence</li>
                  <li>✓ Customer Focus</li>
                </ul>
              ),
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex-1 bg-teal-200 border border-gray-200 hover:border-blue-400 hover:bg-teal-200 shadow hover:shadow-xl transition-all duration-300 group rounded-none"
            >
              <div className="p-6 flex flex-col items-center text-center space-y-2 h-full">
                {card.icon}
                <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                <p className="text-gray-900 text-base leading-relaxed">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col-reverse lg:flex-row items-center gap-12 mb-20"
        >
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-900 leading-relaxed">
              Choosing Kelvinsan Electrical Networks Ltd means partnering with a team that is passionate about delivering quality, reliability, and innovation. Here’s what sets us apart:
            </p>
            <ul className="space-y-2 text-gray-900 list-disc list-inside">
              <li>✅ Proven track record of successful projects</li>
              <li>✅ Highly qualified and certified professionals</li>
              <li>✅ End-to-end solutions from consultation to execution</li>
              <li>✅ Commitment to customer satisfaction and long-term support</li>
            </ul>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300 shadow">
                Contact Us
              </button>
              <button className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded hover:bg-blue-50 transition duration-300 shadow">
                Learn More
              </button>
            </div>
          </div>

          {/* Image with subtle hover zoom effect */}
          <div className="flex-1 overflow-hidden rounded-lg shadow-lg group">
            <img
              src="/company-team.jpg" // Replace with your actual image path
              alt="Our Team at Work"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
