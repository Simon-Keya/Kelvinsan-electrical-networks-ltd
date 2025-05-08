'use client';

import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className="navbar bg-teal-700 shadow-md px-6 py-3 text-white flex justify-between items-center">
      
      {/* Left: Logo/Title */}
      <div>
        <Link href="/" className="btn btn-ghost text-3xl text-black font-extrabold tracking-wide">
          Kelvinsan
        </Link>
      </div>

      {/* Center: Navigation Links in a Row */}
      <div className="hidden md:flex gap-10 text-lg font-medium">
        <Link href="/about" className="hover:text-blue-700 transition">About Us</Link>
        <Link href="/services" className="hover:text-blue-700 transition">Services</Link>
        <Link href="/contact" className="hover:text-blue-700 transition">Contact</Link>
      </div>

      {/* Right: Buttons in a Row */}
      <div className="flex gap-3">
        <Link href="/contact">
          <button className="btn btn-outline btn-info rounded-full">
            Need Help❓
          </button>
        </Link>
        <Link href="/about">
          <button className="btn btn-primary rounded-full">
            Hire Us
          </button>
        </Link>
      </div>
      
    </div>
  );
};
