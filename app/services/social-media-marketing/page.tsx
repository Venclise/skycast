import { Button } from '@/components/ui/button'
import AnimatedText from '@/lib/Herotitle'
import FAQ from '@/sections/FAQ'
import { ArrowRight, ChevronRight, Handshake, Layout, Lock, MessageSquare, Phone, Share2, Sparkles, TrendingUp, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import type { Metadata } from 'next'

// --- SEO Metadata Configuration ---
export const metadata: Metadata = {
  title: "Social Media Marketing Services | SkyCast Studios",
  description: "Drive brand awareness, audience engagement, and steady lead generation with data-driven social media marketing campaigns by SkyCast Studios.",
  keywords: ["SkyCast Studios", "social media marketing agency", "content creation", "social media management", "brand growth", "viral engagement"],
  openGraph: {
    title: "Social Media Marketing Services | SkyCast Studios",
    description: "Scroll-stopping posts, targeted reach, and steady content strategies that keep your business visible and growing.",
    url: "https://skycaststudios.com/services/social-media-marketing",
    siteName: "SkyCast Studios",
    type: "website",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Social Media Marketing",
    provider: {
      "@type": "Organization",
      name: "SkyCast Studios"
    },
    description: "Data-driven social media management, content strategy, and viral audience engagement campaigns."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className='bg-[#101010] p-5 lg:p-20'>

        {/* Hero Section */}
        <div className='w-full h-max justify-between flex items-center lg:flex-row flex-col gap-8'>
          <div className='flex flex-col gap-4 w-full lg:w-[40%]'>

            <AnimatedText animate="bottomToTop">
              <h1 className='lg:text-5xl text-4xl text-white mt-5'>
                Social Media Marketing
                <br />
                for Growing Brands
              </h1>   
            </AnimatedText>

            <AnimatedText animate="bottomToTop" delay={0.1}>
              <p className="text-xs max-w-xl font-light text-neutral-200">
                Scroll-stopping post designs, high-converting content strategies, and audience targeting built by SkyCast Studios to keep your brand visible and consistently active.
              </p>
            </AnimatedText>

             <div className="flex items-center  gap-3 py-5 rounded-xs">
                            <Button variant="secondary" className="p-5 hover:gap-5  rounded-full  cursor-pointer">
                               Request a quote <ChevronRight />
                             </Button>
                               
                            
                             <Button variant="secondary" className="p-5 bg-transparent text-white hover:bg-white hover:text-black hover:border-0 border border-neutral-500 rounded-full  cursor-pointer">
                               Our Work
                             </Button>
                           </div>
          </div>

          {/* Card 2: Social Media Marketing Block */}
          <div className="w-full lg:w-[60%] flex justify-center">
            <div className="w-full bg-[#1E1E1E] rounded-3xl p-6 sm:p-10 flex flex-col justify-between gap-8 relative overflow-hidden border border-neutral-800 group min-h-[500px]">
              <AnimatedText animate="bottomToTop" delay={0.3}>
                
                {/* Text Content */}
                <div className="flex flex-col gap-2 z-10">
                  <h3 className="text-neutral-100 text-2xl sm:text-3xl font-semibold tracking-tight">
                    Social media marketing
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                    Scroll-stopping posts and steady content that keep your business visible.
                  </p>
                </div>

                {/* Stacked Tilted Cards Area */}
                <div className="relative w-full flex-1 flex items-center justify-center my-4 z-10 min-h-[260px]">
                  
                  {/* Background Stacked Card */}
                  <div className="absolute w-[85%] bg-neutral-800/60 rounded-2xl p-4 border border-neutral-700/40 -rotate-6 translate-y-2 group-hover:-rotate-12 transition-transform duration-500 opacity-60">
                    <div className="h-20 w-full bg-neutral-700/30 rounded-xl"></div>
                  </div>

                  {/* Main Front Glass Card */}
                  <div className="relative w-[92%] bg-neutral-900/95 rounded-2xl p-5 border border-neutral-700/80 shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500 flex flex-col gap-4">
                    
                    {/* Header inside Card */}
                    <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
                          <TrendingUp size={14} />
                        </div>
                        <span className="text-xs font-medium text-neutral-300">Campaign Growth</span>
                      </div>
                      <Share2 size={14} className="text-neutral-500" />
                    </div>

                    {/* Content Preview Block */}
                    <div className="flex gap-3 items-center">
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-neutral-700">
                        <Image 
                          src="/socail.png" 
                          alt="Social media post sample" 
                          fill 
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-1 min-w-0">
                        <span className="text-xs font-semibold text-neutral-200 truncate">
                          Viral Engagement Pack
                        </span>
                        <span className="text-[11px] text-neutral-400">
                          Targeted reach & steady strategy
                        </span>
                      </div>
                    </div>

                    {/* Access Info / Badge List */}
                    <div className="flex items-center justify-between pt-2 text-[11px] text-neutral-400 bg-neutral-950/40 p-2.5 rounded-xl border border-neutral-800">
                      <div className="flex items-center gap-1.5">
                        <Lock size={12} className="text-emerald-400" />
                        <span>Audience Target</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={12} />
                        <span className="text-neutral-300 font-medium">+12.4k reach</span>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Full Width Link Button */}
                <Link 
                  href="/quote" 
                  className="w-full mx-auto lg:w-max capitalize bg-white text-black py-3 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors z-10 shadow-lg text-center"
                >
                  <span>view service</span>
                  <ArrowRight size={15} />
                </Link>

              </AnimatedText>
            </div>
          </div>  
        </div>

        {/* What We Provide Section */}
        <AnimatedText animate="bottomToTop">
          <h2 className='lg:text-5xl text-4xl text-white mt-5'>
            What we Provides
          </h2>   
        </AnimatedText>

        <div className='w-full lg:h-[50vh] flex items-center gap-4 lg:flex-row flex-col '>
          <div className='flex-1 bg-[#151515] border border-neutral-800 rounded-xl h-[10rem] p-5 flex items-center flex-col justify-center'>
            <AnimatedText animate="bottomToTop" delay={0.1}>
              <div className='flex items-center gap-2 flex-col'>
                <Sparkles className='text-white' />
                <h3 className='text-white font-medium'>Content Strategy & Design</h3>
              </div>
              <p className="text-xs text-center text-neutral-300 leading-relaxed">
                Eye-catching graphics and video posts structured to reflect your brand identity and hook scrolling audiences.
              </p>
            </AnimatedText> 
          </div>

          <div className='flex-1 bg-[#151515] border border-neutral-800 rounded-xl h-[10rem] p-5 flex items-center flex-col justify-center'>
            <AnimatedText animate="bottomToTop" delay={0.2}>
              <div className='flex items-center gap-2 flex-col'>
                <Users className='text-white' />
                <h3 className='text-white font-medium'>Audience Growth & Reach</h3>
              </div>
              <p className="text-xs text-center text-neutral-300 leading-relaxed">
                Targeted campaigns that position your business directly in front of interested potential buyers.
              </p>
            </AnimatedText>
          </div>

          <div className='flex-1 bg-[#151515] border border-neutral-800 rounded-xl h-[10rem] p-5 flex items-center flex-col justify-center'>
            <AnimatedText animate="bottomToTop" delay={0.3}>  
              <div className='flex items-center gap-2 flex-col'>
                <MessageSquare className='text-white' />
                <h3 className='text-white font-medium'>Consistent Publishing</h3>
              </div>
              <p className="text-xs text-center text-neutral-300 leading-relaxed">
                Structured posting calendars to ensure your brand maintains constant visibility across social networks.
              </p>
            </AnimatedText>
          </div>
        </div>

        {/* Development Process Section */}
        <div className='flex flex-col'>
          <AnimatedText animate="bottomToTop">
            <h2 className='lg:text-5xl text-4xl text-white mt-5'>
              Our Marketing Process.
            </h2>   
          </AnimatedText>

          <div className='w-full lg:h-[50vh] flex items-center gap-4 lg:flex-row flex-col '>
            <div className='flex-1 bg-[#151515] border border-neutral-800 rounded-xl h-[10rem] p-5 flex items-center flex-col justify-center'>
              <AnimatedText animate="bottomToTop" delay={0.1}>
                <div className='flex items-center gap-2 flex-col'>
                  <Phone className='text-white' />
                  <h3 className='text-white font-medium'>1. Audit & Strategy</h3>
                </div>
                <p className="text-xs text-center text-neutral-300 leading-relaxed">
                  We analyze your target market and existing profiles, then map out a custom content roadmap.
                </p>
              </AnimatedText> 
            </div>

            <div className='flex-1 bg-[#151515] border border-neutral-800 rounded-xl h-[10rem] p-5 flex items-center flex-col justify-center'>
              <AnimatedText animate="bottomToTop" delay={0.2}>
                <div className='flex items-center gap-2 flex-col'>
                  <Handshake className='text-white' />
                  <h3 className='text-white font-medium'>2. Content Creation</h3>
                </div>
                <p className="text-xs text-center text-neutral-300 leading-relaxed">
                  Our team designs custom posts, captions, and graphics tailored for maximum engagement.
                </p>
              </AnimatedText>
            </div>

            <div className='flex-1 bg-[#151515] border border-neutral-800 rounded-xl h-[10rem] p-5 flex items-center flex-col justify-center'>
              <AnimatedText animate="bottomToTop" delay={0.3}>  
                <div className='flex items-center gap-2 flex-col'>
                  <Layout className='text-white' />
                  <h3 className='text-white font-medium'>3. Execution & Optimization</h3>
                </div>
                <p className="text-xs text-center text-neutral-300 leading-relaxed">
                  We manage publishing, track performance metrics, and optimize campaigns for steady community growth.
                </p>
              </AnimatedText>
            </div>
          </div>
        </div>

        <FAQ />
      </div>
    </>
  )
}