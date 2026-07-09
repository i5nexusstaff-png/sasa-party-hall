import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeUp } from '../utils/motion';

/**
 * Full-width call-to-action band with a parallax-style fixed background.
 */
export default function CTASection() {
  return (
    <section
      className="relative bg-scroll bg-cover bg-center lg:bg-fixed"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=70')",
      }}
    >
      <div className="bg-dark/80">
        <div className="container-x section text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <span className="text-gold font-medium tracking-[0.25em] uppercase text-sm">
              Ready to Celebrate?
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Let's Make Your Event <span className="text-gradient">Unforgettable</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-cream/80">
              Reserve SASA Party Hall today and let our team craft a celebration your guests will
              cherish for a lifetime.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/booking" className="btn-primary">Book Your Date</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
