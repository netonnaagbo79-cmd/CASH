export const site = {
  name: '[AGENCY NAME]',
  logoUrl:
    'https://res.cloudinary.com/tm2roqyd/image/upload/v1795521203/LOGOO.png',
  trustLine: 'Creative Thinking. Innovative Technology. Exceptional Results.',
  // Replace these placeholders with the agency's real details before launch.
  email: '[AGENCY EMAIL]',
  phone: '[AGENCY PHONE]',
  location: '[AGENCY LOCATION]',
  // Set to the business WhatsApp number in international format, e.g. '15551234567'.
  // Leave empty to hide the WhatsApp button.
  whatsappNumber: '',
  socials: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'X', href: '#' },
    { label: 'Facebook', href: '#' },
  ],
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Projects', href: '#projects' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 30, suffix: '+', label: 'Happy Clients' },
  { value: 5, suffix: '+', label: 'Digital Solutions' },
  { value: 100, suffix: '%', label: 'Commitment to Quality' },
];

export const coreValues = [
  {
    title: 'Innovation',
    description:
      'We embrace modern technologies and creative ideas to develop solutions that make businesses stand out.',
  },
  {
    title: 'Excellence',
    description:
      'We focus on quality, attention to detail, and delivering outstanding digital experiences.',
  },
  {
    title: 'Partnership',
    description:
      'We work closely with our clients, understanding their goals and turning their ideas into reality.',
  },
];

export const services = [
  {
    icon: 'code',
    title: 'Web Development',
    description:
      'We design and develop modern, responsive, high-performance websites that turn visitors into customers.',
    items: [
      'Business websites',
      'Corporate websites',
      'Portfolio websites',
      'Landing pages',
      'E-commerce websites',
    ],
  },
  {
    icon: 'pen-tool',
    title: 'UI/UX Design',
    description:
      'We create beautiful, intuitive, user-friendly interfaces that deliver seamless digital experiences.',
    items: [
      'Website interface design',
      'Mobile app design',
      'Wireframing',
      'Prototyping',
      'User experience research',
    ],
  },
  {
    icon: 'smartphone',
    title: 'Mobile App Development',
    description:
      'We develop powerful mobile applications designed to simplify processes and connect businesses with customers.',
    items: [],
  },
  {
    icon: 'palette',
    title: 'Brand Identity & Graphic Design',
    description:
      "We build memorable visual identities that communicate your brand's personality and values.",
    items: [
      'Logo design',
      'Brand identity',
      'Business cards',
      'Marketing materials',
      'Social media graphics',
    ],
  },
  {
    icon: 'trending-up',
    title: 'Digital Marketing',
    description:
      'We help businesses reach the right audience, increase visibility, and generate meaningful engagement.',
    items: [
      'Social media strategy',
      'Search engine optimization',
      'Content marketing',
      'Digital advertising',
    ],
  },
  {
    icon: 'settings',
    title: 'IT Consulting & Automation',
    description:
      'We help businesses improve productivity through technology, intelligent automation, and digital transformation.',
    items: [],
  },
];

export const benefits = [
  'Modern Technology',
  'Creative Excellence',
  'Responsive Design',
  'Reliable Support',
  'Client-Focused Solutions',
  'Performance Optimization',
];

export type Project = {
  name: string;
  category: string;
  filters: string[];
  description: string;
  mockup: 'browser' | 'dashboard' | 'mobile';
};

export const projectFilters = [
  'All Projects',
  'Websites',
  'Applications',
  'Branding',
  'UI/UX',
];

