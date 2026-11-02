"use client"
import { navLinks } from '@/lib/constants'
import { ArrowRight, ChevronRight, Cloud, Menu, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useEffect, useState } from 'react'

export default function Header() {


  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

    const isSolid =  scrolled;
      useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (  
      <header className="fixed top-0 left-0 w-full z-50 transition-colors duration-300">
    <div
     className={`w-full p-5 flex items-center justify-between transition-all duration-300 ${
          isSolid
            ? "bg-[#0E1219] text-black   border-gray-900"
            : "bg-transparent text-white border-0"
        }`}>

      
<div className='flex items-center gap-3 '>  

      <Link href="/" className='font-semibold text-2xl flex items-center justify-center gap-3'>
    
            <Cloud fill='#fff' />
           <span className='text-sm lg:text-md text-white  '>
        SkyCast Studios.
           </span>
           </Link>  
          </div>  
<div className='hidden lg:flex items-center gap-8'>

           {
             navLinks.map(({id,link,title}) => (

               <Link href={link} key={id} className='text-neutral-300 text-sm tracking-tight hover:text-white capitalize'>
            {title}
          </Link>
            ))
          }
            </div>
         <div className='hidden lg:flex items-center  '>
        <Link href="/quote">
              <Button
                variant="secondary"
                className="px-5 py-5 hover:gap-5 uppercase text-xs rounded-full  cursor-pointer"
              >
                Request a quote
              </Button>
            </Link>
    </div>  

        
<div className='flex lg:hidden'>

       <Sheet >
  <SheetTrigger  >
    <Button size="lg" className="bg-neutral-900 hover:bg-neutral-800 " >
        <Menu className='text-white'/>
    </Button>
  </SheetTrigger>
  <SheetContent  className="z-100 bg-[#111]  border-0 p-2">
    <SheetHeader>
      <SheetTitle>
        <Link href="/" className='font-semibold text-2xl flex items-center gap-3'>
    
            <Cloud fill='#fff' />
           <span className='text-sm lg:text-md text-white  '>
        SkyCast Studios.
           </span>
           </Link>  
      </SheetTitle>
      <SheetDescription className="flex flex-col gap-3 h-screen justify-center  ">
        {
            navLinks.map(({id,title,link}) => (
                <SheetClose>
                <Link href={link} key={id} className={`group text-white  text-2xl flex items-center justify-between hover:bg-neutral-900 py-2 px-2 rounded-sm hover:text-white capitalize  tranition-all  ${link === ""  ? "text-neutral-800 bg-gray-200" : "text-gray-700"}`}>
                    {title}
                </Link>
                </SheetClose>
            ))
        }
          <Link href="/quote">
              <Button
                variant="secondary"
                className="px-5 py-6 hover:gap-5 uppercase text-xs rounded-full w-full  cursor-pointer"
              >
                Request a quote
              </Button>
            </Link>

       

      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
</div>
    </div>
    </header>
  )
}
