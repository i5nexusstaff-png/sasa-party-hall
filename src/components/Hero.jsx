import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaPlay, FaUtensils } from 'react-icons/fa';

/**
 * Full-screen home hero using the venue photo as the background.
 * A single optimised image is used across all screen sizes for fast loading.
 */
export default function Hero() {
  const scrollDown = () =>
    window.scrollTo({ top: window.innerHeight - 60, behavior: 'smooth' });

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background venue image */}
      <img
        src="/home.jpg"
        alt="SASA Party Hall decorated stage"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Luxury gradient overlay for text contrast over the bright image */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/75 via-dark/60 to-dark/90" />

      {/* Content */}
      <div className="container-x relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mx-auto max-w-4xl text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight
                     text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]"
        >
          Celebrate Life's <span className="text-gradient">Beautiful Moments</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-cream/90 [text-shadow:0_1px_10px_rgba(0,0,0,0.6)]"
        >
          A premium, fully air-conditioned luxury venue where weddings, receptions and every
          cherished occasion come to life with elegance and grandeur.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link to="/booking" className="btn-primary">
            <FaCalendarAlt /> Book Now
          </Link>
          <Link to="/gallery" className="btn-outline text-cream border-cream hover:bg-cream hover:text-dark">
            <FaPlay size={12} /> Explore Hall
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator (CSS animation — cheaper than a JS loop) */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-float">
        <button
          type="button"
          onClick={scrollDown}
          aria-label="Scroll down to explore"
          className="group grid h-12 w-12 place-items-center rounded-full border-2 border-gold/60 text-gold
                     transition-all duration-300 hover:scale-110 hover:border-gold hover:bg-gold hover:text-dark
                     hover:shadow-gold focus:outline-none focus:ring-2 focus:ring-gold/50"
        >
          <FaUtensils size={20} className="transition-transform duration-300 group-hover:scale-110" />
        </button>
      </div>
    </section>
  );
}
