import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import CTABanner from './components/CTABanner';
import TiendaOnlinePreview from './components/TiendaOnlinePreview';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <TiendaOnlinePreview />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <CTABanner />
      <Footer />
    </div>
  );
}
