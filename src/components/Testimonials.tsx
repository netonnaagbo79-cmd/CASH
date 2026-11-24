import { Quote, Star } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { testimonials } from '../data/content';

export default function Testimonials() {
  return (
    <section className="bg-ink-900 py-24">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our clients say"
          description="Sample layout shown below — each card is ready to be filled with genuine client feedback."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={index} delay={index * 100}>
              <figure className="card-dark flex h-full flex-col p-8 hover:border-gold-500/50">
                <Quote className="h-8 w-8 text-gold-500/60" aria-hidden="true" />
                <blockquote className="mt-5 flex-1 text-sm italic leading-[160%] text-cream-50/75">
                  {testimonial.quote}
                </blockquote>
                <div
                  className="mt-6 flex gap-1"
                  role="img"
                  aria-label="Rated 5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <figcaption className="mt-4 border-t border-gold-500/10 pt-4">
                  <p className="text-sm font-semibold text-cream-50">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-widest text-gold-400/80">
                    {testimonial.company}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
