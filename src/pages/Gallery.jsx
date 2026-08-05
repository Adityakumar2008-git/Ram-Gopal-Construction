import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Tag } from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { Modal } from '../components/ui/Modal';
import { ContactForm } from '../components/sections/ContactForm';

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.title = "Photo Gallery | Ram Gopal Constructions - On-Site Construction & Interior Work";
    window.scrollTo(0, 0);
  }, []);

  const galleryItems = [
    {
      id: 1,
      title: "RCC Structure & Masonry Work",
      category: "Construction",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Modular Kitchen & Woodwork",
      category: "Interior",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Italian Marble Floor Diamond Polishing",
      category: "Marble & Tile",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "Completed Luxury Residential Villa",
      category: "Completed Projects",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      title: "On-Site Brick Laying & Concrete Pouring",
      category: "Site Work",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 6,
      title: "Gypsum False Ceiling & Ambient Lighting",
      category: "Interior",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 7,
      title: "Commercial Office Floor Tile Installation",
      category: "Marble & Tile",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 8,
      title: "House Front Elevation Modern Facade",
      category: "Completed Projects",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 9,
      title: "Foundation Steel Mesh & Civil Engineering",
      category: "Site Work",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const categories = ['All', 'Construction', 'Interior', 'Marble & Tile', 'Completed Projects', 'Site Work'];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <main className="bg-white">
      <PageHeader
        title="Work Photo Gallery"
        subtitle="Visual showcase of real construction site work, marble fittings, false ceiling artwork, and completed builds."
        breadcrumb={[{ name: 'Gallery' }]}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#F4B400] text-slate-950 shadow-md scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Image Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(item)}
                className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer break-inside-avoid bg-slate-900 border border-gray-200"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <div className="flex justify-end">
                    <span className="p-2.5 bg-[#F4B400] text-slate-950 rounded-full shadow-lg">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#F4B400] uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Lightbox Modal */}
          <Modal
            isOpen={!!selectedImage}
            onClose={() => setSelectedImage(null)}
            title={selectedImage?.title}
            maxWidth="max-w-4xl"
          >
            {selectedImage && (
              <div className="space-y-4">
                <div className="relative max-h-[75vh] overflow-hidden rounded-xl bg-slate-950">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-contain mx-auto"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#F4B400] bg-slate-900 px-3 py-1 rounded-full">
                    Category: {selectedImage.category}
                  </span>
                  <p className="text-xs text-slate-500">Ram Gopal Constructions Site Photography</p>
                </div>
              </div>
            )}
          </Modal>

        </div>
      </section>

      <ContactForm />
    </main>
  );
}
