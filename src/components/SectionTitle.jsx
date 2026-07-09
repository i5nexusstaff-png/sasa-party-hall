import { motion } from 'framer-motion';
import { fadeUp } from '../utils/motion';

/**
 * Centered section heading with an eyebrow label and gold underline accent.
 */
export default function SectionTitle({ eyebrow, title, subtitle, light = false, center = true }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className={`${center ? 'text-center mx-auto' : ''} max-w-2xl mb-12`}
    >
      {eyebrow && (
        <span className="text-gold font-medium tracking-[0.25em] uppercase text-sm">
          {eyebrow}
        </span>
      )}
      <h2 className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold ${light ? 'text-white' : 'text-dark dark:text-cream'}`}>
        {title}
      </h2>
      <div className={`mt-4 h-1 w-24 rounded-full bg-gold-gradient ${center ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className={`mt-5 text-base sm:text-lg ${light ? 'text-cream/80' : 'text-dark/70 dark:text-cream/70'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
