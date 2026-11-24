import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, site } from '../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-ink-950/95 shadow-[0_1px_0_rgba(212,175,55,0.2)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-lux flex h-20 items-center justify-between" aria-label="Main navigation">
        <a href="#home" className="flex items-center" aria-label={`${site.name} home`}>
          <img
            src={site.logoUrl}
            alt={`${site.name} logo`}
            className="h-10 w-auto object-contain sm:h-11"
          />
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-[13px] font-medium uppercase tracking-widest transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold-500 after:transition-all after:duration-300 hover:after:w-full ${
                activeSection === link.href.slice(1)
                  ? 'text-gold-400 after:w-full'
                  : 'text-cream-50/80 hover:text-cream-50'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-gold-500 px-6 py-3 text-[12px] font-bold uppercase tracking-widest text-ink-950 transition-all duration-300 hover:bg-gold-300 hover:shadow-[0_0_24px_rgba(212,175,55,0.35)]"
          >
            Get a Free Consultation
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex h-11 w-11 items-center justify-center border border-gold-500/40 text-gold-400 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-gold-500/10 bg-ink-950/95 backdrop-blur-md transition-[max-height] duration-300 lg:hidden ${
          open ? 'max-h-[480px]' : 'max-h-0'
        }`}
      >
        <div className="container-lux flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`px-2 py-3 text-sm font-medium uppercase tracking-widest transition-colors ${
                activeSection === link.href.slice(1)
                  ? 'text-gold-400'
                  : 'text-cream-50/80 hover:text-gold-300'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 bg-gold-500 px-6 py-3 text-center text-[12px] font-bold uppercase tracking-widest text-ink-950"
          >
            Get a Free Consultation
          </a>
        </div>
      </div>
    </header>
  );
}
