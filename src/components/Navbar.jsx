import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars, FaTimes, FaMoon, FaSun, FaCalendarAlt, FaInstagram } from 'react-icons/fa';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { useTheme } from '../context/ThemeContext';
import { site } from '../data/siteData';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Booking / Contact', path: '/booking' },
];

/**
 * Sticky navbar — transparent on top of the hero, solid once scrolled.
 * Includes logo, desktop links, theme toggle, Book-Now CTA and mobile menu.
 */
export default function Navbar() {
  const { y } = useScrollPosition();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const scrolled = y > 40;

  const linkClass = ({ isActive }) =>
    `relative font-medium transition-colors duration-300 hover:text-gold
     ${isActive ? 'text-gold' : scrolled ? 'text-dark dark:text-cream' : 'text-cream'}
     after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-gold after:transition-all
     ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300
        ${scrolled ? 'bg-white/90 dark:bg-dark/90 backdrop-blur-md shadow-soft py-3' : 'bg-transparent py-5'}`}
    >
      <nav className="container-x flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src="/logo-mark.png"
            alt="SASA Party Hall logo"
            onError={(e) => { e.currentTarget.src = '/logo.svg'; }}
            className="h-9 w-auto sm:h-10 drop-shadow"
          />
          <span className={`hidden sm:block text-[10px] font-body font-medium tracking-[0.3em] text-gold`}>
            PARTY&nbsp;HALL
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.path}>
              <NavLink to={l.path} className={linkClass}>{l.name}</NavLink>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Follow us on Instagram"
            className={`grid h-10 w-10 place-items-center rounded-full transition-colors
              ${scrolled ? 'text-dark dark:text-cream hover:bg-gold/10' : 'text-cream hover:bg-white/10'}`}
          >
            <FaInstagram size={19} />
          </a>

          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className={`grid h-10 w-10 place-items-center rounded-full transition-colors
              ${scrolled ? 'text-dark dark:text-cream hover:bg-gold/10' : 'text-cream hover:bg-white/10'}`}
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>

          <Link to="/booking" className="btn-primary hidden sm:inline-flex px-5 py-2.5 text-sm">
            <FaCalendarAlt size={13} /> Book Now
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className={`grid h-10 w-10 place-items-center rounded-full lg:hidden
              ${scrolled ? 'text-dark dark:text-cream' : 'text-cream'}`}
          >
            <FaBars size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-dark/60 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 z-50 h-full w-72 bg-white dark:bg-dark-soft p-8 shadow-2xl lg:hidden"
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="font-heading text-lg font-bold text-dark dark:text-cream">Menu</span>
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-gold">
                  <FaTimes size={22} />
                </button>
              </div>
              <ul className="space-y-5">
                {links.map((l) => (
                  <li key={l.path}>
                    <NavLink
                      to={l.path}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block text-lg font-medium ${isActive ? 'text-gold' : 'text-dark dark:text-cream'}`}
                    >
                      {l.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <Link to="/booking" onClick={() => setOpen(false)} className="btn-primary mt-10 w-full">
                Book Now
              </Link>
              <p className="mt-8 text-sm text-dark/60 dark:text-cream/60">{site.phone}</p>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
