import { ArrowRight, Award, Lightbulb, Users } from 'lucide-react';
import Reveal from './Reveal';
import { coreValues } from '../data/content';

const valueIcons = [Lightbulb, Award, Users];

export default function About() {
  return (
    <section id="about" className="bg-ink-950 py-24">
      <div className="container-lux grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="relative border border-gold-500/20 bg-ink-900 p-3">
            <div className="aspect-[4/3] overflow-hidden bg-ink-950">
              <svg
                viewBox="0 0 800 600"
                preserveAspectRatio="xMidYMid slice"
                className="h-full w-full"
                role="img"
                aria-label="A professional digital team collaborating in a modern workspace"
              >
                <rect width="800" height="600" fill="#0F0F0F" />
                <rect x="0" y="470" width="800" height="130" fill="#141414" />
                <rect x="60" y="70" width="680" height="4" fill="#D4AF37" opacity="0.5" />
                {[0, 1, 2, 3].map((i) => (
                  <rect
                    key={i}
                    x={100 + i * 160}
                    y={130 + (i % 2) * 26}
                    width="120"
                    height="90"
                    fill="#0A0A0A"
                    stroke="#D4AF37"
                    strokeOpacity="0.35"
                  />
                ))}
                {[0, 1, 2, 3].map((i) => (
                  <rect
                    key={i}
                    x={124 + i * 160}
                    y={160 + (i % 2) * 26}
                    width="72"
                    height="8"
                    fill="#D4AF37"
                    opacity={0.25 + i * 0.12}
                  />
                ))}
                {[0, 1, 2].map((i) => (
                  <g key={i}>
                    <circle cx={200 + i * 200} cy={430} r="26" fill="#D4AF37" opacity="0.85" />
                    <rect x={150 + i * 200} y={466} width="100" height="10" fill="#FFFDF5" opacity="0.35" />
                  </g>
                ))}
                <circle cx="660" cy="150" r="60" fill="none" stroke="#D4AF37" strokeOpacity="0.3" />
                <circle cx="660" cy="150" r="40" fill="none" stroke="#D4AF37" strokeOpacity="0.2" />
              </svg>
            </div>
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full border border-gold-500/20" aria-hidden="true" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow mb-4">About Us</p>
            <h2 className="heading-serif text-3xl text-cream-50 sm:text-4xl lg:text-5xl">
              We are more than a digital agency.
            </h2>
            <p className="mt-6 text-base leading-[150%] text-cream-50/70">
              We are a creative technology agency passionate about helping businesses
              grow through innovative digital solutions. Our approach combines strategic
              thinking, creative design, and modern technology to build meaningful
              digital experiences.
            </p>
          </Reveal>

          <div className="mt-10 space-y-6">
            {coreValues.map((value, index) => {
              const Icon = valueIcons[index];
              return (
                <Reveal key={value.title} delay={index * 100}>
                  <div className="flex gap-5">
                    <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center border border-gold-500/40 text-gold-400">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gold-400">
                        {value.title}
                      </h3>
                      <p className="mt-2 text-sm leading-[150%] text-cream-50/70">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={300}>
            <a href="#services" className="btn-outline-gold mt-10">
              More About Us
              <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
