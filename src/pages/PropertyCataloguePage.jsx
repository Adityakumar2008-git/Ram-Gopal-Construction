import React, { useEffect } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { PropertyCataloguePreview } from '../components/sections/PropertyCataloguePreview';
import { ContactForm } from '../components/sections/ContactForm';

export function PropertyCataloguePage() {
  useEffect(() => {
    document.title = "Property Catalogue | Ram Gopal Constructions - Properties for Sale & Rent in Delhi NCR";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white">
      <PageHeader
        title="Property Catalogue"
        subtitle="Sample catalogue of properties handled for buying, selling, and renting across Faridabad and Delhi NCR."
        breadcrumb={[{ name: 'Property Catalogue' }]}
      />

      <PropertyCataloguePreview />
      <ContactForm />
    </main>
  );
}
