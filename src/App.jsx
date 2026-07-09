import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import FloatingButtons from './components/FloatingButtons';

// Pages are imported eagerly — the whole site is small, so this makes
// navigation instant (no loading screen between pages).
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import BookingContact from './pages/BookingContact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cancellation from './pages/Cancellation';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/booking" element={<BookingContact />} />
        <Route path="/contact" element={<BookingContact />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cancellation-policy" element={<Cancellation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <BackToTop />
      <FloatingButtons />
    </>
  );
}
