import BlurText from "@/components/BlurText";
import DotField from "@/components/DotField";
import { Button } from "@/components/ui/button";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Input } from "@/components/ui/input";
import AnimatedText from "@/lib/Herotitle";
import { ArrowRight, ChevronLeft, ChevronRight, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="h-max ">
      <div
        id="hero"
        className="h-screen rounded-t-4xl border border-neutral-700 bg-[#0E1219]   w-full flex items-center justify-center  flex-col   lg:p-10 p-5"
      >
        <AnimatedText animate="bottomToTop" delay={0.2} duration={0.5}>
          <div className="flex flex-col items-center justify-center gap-3 ">
            <AnimatedText animate="bottomToTop"  >
              <Button
                className="w-max  flex border border-neutral-700 bg-black text-neutral-200 text-xs rounded-md  items-center hover:gap-4  cursor-pointer "
             
              >
                <span className="text-yellow-400 p-1 text-xs rounded-xl ">Hurry!</span>
                <div className="flex items-center ">
                  Booking slots for next month <ChevronRight />
                </div>
              </Button>
            </AnimatedText>
            <AnimatedText animate="bottomToTop" >

            <h1 className=" text-4xl lg:text-[48px]  text-white font-medium">
              Websites, social media
            </h1>
            

            <h1 className="text-4xl lg:text-[48px]  text-white text-center font-medium">
              built for growth.
            </h1>
            </AnimatedText>

          </div>
          <div className="flex items-center justify-center gap-3 py-5 rounded-xs">
            <Link href="/quote">
           <Button variant="secondary" className="p-5 hover:gap-5  rounded-full  cursor-pointer">
              Request a quote <ChevronRight />
            </Button>
            </Link>
              
              <Link href="/#work">
            <Button variant="secondary" className="p-5 bg-transparent text-white hover:bg-white hover:text-black hover:border-0 border border-neutral-500 rounded-full  cursor-pointer">
              Our Work
            </Button>
              </Link>
          </div>
          {/* <ContainerScroll
      titleComponent=""
      >
        <Image
          src={`/hero-banner.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll> */}
        </AnimatedText>
      </div>
    </div>
  );
}
