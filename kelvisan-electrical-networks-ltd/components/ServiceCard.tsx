'use client';

import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactElement; // ✅ Make sure this line exists
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="card w-full bg-base-100 shadow-xl p-6 hover:scale-105 transition-transform duration-300">
      <div className="flex items-center space-x-4 mb-4">
        <div className="text-primary text-4xl">{icon}</div>
        <h3 className="text-2xl font-bold text-black">{title}</h3>
      </div>
      <p className="text-base-content">{description}</p>
    </div>
  );
}
