import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';

/**
 * Reusable inner-page hero banner with a background image, overlay,
 * title and breadcrumb.
 */
export default function PageBanner({ title, subtitle, image, crumb }) {
  return (
    <section
      className="relative flex h-[42vh] min-h-[320px] items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="absolute inset-0 bg-dark/70" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container-x relative z-10 text-center"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">{title}</h1>
        {subtitle && <p className="mx-auto mt-4 max-w-2xl text-cream/80">{subtitle}</p>}
        <nav className="mt-5 flex items-center justify-center gap-2 text-sm text-cream/70">
          <Link to="/" className="hover:text-gold">Home</Link>
          <FaChevronRight size={10} className="text-gold" />
          <span className="text-gold">{crumb || title}</span>
        </nav>
      </motion.div>
    </section>
  );
}
