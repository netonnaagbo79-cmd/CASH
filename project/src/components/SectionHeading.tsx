import Reveal from './Reveal';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <Reveal className={`max-w-3xl ${alignClass}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="heading-serif text-3xl sm:text-4xl lg:text-5xl text-cream-50">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-[150%] text-cream-50/70">{description}</p>
      )}
      <div
        className={`mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent ${
          align === 'left' ? '' : 'mx-auto'
        }`}
      />
    </Reveal>
  );
}
