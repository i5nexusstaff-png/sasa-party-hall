import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { useScrollPosition } from '../hooks/useScrollPosition';

/**
 * Floating button that scrolls back to the top — appears after scrolling down.
 */
export default function BackToTop() {
  const { y } = useScrollPosition();
  const visible = y > 500;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-6 left-6 z-40 grid h-12 w-12 place-items-center rounded-full
                     bg-gold-gradient text-dark shadow-gold transition-transform hover:-translate-y-1"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
