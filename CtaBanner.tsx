import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24">
      <div className="hero-glow absolute inset-0" aria-hidden="true" />
      <div className="grid-lines absolute inset-0 opacity-40" aria-hidden="true" />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.06]"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1200 600"
      >
        {Array.from({ length: 14 }).map((_, i) => (
          <circle key={i} cx={100 + i * 80} cy="300" r={120 + i * 22} fill="none" stroke="#D4AF37" />
        ))}
      </svg>

      <Reveal className="container-lux relative text-center">
        <h2 className="heading-serif mx-auto max-w-3xl text-3xl text-cream-50 sm:text-5xl">
          Ready to build something{' '}
          <span className="gold-gradient-text">exceptional?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-[150%] text-cream-50/70">
          Your next big idea deserves a powerful digital presence. Let&apos;s turn your
          vision into reality.
        </p>
        <a href="#contact" className="btn-gold mt-10">
          Let&apos;s Work Together
          <ArrowRight className="h-4 w-4" />
        </a>
      </Reveal>
    </section>
  );
}
