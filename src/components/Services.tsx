import {
  ArrowRight,
  Check,
  Code2,
  Palette,
  PenTool,
  Settings,
  Smartphone,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { services } from '../data/content';

const iconMap: Record<string, LucideIcon> = {
  code: Code2,
  'pen-tool': PenTool,
  smartphone: Smartphone,
  palette: Palette,
  'trending-up': TrendingUp,
  settings: Settings,
};

export default function Services() {
  return (
    <section id="services" className="bg-ink-900 py-24">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Services"
          title="Our Digital Solutions"
          description="Everything your business needs to compete, grow, and succeed in the digital world."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <Reveal key={service.title} delay={(index % 3) * 100}>
                <article className="card-dark group flex h-full flex-col p-8 hover:border-gold-500/50 hover:shadow-[0_20px_50px_rgba(212,175,55,0.08)]">
                  <span className="flex h-14 w-14 items-center justify-center border border-gold-500/40 text-gold-400 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-ink-950">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-serif text-xl text-cream-50">{service.title}</h3>
                  <p className="mt-3 text-sm leading-[150%] text-cream-50/70">
                    {service.description}
                  </p>
                  {service.items.length > 0 && (
                    <ul className="mt-5 space-y-2">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-cream-50/60">
                          <Check className="h-3.5 w-3.5 shrink-0 text-gold-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  <a
                    href="#contact"
                    className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-bold uppercase tracking-[0.2em] text-gold-400 transition-colors hover:text-gold-300"
                  >
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
