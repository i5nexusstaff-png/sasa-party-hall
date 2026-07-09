import { motion } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

import PageWrapper from '../components/PageWrapper';
import PageBanner from '../components/PageBanner';
import SectionTitle from '../components/SectionTitle';
import ContactCard from '../components/ContactCard';
import BookingForm from '../components/BookingForm';
import MapSection from '../components/MapSection';
import { site } from '../data/siteData';
import { stagger, fadeUp } from '../utils/motion';

const cards = [
  { icon: FaPhoneAlt, label: 'Call Us', value: site.phone, href: `tel:${site.phoneRaw}` },
  { icon: FaWhatsapp, label: 'WhatsApp', value: site.phone, href: `https://wa.me/${site.whatsapp}` },
  { icon: FaEnvelope, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: FaMapMarkerAlt, label: 'Address', value: site.address },
  { icon: FaClock, label: 'Working Hours', value: site.hours },
];

/**
 * Combined Booking + Contact page — a single place to send an enquiry, reach us,
 * and find the venue.
 */
export default function BookingContact() {
  return (
    <PageWrapper noPad>
      <PageBanner
        title="Booking & Contact"
        subtitle="Reserve your date or reach out — we're here to help plan your perfect celebration."
        image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80"
        crumb="Booking / Contact"
      />

      {/* Contact cards */}
      <section className="section bg-cream dark:bg-dark">
        <div className="container-x">
          <SectionTitle eyebrow="Get in Touch" title="How to Reach Us" />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {cards.map((c) => <ContactCard key={c.label} {...c} />)}
          </motion.div>
        </div>
      </section>

      {/* Booking form */}
      <section className="section bg-white dark:bg-dark-soft">
        <div className="container-x">
          <SectionTitle
            eyebrow="Reservation"
            title="Request a Booking"
            subtitle="Fill in the details below and your enquiry is sent straight to us on WhatsApp."
          />
          <BookingForm />
        </div>
      </section>

      {/* Map */}
      <section className="section bg-cream dark:bg-dark">
        <div className="container-x">
          <SectionTitle
            eyebrow="Find Us"
            title="Visit Our Venue"
            subtitle="Located in the heart of Valasaravakkam, Chennai."
          />
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <MapSection />
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
