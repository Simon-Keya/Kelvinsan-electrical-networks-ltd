'use client';

import { ServiceCard } from './ServiceCard';

export function Services() {
  return (
    <section className="py-20 bg-sky-50" id="services">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-12 border-b-4 border-blue-500 inline-block pb-2">
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
