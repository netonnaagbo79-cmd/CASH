import { useState, type FormEvent } from 'react';
import { ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { navLinks, services, site } from '../data/content';
import { supabase } from '../lib/supabase';

const socialIcons: Record<string, string> = {
  LinkedIn:
    'M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z',
  Instagram:
    'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07Zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z',
  X: 'M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z',
  Facebook:
    'M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.32 0 2.7.24 2.7.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07Z',
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle');

  const subscribe = async (e: FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return;
    setStatus('sending');
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert({ email: email.trim().toLowerCase() });
      if (error) throw error;
      setStatus('done');
      setEmail('');
    } catch {
      setStatus('idle');
    }
  };

  return (
    <footer className="border-t border-gold-500/20 bg-ink-950">
      <div className="container-lux grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
        <div>
          <a href="#home" aria-label={`${site.name} home`}>
            <img
              src={site.logoUrl}
              alt={`${site.name} logo`}
              className="h-12 w-auto object-contain"
              loading="lazy"
            />
          </a>
          <p className="mt-5 max-w-xs text-sm leading-[160%] text-cream-50/60">
            We create innovative digital experiences and powerful technology solutions
            that help businesses grow and succeed.
          </p>
          <div className="mt-6 flex gap-3">
            {site.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center border border-gold-500/30 text-gold-400 transition-all duration-300 hover:bg-gold-500 hover:text-ink-950"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d={socialIcons[social.label]} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-gold-400">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-cream-50/65 transition-colors hover:text-gold-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-gold-400">
            Services
          </h3>
          <ul className="mt-5 space-y-3">
            {services.map((service) => (
              <li key={service.title}>
                <a
                  href="#services"
                  className="text-sm text-cream-50/65 transition-colors hover:text-gold-300"
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-gold-400">
            Stay Updated
          </h3>
          <p className="mt-5 text-sm text-cream-50/60">
            Subscribe to our newsletter for insights and updates.
          </p>
          {status === 'done' ? (
            <p className="mt-4 flex items-center gap-2 border border-gold-500/40 bg-gold-500/10 px-4 py-3 text-sm text-gold-300">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              You are subscribed. Thank you!
            </p>
          ) : (
            <form onSubmit={subscribe} className="mt-4 flex">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full min-w-0 border border-gold-500/25 bg-ink-900/70 px-4 py-3 text-sm text-cream-50 placeholder:text-cream-50/35 outline-none transition-colors focus:border-gold-500"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                aria-label="Subscribe to newsletter"
                className="flex w-12 shrink-0 items-center justify-center bg-gold-500 text-ink-950 transition-colors hover:bg-gold-300 disabled:opacity-60"
              >
                {status === 'sending' ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <ArrowRight className="h-4 w-4" />
                )}
              </button>
            </form>
          )}

          <ul className="mt-6 space-y-2 text-sm text-cream-50/60">
            <li>{site.email}</li>
            <li>{site.phone}</li>
            <li>{site.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold-500/10">
        <div className="container-lux flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream-50/50 sm:flex-row">
          <p>© 2026 {site.name}. All Rights Reserved.</p>
          <p className="text-gold-400/70">Designed with Excellence.</p>
        </div>
      </div>
    </footer>
  );
}
