import { title } from "process";

export const navLinks = [
  {
    id: 1,
    title: "home",
    link: "/",
  },
  {
    id: 2,
    title: "services",
    link: "/",
  },
  {
    id: 3,
    title: "work",
    link: "/",
  },
  {
    id: 4,
    title: "about",
    link: "/",
  },
  {
    id: 5,
    title: "blog",
    link: "/",
  },
];

export const UsedStacks = [
  {
    id: 1,
    title: "React JS",
  },
  {
    id: 2,
    title: "Next JS",
  },
  {
    id: 3,
    title: "MongoDB",
  },
  {
    id: 4,
    title: "Express JS",
  },
  {
    id: 5,
    title: "Stripe",
  },
  {
    id: 6,
    title: "Clerk auth",
  },
  {
    id: 7,
    title: "TypeScript",
  },
  {
    id: 8,
    title: "API integration",
  },
  {
    id: 9,
    title: "Tailwind CSS"
  },
  {
id: 12,
title: "GSAP",
  },
        {
    id: 10,
    title: "Social media marketing",
  },
      {
    id: 11,
    title: "SEO",
  },
];



export interface Service {
  id: number;
  category: string;
  subtitle: string;
  title: string;
  description: string;
  features: string[];
  img: string
}

export const servicesData: Service[] = [
  {
    id: 1,
    category: "WEB DESIGN",
    subtitle: "A WEBSITE THAT WORKS AS HARD AS YOU DO",
    title: "Business Website Design",
    description: "We design and build websites that look credible, load fast, and are structured to turn visitors into enquiries. No page-builder templates. Everything is custom-built to your business.",
    features: [
      "Conversion-Optimized Design",
      "Fast Loading Speeds",
      "Mobile-First Development",
      "SEO-Ready Structure"
    ],
    img: "/design.avif"
  },
  {
    id: 2,
    category: "WORDPRESS",
    subtitle: "POWERFUL & FLEXIBLE CMS SOLUTIONS",
    title: "WordPress Development",
    description: "Custom WordPress websites tailored to your brand, offering easy content management without compromising on speed or security.",
    features: [
      "Custom Theme Development",
      "Plugin Integration",
      "Secure & Scalable",
      "User-Friendly Dashboard"
    ],
    img: "/design.avif"

  },
  {
    id: 3,
    category: "SHOPIFY",
    subtitle: "E-COMMERCE THAT DRIVES SALES",
    title: "Shopify Development",
    description: "High-performing Shopify stores built to convert browsers into loyal buyers with seamless checkout flows and layouts.",
    features: [
      "Custom Storefronts",
      "App Integration",
      "Payment Gateway Setup",
      "Mobile Optimized"
    ],
    img: "/shopfiy.webp"

  },
  {
    id: 4,
    category: "E-COMMERCE",
    subtitle: "SCALABLE ONLINE STORES",
    title: "E-commerce Development",
    description: "Robust e-commerce platforms designed to handle heavy traffic, inventory management, and secure transactions effortlessly.",
    features: [
      "Secure Checkout Systems",
      "Inventory Management",
      "Multi-Currency Support",
      "Analytics Integration"
    ],
    img: "/design.avif"

  },
  {
    id: 5,
    category: "CUSTOM APPLICATIONS",
    subtitle: "TAILORED DIGITAL PRODUCTS",
    title: "Custom Web Applications",
    description: "Scalable and feature-rich web applications built from scratch to solve your unique business logic and workflows.",
    features: [
      "Scalable Architecture",
      "API Development",
      "Interactive UIs",
      "Robust Security"
    ],
    img: "/web-apps.png"

  },
  {
    id: 6,
    category: "SEO",
    subtitle: "GROW YOUR DIGITAL FOOTPRINT",
    title: "SEO & Google Presence",
    description: "Data-driven SEO strategies to boost your search engine rankings, drive organic traffic, and establish authority online.",
    features: [
      "On-Page & Off-Page SEO",
      "Keyword Optimization",
      "Performance Audits",
      "Local SEO Setup"
    ],
    img: "/design.avif"

  },
];


