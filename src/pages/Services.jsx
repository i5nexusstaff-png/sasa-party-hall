import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import PageBanner from '../components/PageBanner';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import { services } from '../data/services';
import { stagger } from '../utils/motion';

export default function Services() {
  return (
    <PageWrapper noPad>
      <PageBanner
        title="Our Services"
        subtitle="A complete range of premium services to make your event seamless and spectacular."
        image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section bg-cream dark:bg-dark">
        <div className="container-x">
          <SectionTitle
            eyebrow="What We Offer"
            title="Crafted for Every Celebration"
            subtitle="From décor to dining, we handle every detail so you can enjoy your special day."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </PageWrapper>
  );
}
