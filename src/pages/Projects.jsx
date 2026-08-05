import React, { useEffect } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { ProjectsGrid } from '../components/sections/ProjectsGrid';
import { ContactForm } from '../components/sections/ContactForm';

export function Projects() {
  useEffect(() => {
    document.title = "Our Projects | Ram Gopal Constructions - Work Portfolio in Delhi NCR";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white">
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
