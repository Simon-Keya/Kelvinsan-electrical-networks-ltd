'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: ReactNode;
  cta: string;
}

export const ServiceCard = ({ title, description, image, icon, cta }: ServiceCardProps) => {
  return (
    <div className="relative group overflow-hidden rounded-xl shadow-lg bg-white text-gray-800 hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2">
      
      {/* Service Image */}
      <div className="relative h-40 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center group-hover:scale-110 transition-transform duration-300 ease-in-out"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div className="flex items-center gap-3">
          {icon}
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-sm text-gray-600">{description}</p>

        <Link href="/contact">
          <button className="mt-3 inline-block text-sm text-teal-600 font-semibold hover:underline">
            {cta} →
          </button>
        </Link>
      </div>
    </div>
  );
};
