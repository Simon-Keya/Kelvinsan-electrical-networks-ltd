'use client';

import { BoltIcon, ChatBubbleLeftRightIcon, GlobeAltIcon, LightBulbIcon, ServerStackIcon, ShieldCheckIcon, SparklesIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { ServiceCard } from './ServiceCard';

export function Services() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden"
      id="services"
    >
      {/* ✅ Background Image with Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/service.jpg"
          alt="Services Background"
          fill
          priority
          className="object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
      </div>

      {/* ✅ Content Wrapper */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Our Services
        </h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 mb-14">
          At Kelvinsan, we blend cutting-edge technology with hands-on expertise to deliver reliable, scalable, and innovative solutions for homes, businesses, and industries. Our team of certified professionals ensures each service meets the highest standards of safety, efficiency, and performance.
        </p>

        {/* ✅ ELECTRICAL SOLUTIONS */}
        <h3 className="text-2xl font-semibold mb-6 text-blue-200 underline underline-offset-4">
          Electrical Solutions
        </h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          <ServiceCard
            title="Electrical Installations"
            description="Comprehensive electrical wiring, lighting, and panel installations for residential, commercial, and industrial properties—ensuring safety, compliance, and durability."
            image="/services/electrical.jpg"
            icon={<BoltIcon className="w-8 h-8 text-yellow-400" />}
            cta="Learn More"
          />
          <ServiceCard
            title="Power Backup Systems"
            description="Tailored inverter systems, high-capacity UPS units, and solar power installations to guarantee uninterrupted power supply during outages and emergencies."
            image="/services/power-backup.jpg"
            icon={<ShieldCheckIcon className="w-8 h-8 text-green-400" />}
            cta="Explore Options"
          />
          <ServiceCard
            title="Electrical Maintenance"
            description="Regular inspections, preventive maintenance, and troubleshooting services to enhance the lifespan and safety of your electrical infrastructure."
            image="/services/maintenance.jpg"
            icon={<WrenchScrewdriverIcon className="w-8 h-8 text-orange-400" />}
            cta="Book Now"
          />
        </div>

        {/* ✅ IT & NETWORKING SOLUTIONS */}
        <h3 className="text-2xl font-semibold mb-6 text-blue-200 underline underline-offset-4">
          IT & Networking Solutions
        </h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          <ServiceCard
            title="Network Installations"
            description="Robust structured cabling, enterprise-grade WiFi, and network security solutions to keep your organization reliably connected and secure."
            image="/services/networking.jpg"
            icon={<GlobeAltIcon className="w-8 h-8 text-blue-400" />}
            cta="Get Connected"
          />
          <ServiceCard
            title="Server & Data Solutions"
            description="Installation and management of cloud servers, on-premises databases, and scalable storage solutions to streamline your business operations."
            image="/services/server.jpg"
            icon={<ServerStackIcon className="w-8 h-8 text-purple-400" />}
            cta="Discover More"
          />
          <ServiceCard
            title="IT Support & Consultancy"
            description="Proactive IT support, cybersecurity audits, and strategic consultancy to optimize your technology stack and safeguard your digital assets."
            image="/services/it-support.jpg"
            icon={<ChatBubbleLeftRightIcon className="w-8 h-8 text-cyan-400" />}
            cta="Consult Now"
          />
        </div>

        {/* ✅ SOFTWARE DEVELOPMENT SOLUTIONS */}
        <h3 className="text-2xl font-semibold mb-6 text-blue-200 underline underline-offset-4">
          Software & Innovation
        </h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          <ServiceCard
            title="Custom Software Development"
            description="Bespoke software, web applications, and mobile apps designed to automate workflows, enhance customer experience, and scale with your business."
            image="/services/software.jpg"
            icon={<SparklesIcon className="w-8 h-8 text-pink-400" />}
            cta="Start Building"
          />
          <ServiceCard
            title="Smart Home & IoT Solutions"
            description="Integration of smart devices, automation systems, and IoT networks that offer convenience, energy efficiency, and enhanced security for modern living."
            image="/services/smart-home.jpg"
            icon={<LightBulbIcon className="w-8 h-8 text-lime-400" />}
            cta="See Solutions"
          />
        </div>

        {/* ✅ Decorative Divider */}
        <div className="mt-20 border-t border-white/30 w-2/3 mx-auto opacity-50"></div>

        {/* ✅ Final CTA */}
        <p className="mt-10 text-lg text-gray-300 max-w-2xl mx-auto">
          Ready to power up your project, connect your business, or go digital? Our experts are here to bring your ideas to life — efficiently and affordably.
        </p>
        <a href="/contact">
          <button className="mt-6 bg-teal-400 hover:bg-teal-500 text-black font-semibold px-8 py-3 rounded-full transition duration-300 shadow-lg">
            Contact Us Today
          </button>
        </a>
      </div>
    </section>
  );
}
