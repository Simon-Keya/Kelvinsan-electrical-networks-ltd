'use client';

import { About } from '@/components/About';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ContactForm } from '@/components/ContactForm';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Service';
import { Testimonials } from '@/components/Testimonial'; // Make sure this is the updated Testimonials file

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center w-full overflow-x-hidden bg-blue-200">

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Testimonials Section */}
      <AnimatedSection>
        <section className="py-20 w-full bg-blue-200">
          <div className="w-full max-w-6xl mx-auto px-4">
            <Testimonials />
          </div>
        </section>
      </AnimatedSection>

      {/* Contact CTA Section */}
      <AnimatedSection>
        <section className="py-20 w-full bg-blue-200">
          <div className="w-full max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 text-black">Let us Work Together</h2>
            <p className="text-lg mb-12 text-gray-800">
              Have a project in mind? Let us connect and create something <span className="text-blue-700 font-semibold">amazing</span> together.
            </p>
            <ContactForm />
          </div>
        </section>
      </AnimatedSection>
      
    </main>
  );
}
