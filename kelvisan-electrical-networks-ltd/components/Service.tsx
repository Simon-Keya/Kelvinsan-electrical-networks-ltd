'use client';

import { FaLaptopCode, FaNetworkWired, FaServer } from 'react-icons/fa';
import { ServiceCard } from './ServiceCard';

export function Services() {
  return (
    <section className="py-20 bg-base-200" id="services">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-primary mb-12">
          Our Services
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          <ServiceCard
            title="Network Installation"
            description="We design and install secure, scalable, and efficient network infrastructures for your business."
            icon={<FaNetworkWired />}
          />
          <ServiceCard
            title="Software Development"
            description="Custom software solutions tailored to meet your business's unique needs and goals."
            icon={<FaLaptopCode />}
          />
          <ServiceCard
            title="Server Management"
            description="Reliable server setup, management, and maintenance services to ensure maximum uptime."
            icon={<FaServer />}
          />
        </div>
      </div>
    </section>
  );
}