export const projects: Project[] = [
  {
    name: 'Meridian Consulting Group',
    category: 'Corporate Website',
    filters: ['Websites', 'UI/UX'],
    description:
      'A polished corporate presence with structured content, refined typography, and a lead-focused layout.',
    mockup: 'browser',
  },
  {
    name: 'Atelier Commerce',
    category: 'E-commerce Platform',
    filters: ['Websites', 'Applications'],
    description:
      'A conversion-driven online store with streamlined product pages and a frictionless checkout flow.',
    mockup: 'dashboard',
  },
  {
    name: 'Launchpad Ventures',
    category: 'Business Landing Page',
    filters: ['Websites', 'UI/UX'],
    description:
      'A high-impact landing page engineered to communicate value quickly and capture qualified enquiries.',
    mockup: 'browser',
  },
  {
    name: 'Studio Noir Identity',
    category: 'Creative Portfolio',
    filters: ['Branding', 'UI/UX'],
    description:
      'An expressive portfolio experience built around bold visual storytelling and elegant galleries.',
    mockup: 'browser',
  },
  {
    name: 'Fieldbook Mobile App',
    category: 'Mobile Application',
    filters: ['Applications', 'UI/UX'],
    description:
      'A clean, intuitive mobile application designed to simplify everyday tasks for busy teams.',
    mockup: 'mobile',
  },
  {
    name: 'Pulse Operations Dashboard',
    category: 'Dashboard & Management System',
    filters: ['Applications', 'UI/UX'],
    description:
      'A custom management system that turns complex operational data into clear, actionable views.',
    mockup: 'dashboard',
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We understand your business, objectives, audience, and project requirements.',
  },
  {
    number: '02',
    title: 'Strategy & Design',
    description:
      'We develop a strategic direction and create the visual experience for your project.',
  },
  {
    number: '03',
    title: 'Development',
    description:
      'We transform the approved design into a functional, responsive, and optimized digital solution.',
  },
  {
    number: '04',
    title: 'Launch & Support',
    description:
      'We launch your project and provide ongoing assistance when required.',
  },
];

export const testimonials = [
  {
    quote:
      'Sample testimonial — replace this text with genuine feedback from a real client describing their experience with the agency.',
    name: '[Client Name]',
    company: '[Company Name]',
  },
  {
    quote:
      'Sample testimonial — replace this text with genuine feedback from a real client describing the results they achieved.',
    name: '[Client Name]',
    company: '[Company Name]',
  },
  {
    quote:
      'Sample testimonial — replace this text with genuine feedback from a real client describing how the project went.',
    name: '[Client Name]',
    company: '[Company Name]',
  },
];

export const pricingPlans = [
  {
    name: 'Starter',
    audience: 'For individuals and small businesses.',
    features: [
      'Basic website design',
      'Responsive layout',
      'Essential pages',
      'Contact form',
      'Basic SEO setup',
    ],
    featured: false,
  },
  {
    name: 'Professional',
    audience: 'For growing businesses.',
    features: [
      'Custom website design',
      'Advanced functionality',
      'Responsive development',
      'SEO optimization',
      'Performance optimization',
      'Priority support',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    audience: 'For established businesses.',
    features: [
      'Fully customized solutions',
      'Advanced integrations',
      'Complex functionality',
      'Premium UI/UX',
      'Dedicated project support',
      'Ongoing maintenance options',
    ],
    featured: false,
  },
];

export const faqs = [
  {
    question: 'What services does your agency offer?',
    answer:
      'We offer web development, UI/UX design, mobile app development, brand identity and graphic design, digital marketing, and IT consulting with intelligent automation. Every engagement is tailored to your business goals.',
  },
  {
    question: 'How long does website development take?',
    answer:
      'Timelines depend on the size and complexity of the project. A focused landing page can be ready in a couple of weeks, while a full corporate website or e-commerce platform typically takes longer. We agree on a clear schedule with you before any work begins.',
  },
  {
    question: 'Can you redesign an existing website?',
    answer:
      'Yes. We audit your current website, identify what is working and what is not, and rebuild it with a modern design, better performance, and improved user experience while preserving your existing content and search rankings.',
  },
  {
    question: 'Do you offer website maintenance?',
    answer:
      'Yes. We provide ongoing maintenance options covering updates, security, backups, performance monitoring, and content changes so your website stays reliable long after launch.',
  },
  {
    question: 'Can you develop e-commerce websites?',
    answer:
      'Absolutely. We build e-commerce websites with product catalogues, secure checkout, payment integration, and order management, designed to make buying from you simple and trustworthy.',
  },
  {
    question: 'How do I start a project?',
    answer:
      'Simply send us a message through the contact form or request a free consultation. We will discuss your goals, define the scope together, and provide a clear proposal before any work starts.',
  },
  {
    question: 'Do you offer custom digital solutions?',
    answer:
      'Yes. Beyond standard websites, we design and build custom business systems, dashboards, integrations, and automation tools shaped around the way your business operates.',
  },
];

export const serviceOptions = [
  'Web Development',
  'UI/UX Design',
  'Mobile App Development',
  'Brand Identity & Graphic Design',
  'Digital Marketing',
  'IT Consulting & Automation',
  'Other',
];

export const budgetOptions = [
  'Under $1,000',
  '$1,000 – $5,000',
  '$5,000 – $10,000',
  '$10,000 – $25,000',
  '$25,000+',
  'Not sure yet',
];
