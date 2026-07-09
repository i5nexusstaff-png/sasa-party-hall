import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaEnvelopeOpenText } from 'react-icons/fa';
import PageWrapper from '../components/PageWrapper';

export default function NotFound() {
  return (
    <PageWrapper noPad>
      <section className="relative grid min-h-screen place-items-center overflow-hidden bg-dark px-5 text-center">
        {/* Decorative glows */}
        <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <motion.h1
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="font-heading text-[7rem] sm:text-[11rem] font-bold leading-none text-gradient"
          >
            404
          </motion.h1>
          <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-cream">
            Oops! This Page Took a Day Off
          </h2>
          <p className="mx-auto mt-4 max-w-md text-cream/70">
            The page you're looking for has wandered off to a celebration. Let's get you back to
            where the party is.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/" className="btn-primary"><FaHome /> Back to Home</Link>
            <Link to="/contact" className="btn-outline text-cream border-cream hover:bg-cream hover:text-dark">
              <FaEnvelopeOpenText /> Contact Us
            </Link>
          </div>
        </motion.div>
      </section>
    </PageWrapper>
  );
}
