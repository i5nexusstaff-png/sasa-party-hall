import { motion } from 'framer-motion';
import { FaSearchPlus } from 'react-icons/fa';
import { zoomIn } from '../utils/motion';

/**
 * Reusable gallery image card with hover zoom, overlay and lightbox trigger.
 * Images are lazy-loaded for performance.
 */
export default function GalleryCard({ image, onClick }) {
  return (
    <motion.div
      variants={zoomIn}
      layout
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-soft"
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3
                      bg-dark/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <FaSearchPlus className="text-3xl text-gold" />
        <span className="text-sm uppercase tracking-widest text-cream">{image.category}</span>
      </div>
    </motion.div>
  );
}
