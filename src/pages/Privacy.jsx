import LegalLayout from '../components/LegalLayout';

const sections = [
  { heading: 'Introduction', body: ['At SASA Party Hall, your privacy is important to us. This Privacy Policy explains how we collect, use and protect the information you share with us when you visit our website or book our venue.'] },
  { heading: 'Information We Collect', body: ['We collect personal details you provide voluntarily — such as your name, phone number, email address, event type and date — when you submit a booking or contact request. We may also collect anonymous usage data to improve our website.'] },
  { heading: 'How We Use Your Information', body: ['Your information is used solely to respond to enquiries, process bookings, confirm availability and provide you with relevant event services. We never sell your data to third parties.'] },
  { heading: 'Data Security', body: ['We implement appropriate technical and organisational measures to safeguard your personal information against unauthorised access, alteration or disclosure.'] },
  { heading: 'Cookies', body: ['Our website may use cookies to enhance your browsing experience. You can disable cookies through your browser settings at any time.'] },
  { heading: 'Third-Party Services', body: ['We may use trusted third-party services (such as email and mapping providers) that have their own privacy policies. We are not responsible for the practices of these external services.'] },
  { heading: 'Your Rights', body: ['You may request access to, correction of, or deletion of your personal data at any time by contacting us directly.'] },
  { heading: 'Contact Us', body: ['If you have any questions about this Privacy Policy, please contact us at sasapartyhallofficial@gmail.com or call +91 91769 67778.'] },
];

export default function Privacy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80"
      sections={sections}
    />
  );
}
