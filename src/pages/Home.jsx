import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

import PageWrapper from '../components/PageWrapper';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import MapSection from '../components/MapSection';
import CTASection from '../components/CTASection';

import { features } from '../data/features';
import { events } from '../data/events';
import { venueDescription, venueSpecs } from '../data/siteData';
import { fadeLeft, fadeRight, fadeUp, stagger, zoomIn } from '../utils/motion';

export default function Home() {
  return (
    <PageWrapper noPad>
      <Hero />

      {/* ===== About Preview ===== */}
      <section className="section bg-cream dark:bg-dark">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <img
              src="/main2.jpg"
              alt="SASA Party Hall"
              loading="lazy"
              className="rounded-3xl shadow-soft w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-gold-gradient px-7 py-5 text-dark shadow-gold sm:block">
              <p className="font-heading text-3xl font-bold">2026</p>
              <p className="text-sm">Newly Opened</p>
            </div>
          </motion.div>

          <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
            <span className="text-gold font-medium tracking-[0.25em] uppercase text-sm">About SASA</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-dark dark:text-cream">
              Where Every Celebration Becomes a <span className="text-gradient">Royal Affair</span>
            </h2>
            <p className="mt-5 text-dark/70 dark:text-cream/70 leading-relaxed">
              {venueDescription}
            </p>
            {/* Area specifications */}
            <div className="mt-7 grid grid-cols-3 gap-3">
              {venueSpecs.map((s) => (
                <div key={s.label} className="rounded-2xl border border-gold/20 bg-white/60 dark:bg-white/5 p-4 text-center">
                  <p className="font-heading text-lg font-bold text-gold">{s.value}</p>
                  <p className="mt-1 text-xs text-dark/60 dark:text-cream/60">{s.label}</p>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-primary mt-8">
              Discover More <FaArrowRight size={13} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== Hall Highlights / Features ===== */}
      <section className="section bg-white dark:bg-dark-soft">
        <div className="container-x">
          <SectionTitle
            eyebrow="Hall Highlights"
            title="Everything You Need, Under One Roof"
            subtitle="A complete suite of premium amenities designed to make your event effortless and extraordinary."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== Events We Host ===== */}
      <section className="section bg-cream dark:bg-dark">
        <div className="container-x">
          <SectionTitle
            eyebrow="Occasions"
            title="Events We Host"
            subtitle="From intimate gatherings to grand celebrations, we host every occasion with elegance."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {events.map((ev) => (
              <motion.div
                key={ev.title}
                variants={zoomIn}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl shadow-soft"
              >
                <img
                  src={ev.img}
                  alt={ev.title}
                  loading="lazy"
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-heading text-xl font-bold text-white">{ev.title}</h3>
                  <p className="mt-1 max-h-0 overflow-hidden text-sm text-cream/80 opacity-0
                                transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                    {ev.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== Map Preview ===== */}
      <section className="section bg-white dark:bg-dark-soft">
        <div className="container-x">
          <SectionTitle
            eyebrow="Find Us"
            title="Conveniently Located"
            subtitle="Easy to reach, right in the heart of Valasaravakkam, Chennai."
          />
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <MapSection />
          </motion.div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <CTASection />
    </PageWrapper>
  );
}
