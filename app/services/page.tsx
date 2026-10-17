import BlurText from "@/components/BlurText";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { 
  MousePointer, 
  Layout, 
  Layers, 
  Sparkles, 
  ArrowUpRight,   
  Users, 
  Lock, 
  Share2, 
  TrendingUp, 
  Target,
  BarChart3,
  Search,
  MousePointerClick,
  ArrowRight
} from "lucide-react";
import AnimatedText from "@/lib/Herotitle";

export default function Services() {
  return (
    <div className="min-h-screen w-full lg:p-10 p-5 flex flex-col gap-10 bg-neutral-950 text-white font-sans">
      
       <AnimatedText animate="bottomToTop" >
      <div className=" flex  gap-3 flex-col w-full ">
        <h1 className="lg:text-5xl text-4xl  text-white  mt-5">
          Services
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl text-neutral-400 font-normal">
          built to get you customers.
        </h2>
      </div>
    </AnimatedText>

      {/* Main Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full max-w-7xl mx-auto">
        
        {/* Card 1: Website Development */}
        
        <div className="bg-[#1C241E] rounded-3xl lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between gap-8 relative overflow-hidden border border-emerald-900/30 group min-h-[500px]">
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
          <Link 
            href="#" 
            className="w-full mx-auto lg:w-max capitalize bg-white text-black  py-3 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors z-10 text-center"
          >
            <span>view service</span>
            <ArrowRight size={15} />
          </Link>

</AnimatedText>
        </div>  


        {/* Card 2: Social Media Marketing */}
        <div className="bg-[#1E1E1E] rounded-3xl lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between gap-8 relative overflow-hidden border border-neutral-800 group min-h-[500px]">
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
            href="#" 
            className="w-full mx-auto lg:w-max capitalize bg-white text-black  py-3 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors z-10 shadow-lg text-center"
          >
            <span>view service</span>
            <ArrowRight size={15} />
          </Link>

</AnimatedText>
        </div>
      </div>

      {/* Card 3: Search Engine Optimization */}
      <div className="w-full bg-[#181F1A] rounded-3xl p-6 sm:p-10 flex flex-col justify-between gap-8 relative overflow-hidden border border-emerald-900/30 group min-h-[500px] text-white max-w-7xl mx-auto">
        <AnimatedText animate="bottomToTop" delay={0.4}>
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #22c55e 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Card Header Content */}
        <div className="flex flex-col gap-2 z-10 max-w-lg">
          <h3 className="text-neutral-100 text-2xl sm:text-3xl font-semibold tracking-tight">
            Search Engine Optimization
          </h3>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Rank #1 on Google, dominate your niche, and drive steady high-intent traffic that turns into paying clients.
          </p>
        </div>

        {/* Visual Canvas / Dashboard Section */}
        <div className="relative w-full flex-1 flex items-center justify-center my-2 z-10 min-h-[260px]">
          
          {/* Floating Top-Left Conversion Chip */}
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
                best services near me
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

        {/* Full Width Link Button */}
        <Link 
          href="#" 
          className="w-full mx-auto lg:w-max capitalize bg-white text-black  py-3 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors z-10 shadow-lg text-center"
        >
          <span>view service</span>
          <ArrowRight size={15} />
        </Link>
</AnimatedText>
      </div>

    </div>
  );
}