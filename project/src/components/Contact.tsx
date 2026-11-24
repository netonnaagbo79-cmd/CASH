import { useState, type FormEvent } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { supabase } from '../lib/supabase';
import { budgetOptions, serviceOptions, site } from '../data/content';

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  serviceRequired: string;
  projectBudget: string;
  projectDescription: string;
};

const emptyForm: FormState = {
  fullName: '',
  email: '',
  phone: '',
  companyName: '',
  serviceRequired: '',
  projectBudget: '',
  projectDescription: '',
};

const inputClass =
  'w-full border border-gold-500/25 bg-ink-950/70 px-4 py-3.5 text-sm text-cream-50 placeholder:text-cream-50/35 outline-none transition-colors duration-200 focus:border-gold-500';

const labelClass = 'mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-cream-50/70';

function WhatsAppIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={props.className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.83 9.83 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23Zm4.52-6.16c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.73-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const update = (field: keyof FormState) => (value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (form.fullName.trim().length < 2) next.fullName = 'Please enter your full name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = 'Please enter a valid email address.';
    if (form.phone.trim() && !/^[+\d][\d\s\-().]{6,}$/.test(form.phone.trim()))
      next.phone = 'Please enter a valid phone number.';
    if (form.projectDescription.trim().length < 10)
      next.projectDescription = 'Please describe your project (at least 10 characters).';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    try {
      const { error } = await supabase.from('contact_enquiries').insert({
        full_name: form.fullName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        company_name: form.companyName.trim() || null,
        service_required: form.serviceRequired || null,
        project_budget: form.projectBudget || null,
        project_description: form.projectDescription.trim(),
      });
      if (error) throw error;
      setForm(emptyForm);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const whatsappHref = site.whatsappNumber
    ? `https://wa.me/${site.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(
        "Hello, I'd like to discuss a project."
      )}`
    : null;

  return (
    <section id="contact" className="bg-ink-950 py-24">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Contact"
          title="Let's start a conversation."
          description="Have a project in mind? We would love to hear about it. Tell us what you need, and let's create something remarkable together."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <Reveal>
            <div className="space-y-5">
              {[
                { icon: Mail, label: 'Email', value: site.email },
                { icon: Phone, label: 'Phone', value: site.phone },
                { icon: MapPin, label: 'Location', value: site.location },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 border border-gold-500/15 bg-ink-900/60 px-5 py-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold-500/40 text-gold-400">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-400/80">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm text-cream-50/85">{item.value}</p>
                  </div>
                </div>
              ))}

              {whatsappHref && (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 border border-gold-500/25 bg-ink-900/60 px-5 py-4 transition-colors duration-300 hover:border-gold-500/60"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold-500/40 text-gold-400">
                    <WhatsAppIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-400/80">
                      WhatsApp
                    </p>
                    <p className="mt-1 text-sm text-cream-50/85">
                      Chat with us on WhatsApp
                      <MessageCircle className="ml-2 inline h-3.5 w-3.5" />
                    </p>
                  </div>
                </a>
              )}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="border border-gold-500/20 bg-ink-900/60 p-6 sm:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className={labelClass}>
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    autoComplete="name"
                    className={inputClass}
                    placeholder="Your full name"
                    value={form.fullName}
                    onChange={(e) => update('fullName')(e.target.value)}
                    aria-invalid={!!errors.fullName}
                  />
                  {errors.fullName && <FieldError message={errors.fullName} />}
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    className={inputClass}
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => update('email')(e.target.value)}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <FieldError message={errors.email} />}
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    className={inputClass}
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={(e) => update('phone')(e.target.value)}
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && <FieldError message={errors.phone} />}
                </div>

                <div>
                  <label htmlFor="companyName" className={labelClass}>
                    Company Name
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    autoComplete="organization"
                    className={inputClass}
                    placeholder="Your company"
                    value={form.companyName}
                    onChange={(e) => update('companyName')(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="serviceRequired" className={labelClass}>
                    Service Required
                  </label>
                  <select
                    id="serviceRequired"
                    className={`${inputClass} appearance-none`}
                    value={form.serviceRequired}
                    onChange={(e) => update('serviceRequired')(e.target.value)}
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="projectBudget" className={labelClass}>
                    Project Budget
                  </label>
                  <select
                    id="projectBudget"
                    className={`${inputClass} appearance-none`}
                    value={form.projectBudget}
                    onChange={(e) => update('projectBudget')(e.target.value)}
                  >
                    <option value="">Select a budget range</option>
                    {budgetOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="projectDescription" className={labelClass}>
                    Project Description *
                  </label>
                  <textarea
                    id="projectDescription"
                    rows={5}
                    className={`${inputClass} resize-y`}
                    placeholder="Tell us about your project, goals, and timeline..."
                    value={form.projectDescription}
                    onChange={(e) => update('projectDescription')(e.target.value)}
                    aria-invalid={!!errors.projectDescription}
                  />
                  {errors.projectDescription && (
                    <FieldError message={errors.projectDescription} />
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-gold mt-8 w-full sm:w-auto"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Project Enquiry
                  </>
                )}
              </button>

              {status === 'success' && (
                <p
                  role="status"
                  className="mt-5 flex items-center gap-2 border border-gold-500/40 bg-gold-500/10 px-4 py-3 text-sm text-gold-300"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  Thank you — your enquiry has been sent. We will get back to you shortly.
                </p>
              )}
              {status === 'error' && (
                <p
                  role="alert"
                  className="mt-5 flex items-center gap-2 border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm text-red-300"
                >
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  Something went wrong while sending your enquiry. Please try again.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FieldError({ message }: { message: string }) {
  return (
    <p role="alert" className="mt-2 flex items-center gap-1.5 text-xs text-red-300">
      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
      {message}
    </p>
  );
}
