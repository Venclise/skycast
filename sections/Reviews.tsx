

import BlurText from "@/components/BlurText";
import { REVIEWS_DATA } from "@/lib/constants";
import AnimatedText from "@/lib/Herotitle";
import { Star } from "lucide-react";
import React from "react";
import Marquee from "react-fast-marquee";

export default function Reviews() {
  return (
    <div id="reviews" className="w-full lg:h-max overflow-hidden flex flex-col gap-4 mt-24 h-max lg:p-5 ">
    <div className="my-4">
      <AnimatedText animate="bottomToTop" delay={0.1}>

     <p className="text-neutral-200 font-semibold text-center">Testimonials.</p>
      </AnimatedText>
        
      <AnimatedText animate="bottomToTop" delay={0.2}>

<h4

           className="lg:text-5xl text-4xl text-white  text-center mt-5"
>

       See what our clients say about us
        
</h4>
         
      </AnimatedText>
    </div>

      <Marquee speed={60} pauseOnHover gradient={false}>
        {REVIEWS_DATA.map(({ id, name, post,country }) => (
          <div
            key={id}
            className="
              mx-3
              overflow-hidden
              w-[260px] sm:w-[300px] h-[200px]
             
              bg-neutral-900
              border border-neutral-800
              p-5 rounded-3xl
              flex flex-col justify-between
            "
          >
       
            <p className="text-sm text-neutral-100 font-semibold leading-relaxed">
              "{post}"
            </p>
<div className="flex items-center justify-between w-full">
       <div className="flex items-center ">
              <Star size={15} className="fill-yellow-400 text-yellow-400" />
              <Star size={15} className="fill-yellow-400 text-yellow-400" />

              <Star size={15} className="fill-yellow-400 text-yellow-400" />
              <Star size={15} className="fill-yellow-400 text-yellow-400" />
              <Star size={15} className="fill-yellow-400 text-yellow-400" />

            </div>

            <p className=" text-xs text-right   text-neutral-200">
              — {name},<span className="">

              {country}
              </span>
            </p>
</div>
          </div>
        ))}
      </Marquee>

      
      <Marquee speed={60} direction="right" pauseOnHover gradient={false}>
        {REVIEWS_DATA.map(({ id, name, post,country }) => (
          <div
            key={`reverse-${id}`}
            className="
            mx-3
              overflow-hidden
              w-[260px] sm:w-[300px] h-[170px]
             
                 
              bg-neutral-900
              border border-neutral-800
              p-5 rounded-3xl
              flex flex-col justify-between
            "
          >
            <p className="text-sm text-neutral-100 font-semibold leading-relaxed">
              “{post}”
            </p>

          <div className="flex items-center justify-between w-full">
       <div className="flex items-center ">
              <Star size={15} className="fill-yellow-400 text-yellow-400" />
              <Star size={15} className="fill-yellow-400 text-yellow-400" />
              <Star size={15} className="fill-yellow-400 text-yellow-400" />
              <Star size={15} className="fill-yellow-400 text-yellow-400" />
              <Star size={15} className="fill-yellow-400 text-yellow-400" />

            </div>

            <p className=" text-xs text-right  text-neutral-200">
              — {name},<span className="">

              {country}
              </span>
            </p>
</div>
          </div>
        ))}
      </Marquee> 
    </div>
  );
}
