import { motion } from 'framer-motion';
import { zoomIn } from '../utils/motion';

/**
 * Service card with gold icon badge, hover lift and accent border.
 */
export default function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <motion.div
      variants={zoomIn}
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl bg-white dark:bg-dark-soft p-7 shadow-soft
                 border border-transparent hover:border-gold/40 transition-all duration-300 overflow-hidden"
    >
      {/* Decorative corner glow */}
      <span className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full
                       bg-gold/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl
                      bg-gold/10 text-gold text-2xl transition-colors duration-300
                      group-hover:bg-gold-gradient group-hover:text-dark">
        <Icon />
      </div>
      <h3 className="text-lg font-semibold text-dark dark:text-cream">{title}</h3>
      <p className="mt-2 text-sm text-dark/70 dark:text-cream/70 leading-relaxed">{desc}</p>
    </motion.div>
  );
}
