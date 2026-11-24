import { ArrowRight, ChevronDown } from 'lucide-react';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink-950 pt-20">
      <div className="hero-glow absolute inset-0" aria-hidden="true" />
      <div className="grid-lines absolute inset-0 opacity-60" aria-hidden="true" />

      <div className="container-lux relative grid items-center gap-14 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <Reveal>
            <p className="eyebrow mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gold-500" aria-hidden="true" />
              Web Development &amp; Digital Solutions Agency
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="heading-serif text-4xl text-cream-50 sm:text-5xl lg:text-6xl">
              We build digital experiences that{' '}
              <span className="gold-gradient-text">move businesses forward.</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-7 max-w-xl text-base leading-[150%] text-cream-50/70 sm:text-lg">
              We transform ideas into powerful digital solutions. From stunning websites
              to intelligent business systems, we help brands establish a strong digital
              presence, attract customers, and achieve sustainable growth.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="btn-gold">
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#services" className="btn-outline-gold">
                Explore Our Services
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <p className="mt-10 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400/90">
              <span className="h-1.5 w-1.5 rotate-45 bg-gold-500" aria-hidden="true" />
              Creative Thinking. Innovative Technology. Exceptional Results.
            </p>
          </Reveal>
        </div>

        <Reveal delay={250}>
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-6 bg-gold-500/5 blur-2xl" />
            <div className="relative overflow-hidden border border-gold-500/25 bg-ink-900 shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-1.5 border-b border-gold-500/15 bg-ink-900 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-gold-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-gold-500/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-gold-500/20" />
                <span className="ml-4 h-5 flex-1 rounded-sm bg-ink-950/80" />
              </div>
              <div className="space-y-5 bg-ink-950/70 p-8 sm:p-10">
                <div className="flex items-end gap-2">
                  <div className="h-16 w-16 bg-gradient-to-t from-gold-700 to-gold-400" />
                  <div className="h-24 w-16 bg-gradient-to-t from-gold-700/70 to-gold-400/70" />
                  <div className="h-32 w-16 bg-gradient-to-t from-gold-700/50 to-gold-400/50" />
                  <div className="h-44 w-16 bg-gradient-to-t from-gold-700/40 to-gold-400/40" />
                  <div className="h-52 w-16 bg-gradient-to-t from-gold-700/30 to-gold-400/30" />
                </div>
                <div className="h-2 w-3/4 bg-cream-50/15" />
                <div className="h-2 w-1/2 bg-cream-50/10" />
                <div className="flex gap-4 pt-2">
                  <div className="h-9 w-28 bg-gold-500" />
                  <div className="h-9 w-28 border border-gold-500/40" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden border border-gold-500/25 bg-ink-900 px-5 py-4 shadow-xl sm:block">
              <p className="text-xl font-bold text-gold-400">100%</p>
              <p className="text-[11px] uppercase tracking-widest text-cream-50/60">
                Commitment to Quality
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="relative flex justify-center pb-10">
        <a href="#stats" aria-label="Scroll to statistics" className="text-gold-500/70 transition-colors hover:text-gold-400">
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
