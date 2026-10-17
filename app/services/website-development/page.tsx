import { Button } from '@/components/ui/button'
import AnimatedText from '@/lib/Herotitle'
import FAQ from '@/sections/FAQ'
import { ArrowUpRight, ChevronRight, Handshake, Layers, Layout, MousePointer, Phone, ShoppingBag, Sparkles, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Custom Website Development Services | SkyCast Studios",
  description: "Fast, mobile friendly business websites, product catalogues, and landing pages built from scratch around your brand by SkyCast Studios.",
  keywords: ["SkyCast Studios", "custom website development", "Next.js agency", "business websites", "product catalogues"],
  openGraph: {
    title: "Custom Website Development | SkyCast Studios",
    description: "Fast, mobile friendly business websites, product catalogues, and landing pages built from scratch around your brand.",
    url: "https://skycaststudios.com/services/website-development",
    siteName: "SkyCast Studios",
    type: "website",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Website Development",
    provider: {
      "@type": "Organization",
      name: "SkyCast Studios"
    },
    description: "Fast, mobile friendly business websites, product catalogues, and landing pages built from scratch."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <div className='bg-[#101010] p-5 lg:p-20'>

    <div className='  w-full h-max  justify-between flex items-center lg:flex-row flex-col gap-8' >
        <div className='flex  flex-col gap-4 w-full lg:w-[40%]' >

          <AnimatedText animate="bottomToTop">
            <h1 className='lg:text-5xl text-4xl   text-white   mt-5'>
               Custom Website Development
                <br />
                for Growing Businesses
                
            </h1>   
          </AnimatedText>
              <AnimatedText animate="bottomToTop" delay={0.1}>
            <p className="text-xs max-w-xl  font-light text-neutral-200 ">
             Fast, mobile friendly business websites, product catalogues, and landing pages, built from scratch around your brand and designed to turn visitors into enquiries.
                
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

        
        <div className="bg-[#1C241E] rounded-3xl w-full lg:w-[60%] p-6 sm:p-10 flex flex-col justify-between gap-8 relative overflow-hidden border border-emerald-900/30 group min-h-[500px]">
      <AnimatedText animate="bottomToTop">
          
          {/* Subtle Dot Grid Background Effect */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
                backgroundImage: `radial-gradient(circle, #a3e635 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
            }}
            />

          {/* Text Content */}
          <div className="flex flex-col gap-2 z-10 max-w-lg">
            <h3 className="text-neutral-100 text-2xl sm:text-3xl font-semibold tracking-tight">
              Websites development
            </h3>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Fast, custom-built websites that turn visitors into enquiries.
            </p>
          </div>

          {/* Canvas Area with Mockup & Floating UI */}
          <div className="relative w-full flex-1 flex items-center justify-center my-4 z-10">
            
            {/* Left Floating Vertical Toolbar */}
            <div className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 bg-neutral-900/80 backdrop-blur-md p-2 rounded-2xl border border-neutral-700/50 flex flex-col gap-3 text-neutral-400 z-20 shadow-xl hidden sm:flex">
              <button className="p-2 rounded-xl bg-emerald-600/20 text-emerald-400">
                <MousePointer size={18} />
              </button>
              <button className="p-2 rounded-xl hover:text-white transition-colors">
                <Layout size={18} />
              </button>
              <button className="p-2 rounded-xl hover:text-white transition-colors">
                <Layers size={18} />
              </button>
              <button className="p-2 rounded-xl hover:text-white transition-colors">
                <Sparkles size={18} />
              </button>
            </div>

            {/* Main Window Frame Mockup */}
            <div className="relative w-full max-w-md bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-700/60 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              {/* Window Bar Header */}
              <div className="px-4 py-2.5 bg-neutral-800/80 border-b border-neutral-700/60 flex items-center justify-between">
                <span className="text-xs text-neutral-400 font-mono">
                  project / landing-page
                </span>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-600"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-600"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-600"></div>
                </div>
              </div>

              {/* Next.js Image Canvas */}
              <div className="relative aspect-[4/3] w-full bg-[#F8F8ED] p-2">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image 
                    src="/web.png" 
                    alt="Website project display" 
                    fill 
                    className="object-contain rounded-xl"
                    />
                </div>
              </div>
            </div>

            {/* Floating User Pointer Badge */}
            <div className="absolute right-2 sm:right-6 top-8 bg-emerald-600/90 text-white text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg z-20 backdrop-blur-sm animate-pulse">
              <MousePointer size={12} className="-rotate-45 fill-white" />
              <span>You</span>
            </div>

            {/* Bottom Right Floating Card Badge */}
            <div className="absolute right-0 sm:right-2 -bottom-2 bg-neutral-900/90 backdrop-blur-md border border-neutral-700/80 rounded-xl p-3 flex items-center gap-3 shadow-2xl z-20 max-w-[220px]">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <Sparkles size={16} />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-medium text-neutral-200 truncate">High Performance</span>
                <span className="text-[10px] text-neutral-400 truncate">Optimized for SEO</span>
              </div>
              <ArrowUpRight size={14} className="text-neutral-400 ml-auto shrink-0" />
            </div>

          </div>

          {/* Full Width Link Button */}
        
</AnimatedText>
        </div>  
    </div>


  <AnimatedText animate="bottomToTop">
            <h1 className='lg:text-5xl text-4xl   text-white   mt-8'>
               What we provide.
                
            </h1>   
          </AnimatedText>

    <div className='w-full lg:h-[50vh] flex items-center gap-4 lg:flex-row flex-col mt-8 '>

<div className='flex-1 bg-[#151515] border border-neutral-800 rounded-xl  h-[10rem] p-5 flex items-center flex-col justify-center'>
  <AnimatedText animate="bottomToTop" delay={0.1}>
    <div className='flex items-center gap-2 flex-col'>
<Layout className='text-white' />
<h2 className='text-white'>Custom Business Websites</h2>
    </div>
    <p className="text-xs text-center text-neutral-300 leading-relaxed" >Clean, mobile-friendly sites built from scratch around your brand, not from a page-builder template.</p>
          </AnimatedText> 
</div>




<div className='flex-1 bg-[#151515] border border-neutral-800 rounded-xl h-[10rem] p-5 flex items-center flex-col justify-center'>
  <AnimatedText animate="bottomToTop" delay={0.2}>
    <div className='flex items-center gap-2 flex-col'>
<ShoppingBag className='text-white' />
<h2 className='text-white'>Product Catalogues</h2>
    </div>
    <p className="text-xs text-center text-neutral-300 leading-relaxed" >
        Show your products online with an easy admin panel, so you can add and edit items yourself without needing us.
        </p>
          </AnimatedText>
</div>


<div className='flex-1 bg-[#151515] border border-neutral-800 rounded-xl h-[10rem] p-5 flex items-center flex-col justify-center'>
  <AnimatedText animate="bottomToTop" delay={0.3}>  
    <div className='flex items-center gap-2 flex-col'>
<TrendingUp className='text-white' />
<h2 className='text-white'>
    Speed & SEO Foundations
</h2>
    </div>
    <p className="text-xs text-center text-neutral-300 leading-relaxed" >
        Fast loading, proper page titles, and clean structure, so Google can find and understand your site.
    </p>
          </AnimatedText>
</div>

    </div>
    <div className='flex flex-col'>
    
  <AnimatedText animate="bottomToTop">
            <h1 className='lg:text-5xl text-4xl mt-8  text-white   '>
            Our development process.
                
          </h1>   
          </AnimatedText>
        <div className='w-full lg:h-[50vh] lg:flex-row flex-col mt-8 flex items-center gap-4  '>

<div className='flex-1 bg-[#151515] border border-neutral-800 rounded-xl  h-[10rem] p-5 flex items-center flex-col justify-center'>
  <AnimatedText animate="bottomToTop" delay={0.1}>
    <div className='flex items-center gap-2 flex-col'>
<Phone className='text-white' />
<h2 className='text-white'>Discovery call</h2>
    </div>
    <p className="text-xs text-center text-neutral-300 leading-relaxed" >
We talk about your business, your customers, and what you want the site to do. Then I send a written quote with the scope and price.
        </p>
          </AnimatedText> 
</div>


<div className='flex-1 bg-[#151515] border border-neutral-800 rounded-xl h-[10rem] p-5 flex items-center flex-col justify-center'>
  <AnimatedText animate="bottomToTop" delay={0.2}>
    <div className='flex items-center gap-2 flex-col'>
<Handshake className='text-white' />
<h2 className='text-white'>
    Agreement and deposit
</h2>
    </div>
    <p className="text-xs text-center text-neutral-300 leading-relaxed" >
You approve the quote and pay a 50% deposit. Work starts once it’s received.        </p>
          </AnimatedText>
</div>


<div className='flex-1 bg-[#151515] border border-neutral-800 rounded-xl h-[10rem] p-5 flex items-center flex-col justify-center'>
  <AnimatedText animate="bottomToTop" delay={0.3}>  
    <div className='flex items-center gap-2 flex-col'>
<Layout className='text-white' />
<h2 className='text-white'>
  Design and build
</h2>
    </div>
    <p className="text-xs text-center text-neutral-300 leading-relaxed" >
        We'll design and build your site, and you review it at key points. Revision rounds are included in the quote.
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