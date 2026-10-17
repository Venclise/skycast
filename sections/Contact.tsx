import ContactForm from "@/components/ContactForm";
import AnimatedText from "@/lib/Herotitle";
import { Mail } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Contact() {
  return (
    <div className="w-full h-max lg:p-10 p-5 flex items-center lg:flex-row flex-col justify-between">
      <div className="lg:w-1/2 w-full flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <AnimatedText animate="bottomToTop">
            <h5 className=" text-white text-4xl lg:text-left text-center">
              Got a project in mind ? <br />
              Let’s talk about it.
            </h5>
          </AnimatedText>
          <AnimatedText animate="bottomToTop">
            <p className="text-xs lg:text-sm font-light text-neutral-200 lg:text-left text-center">
              Tell us what you’re looking for, and we’ll get back to you with
              next steps.
            </p>
          </AnimatedText>
        </div>
        <a className="bg-neutral-900 p-5 text-sm rounded-3xl border border-neutral-800 w-full flex items-center gap-4 text-neutral-200" href="#">
          <div className="">
            <Mail />
          </div>
          <span>
            Email@gmail.com
          </span>

        </a>
             <a className="bg-neutral-900 p-5 text-sm rounded-3xl border border-neutral-800 w-full flex items-center gap-4 text-neutral-200" href="#">
          <div className="">
          <Image  
          src="/whatsapp.svg"
          alt="Whatsapp"
          height={20}
          width={20}
          />
          </div>
          <span>
         Whatsapp Us
          </span>

        </a>
      
      </div>
      <div className="w-full lg:w-1/2">
    <ContactForm />
      </div>
    </div>
  );
}
