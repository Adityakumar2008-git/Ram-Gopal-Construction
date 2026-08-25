import React from 'react';
import { SEO } from '../components/common/SEO';
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
  return (
    <main className="overflow-hidden">
      <SEO
        title="Ram Gopal Constructions | Construction, Interior & Property Services in Delhi NCR"
        description="Ram Gopal Constructions provides premier residential & commercial house construction, renovation, modular interior design, marble & tile installation, and property consultation across Faridabad and Delhi NCR. Contact us for a free quote."
        path="/"
        keywords="Construction Company in Faridabad, House Construction in Faridabad, Construction Contractor in Faridabad, Interior Designer in Faridabad, Home Renovation Services, Marble Contractor, Tile Contractor, Property Consultant in Faridabad, Construction Services Delhi NCR"
      />
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
