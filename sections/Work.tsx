"use client";
import BlurText from "@/components/BlurText";
import React, { useEffect, useState, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Navigation, A11y } from 'swiper/modules';
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedText from "@/lib/Herotitle";
import { Button } from "@/components/ui/button";

export default function Work() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  useEffect(() => {
    async function fetchWorks() {
      setLoading(true);
      try {
        const res = await fetch(`${baseUrl}/api/work`);
        const result = await res.json();
        setData(Array.isArray(result) ? result : result.data || []);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
    fetchWorks();
  }, [baseUrl]);

  return (
    <div id="work" className="relative lg:p-10  gap-4 justify-between flex lg:flex-row flex-col items-center   h-max  text-neutral-900">
      <div className="flex flex-col lg:items-start items-center lg:justify-start justify-center gap-4 max-w-md">

      <AnimatedText animate="bottomToTop">

      <h1 className="lg:text-5xl text-4xl  text-white lg:text-left text-center  ">
        Real projects,<br />
real businesses, <br />
<span className="text-neutral-400 ">built to bring<br/> customers.</span>
      </h1>
      </AnimatedText>
         <AnimatedText animate="bottomToTop">

    <p className="text-sm lg:text-md text-neutral-300 lg:text-left text-center">A selection of websites and social media work, each one shaped around the business behind it.</p>
        
      
      </AnimatedText>
          <Button variant="secondary" className="w-max p-5 hover:gap-5  rounded-full  cursor-pointer">
              See our work <ChevronRight />
            </Button>
      </div>

      <div className="relative w-full lg:w-1/2">
        {loading ? (
          <div className="text-center py-10 text-neutral-500">Loading works...</div>
        ) : (
          <Swiper
            modules={[Autoplay, Navigation, A11y]}
            spaceBetween={30}
            slidesPerView={1.5}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
                   centeredSlides={true}  
             speed={5000}    
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              0: { slidesPerView: 1.2 },
              768: { slidesPerView: 1.5 },
              1024: { slidesPerView: 1.5 },
            }}
            className="w-full py-4 overflow-visible"
          >
            {data.map(({ _id, title, description, link, category, image }) => {
              const cardContent = (
                <div className="h-[40rem] w-full bg-[#111]  rounded-2xl  flex flex-col justify-between transition-all duration-300 hover:border-neutral-300 hover:shadow-xl group shadow-sm">
                  
                  
                  <div className="relative h-[70%] w-full rounded-2xl overflow-hidden  shrink-0">
                    {image ? (
                      <img
                        src={image}
                        alt={title || "Project preview"}
                        className="w-full h-full object-cover otransition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-neutral-400 text-xs">
                        No Preview Image
                      </div>
                    )}

                    
                    {category && (
                      <span className="absolute top-3 right-3 text-[10px] tracking-wider uppercase font-semibold bg-white/90 backdrop-blur-md text-neutral-800 px-3 py-1 rounded-full border border-neutral-200/60 shadow-sm z-10">
                        {category}
                      </span>
                    )}
                  </div>

                 
                  <div className="flex items-center justify-between p-4 absolute bottom-5   " >
                    <div className="flex flex-col gap-1 pr-4">
                      <h3 className="text-lg text-white max-w-xs  ">
                        {title}
                      </h3>
                      <p className="text-sm text-neutral-200 line-clamp-1">{description}</p>
          
                    </div>

                    <div className="h-10 w-10  shrink-0 rounded-full flex items-center justify-center text-neutral-100  transition-all duration-300 shadow-sm">
                      <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>

                </div>
              );

              return (
                <SwiperSlide key={_id || title} className="flex justify-center">
                  {link ? (
                    <Link href={link} target="_blank" className="w-full">
                      {cardContent}
                    </Link>
                  ) : (
                    cardContent
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}

  
      </div>
    </div>
  );
}