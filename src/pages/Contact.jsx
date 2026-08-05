import React, { useEffect } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { ContactForm } from '../components/sections/ContactForm';
import { MapSection } from '../components/sections/MapSection';
import { FAQSection } from '../components/sections/FAQSection';

export function Contact() {
  useEffect(() => {
    document.title = "Contact Us | Ram Gopal Constructions - Get Free Quotation in Delhi NCR";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white">
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with Ram Gopal Constructions for construction quotes, interior design consultations, or property assistance in Faridabad & Delhi NCR."
        breadcrumb={[{ name: 'Contact' }]}
      />

      <ContactForm />
      <MapSection />
      <FAQSection />
    </main>
  );
}
