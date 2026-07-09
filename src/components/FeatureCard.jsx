import { motion } from 'framer-motion';
import { fadeUp } from '../utils/motion';

/**
 * Glassmorphism feature card with an icon, title and description.
 */
export default function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8 }}
      className="group glass-light dark:bg-white/5 dark:border-white/10 rounded-2xl p-7 text-center
                 transition-shadow duration-300 hover:shadow-gold"
    >
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full
                      bg-gold-gradient text-dark text-2xl shadow-gold
                      transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold text-dark dark:text-cream">{title}</h3>
      <p className="mt-2 text-sm text-dark/70 dark:text-cream/70 leading-relaxed">{desc}</p>
    </motion.div>
  );
}
