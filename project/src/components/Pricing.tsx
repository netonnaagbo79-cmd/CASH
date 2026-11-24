import { Check } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { pricingPlans } from '../data/content';

export default function Pricing() {
  return (
    <section id="pricing" className="bg-ink-950 py-24">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Pricing"
          title="Invest in your digital future."
          description="Transparent packages shaped around where your business is today — and where it is heading."
        />

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 100} className="h-full">
              <article
                className={`flex h-full flex-col p-8 transition-transform duration-300 lg:hover:-translate-y-1 ${
                  plan.featured
                    ? 'border-2 border-gold-500 bg-ink-900 shadow-[0_25px_60px_rgba(212,175,55,0.12)]'
                    : 'card-dark'
                }`}
              >
                {plan.featured && (
                  <p className="mb-5 self-start bg-gold-500 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-ink-950">
                    Most Popular
                  </p>
                )}
                <h3 className="font-serif text-2xl text-cream-50">{plan.name}</h3>
                <p className="mt-2 text-sm text-cream-50/60">{plan.audience}</p>
                <div className="my-6 h-px w-full bg-gradient-to-r from-gold-500/40 to-transparent" />
                <ul className="flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-cream-50/75">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-gold-500/40">
                        <Check className="h-3 w-3 text-gold-400" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 w-full ${plan.featured ? 'btn-gold' : 'btn-outline-gold'}`}
                >
                  Request a Quote
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
