import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaImages } from 'react-icons/fa';

import PageWrapper from '../components/PageWrapper';
import PageBanner from '../components/PageBanner';
import GalleryCard from '../components/GalleryCard';
import { galleryCategories, galleryImages } from '../data/gallery';
import { stagger } from '../utils/motion';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null); // index into filtered list

  const filtered =
    filter === 'All' ? galleryImages : galleryImages.filter((i) => i.category === filter);

  const showPrev = () => setLightbox((i) => (i > 0 ? i - 1 : filtered.length - 1));
  const showNext = () => setLightbox((i) => (i < filtered.length - 1 ? i + 1 : 0));

  return (
    <PageWrapper noPad>
      <PageBanner
        title="Gallery"
        subtitle="Step into a world of elegance — explore moments from celebrations at SASA."
        image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section bg-cream dark:bg-dark">
        <div className="container-x">
          {/* Filter buttons */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all
                  ${filter === cat
                    ? 'bg-gold-gradient text-dark shadow-gold'
                    : 'bg-white dark:bg-dark-soft text-dark dark:text-cream hover:text-gold'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image grid */}
          {filtered.length > 0 ? (
            <motion.div
              layout
              variants={stagger}
              initial="hidden"
              animate="show"
              className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
            >
              <AnimatePresence>
                {filtered.map((img, idx) => (
                  <GalleryCard key={img.id} image={img} onClick={() => setLightbox(idx)} />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="mx-auto max-w-xl rounded-3xl border border-dashed border-gold/40 bg-white/50 dark:bg-white/5 px-6 py-16 text-center">
              <FaImages className="mx-auto text-5xl text-gold/60" />
              <h3 className="mt-5 font-heading text-2xl font-bold text-dark dark:text-cream">
                Photos Coming Soon
              </h3>
              <p className="mt-3 text-dark/70 dark:text-cream/70">
                We're putting together a beautiful collection of our{' '}
                {filter === 'All' ? 'venue' : filter.toLowerCase()} photos. Please check back
                shortly — or visit us in person for a full tour.
              </p>
              <Link to="/contact" className="btn-primary mt-7">Schedule a Visit</Link>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[90] grid place-items-center bg-dark/95 p-4"
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute right-6 top-6 text-3xl text-gold hover:scale-110"
            >
              <FaTimes />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); showPrev(); }}
              aria-label="Previous"
              className="absolute left-4 sm:left-10 text-3xl text-gold hover:scale-110"
            >
              <FaChevronLeft />
            </button>
            <motion.img
              key={filtered[lightbox].id}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[80vh] max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <button
              onClick={(e) => { e.stopPropagation(); showNext(); }}
              aria-label="Next"
              className="absolute right-4 sm:right-10 text-3xl text-gold hover:scale-110"
            >
              <FaChevronRight />
            </button>
            <p className="absolute bottom-6 text-sm uppercase tracking-widest text-cream/80">
              {filtered[lightbox].category}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}
