import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { ArrowUpRight, Layers, Send } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="min-h-screen w-max bg-neutral-950 flex items-center justify-center p-4 sm:p-8 ">
      
      {/* Container Box */}
      <div className="w-full max-w-xl bg-[#191919] border-10 border-[#3B4539] rounded-[4rem] p-6 sm:p-10 shadow-2xl relative overflow-hidden text-white flex flex-col gap-8">
        
    

        {/* Top Icon & Header */}
        <div className="flex flex-col items-center text-center gap-3 z-10">
          {/* <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-lg">
            <Layers size={22} />
          </div> */}
          <div className="space-y-1">
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-neutral-100">
              Start <br /> a project.
            </h2>
            <p className="text-xs text-neutral-400">
              Tell us about your project and let's build something great.
            </p>
          </div>
        </div>

        {/* Form Elements */}
        <form className="flex flex-col gap-5 z-10">
          
          {/* Name & Last Name (2 columns on sm screens) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs  text-neutral-100 ml-2   ">Your name</label>
              <Input 
                type="text" 
                placeholder="First name" 
                className="bg-neutral-800 border-0 text-white placeholder:text-neutral-500 h-12 p-5 rounded-4xl  "
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs  text-neutral-300 ml-2">Last name (optional)</label>
              <Input 
                type="text" 
                placeholder="Last name" 
                className="bg-neutral-800 border-0 text-white placeholder:text-neutral-500 h-12 rounded-4xl p-5"
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs ml-2 text-neutral-300">Email address</label>
            <Input 
              type="email" 
              placeholder="you@yourcompany.com" 
              className="bg-neutral-800 border-0 text-white placeholder:text-neutral-500 h-12 rounded-4xl p-5 "
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs ml-2 text-neutral-300">Phone number</label>
            <Input 
              type="tel" 
              placeholder="+1 (555) 000-0000" 
              className="bg-neutral-800 border-0 text-white placeholder:text-neutral-500 h-12 rounded-4xl "
            />
          </div>

          {/* Project Type Select (Shadcn Select) */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs ml-2 text-neutral-300">Select project type</label>
            <Select>
              <SelectTrigger className="bg-neutral-800 p-5 w-full border-0 text-white h-12 rounded-4xl ">
                <SelectValue placeholder="Select a service..." />
              </SelectTrigger>
              <SelectContent className="bg-neutral-900 border-neutral-700 text-white rounded-xl">
                <SelectItem value="website" className=" ">Website Development</SelectItem>
                <SelectItem value="seo" className=" ">SEO Optimization</SelectItem>
                <SelectItem value="social-media" className=" ">Social Media Marketing</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Message Textarea (Shadcn Textarea) */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs ml-2 text-neutral-300">Your message or idea</label>
            <Textarea 
              placeholder="Tell us a little about your goals..." 
              className="bg-neutral-800 border-0 text-white placeholder:text-neutral-500 min-h-[120px] rounded-xl resize-none p-5"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <Button 
              type="submit" 
              className="w-full bg-white text-black hover:bg-neutral-200  h-14 rounded-full flex items-center justify-center gap-4  transition-transform active:scale-[0.99]"
            >
              <span>Send Message</span>
              <Send size={18} />
            </Button>
          </div>

        </form>

      </div>
    </div>
  );
}