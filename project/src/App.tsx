import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <Statistics />
        <About />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Process />
        <Testimonials />
        <Pricing />
        <CtaBanner />
        <Contact />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;
