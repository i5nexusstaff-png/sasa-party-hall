import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaUser, FaPhone, FaEnvelope, FaCalendarAlt, FaUsers,
  FaCommentDots, FaCheckCircle, FaWhatsapp,
} from 'react-icons/fa';
import { eventTypes } from '../data/stats';
import { site } from '../data/siteData';

const initial = {
  name: '', phone: '', email: '', eventType: '',
  eventDate: '', guests: '', message: '',
};

/**
 * Luxury booking form with client-side validation and a live booking summary.
 * On submit, the enquiry is sent straight to the venue's WhatsApp number as a
 * pre-filled message (opens WhatsApp Web / app).
 */
export default function BookingForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = 'Please enter your name';
    if (!/^[0-9+\-\s]{7,15}$/.test(form.phone)) err.phone = 'Enter a valid phone number';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = 'Enter a valid email';
    if (!form.eventType) err.eventType = 'Select an event type';
    if (!form.eventDate) err.eventDate = 'Choose an event date';
    if (!form.guests || Number(form.guests) < 1) err.guests = 'Enter expected guests';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Build a nicely formatted WhatsApp message with all the booking details.
    const lines = [
      '*New Booking Enquiry — SASA Party Hall*',
      '',
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      form.email ? `*Email:* ${form.email}` : null,
      `*Event Type:* ${form.eventType}`,
      `*Event Date:* ${form.eventDate}`,
      `*Expected Guests:* ${form.guests}`,
      form.message ? `*Message:* ${form.message}` : null,
    ].filter(Boolean);

    const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');

    setSent(true);
    setForm(initial);
  };

  const fields = [
    { name: 'name', label: 'Full Name', icon: FaUser, type: 'text', placeholder: 'John Doe' },
    { name: 'phone', label: 'Phone Number', icon: FaPhone, type: 'tel', placeholder: '+91 98765 43210' },
    { name: 'email', label: 'Email Address (optional)', icon: FaEnvelope, type: 'email', placeholder: 'you@email.com' },
    { name: 'eventDate', label: 'Event Date', icon: FaCalendarAlt, type: 'date' },
    { name: 'guests', label: 'Expected Guests', icon: FaUsers, type: 'number', placeholder: '250' },
  ];

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-light dark:bg-white/5 dark:border-white/10 rounded-3xl p-12 text-center"
      >
        <FaCheckCircle className="mx-auto text-6xl text-gold" />
        <h3 className="mt-6 font-heading text-2xl font-bold text-dark dark:text-cream">
          Enquiry Sent on WhatsApp!
        </h3>
        <p className="mt-3 text-dark/70 dark:text-cream/70">
          Your booking details have been opened in WhatsApp — just hit send and our team will
          confirm availability shortly. Didn't open?{' '}
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-gold underline"
          >
            Message us directly
          </a>
          .
        </p>
        <button onClick={() => setSent(false)} className="btn-primary mt-8">
          Make Another Booking
        </button>
      </motion.div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-5">
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        noValidate
        className="glass-light dark:bg-white/5 dark:border-white/10 rounded-3xl p-7 sm:p-9 lg:col-span-3"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {fields.map((f) => (
            <div key={f.name} className={f.name === 'email' ? 'sm:col-span-2' : ''}>
              <label className="mb-1.5 block text-sm font-medium text-dark dark:text-cream">
                {f.label}
              </label>
              <div className="relative">
                <f.icon className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gold" />
                <input
                  name={f.name}
                  type={f.type}
                  value={form[f.name]}
                  onChange={update}
                  placeholder={f.placeholder}
                  className="w-full rounded-xl border border-gold/20 bg-white/60 dark:bg-dark/40 py-3 pl-11 pr-4
                             text-dark dark:text-cream outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
                />
              </div>
              {errors[f.name] && <p className="mt-1 text-xs text-red-500">{errors[f.name]}</p>}
            </div>
          ))}

          {/* Event type select */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-dark dark:text-cream">Event Type</label>
            <select
              name="eventType"
              value={form.eventType}
              onChange={update}
              className="w-full rounded-xl border border-gold/20 bg-white/60 dark:bg-dark/40 py-3 px-4
                         text-dark dark:text-cream outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
            >
              <option value="">Select event</option>
              {eventTypes.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
            {errors.eventType && <p className="mt-1 text-xs text-red-500">{errors.eventType}</p>}
          </div>
        </div>

        {/* Message */}
        <div className="mt-5">
          <label className="mb-1.5 block text-sm font-medium text-dark dark:text-cream">Message</label>
          <div className="relative">
            <FaCommentDots className="pointer-events-none absolute left-4 top-4 text-gold" />
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={update}
              placeholder="Tell us about your dream event..."
              className="w-full rounded-xl border border-gold/20 bg-white/60 dark:bg-dark/40 py-3 pl-11 pr-4
                         text-dark dark:text-cream outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
            />
          </div>
        </div>

        <button type="submit" className="btn-primary mt-6 w-full">
          <FaWhatsapp size={18} /> Send Enquiry on WhatsApp
        </button>
        <p className="mt-3 text-center text-xs text-dark/50 dark:text-cream/50">
          Your details open in WhatsApp — send the message and we'll reply within 24 hours.
        </p>
      </form>

      {/* Live booking summary */}
      <aside className="rounded-3xl bg-dark p-7 sm:p-9 text-cream lg:col-span-2">
        <h3 className="font-heading text-xl font-bold text-gold">Booking Summary</h3>
        <p className="mt-2 text-sm text-cream/60">A quick overview of your request.</p>
        <dl className="mt-6 space-y-4 text-sm">
          {[
            ['Name', form.name],
            ['Phone', form.phone],
            ['Email', form.email],
            ['Event', form.eventType],
            ['Date', form.eventDate],
            ['Guests', form.guests],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between gap-4 border-b border-white/10 pb-3">
              <dt className="text-cream/60">{label}</dt>
              <dd className="text-right font-medium text-cream">{value || '—'}</dd>
            </div>
          ))}
        </dl>
        <a
          href={`tel:${site.phoneRaw}`}
          className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-white/5 p-4 text-sm text-cream/80 transition hover:bg-white/10"
        >
          <FaPhone className="text-gold" /> Prefer to call? {site.phone}
        </a>
      </aside>
    </div>
  );
}
