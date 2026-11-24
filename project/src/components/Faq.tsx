import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { faqs } from '../data/content';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-ink-900 py-24">
      <div className="container-lux max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know before starting your project with us."
        />

        <div className="mt-14 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={faq.question} delay={index * 50}>
                <div
                  className={`border transition-colors duration-300 ${
                    isOpen ? 'border-gold-500/50 bg-ink-950/60' : 'border-gold-500/15 bg-ink-950/30'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span
                      className={`text-sm font-semibold sm:text-base ${
                        isOpen ? 'text-gold-400' : 'text-cream-50'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-gold-400 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-[160%] text-cream-50/70">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
