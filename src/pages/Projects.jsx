import React from 'react';
import { SEO } from '../components/common/SEO';
import { PageHeader } from '../components/layout/PageHeader';
import { ProjectsGrid } from '../components/sections/ProjectsGrid';
import { ContactForm } from '../components/sections/ContactForm';

export function Projects() {
  return (
    <main className="bg-white">
      <SEO
        title="Our Projects | Ram Gopal Constructions - Work Portfolio in Delhi NCR"
        description="Explore Ram Gopal Constructions' portfolio of completed residential villa builds, commercial construction, marble flooring polish, and modern interior transformations in Faridabad & Delhi NCR."
        path="/projects"
        keywords="Ram Gopal Projects, Construction Portfolio Faridabad, House Build Projects NCR, Commercial Fitout Portfolio, Marble Polish Gallery"
      />
      <PageHeader
        title="Featured Projects"
        subtitle="Explore our portfolio of completed residential villa builds, commercial fit-outs, marble flooring, and interior design across Delhi NCR."
        breadcrumb={[{ name: 'Projects' }]}
      />

      <ProjectsGrid />
      <ContactForm />
    </main>
  );
}
