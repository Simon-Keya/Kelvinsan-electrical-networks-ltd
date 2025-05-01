'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export const About = () => {
  return (
    <section className="min-h-screen py-16 bg-gray-300"> {/* Light blue background */}
      <div className="container mx-auto px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-black mb-12"
        >
          About Kelvinsan Electrical Networks Ltd
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <Image
              src="/about.jpg"
              alt="About Kelvinsan Electrical Networks Ltd"
              width={500}
              height={500}
              className="rounded-xl shadow-2xl max-w-full object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6 text-gray-800"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black border-b-2 border-blue-500 pb-2">
              Who We Are
            </h2>
            <p className="text-lg leading-relaxed text-gray-800">
              <span className="font-semibold text-blue-700">Kelvinsan Electrical Networks Ltd</span> is a leading provider of comprehensive electrical, networking, and software solutions based in Kenya. Since our inception, we have committed ourselves to delivering top-notch services that combine innovation, reliability, and long-term value for both businesses and individuals.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-black border-b-2 border-blue-500 pb-2 mt-6">
              What We Do
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-800">
              <li><span className="font-semibold text-blue-700">Electrical Installations</span> — Residential, commercial, and industrial wiring and power systems</li>
              <li><span className="font-semibold text-blue-700">CCTV & Security Systems</span> — Advanced surveillance and monitoring solutions</li>
              <li><span className="font-semibold text-blue-700">Smart Networking Solutions</span> — Structured cabling, WiFi, and enterprise networks</li>
              <li><span className="font-semibold text-blue-700">Software Development</span> — Custom software, web applications, and IT consultancy</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
