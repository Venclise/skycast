import ContactForm from "@/components/ContactForm";
import AnimatedText from "@/lib/Herotitle";
import { Mail } from "lucide-react";
import Image from "next/image";
import React from "react";
import type { Metadata } from "next";

// --- 1. SEO Metadata Configuration ---
export const metadata: Metadata = {
  title: "Get a Custom Web Development Quote | SkyCast Studios",
  description:
    "Request a custom project quote from SkyCast Studios. We build high-performance Next.js websites, web applications, and digital solutions tailored to your business.",
  keywords: [
    "SkyCast Studios",
    "web development agency",
    "custom website quote",
    "Next.js agency",
    "hire web developers",
    "full stack web development",
    "UI UX design quote",
    "digital agency quote",
  ],
  authors: [{ name: "SkyCast Studios" }],
  creator: "SkyCast Studios",
  metadataBase: new URL("https://skycaststudios.com"), // Replace with your actual domain
  alternates: {
    canonical: "/quote",
  },
  openGraph: {
    title: "Get a Custom Project Quote | SkyCast Studios",
    description:
      "Tell us about your project requirements and let SkyCast Studios build your high-converting digital platform. Get a fast response today.",
    url: "https://skycaststudios.com/quote",
    siteName: "SkyCast Studios",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-quote-image.jpg", // Add an OG image in your /public folder
        width: 1200,
        height: 630,
        alt: "SkyCast Studios Custom Quote Request",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Custom Web Development Quote | SkyCast Studios",
    description:
      "Partner with SkyCast Studios for high-performance web development & design. Submit your project scope for a custom quote.",
    creator: "@skycaststudios",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  // --- 2. Schema.org JSON-LD Structured Data ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Get a Custom Quote - SkyCast Studios",
    description:
      "Request a project estimate and quote from SkyCast Studios for custom web development and digital solutions.",
    url: "https://skycaststudios.com/quote",
    mainEntity: {
      "@type": "ProfessionalService",
      name: "SkyCast Studios",
      image: "https://skycaststudios.com/logo.png",
      priceRange: "$$$",
      telephone: "+1-000-000-0000", // Update with your actual contact number
      email: "contact@skycaststudios.com", // Update with your official email
      url: "https://skycaststudios.com",
    },
  };

  return (
    <>
      {/* Inject Structured Data into Head for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col w-full h-max lg:p-10 p-5 overflow-hidden">
        <div className="flex flex-col gap-4 items-center">
          <AnimatedText animate="bottomToTop">
            {/* SEO FIX: Changed <h5> to <h1> for critical document hierarchy */}
            <h1 className="text-white text-3xl lg:text-7xl font-semibold text-center">
              Get Your Project<br />
              Custom Quote
            </h1>
          </AnimatedText>
          
          <AnimatedText animate="bottomToTop" delay={0.1}>
            <p className="text-xs lg:text-sm font-light text-neutral-200 text-center max-w-xl">
              Tell SkyCast Studios what you’re looking for, and our team will get back to you with an exact scope and next steps.
            </p>
          </AnimatedText>
        </div>

        <div className="flex items-center justify-between lg:flex-row flex-col gap-6 mt-8">
          <div className="lg:w-1/2 w-full flex flex-col gap-4">
            {/* Email Contact Link */}
            <a
              aria-label="Send an email to SkyCast Studios"
              className="bg-neutral-900 p-5 text-sm rounded-3xl border border-neutral-800 w-full flex items-center gap-4 text-neutral-200 hover:border-neutral-700 transition-colors"
              href="mailto:contact@skycaststudios.com"
            >
              <div>
                <Mail className="w-5 h-5 text-neutral-300" />
              </div>
              <span>contact@skycaststudios.com</span>
            </a>

            {/* WhatsApp Contact Link */}
            <a
              aria-label="Chat with SkyCast Studios on WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-900 p-5 text-sm rounded-3xl border border-neutral-800 w-full flex items-center gap-4 text-neutral-200 hover:border-neutral-700 transition-colors"
              href="https://wa.me/YOUR_PHONE_NUMBER" // Replace with your WhatsApp phone link
            >
              <div>
                <Image
                  src="/whatsapp.svg"
                  alt="SkyCast Studios WhatsApp"
                  height={20}
                  width={20}
                />
              </div>
              <span>WhatsApp Us</span>
            </a>
          </div>

          <div className="lg:w-1/2 w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}