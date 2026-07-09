import { motion } from 'framer-motion';
import { FaBullseye, FaEye, FaQuoteRight } from 'react-icons/fa';

import PageWrapper from '../components/PageWrapper';
import PageBanner from '../components/PageBanner';
import SectionTitle from '../components/SectionTitle';
import CTASection from '../components/CTASection';

import { venueDescription, venueSpecs } from '../data/siteData';
import { fadeLeft, fadeRight, fadeUp } from '../utils/motion';

export default function About() {
  return (
    <PageWrapper noPad>
      <PageBanner
        title="About Us"
        subtitle="A newly opened luxury venue, crafted for your most cherished celebrations."
        image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80"
      />

      {/* History */}
      <section className="section bg-cream dark:bg-dark">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <motion.img
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            src="/about.jpg"
            alt="SASA Party Hall banquet hall"
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-soft"
          />
          <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
            <span className="text-gold font-medium tracking-[0.25em] uppercase text-sm">Our Story</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-dark dark:text-cream">
              A Fresh Address for Luxury Celebrations
            </h2>
            <p className="mt-5 text-dark/70 dark:text-cream/70 leading-relaxed">
              Opened in April 2026, SASA Party Hall was created with a single vision — to give the
              families of Valasaravakkam a premium, elegant space where every celebration feels
              truly special. Brand new and thoughtfully designed, our venue brings together modern
              comfort and timeless style.
            </p>
            <p className="mt-4 text-dark/70 dark:text-cream/70 leading-relaxed">
              Every detail of our hall — from the spacious air-conditioned interiors to the
              beautifully lit stage — has been crafted to make your special day effortless and
              unforgettable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Space — area specifications */}
      <section className="section bg-white dark:bg-dark-soft">
        <div className="container-x">
          <SectionTitle
            eyebrow="Our Space"
            title="3,800 Sq.Ft of Premium Space"
            subtitle="Thoughtfully designed halls that adapt to every kind of celebration."
          />

          {/* Specs table */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-soft"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3">
              {venueSpecs.map((s) => (
                <div key={s.label} className="border-b sm:border-b-0 sm:border-r last:border-0 border-gold/20">
                  <div className="bg-dark px-6 py-4 text-center">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gold">{s.label}</p>
                  </div>
                  <div className="bg-accent/40 dark:bg-white/5 px-6 py-6 text-center">
                    <p className="font-heading text-2xl font-bold text-dark dark:text-cream">{s.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto mt-8 max-w-4xl text-center text-dark/70 dark:text-cream/70 leading-relaxed"
          >
            {venueDescription}
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-cream dark:bg-dark">
        <div className="container-x grid gap-8 md:grid-cols-2">
          {[
            { icon: FaBullseye, title: 'Our Mission', text: 'To transform every celebration into an extraordinary experience through elegant venues, meticulous planning, and heartfelt hospitality, ensuring every guest leaves with cherished memories.' },
            { icon: FaEye, title: 'Our Vision', text: 'To be recognized as Chennai\'s most admired celebration venue, known for exceptional service, timeless elegance, and unforgettable experiences that bring people together.' },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="glass-light dark:bg-white/5 dark:border-white/10 rounded-3xl p-9 text-center"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient text-dark text-2xl shadow-gold">
                <item.icon />
              </div>
              <h3 className="text-2xl font-bold text-dark dark:text-cream">{item.title}</h3>
              <p className="mt-3 text-dark/70 dark:text-cream/70 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Founder Message */}
      <section className="section bg-white dark:bg-dark-soft">
        <div className="container-x">
          <div className="glass-light dark:bg-white/5 dark:border-white/10 grid items-center gap-10 rounded-3xl p-8 sm:p-12 lg:grid-cols-3">
            <div className="text-center">
              <img
                src="/founder.jpg"
                alt="Founder of SASA Party Hall"
                loading="lazy"
                className="mx-auto h-44 w-44 rounded-full object-cover ring-4 ring-gold"
              />
              <h4 className="mt-4 font-heading text-xl font-bold text-dark dark:text-cream">Archana Prasad</h4>
              <span className="text-sm uppercase tracking-wider text-gold">Founder &amp; Owner</span>
            </div>
            <div className="lg:col-span-2">
              <FaQuoteRight className="text-4xl text-gold/30" />
              <p className="mt-4 text-lg italic leading-relaxed text-dark/80 dark:text-cream/80">
                "At SASA Party Hall, we believe every celebration marks the beginning of a beautiful
                story. Our mission is to provide a venue where elegance meets comfort, every guest
                feels welcomed, and every moment becomes a cherished memory. It is our privilege to
                be part of your life's most meaningful occasions."
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </PageWrapper>
  );
}
