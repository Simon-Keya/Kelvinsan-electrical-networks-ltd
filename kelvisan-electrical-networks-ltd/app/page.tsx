'use client';

import { About } from '@/components/About';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ContactForm } from '@/components/ContactForm';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Service';
import { TestimonialCard } from '@/components/TestimonialCard';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center w-full overflow-x-hidden bg-gradient-to-b from-white via-white to-blue-100">

      {/* Hero Section */}
      <Hero />

      {/* About Preview */}
      <About />

      {/* Services Preview */}
      <Services />

      {/* Testimonials Preview */}
      <AnimatedSection>
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-700">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Jane Doe" 
              feedback="Kelvinsan Electrical Networks Ltd helped transform our office into a fully smart workspace! Professional and reliable services." 
            />
            <TestimonialCard 
              name="John Smith" 
              feedback="Their software team delivered a top-notch solution ahead of schedule. Highly recommend them!" 
            />
            <TestimonialCard 
              name="Grace Kim" 
              feedback="Very responsive and attentive to our needs. Will work with them again in the future!" 
            />
          </div>
        </section>
      </AnimatedSection>

      {/* Contact CTA */}
      <AnimatedSection>
        <section className="py-20 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-black">Let us Work Together</h2>
          <p className="text-lg mb-12 text-gray-800">
            Have a project in mind? Let us connect and create something <span className="text-blue-700 font-semibold">amazing</span> together.
          </p>
          <ContactForm />
        </section>
      </AnimatedSection>

    </main>
  );
}
