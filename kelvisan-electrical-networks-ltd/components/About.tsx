'use client';

import { CheckCircleIcon, EyeIcon, LightBulbIcon, StarIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Link from 'next/link';

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

        {/* Who We Are */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-gray-900 max-w-5xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold border-b-2 border-gray-300 pb-2">
            Who Are We
          </h2>
          <p className="text-lg leading-relaxed">
            <span className="font-semibold text-gray-800">Kelvinsan Electrical Networks Ltd</span> is a leading provider of comprehensive electrical, networking, and software solutions based in Kenya. Since our inception, we have committed ourselves to delivering top-notch services that combine innovation, reliability, and long-term value for both businesses and individuals.
          </p>
          <p className="text-lg leading-relaxed">
            Our team consists of certified engineers, software developers, and network technicians who collaborate to provide seamless project execution, from consultation and design to implementation and support.
          </p>
        </motion.div>

        {/* Mission, Vision, Core Values */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              title: 'Our Mission',
              icon: LightBulbIcon,
              text: 'Empower businesses and individuals through innovative electrical, networking, and software solutions that ensure efficiency, security, and sustainable growth.',
            },
            {
              title: 'Our Vision',
              icon: EyeIcon,
              text: 'To be East Africa’s most trusted provider of cutting-edge infrastructure solutions — setting new benchmarks in innovation, quality, and reliability.',
            },
            {
              title: 'Our Core Values',
              icon: StarIcon,
              text: (
                <ul className="space-y-1 text-left">
                  <li>✓ Integrity</li>
                  <li>✓ Innovation</li>
                  <li>✓ Excellence</li>
                  <li>✓ Customer-Centric Approach</li>
                </ul>
              ),
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-teal-200 border border-gray-200 rounded-lg shadow hover:shadow-lg p-6 text-center transition duration-300"
            >
              <item.icon className="w-8 h-8 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <div className="text-gray-700 text-base">{item.text}</div>
            </motion.div>
          ))}
        </div>

        {/* Achievements and Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-6">
            Certifications & Achievements
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4 text-lg text-gray-800 list-disc list-inside">
            <li>Licensed by Kenya Energy Regulatory Authority</li>
            <li>Certified Cisco Network Professionals (CCNP)</li>
            <li>ISO 9001:2015 Quality Management Compliance</li>
          </ul>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col-reverse lg:flex-row items-center gap-12"
        >
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-900 leading-relaxed">
              With a passion for excellence and a commitment to innovation, we deliver results that exceed expectations.
            </p>
            <ul className="space-y-2 text-gray-900">
              <li><CheckCircleIcon className="inline w-5 h-5 mr-2 text-blue-600" />5+ years of industry experience</li>
              <li><CheckCircleIcon className="inline w-5 h-5 mr-2 text-blue-600" />Fully certified, insured, and licensed</li>
              <li><CheckCircleIcon className="inline w-5 h-5 mr-2 text-blue-600" />24/7 customer support availability</li>
              <li><CheckCircleIcon className="inline w-5 h-5 mr-2 text-blue-600" />Client-first project approach</li>
            </ul>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/contact">
                <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300 shadow">
                  Contact Us
                </button>
              </Link>
              <Link href="/services">
                <button className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded hover:bg-blue-50 transition duration-300 shadow">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 overflow-hidden rounded-lg shadow-lg group">
            <img
              src="/company-team.jpg"
              alt="Our Team"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
