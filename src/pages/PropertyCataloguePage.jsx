import React from 'react';
import { SEO } from '../components/common/SEO';
import { PageHeader } from '../components/layout/PageHeader';
import { PropertyCataloguePreview } from '../components/sections/PropertyCataloguePreview';
import { ContactForm } from '../components/sections/ContactForm';

export function PropertyCataloguePage() {
  return (
    <main className="bg-white">
      <SEO
        title="Property Catalogue | Ram Gopal Constructions - Properties for Sale & Rent in Delhi NCR"
        description="Browse residential and commercial property listings for sale, buy, and rent in Faridabad, Sector 15, Green Fields, and Delhi NCR with Ram Gopal Constructions."
        path="/property-catalogue"
        keywords="Property Dealer Faridabad, Property Consultant Faridabad, Buy Plot Faridabad, Rent House Faridabad, Real Estate Broker Delhi NCR"
      />
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