export const REVIEWS_DATA = [
  {
    id: 1,
    name: "Daniel Carter",
    country: "United States",
    post: "SkyCast delivered a clean, high-performance website that perfectly represents our brand. The process was smooth and communication was excellent."
  },
  {
    id: 2,
    name: "Emily Watson",
    country: "United Kingdom",
    post: "Professional, responsive, and detail-oriented. SkyCast transformed our outdated site into something modern and elegant."
  },
  {
    id: 3,
    name: "Liam O'Connor",
    country: "Ireland",
    post: "Outstanding work from start to finish. The website is fast, responsive, and visually impressive."
  },
  {
    id: 4,
    name: "Sophie Laurent",
    country: "France",
    post: "SkyCast has an excellent sense of design and usability. Our website now feels premium and intuitive."
  },
  {
    id: 5,
    name: "Marco Bianchi",
    country: "Italy",
    post: "Great experience working with SkyCast. They understood our requirements clearly and delivered beyond expectations."
  },
  {
    id: 6,
    name: "Jonas Müller",
    country: "Germany",
    post: "High-quality development with strong attention to performance and structure. Very reliable team."
  },
  {
    id: 7,
    name: "Lucas Ferreira",
    country: "Brazil",
    post: "SkyCast helped us build a modern website that performs beautifully on all devices. Highly professional service."
  },
  {
    id: 8,
    name: "Aiko Tanaka",
    country: "Japan",
    post: "Clean design and excellent functionality. SkyCast delivered a website that feels both simple and powerful."
  },
  {
    id: 9,
    name: "Oliver Chen",
    country: "Singapore",
    post: "Impressed by SkyCast’s attention to detail and fast delivery. The final product exceeded our expectations."
  },
  {
    id: 10,
    name: "Hassan Al-Farsi",
    country: "United Arab Emirates",
    post: "SkyCast created a sleek and professional website that reflects our brand perfectly. Communication was smooth throughout."
  }
];


export const faqs = [
  {
    id: 1,
    question: "What services does SkyCast provide as a digital agency?",
    answer:
      "SkyCast is a full-service digital agency specializing in custom website development, Search Engine Optimization (SEO), social media marketing, UI/UX design, and conversion-focused growth strategies.",
  },
  {
    id: 2,
    question: "How long does a typical website development project take?",
    answer:
      "A standard business website or landing page typically takes 2 to 4 weeks from kickoff to launch. More complex web applications or e-commerce platforms can take anywhere from 6 to 10 weeks depending on custom features.",
  },
  {
    id: 3,
    question: "How long does it take to see results from your SEO services?",
    answer:
      "SEO is a compounding, long-term strategy. While technical audits and on-page fixes provide early improvements, most clients experience significant organic ranking and traffic growth within 3 to 6 months of consistent optimization.",
  },
  {
    id: 4,
    question: "What do your social media marketing services include?",
    answer:
      "Our social media marketing covers content strategy, scroll-stopping graphic design and video editing, scheduled posting across platforms, community management, and targeted paid ad campaigns designed to keep your business visible.",
  },
  {
    id: 5,
    question: "How much do your services cost?",
    answer:
      "Pricing varies based on your project's scope and goals. We offer flexible packages for web design, monthly SEO retainers, and social media management tailored to fit both growing startups and established brands.",
  },
  {
    id: 6,
    question: "Do you build e-commerce websites?",
    answer:
      "Yes. We design and develop secure, scalable e-commerce stores with seamless payment gateway integration, inventory tracking, and high-converting checkout flows.",
  },
  {
    id: 7,
    question: "Is SEO included when SkyCast builds a new website?",
    answer:
      "Yes! Every website we build is coded from the ground up with built-in technical SEO best practices, fast loading speeds, mobile responsiveness, and clean meta-structures to help you rank on Google from day one.",
  },
  {
    id: 8,
    question: "Can you manage both our SEO and social media campaigns together?",
    answer:
      "Absolutely. Combining SEO and social media marketing creates a powerful synergy—driving high-intent traffic from search engines while building brand authority and trust on social platforms.",
  },
  {
    id: 9,
    question: "Can you redesign or audit my existing website?",
    answer:
      "Yes. We can completely revamp your current web presence to improve UI/UX design, speed up loading times, fix technical bugs, and turn passive visitors into paying enquiries.",
  },
  {
    id: 10,
    question: "Do you offer ongoing maintenance and support after launch?",
    answer:
      "Yes. SkyCast provides ongoing maintenance retainers that cover security updates, plugin monitoring, performance tracking, and continuous content or SEO updates.",
  },
  {
    id: 11,
    question: "What is your onboarding and working process like?",
    answer:
      "We start with a discovery call to understand your goals, followed by strategy mapping, design wireframing, development/content creation, rigorous testing, and finally, a seamless launch backed by growth tracking.",
  },
  {
    id: 12,
    question: "How do we get started with SkyCast?",
    answer:
      "Getting started is simple! Just reach out to us via our contact form or book a quick consultation call, and our team will review your business needs to propose a custom growth roadmap.",
  },
];