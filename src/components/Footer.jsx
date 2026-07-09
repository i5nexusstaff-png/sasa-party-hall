import { Link } from 'react-router-dom';
import {
  FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp,
} from 'react-icons/fa';
import { site } from '../data/siteData';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Booking / Contact', path: '/booking' },
];

const serviceLinks = [
  'Wedding Hall', 'Reception Hall', 'Birthday Events',
  'Corporate Meetings', 'Catering Support', 'Event Management',
];

export default function Footer() {
  return (
    <footer className="bg-dark text-cream">
      <div className="container-x grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Link to="/" className="inline-block">
            <img
              src="/logo.png"
              alt="SASA Party Hall"
              onError={(e) => { e.currentTarget.src = '/logo.svg'; }}
              className="h-16 w-auto max-w-[240px]"
            />
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-cream/70">
            {site.tagline}. A premium luxury venue dedicated to making every celebration
            grand, elegant and unforgettable.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Follow us on Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-gold/30
                         text-gold transition-all hover:bg-gold-gradient hover:text-dark"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-heading text-lg font-semibold text-gold">Quick Links</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-cream/70 transition-colors hover:text-gold">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading text-lg font-semibold text-gold">Services</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {serviceLinks.map((s) => (
              <li key={s}>
                <Link to="/services" className="text-cream/70 transition-colors hover:text-gold">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-lg font-semibold text-gold">Get in Touch</h4>
          <ul className="mt-5 space-y-4 text-sm text-cream/70">
            <li className="flex gap-3">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-gold" /> {site.address}
            </li>
            <li className="flex gap-3">
              <FaPhoneAlt className="mt-1 shrink-0 text-gold" />
              <a href={`tel:${site.phoneRaw}`} className="hover:text-gold">{site.phone}</a>
            </li>
            <li className="flex gap-3">
              <FaWhatsapp className="mt-1 shrink-0 text-gold" />
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-gold">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <FaEnvelope className="mt-1 shrink-0 text-gold" />
              <a href={`mailto:${site.email}`} className="hover:text-gold break-all">{site.email}</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-sm text-cream/60 sm:flex-row">
          <p>© {new Date().getFullYear()} SASA Party Hall. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/privacy-policy" className="hover:text-gold">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold">Terms &amp; Conditions</Link>
            <Link to="/cancellation-policy" className="hover:text-gold">Cancellation Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
