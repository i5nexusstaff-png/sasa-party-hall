import { motion } from 'framer-motion';
import { pageTransition } from '../utils/motion';

/**
 * Wraps each page to apply a consistent enter/exit transition and top padding
 * so content clears the fixed navbar.
 */
export default function PageWrapper({ children, noPad = false }) {
  return (
    <motion.main
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className={noPad ? '' : 'pt-20'}
    >
      {children}
    </motion.main>
  );
}
