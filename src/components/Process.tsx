import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { processSteps } from '../data/content';

export default function Process() {
  return (
    <section className="bg-ink-950 py-24">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Our Process"
          title="From idea to reality."
          description="A clear, proven process that keeps your project on track from first conversation to launch day."
        />

        <div className="relative mt-16">
          <div
            className="absolute left-1/2 top-8 hidden h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent lg:block"
            aria-hidden="true"
          />
          <div
            className="absolute left-[27px] top-2 h-full w-px bg-gradient-to-b from-gold-500/50 via-gold-500/20 to-transparent lg:hidden"
            aria-hidden="true"
          />

          <ol className="space-y-12 lg:grid lg:grid-cols-4 lg:gap-8 lg:space-y-0">
            {processSteps.map((step, index) => (
              <li key={step.number} className="relative pl-20 lg:pl-0 lg:pt-20">
                <Reveal delay={index * 120}>
                  <span className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/60 bg-ink-950 font-serif text-lg font-semibold text-gold-400 shadow-[0_0_20px_rgba(212,175,55,0.15)] lg:top-0 lg:left-1/2 lg:-translate-x-1/2">
                    {step.number}
                  </span>
                  <h3 className="font-serif text-xl text-cream-50 lg:text-center">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[150%] text-cream-50/70 lg:text-center">
                    {step.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
