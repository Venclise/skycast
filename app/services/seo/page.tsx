import { Button } from '@/components/ui/button'
import AnimatedText from '@/lib/Herotitle'
import FAQ from '@/sections/FAQ'
import { ArrowUpRight, ChevronRight, Handshake, Layers, Layout, MousePointer, Phone, ShoppingBag, Sparkles, TrendingUp, MousePointerClick, Search, BarChart3, Target, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Custom Website Development & SEO Services | SkyCast Studios",
  description: "Drive growth with high-performance custom websites, product catalogues, and SEO strategies built from scratch by SkyCast Studios.",
  keywords: ["SkyCast Studios", "custom website development", "SEO optimization agency", "Next.js web agency", "business websites"],
  openGraph: {
    title: "Custom Website Development & SEO Services | SkyCast Studios",
    description: "Drive growth with high-performance custom websites, product catalogues, and SEO strategies built from scratch.",
    url: "https://skycaststudios.com/services/website-development",
    siteName: "SkyCast Studios",
    type: "website",
  },
};

export default function page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Website Development and SEO",
    provider: {
      "@type": "Organization",
      name: "SkyCast Studios"
    },
    description: "Fast, mobile friendly business websites, product catalogues, and high-ranking SEO solutions."
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
                & SEO for Growing Businesses
                
            </h1>   
          </AnimatedText>
              <AnimatedText animate="bottomToTop" delay={0.1}>
            <p className="text-xs max-w-xl  font-light text-neutral-200 ">
              Fast, mobile friendly business web applications, optimized product catalogues, and powerful SEO strategies built to turn visitors into paying clients.
                
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

        
        {/* Replaced Image Section with the SEO Card Block */}
        <div className="w-full lg:w-[60%] flex justify-center">
          <div className="w-full bg-[#181F1A] rounded-3xl p-6 sm:p-10 flex flex-col justify-between gap-8 relative overflow-hidden border border-emerald-900/30 group min-h-[500px] text-white max-w-7xl mx-auto">
            <AnimatedText animate="bottomToTop" delay={0.4}>
              <div 
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle, #22c55e 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
              />

              <div className="flex flex-col gap-2 z-10 max-w-lg">
                <h3 className="text-neutral-100 text-2xl sm:text-3xl font-semibold tracking-tight">
                  Search Engine Optimization
                </h3>
                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                  Rank #1 on Google, dominate your niche, and drive steady high-intent traffic that turns into paying clients.
                </p>
              </div>

          
              <div className="relative w-full flex-1 flex items-center justify-center my-2 z-10 min-h-[260px]">
                
              
                <div className="absolute left-2 sm:left-6 top-0 bg-yellow-500/20 text-white text-xs font-semibold px-3.5 py-2 rounded-xl flex items-center gap-2 shadow-xl z-30 backdrop-blur-md">
                  <MousePointerClick size={14} />
                  <span>+142% Click-Through Rate</span>
                </div>

                {/* Main Search Analytics Dashboard Mockup */}
                <div className="relative w-full max-w-md bg-neutral-900/95 rounded-2xl p-5 border border-neutral-700/70 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] flex flex-col gap-4">
                  
                  {/* Simulated Google Search Input Bar */}
                  <div className="flex items-center gap-2.5 bg-neutral-950 px-3.5 py-2.5 rounded-xl border border-neutral-800 text-xs text-neutral-400">
                    <Search size={14} className="text-yellow-400 shrink-0" />
                    <span className="truncate text-neutral-200 font-mono">
                      best web agency near me
                    </span>
                    <span className="ml-auto text-[10px] bg-yellow-100/20 text-yellow-400 px-2 py-0.5 rounded font-bold">
                      #1 Rank
                    </span>
                  </div>

                  {/* Organic Growth Metric Card */}
                  <div className="bg-neutral-950/60 p-4 rounded-xl border border-neutral-800 flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                      <span className="text-[11px] text-neutral-400 flex items-center gap-1">
                        <BarChart3 size={12} className="text-yellow-400" /> Organic Conversions
                      </span>
                      <span className="text-2xl font-bold text-neutral-100 tracking-tight">
                        24,890 <span className="text-xs text-neutral-500 font-normal">clicks/mo</span>
                      </span>
                    </div>

                    {/* Growth Badge */}
                    <div className="flex items-center gap-1 bg-yellow-500/15 text-yellow-400 text-xs font-bold px-2.5 py-1.5 rounded-lg">
                      <TrendingUp size={14} />
                      <span>+380%</span>
                    </div>
                  </div>

                  {/* Keyword Target Tag Chips */}
                  <div className="flex items-center gap-2 overflow-hidden text-[11px]">
                    <span className="bg-neutral-800/80 text-neutral-300 px-2.5 py-1 rounded-lg border border-neutral-700/50 flex items-center gap-1">
                      <Target size={11} className="text-yellow-400" /> High-Intent Traffic
                    </span>
                    <span className="bg-neutral-800/80 text-neutral-300 px-2.5 py-1 rounded-lg border border-neutral-700/50">
                      Technical Audit
                    </span>
                  </div>

                </div>

                {/* Floating Bottom-Right Metric Card */}
                <div className="absolute right-0 sm:right-2 -bottom-2 bg-neutral-900/95 backdrop-blur-md border border-neutral-700/80 rounded-xl p-3 flex items-center gap-3 shadow-2xl z-20 max-w-[210px]">
                  <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400 shrink-0">
                    <TrendingUp size={16} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-semibold text-neutral-200 truncate">Page 1 Dominance</span>
                    <span className="text-[10px] text-neutral-400 truncate">Buyer intent search</span>
                  </div>
                  <ArrowUpRight size={14} className="text-yellow-400 ml-auto shrink-0" />
                </div>

              </div>

           
            </AnimatedText>
          </div>
        </div>  
    </div>


  <AnimatedText animate="bottomToTop">
            <h2 className='lg:text-5xl text-4xl   text-white   mt-5'>
               What we Provides
            </h2>   
         </AnimatedText>

    <div className='w-full lg:h-[50vh] flex items-center gap-4 lg:flex-row flex-col '>

