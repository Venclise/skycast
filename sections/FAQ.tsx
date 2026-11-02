"use client";
import BlurText from "@/components/BlurText";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqs } from "@/lib/constants";
import AnimatedText from "@/lib/Herotitle";
import { useState } from "react";

export default function FAQ() {
  const [limit, setLimit] = useState(6);
  const handleLimit = () => {
    setLimit(() => limit + 10);
    limit > 6 && setLimit(() => limit - 10);
  };
  return (
    <div className="h-max w-full lg:p-10 p-5" id="faqs">
      <AnimatedText animate="bottomToTop" delay={0.1}>
        <p className=" text-neutral-200 text-lg text-center font-semibold">
          FAQ's
        </p>
      </AnimatedText>

      <AnimatedText animate="bottomToTop" delay={0.2}>
        <h4 className="lg:text-5xl text-4xl  text-white text-center  mt-5">
          Frequently asked questions.
        </h4>
      </AnimatedText>
      <div className="flex items-center justify-center w-full  mt-12 flex-col">
        <Accordion
        
          className="flex flex-col gap-4 w-full md:w-[50%]"
        >
          {faqs.slice(0, limit).map(({ id, question, answer }) => {
            return (
              <AccordionItem
                key={id}
                value={`item-${id}`}
                className="bg-neutral-900 rounded-2xl "
              >
                <AccordionTrigger className=" p-5 border-0  text-neutral-100">
                  {question}
                </AccordionTrigger>
                <AccordionContent className=" p-5 border-0 text-sm text-neutral-200">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>

        <Button
          className="hover:bg-neutral-800 text-neutral-200 mt-8 hover:text-neutral-100"
          variant="ghost"
          onClick={handleLimit}
        >
          {limit > 6 ? "Show less -" : "Show more +"}
        </Button>
      </div>
    </div>
  );
}
