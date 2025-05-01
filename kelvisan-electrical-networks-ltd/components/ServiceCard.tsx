'use client';

import Image from 'next/image';

export interface ServiceCardProps {
  title: string;
  description: string;
  image: string; // ✅ Switched from 'icon' to 'image'
}

export function ServiceCard({ title, description, image }: ServiceCardProps) {
  return (
    <div className="card w-full bg-sky-50 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 p-4">
      <div className="w-full h-48 relative mb-4">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <h3 className="text-2xl font-bold text-blue-700 mb-2">{title}</h3>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
  );
}
