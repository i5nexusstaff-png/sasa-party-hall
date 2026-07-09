import LegalLayout from '../components/LegalLayout';

const sections = [
  { heading: 'Cancellation by Client', body: ['Cancellations must be communicated in writing. The advance booking amount (30%) is non-refundable under all circumstances, as the date is reserved exclusively for you.'] },
  { heading: 'Refund Schedule', body: ['Cancellations made more than 90 days before the event: 50% of any additional payments (beyond the advance) refunded.', 'Cancellations made 30–90 days before the event: 25% of additional payments refunded.', 'Cancellations made less than 30 days before the event: no refund of payments made.'] },
  { heading: 'Date Rescheduling', body: ['One free date change is permitted if requested at least 60 days in advance, subject to availability. Subsequent changes may incur an administrative fee.'] },
  { heading: 'Cancellation by Venue', body: ['In the rare event that SASA Party Hall must cancel due to unforeseen circumstances, we will refund all payments made in full or offer an alternative date of your choosing.'] },
  { heading: 'Force Majeure', body: ['In cases of natural disasters, government restrictions or other events beyond our control, we will work with you to reschedule. Refund terms may vary based on the situation.'] },
  { heading: 'How to Cancel', body: ['To cancel or reschedule, please contact us at sasapartyhallofficial@gmail.com or call +91 91769 67778. All requests are processed within 7 working days.'] },
];

export default function Cancellation() {
  return (
    <LegalLayout
      title="Cancellation Policy"
      image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80"
      sections={sections}
    />
  );
}
