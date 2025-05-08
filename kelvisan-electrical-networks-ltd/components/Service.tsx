'use client';

import Image from 'next/image';
import { ServiceCard } from './ServiceCard';

export function Services() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 shadow-lg border-b-4 border-blue-200 overflow-hidden" id="services">
      
      {/* ✅ Background Image Wrapper */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/service.jpg"
          alt="Services Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* ✅ Content Wrapper */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12 border-b-4 border-white inline-block pb-2">
          Our Services
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            title="Electrical Installations"
            description="Expert residential, commercial, and industrial electrical wiring and power systems installations."
            image="/services/electrical.jpg"
          />
          <ServiceCard
            title="Power Backup Systems"
            description="Reliable inverter systems, UPS solutions, and solar power installations to keep you powered."
            image="/services/power-backup.jpg"
          />
          <ServiceCard
            title="Network Installations"
            description="Secure and scalable structured cabling, WiFi, and enterprise networking solutions."
            image="/services/networking.jpg"
          />
          <ServiceCard
            title="Software Development"
            description="Custom-built software, web applications, and IT consultancy tailored for your business."
            image="/services/software.jpg"
          />
        </div>
      </div>

    </section>
  );
}
