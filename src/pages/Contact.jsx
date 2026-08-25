import React from 'react';
import { SEO } from '../components/common/SEO';
import { PageHeader } from '../components/layout/PageHeader';
import { ContactForm } from '../components/sections/ContactForm';
import { MapSection } from '../components/sections/MapSection';
import { FAQSection } from '../components/sections/FAQSection';

export function Contact() {
  return (
    <main className="bg-white">
      <SEO
        title="Contact Us | Ram Gopal Constructions - Get Free Quotation in Delhi NCR"
        description="Contact Ram Gopal Constructions for free house construction estimates, interior consultation, marble polishing quotes, or property buying/selling in Faridabad & Delhi NCR."
        path="/contact"
        keywords="Contact Ram Gopal Constructions, Construction Estimate Faridabad, Call Ankit Pal Construction, Free House Quote Delhi NCR"
      />
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
