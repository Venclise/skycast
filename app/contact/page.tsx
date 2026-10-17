import ContactForm from "@/components/ContactForm";
import AnimatedText from "@/lib/Herotitle";
import { Mail } from "lucide-react";
import Image from "next/image";
import React from "react";
import type { Metadata } from "next";

// --- 1. Comprehensive SEO Metadata ---
export const metadata: Metadata = {
  title: "Contact SkyCast Studios | Web Development & Digital Solutions",
  description:
    "Have a project in mind? Contact SkyCast Studios to discuss custom Next.js web development, full-stack solutions, and UI/UX design. Reach us via email, WhatsApp, or form.",
  keywords: [
    "Contact SkyCast Studios",
    "Hire SkyCast Studios",
    "web development agency contact",
    "hire Next.js developers",
    "full stack development contact",
    "custom web applications",
    "digital agency contact",
  ],
  authors: [{ name: "SkyCast Studios" }],
  creator: "SkyCast Studios",
  metadataBase: new URL("https://skycaststudios.com"), // Update with your actual domain
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact SkyCast Studios | Let's Build Your Digital Platform",
    description:
      "Get in touch with SkyCast Studios. Fill out our contact form or chat with us directly via email or WhatsApp to discuss your next web project.",
    url: "https://skycaststudios.com/contact",
    siteName: "SkyCast Studios",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-contact-image.jpg", // Create/add an OG image in your /public folder
        width: 1200,
        height: 630,
        alt: "Contact SkyCast Studios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact SkyCast Studios | Web Development Agency",
    description:
      "Got a project in mind? Reach out to SkyCast Studios today to start building your next web app or digital experience.",
    creator: "@skycaststudios",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  // --- 2. Schema.org ContactPage JSON-LD Structured Data ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact SkyCast Studios",
    description:
      "Contact page for SkyCast Studios - Web development and digital design agency.",
    url: "https://skycaststudios.com/contact",
    mainEntity: {
      "@type": "Organization",
      name: "SkyCast Studios",
      url: "https://skycaststudios.com",
      logo: "https://skycaststudios.com/logo.png",
      email: "contact@skycaststudios.com", // Replace with your primary email
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "contact@skycaststudios.com",
          availableLanguage: ["English"],
        },
      ],
    },
  };

  return (
    <>
      {/* Search Engine Structured Data Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col w-full h-max lg:p-10 p-5 overflow-hidden">
        {/* Header Section */}
        <div className="flex flex-col gap-4 items-center">
          <AnimatedText animate="bottomToTop">
            {/* SEO & Accessibility Fix: Upgraded <h5> to semantic <h1> */}
            <h1 className="text-white text-3xl lg:text-5xl font-semibold text-center leading-tight">
              Got a project in mind? <br />
              Let’s talk about it.
            </h1>
          </AnimatedText>

          <AnimatedText animate="bottomToTop" delay={0.1}>
            <p className="text-xs lg:text-sm font-light text-neutral-200 text-center max-w-lg">
              Tell SkyCast Studios what you’re looking for, and we’ll get back to you with next steps and a concrete plan.
            </p>
          </AnimatedText>
        </div>

        {/* Form & Direct Contact Container */}
        <div className="flex items-center justify-between lg:flex-row flex-col gap-6 mt-8">
          {/* Direct Communication Buttons */}
          <div className="lg:w-1/2 w-full flex flex-col gap-4">
            {/* Email Link */}
            <a
              aria-label="Send an email to SkyCast Studios"
              className="bg-neutral-900 p-5 text-sm rounded-3xl border border-neutral-800 w-full flex items-center gap-4 text-neutral-200 hover:border-neutral-700 hover:bg-neutral-800/80 transition-all duration-200"
              href="mailto:contact@skycaststudios.com"
            >
              <div className="flex items-center justify-center">
                <Mail className="w-5 h-5 text-neutral-300" />
              </div>
              <span className="font-medium">contact@skycaststudios.com</span>
            </a>

            {/* WhatsApp Link */}
            <a
              aria-label="Chat with SkyCast Studios on WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-900 p-5 text-sm rounded-3xl border border-neutral-800 w-full flex items-center gap-4 text-neutral-200 hover:border-neutral-700 hover:bg-neutral-800/80 transition-all duration-200"
              href="https://wa.me/YOUR_PHONE_NUMBER" // Replace with your phone number (e.g. https://wa.me/923000000000)
            >
              <div className="flex items-center justify-center">
                <Image
                  src="/whatsapp.svg"
                  alt="SkyCast Studios WhatsApp"
                  height={20}
                  width={20}
                />
              </div>
              <span className="font-medium">WhatsApp Us</span>
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2 w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}