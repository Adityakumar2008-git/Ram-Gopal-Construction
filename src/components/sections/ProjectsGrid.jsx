import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Maximize2, Tag } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Modal } from '../ui/Modal';
import { PROJECTS_DATA } from '../../data/projectsData';

export function ProjectsGrid({ limit }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Residential', 'Renovation', 'Commercial', 'Flooring', 'Interior'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  const displayProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section className="py-20 bg-[#F8F9FA]" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="Our Portfolio"
          title="Featured Projects Across Delhi NCR"
          subtitle="Explore completed construction builds, structural renovations, marble floorings, and modern interiors."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#F4B400] text-slate-950 shadow-md scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mobile-swipe-scroll md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {displayProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="h-full mobile-card-interactive"
            >
              <Card className="h-full flex flex-col justify-between overflow-hidden p-0 group cursor-pointer" onClick={() => setSelectedProject(project)}>
                {/* Project Image Container */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-900 flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="p-3 bg-[#F4B400] text-slate-950 rounded-full shadow-lg">
                      <Maximize2 className="w-5 h-5" />
                    </span>
                  </div>
                  <span className="absolute top-4 left-4 px-3 py-1 bg-[#1F2937]/90 text-white text-xs font-semibold rounded-lg backdrop-blur-xs">
                    {project.category}
                  </span>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#F4B400]">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#1F2937] group-hover:text-[#F4B400] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="pt-3 border-t border-gray-100 flex flex-wrap gap-1.5">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Lightbox Modal */}
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject?.title}
        >
          {selectedProject && (
            <div className="space-y-6">
              <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden bg-slate-900">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-4 text-xs font-semibold">
                  <span className="bg-[#F4B400] text-slate-950 px-3 py-1 rounded-full">
                    {selectedProject.category}
                  </span>
                  <span className="flex items-center gap-1 text-slate-600">
                    <MapPin className="w-4 h-4 text-[#F4B400]" />
                    {selectedProject.location}
                  </span>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-xs font-bold text-[#1F2937] uppercase tracking-wider mb-2">
                    Scope of Work Highlights:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((t, idx) => (
                      <span key={idx} className="flex items-center gap-1 text-xs bg-amber-500/10 text-slate-900 border border-amber-500/30 px-3 py-1 rounded-lg">
                        <Tag className="w-3 h-3 text-[#F4B400]" />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}
        </Modal>

      </div>
    </section>
  );
}
