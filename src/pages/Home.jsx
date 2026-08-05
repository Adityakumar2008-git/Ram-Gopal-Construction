import React, { useEffect } from 'react';
import { Hero } from '../components/sections/Hero';
import { AboutPreview } from '../components/sections/AboutPreview';
import { ServicesGrid } from '../components/sections/ServicesGrid';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { ProjectsGrid } from '../components/sections/ProjectsGrid';
import { PropertyCataloguePreview } from '../components/sections/PropertyCataloguePreview';
import { WorkProcess } from '../components/sections/WorkProcess';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { FAQSection } from '../components/sections/FAQSection';
import { ContactForm } from '../components/sections/ContactForm';
import { MapSection } from '../components/sections/MapSection';

export function Home() {
  useEffect(() => {
    document.title = "Ram Gopal Constructions | Construction, Interior & Property Services in Delhi NCR";
  }, []);

  return (
    <main className="overflow-hidden">
      <Hero />
      <AboutPreview />
      <ServicesGrid limit={6} />
      <WhyChooseUs />
      <ProjectsGrid limit={6} />
      <PropertyCataloguePreview />
      <WorkProcess />
      <TestimonialsSection />
      <FAQSection />
      <ContactForm />
      <MapSection />
    </main>
  );
}
