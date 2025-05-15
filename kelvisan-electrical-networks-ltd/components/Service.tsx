'use client';

import {
  BoltIcon,
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
  LightBulbIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { ServiceCard } from './ServiceCard';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const electricalServices = [
  {
    title: 'Electrical Installations',
    description: 'Comprehensive electrical wiring, lighting, and panel installations for residential, commercial, and industrial properties—ensuring safety, compliance, and durability.',
    image: '/services/electrical.jpg',
    icon: <BoltIcon className="w-8 h-8 text-yellow-400" />,
  },
  {
    title: 'Power Backup Systems',
    description: 'Tailored inverter systems, high-capacity UPS units, and solar power installations to guarantee uninterrupted power supply during outages and emergencies.',
    image: '/services/power-backup.jpg',
    icon: <ShieldCheckIcon className="w-8 h-8 text-green-400" />,
  },
  {
    title: 'Electrical Maintenance',
    description: 'Regular inspections, preventive maintenance, and troubleshooting services to enhance the lifespan and safety of your electrical infrastructure.',
    image: '/services/maintenance.jpg',
    icon: <WrenchScrewdriverIcon className="w-8 h-8 text-orange-400" />,
  },
];

const networkingServices = [
  {
    title: 'Network Installations',
    description: 'Robust structured cabling, enterprise-grade WiFi, and network security solutions to keep your organization reliably connected and secure.',
    image: '/services/networking.jpg',
    icon: <GlobeAltIcon className="w-8 h-8 text-blue-400" />,
  },
  {
    title: 'Server & Data Solutions',
    description: 'Installation and management of cloud servers, on-premises databases, and scalable storage solutions to streamline your business operations.',
    image: '/services/server.jpg',
    icon: <ServerStackIcon className="w-8 h-8 text-purple-400" />,
  },
  {
    title: 'IT Support & Consultancy',
    description: 'Proactive IT support, cybersecurity audits, and strategic consultancy to optimize your technology stack and safeguard your digital assets.',
    image: '/services/it-support.jpg',
    icon: <ChatBubbleLeftRightIcon className="w-8 h-8 text-cyan-400" />,
  },
];

const softwareServices = [
  {
    title: 'Custom Software Development',
    description: 'Bespoke software, web applications, and mobile apps designed to automate workflows, enhance customer experience, and scale with your business.',
    image: '/services/software.jpg',
    icon: <SparklesIcon className="w-8 h-8 text-pink-400" />,
  },
  {
    title: 'Smart Home & IoT Solutions',
    description: 'Integration of smart devices, automation systems, and IoT networks that offer convenience, energy efficiency, and enhanced security for modern living.',
    image: '/services/smart-home.jpg',
    icon: <LightBulbIcon className="w-8 h-8 text-lime-400" />,
  },
];

export function Services() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden"
      id="services"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/service.jpg"
          alt="Services Background"
          className="w-full h-full object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
          variants={fadeInUp}
          custom={0}
        >
          Our Services
        </motion.h2>

        <motion.p
          className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 mb-14"
          variants={fadeInUp}
          custom={1}
        >
          At Kelvinsan, we blend cutting-edge technology with hands-on expertise to deliver reliable, scalable, and innovative solutions for homes, businesses, and industries...
        </motion.p>

        {/* ✅ Electrical Solutions */}
        <motion.div variants={fadeInUp} custom={2}>
          <h3 className="text-2xl font-semibold mb-6 text-blue-200 underline underline-offset-4">
            Electrical Solutions
          </h3>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {electricalServices.map((service, i) => (
            <motion.div key={service.title} variants={fadeInUp} custom={i + 3}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>

        {/* ✅ IT & Networking Solutions */}
        <motion.div variants={fadeInUp} custom={6}>
          <h3 className="text-2xl font-semibold mb-6 text-blue-200 underline underline-offset-4">
            IT & Networking Solutions
          </h3>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {networkingServices.map((service, i) => (
            <motion.div key={service.title} variants={fadeInUp} custom={i + 7}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>

        {/* ✅ Software Development */}
        <motion.div variants={fadeInUp} custom={10}>
          <h3 className="text-2xl font-semibold mb-6 text-blue-200 underline underline-offset-4">
            Software & Innovation
          </h3>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {softwareServices.map((service, i) => (
            <motion.div key={service.title} variants={fadeInUp} custom={i + 11}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>

        {/* ✅ Divider & CTA */}
        <motion.div
          variants={fadeInUp}
          custom={13}
          className="mt-20 border-t border-white/30 w-2/3 mx-auto opacity-50"
        />
        <motion.p
          className="mt-10 text-lg text-gray-300 max-w-2xl mx-auto"
          variants={fadeInUp}
          custom={14}
        >
          Ready to power up your project, connect your business, or go digital? Our experts are here to bring your ideas to life — efficiently and affordably.
        </motion.p>
        <motion.a href="/contact" variants={fadeInUp} custom={15}>
          <button className="mt-6 bg-teal-400 hover:bg-teal-500 text-black font-semibold px-8 py-3 rounded-full transition duration-300 shadow-lg">
            Contact Us Today
          </button>
        </motion.a>
      </div>
    </motion.section>
  );
}
