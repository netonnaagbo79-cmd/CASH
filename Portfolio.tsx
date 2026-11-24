import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { projectFilters, projects, type Project } from '../data/content';

function BrowserMockup() {
  return (
    <svg viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
      <rect width="640" height="400" fill="#0A0A0A" />
      <rect x="70" y="40" width="500" height="320" fill="#0F0F0F" stroke="#D4AF37" strokeOpacity="0.35" />
      <rect x="70" y="40" width="500" height="34" fill="#141414" />
      <circle cx="92" cy="57" r="5" fill="#D4AF37" opacity="0.7" />
      <circle cx="110" cy="57" r="5" fill="#D4AF37" opacity="0.4" />
      <circle cx="128" cy="57" r="5" fill="#D4AF37" opacity="0.2" />
      <rect x="240" y="50" width="160" height="14" fill="#0A0A0A" />
      <rect x="100" y="110" width="200" height="20" fill="#D4AF37" opacity="0.85" />
      <rect x="100" y="142" width="150" height="10" fill="#FFFDF5" opacity="0.3" />
      <rect x="100" y="162" width="170" height="10" fill="#FFFDF5" opacity="0.2" />
      <rect x="100" y="196" width="90" height="26" fill="#D4AF37" />
      <rect x="360" y="110" width="180" height="150" fill="#141414" stroke="#D4AF37" strokeOpacity="0.25" />
      <path d="M360 240 L420 180 L460 215 L510 160 L540 190 L540 260 L360 260 Z" fill="#D4AF37" opacity="0.25" />
      <rect x="100" y="260" width="110" height="70" fill="#141414" stroke="#D4AF37" strokeOpacity="0.2" />
      <rect x="230" y="260" width="110" height="70" fill="#141414" stroke="#D4AF37" strokeOpacity="0.2" />
      <rect x="360" y="260" width="110" height="70" fill="#141414" stroke="#D4AF37" strokeOpacity="0.2" />
    </svg>
  );
}

function DashboardMockup() {
  return (
    <svg viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
      <rect width="640" height="400" fill="#0A0A0A" />
      <rect x="60" y="40" width="520" height="320" fill="#0F0F0F" stroke="#D4AF37" strokeOpacity="0.35" />
      <rect x="60" y="40" width="130" height="320" fill="#141414" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x="80" y={72 + i * 40} width={i === 0 ? 90 : 70} height="12" fill="#D4AF37" opacity={i === 0 ? 0.8 : 0.25} />
      ))}
      <rect x="210" y="66" width="120" height="60" fill="#141414" stroke="#D4AF37" strokeOpacity="0.25" />
      <rect x="350" y="66" width="120" height="60" fill="#141414" stroke="#D4AF37" strokeOpacity="0.25" />
      <rect x="490" y="66" width="70" height="60" fill="#141414" stroke="#D4AF37" strokeOpacity="0.25" />
      <rect x="210" y="150" width="230" height="180" fill="#141414" stroke="#D4AF37" strokeOpacity="0.25" />
      <polyline
        points="230,300 280,260 320,280 370,220 410,240 430,180"
        fill="none"
        stroke="#D4AF37"
        strokeWidth="3"
      />
      <rect x="460" y="150" width="100" height="180" fill="#141414" stroke="#D4AF37" strokeOpacity="0.25" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="475" y={170 + i * 40} width={70 - i * 12} height="12" fill="#D4AF37" opacity={0.7 - i * 0.15} />
      ))}
    </svg>
  );
}

function MobileMockup() {
  return (
    <svg viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
      <rect width="640" height="400" fill="#0A0A0A" />
      {[0, 1].map((i) => (
        <g key={i}>
          <rect
            x={250 - i * 90}
            y={40 + i * 30}
            width="150"
            height="300"
            rx="18"
            fill="#0F0F0F"
            stroke="#D4AF37"
            strokeOpacity="0.4"
          />
          <rect x={262 - i * 90} y={60 + i * 30} width="126" height="10" rx="3" fill="#D4AF37" opacity="0.8" />
          <rect x={262 - i * 90} y={82 + i * 30} width="90" height="8" rx="3" fill="#FFFDF5" opacity="0.25" />
          {[0, 1, 2].map((j) => (
            <rect
              key={j}
              x={262 - i * 90}
              y={110 + j * 46 + i * 30}
              width="126"
              height="34"
              rx="6"
              fill="#141414"
              stroke="#D4AF37"
              strokeOpacity="0.2"
            />
          ))}
          <rect x={262 - i * 90} y={310 + i * 30} width="126" height="18" rx="6" fill="#D4AF37" opacity="0.85" />
        </g>
      ))}
    </svg>
  );
}

const mockups: Record<Project['mockup'], () => JSX.Element> = {
  browser: BrowserMockup,
  dashboard: DashboardMockup,
  mobile: MobileMockup,
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const visibleProjects =
    activeFilter === 'All Projects'
      ? projects
      : projects.filter((p) => p.filters.includes(activeFilter));

  return (
    <section id="projects" className="bg-ink-900 py-24">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Portfolio"
          title="Our work speaks for itself."
          description="A selection of the digital experiences we craft for businesses across industries."
        />

        <Reveal>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {projectFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gold-500 text-ink-950'
                    : 'border border-gold-500/30 text-gold-400 hover:border-gold-500 hover:bg-gold-500/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => {
            const Mockup = mockups[project.mockup];
            return (
              <Reveal key={project.name} delay={(index % 3) * 100}>
                <article className="card-dark group flex h-full flex-col overflow-hidden hover:border-gold-500/50 hover:shadow-[0_20px_50px_rgba(212,175,55,0.08)]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]">
                      <Mockup />
                    </div>
                    <div className="absolute inset-0 bg-ink-950/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold-400">
                      {project.category}
                    </p>
                    <h3 className="mt-2 font-serif text-lg text-cream-50">{project.name}</h3>
                    <p className="mt-2 text-sm leading-[150%] text-cream-50/65">
                      {project.description}
                    </p>
                    <a
                      href="#contact"
                      className="mt-auto inline-flex items-center gap-2 pt-5 text-xs font-bold uppercase tracking-[0.2em] text-gold-400 transition-colors hover:text-gold-300"
                    >
                      View Project
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
