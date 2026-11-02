import BlurText from "@/components/BlurText";
import DotField from "@/components/DotField";
import { Button } from "@/components/ui/button";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Input } from "@/components/ui/input";
import AnimatedText from "@/lib/Herotitle";
import {
  ArrowDown,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Send,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="h-screen flex items-center relative">
      <div
        id="hero"
        className="h-screen   bg-[#0A0A0A]   w-full  flex items-center lg:justify-start justify-center  lg:p-20 p-5"
      >
        <AnimatedText animate="bottomToTop" delay={0.2} duration={0.5}>
      
            <AnimatedText animate="bottomToTop">
              <Button className="w-max  hidden  border border-neutral-700 bg-black text-neutral-200 text-xs rounded-md  items-center hover:gap-4  cursor-pointer ">
                <span className="text-yellow-400 p-1 text-xs rounded-xl ">
                  Hurry!
                </span>
                <div className="flex items-center ">
                  Booking slots for next month <ChevronRight />
                </div>
              </Button>
            </AnimatedText>
            <AnimatedText animate="bottomToTop">
              <h1 className=" text-5xl lg:text-[88px]   text-[#fafafa] font-medium">
                Websites and <br /> social media <br />
                built for growth.
              </h1>
            </AnimatedText>
        

          <div className="flex items-center  gap-5 py-10 ">
            <Link href="/quote">
              <Button
                variant="secondary"
                className="px-5 py-6 hover:gap-5 uppercase text-xs rounded-full  cursor-pointer"
              >
                Request a quote
              </Button>
            </Link>

            <Link href="/#work">
              <Button
                variant="link"
                className="hover:gap-5 bg-transparent text-[#fafafa] hover:text-neutral-300  underline text-xs uppercase rounded-full  cursor-pointer"
              >
                Our Work <ArrowDown />
              </Button>
            </Link>
          </div>
        </AnimatedText>
      </div>
      <div>
        <div>
          {/* <Image
          src={`/hero-banner.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl  object-cover h-full object-left-top"
          draggable={false}
          /> */}
        </div>
      </div>
    </div>
  );
}
