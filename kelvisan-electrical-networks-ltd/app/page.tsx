'use client';

import { Hero } from '@/components/Hero';
import { AnimatedSection } from '../components/AnimatedSection';
import { ContactForm } from '../components/ContactForm';
import { ProjectCard } from '../components/ProjectCard';
import { ServiceCard } from '../components/ServiceCard';
import { TestimonialCard } from '../components/TestimonialCard';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center w-full overflow-x-hidden bg-gradient-to-b from-white via-white to-blue-100">

      {/* Hero Section */}
      <Hero />

      {/* About Preview */}
      <AnimatedSection>
        <section className="py-20 px-6 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-black">Who We Are</h2>
          <p className="text-lg text-gray-800">
            At <span className="font-semibold text-blue-700">Kelvinsan Electrical Networks Ltd</span>, we specialize in delivering world-class 
            <span className="text-blue-600 font-semibold"> electrical networking</span> and 
            <span className="text-green-600 font-semibold"> professional software development</span> services.
            Our mission is to drive <span className="text-purple-600 font-semibold">innovation</span>, 
            <span className="text-pink-600 font-semibold"> reliability</span>, and 
            <span className="text-indigo-600 font-semibold"> digital excellence</span> for businesses across industries.
          </p>
        </section>
      </AnimatedSection>

      {/* Services Preview */}
      <AnimatedSection>
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-700">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Electrical Networking" 
              description="Comprehensive solutions in design, installation, and maintenance of electrical networks for businesses." 
            />
            <ServiceCard 
              title="Software Development" 
              description="Custom software development tailored to your business needs, ensuring efficiency and scalability." 
            />
            <ServiceCard 
              title="IT Consultancy" 
              description="Expert advice and strategy planning to streamline your digital transformation journey." 
            />
          </div>
        </section>
      </AnimatedSection>

      {/* Projects Preview */}
      <AnimatedSection>
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-black">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Smart Office Networking" 
              description="Designed and implemented secure, high-performance networks for corporate offices."
            />
            <ProjectCard 
              title="Custom ERP Solution" 
              description="Developed a fully tailored ERP system for a manufacturing company."
            />
          </div>
        </section>
      </AnimatedSection>

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
