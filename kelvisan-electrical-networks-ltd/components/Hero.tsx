'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';

export const Hero = () => {
  return (
    <section className="bg-base-100 min-h-screen flex items-center justify-center py-16">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-12 gap-12">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6"
        >
          {/* Stagnant Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-black">
            Empowering Your Future with Reliable Networks and Innovative Software
          </h1>

          {/* Typing Text */}
          <h2 className="text-2xl md:text-3xl font-semibold text-black">
            We specialize in{' '}
            <span className="text-blue-800">
              <Typewriter
                words={[
                  'Electrical Installations',
                  'Software Development',
                  'CCTV & Security Systems',
                  'Smart Networking Solutions',
                  'Power Backup Systems',
                  'IT Infrastructure Management',
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>

          <p className="text-gray-700 text-lg md:text-xl">
            At <span className="font-semibold text-blue-700">Kelvinsan Electrical Networks Ltd</span>, we design, implement, and manage top-quality electrical networking and software solutions tailored to elevate your business and ensure long-term efficiency.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/services"
              className="px-6 py-3 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition duration-300 shadow-md"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg border-2 border-blue-700 text-blue-700 font-semibold hover:bg-blue-700 hover:text-white transition duration-300 shadow-md"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>

        {/* Right Content (Image) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <Image
            src="/hero-image.svg"
            alt="Electrical Networks and Software Development"
            width={500}
            height={500}
            className="w-full max-w-md"
          />
        </motion.div>

      </div>
    </section>
  );
};
