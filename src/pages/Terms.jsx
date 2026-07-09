import LegalLayout from '../components/LegalLayout';

const sections = [
  { heading: 'Acceptance of Terms', body: ['By accessing this website and booking our venue, you agree to be bound by these Terms & Conditions. Please read them carefully before making a reservation.'] },
  { heading: 'Bookings & Reservations', body: ['All bookings are subject to availability and confirmation. A booking is only confirmed once the required advance payment has been received and acknowledged by SASA Party Hall.'] },
  { heading: 'Payments', body: ['A non-refundable advance of 30% is required to confirm a date. The remaining balance must be paid in full before the event as per the agreed schedule.'] },
  { heading: 'Use of Premises', body: ['The venue must be used only for the purpose stated at the time of booking. Any illegal activity, damage to property or violation of safety norms is strictly prohibited.'] },
  { heading: 'Damages & Liability', body: ['The client is responsible for any damage caused to the venue, fixtures or equipment during their event. SASA Party Hall is not liable for the loss of personal belongings.'] },
  { heading: 'Decoration & Vendors', body: ['External decorators and vendors are permitted with prior approval. All setups must comply with our safety guidelines and timelines.'] },
  { heading: 'Conduct', body: ['We reserve the right to refuse service or terminate an event in cases of misconduct, safety violations or breach of these terms.'] },
  { heading: 'Force Majeure', body: ['SASA Party Hall shall not be held liable for any failure to perform due to circumstances beyond our reasonable control, including natural disasters or government restrictions.'] },
  { heading: 'Amendments', body: ['We reserve the right to update these Terms & Conditions at any time. Continued use of our services constitutes acceptance of the revised terms.'] },
];

export default function Terms() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80"
      sections={sections}
    />
  );
}
