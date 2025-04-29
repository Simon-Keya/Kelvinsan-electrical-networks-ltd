'use client';

import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className="navbar bg-blue-100 shadow-md px-6 py-3 text-gray-800 flex justify-between items-center">
      
      {/* Left: Logo/Title */}
      <div>
        <Link href="/" className="btn btn-ghost text-3xl text-blue-800 font-extrabold tracking-wide">
          Kelvinsan
        </Link>
      </div>

      {/* Center: Navigation Links in a Row */}
      <div className="hidden md:flex gap-10 text-lg font-medium">
        <Link href="/projects" className="hover:text-blue-700 transition">Projects</Link>
        <Link href="/services" className="hover:text-blue-700 transition">Services</Link>
        <Link href="/about" className="hover:text-blue-700 transition">About Us</Link>
      </div>

      {/* Right: Buttons in a Row */}
      <div className="flex gap-3">
        <Link href="/contact">
          <button className="btn btn-outline btn-info rounded-full">
            Need Help? ❓
          </button>
        </Link>
        <Link href="/hire">
          <button className="btn btn-primary rounded-full">
            Hire Us
          </button>
        </Link>
      </div>
      
    </div>
  );
};
