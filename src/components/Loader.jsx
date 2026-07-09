import { motion } from 'framer-motion';

/**
 * Branded full-screen loading screen shown on first paint and during Suspense.
 */
export default function Loader() {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-dark">
      <div className="flex flex-col items-center gap-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
          className="grid h-20 w-20 place-items-center rounded-full border-4 border-gold/20 border-t-gold"
        >
          <span className="font-heading text-2xl font-bold text-gradient">S</span>
        </motion.div>
        <p className="font-heading text-lg tracking-[0.3em] text-gold">SASA PARTY HALL</p>
      </div>
    </div>
  );
}
