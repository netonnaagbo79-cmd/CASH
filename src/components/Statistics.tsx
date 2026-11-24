import { useEffect, useRef, useState } from 'react';
import { stats } from '../data/content';

function useCountUp(target: number, start: boolean, duration = 1600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let frame: number;
    const t0 = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target, duration]);

  return value;
}

function StatItem({
  value,
  suffix,
  label,
  start,
}: {
  value: number;
  suffix: string;
  label: string;
  start: boolean;
}) {
  const count = useCountUp(value, start);
  return (
    <div className="px-6 py-10 text-center">
      <p className="heading-serif text-4xl text-gold-400 sm:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-cream-50/70">
        {label}
      </p>
    </div>
  );
}

export default function Statistics() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="border-y border-gold-500/15 bg-ink-900">
      <div ref={ref} className="container-lux grid grid-cols-1 divide-y divide-gold-500/15 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} start={started} />
        ))}
      </div>
    </section>
  );
}
