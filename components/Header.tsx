import { navLinks } from '@/lib/constants'
import { ArrowRight, ChevronRight, Menu, Phone } from 'lucide-react'
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

export default function Header() {
  return (  
    <div className='w-full  flex  fixed top-0 border-b border-neutral-800 left-0 z-50 bg-[#0E1219]   items-center justify-between   h-[4rem]  py-6 px-10 '>
      
<div className='flex items-center gap-3 '>  
{/* <Image src="/logo-sm.png" alt="Lime forge logo" height="10" width="120" /> */}  
      <Link href="/" className='font-semibold text-2xl flex items-center '>
           {/* <Image src="/logo.png" width={50} height={50} alt="logo"/> */}
           <span className='text-sm lg:text-md text-white mt-4'>
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
           <Button variant="secondary" className="p-5 hover:gap-5  rounded-full  cursor-pointer">
              Request a quote <ChevronRight />
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
  <SheetContent  className="z-100 bg-[#111]  border-0">
    <SheetHeader>
      <SheetTitle>
     <Link href="/" className='font-semibold text-2xl flex items-center '>
           <span className='text-sm lg:text-md text-white mt-4'>
        SkyCast Studios.
           </span>
           </Link>  
      </SheetTitle>
      <SheetDescription className="flex flex-col gap-2 h-screen my-20 ">
        {
            navLinks.map(({id,title,link}) => (
                <SheetClose>
                <Link href={link} key={id} className={`group text-white  text-lg flex items-center justify-between hover:bg-neutral-900 py-2 px-2 rounded-sm hover:text-white capitalize  tranition-all  ${link === ""  ? "text-neutral-800 bg-gray-200" : "text-gray-700"}`}>
                    {title}
                </Link>
                </SheetClose>
            ))
        }
       <Link href="/quote" className='w-full'>
           <Button variant="secondary" className="p-5 hover:gap-5 w-full rounded-full  cursor-pointer">
              Request a quote <ChevronRight />
            </Button>
            </Link>

       

      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
</div>
    </div>
  )
}