<div className='flex-1 bg-[#151515] border border-neutral-800 rounded-xl  h-[10rem] p-5 flex items-center flex-col justify-center'>
  <AnimatedText animate="bottomToTop" delay={0.1}>
    <div className='flex items-center gap-2 flex-col'>
<Layout className='text-white' />
<h3 className='text-white font-medium'>Custom Business Solutions</h3>
    </div>
    <p className="text-xs text-center text-neutral-300 leading-relaxed" >Clean, fast, mobile-friendly web apps crafted completely from scratch around your unique brand identity.</p>
         </AnimatedText> 
</div>




<div className='flex-1 bg-[#151515] border border-neutral-800 rounded-xl h-[10rem] p-5 flex items-center flex-col justify-center'>
  <AnimatedText animate="bottomToTop" delay={0.2}>
    <div className='flex items-center gap-2 flex-col'>
<ShoppingBag className='text-white' />
<h3 className='text-white font-medium'>Scalable Product Catalogs</h3>
    </div>
    <p className="text-xs text-center text-neutral-300 leading-relaxed" >
        Display your inventory cleanly with custom CMS integration so you can manage products independently.
        </p>
         </AnimatedText>
</div>


<div className='flex-1 bg-[#151515] border border-neutral-800 rounded-xl h-[10rem] p-5 flex items-center flex-col justify-center'>
  <AnimatedText animate="bottomToTop" delay={0.3}>  
    <div className='flex items-center gap-2 flex-col'>
<TrendingUp className='text-white' />
<h3 className='text-white font-medium'>
    SEO & Performance Growth
</h3>
    </div>
    <p className="text-xs text-center text-neutral-300 leading-relaxed" >
        Engineered for high search visibility, rapid loading speeds, and sustained local and global reach.
    </p>
         </AnimatedText>
</div>

    </div>
    <div className='flex flex-col'>
    
  <AnimatedText animate="bottomToTop">
            <h2 className='lg:text-5xl text-4xl   text-white   mt-5'>
            Our development p   rocess.
                
            </h2>   
         </AnimatedText>
        <div className='w-full lg:h-[50vh] flex items-center gap-4 lg:flex-row flex-col '>

<div className='flex-1 bg-[#151515] border border-neutral-800 rounded-xl  h-[10rem] p-5 flex items-center flex-col justify-center'>
  <AnimatedText animate="bottomToTop" delay={0.1}>
    <div className='flex items-center gap-2 flex-col'>
<Phone className='text-white' />
<h3 className='text-white font-medium'>1. Strategy & Discovery</h3>
    </div>
    <p className="text-xs text-center text-neutral-300 leading-relaxed" >
We consult on your project requirements and target audience, then send a transparent scope and fixed quote.
        </p>
         </AnimatedText> 
</div>


<div className='flex-1 bg-[#151515] border border-neutral-800 rounded-xl h-[10rem] p-5 flex items-center flex-col justify-center'>
  <AnimatedText animate="bottomToTop" delay={0.2}>
    <div className='flex items-center gap-2 flex-col'>
<Handshake className='text-white' />
<h3 className='text-white font-medium'>
    2. Alignment & Kickoff
</h3>
    </div>
    <p className="text-xs text-center text-neutral-300 leading-relaxed" >
You approve the plan and secure the project deposit to trigger immediate design and development sprints.        </p>
         </AnimatedText>
</div>


<div className='flex-1 bg-[#151515] border border-neutral-800 rounded-xl h-[10rem] p-5 flex items-center flex-col justify-center'>
  <AnimatedText animate="bottomToTop" delay={0.3}>  
    <div className='flex items-center gap-2 flex-col'>
<Layout className='text-white' />
<h3 className='text-white font-medium'>
    3. Build & Optimization
</h3>
    </div>
    <p className="text-xs text-center text-neutral-300 leading-relaxed" >
        We build your site with continuous feedback loops, optimizing for user experience, performance, and SEO.
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