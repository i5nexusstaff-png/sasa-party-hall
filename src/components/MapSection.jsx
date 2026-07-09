import { FaMapMarkerAlt } from 'react-icons/fa';
import { site } from '../data/siteData';

/**
 * Embedded Google Map pinned to the venue, with a button to open the exact
 * marked location in Google Maps. Reused on Home and Contact pages.
 */
export default function MapSection({ height = 'h-[420px]' }) {
  return (
    <div className={`relative w-full overflow-hidden rounded-2xl shadow-soft ${height}`}>
      <iframe
        title="SASA Party Hall location"
        src={site.mapEmbed}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a
        href={site.mapLink}
        target="_blank"
        rel="noreferrer"
        className="btn-primary absolute bottom-4 left-1/2 -translate-x-1/2 px-5 py-2.5 text-sm shadow-gold"
      >
        <FaMapMarkerAlt /> Open in Google Maps
      </a>
    </div>
  );
}
