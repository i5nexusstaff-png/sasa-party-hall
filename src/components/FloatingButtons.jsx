import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { site } from '../data/siteData';

/**
 * Floating WhatsApp + Call buttons fixed to the bottom-right corner.
 */
export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${site.whatsapp}?text=Hi%20SASA%20Party%20Hall,%20I'd%20like%20to%20enquire%20about%20a%20booking.`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid h-12 w-12 place-items-center rounded-full bg-green-500 text-white shadow-lg
                   transition-transform hover:scale-110 animate-float"
      >
        <FaWhatsapp size={22} />
      </a>
      <a
        href={`tel:${site.phoneRaw}`}
        aria-label="Call us"
        className="grid h-12 w-12 place-items-center rounded-full bg-gold-gradient text-dark shadow-gold
                   transition-transform hover:scale-110"
      >
        <FaPhoneAlt size={18} />
      </a>
    </div>
  );
}
