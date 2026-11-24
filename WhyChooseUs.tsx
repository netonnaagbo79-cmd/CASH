import { CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';
import { benefits } from '../data/content';

export default function WhyChooseUs() {
  return (
    <section className="bg-ink-950 py-24">
      <div className="container-lux grid items-center gap-14 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <Reveal>
            <p className="eyebrow mb-4">Why Choose Us</p>
            <h2 className="heading-serif text-3xl text-cream-50 sm:text-4xl lg:text-5xl">
              Why businesses choose us
            </h2>
            <p className="mt-6 text-base leading-[150%] text-cream-50/70">
              Your success is our priority. We combine creativity, technology, and
              strategy to deliver digital solutions that create real value.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <Reveal key={benefit} delay={index * 80}>
                <div className="flex items-center gap-3 border border-gold-500/15 bg-ink-900/60 px-5 py-4 transition-colors duration-300 hover:border-gold-500/40">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-400" />
                  <span className="text-sm font-medium text-cream-50/90">{benefit}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="order-1 lg:order-2">
          <div className="relative border border-gold-500/20 bg-ink-900 p-3">
            <div className="aspect-[4/3] overflow-hidden bg-ink-950">
              <svg
                viewBox="0 0 800 600"
                preserveAspectRatio="xMidYMid slice"
                className="h-full w-full"
                role="img"
                aria-label="Abstract visualization of modern technology and creative excellence"
              >
                <rect width="800" height="600" fill="#0F0F0F" />
                <circle cx="400" cy="300" r="170" fill="none" stroke="#D4AF37" strokeOpacity="0.35" />
                <circle cx="400" cy="300" r="120" fill="none" stroke="#D4AF37" strokeOpacity="0.5" />
                <circle cx="400" cy="300" r="70" fill="none" stroke="#D4AF37" strokeOpacity="0.7" />
                <circle cx="400" cy="300" r="18" fill="#D4AF37" />
                <circle cx="400" cy="130" r="9" fill="#D4AF37" opacity="0.8" />
                <circle cx="547" cy="380" r="9" fill="#D4AF37" opacity="0.6" />
                <circle cx="253" cy="380" r="9" fill="#D4AF37" opacity="0.4" />
                <line x1="400" y1="300" x2="400" y2="130" stroke="#D4AF37" strokeOpacity="0.3" />
                <line x1="400" y1="300" x2="547" y2="380" stroke="#D4AF37" strokeOpacity="0.3" />
                <line x1="400" y1="300" x2="253" y2="380" stroke="#D4AF37" strokeOpacity="0.3" />
              </svg>
            </div>
            <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full border border-gold-500/20" aria-hidden="true" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
