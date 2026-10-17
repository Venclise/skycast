"use client"
import { navLinks } from '@/lib/constants'
import { ExternalLink, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Footer() {
    let date = new Date()
    const pathname = usePathname()
  return (
    <div className='flex flex-col w-full '>

    <div className={`${pathname === "/dashboard " || "/dashboard/blog" || "/dashboard/blog/add" || "/dashboard/products" || "/dashboard/products/add"  ?  "flex" : "flex" } w-full bg-[#111] h-max lg:p-20 p-5 flex lg:flex-row flex-col gap-8  justify-between'` }  >
      <div className='flex flex-col gap-3'>
             <Link href="/" className='font-semibold text-2xl flex items-center '>
           {/* <Image src="/logo.png" width={50} height={50} alt="logo"/> */}
           <span className='text-sm lg:text-md text-white mt-4'>
        SkyCast Studios.
           </span>
           </Link>
           <p className='text-xs text-neutral-300 '>
           Websites, social media built for growth.

           </p>
    <p className='text-xs text-neutral-200 font-light'>© {date.getFullYear()} SkyCast Studios All Rights reserved </p>

      </div>
      <div className='flex   lg:flex-row flex-col justify-center gap-4'>
            <div className='flex flex-col gap-3'>
        <h6 className='text-sm text-neutral-200 font-semibold'>Services</h6>
       <Link  href="/services/website-development" className='capitalize text-xs text-neutral-300 hover:underline'>
                  Website Development
                </Link>
                 <Link  href="/services/social-media-marketing" className='capitalize text-xs text-neutral-300 hover:underline'>
                  Social media marketing
                </Link>
                 <Link  href="/services/seo" className='capitalize text-xs text-neutral-300 hover:underline'>
                  SEO
                </Link>
      </div>

      <div className='flex flex-col gap-2'>
        <h6 className='text-sm font-semibold text-neutral-200'>Quick links</h6>
        {
            navLinks.map(({id,title,link}) => (
                <Link key={id} href={link} className='capitalize text-xs text-neutral-300 hover:underline'>
                    {title}
                </Link>
            ))
        }
      </div>
      <div className='flex flex-col gap-2'>
               <h6 className='text-sm font-semibold text-neutral-200'>Contact</h6>
              <a href="tel:+923199239435" className='flex  gap-1 items-center text-xs text-neutral-300 hover:underline hover:text-white' >
                    <Phone size="10"/> 

              </a>
              <a href="mailto:saroshislamicinstitute@gmail.com" className='flex gap-1 items-center text-xs text-neutral-300 hover:underline hover:text-white' >
                <Mail size="10"/>
{/* saroshislamicinstitute@gmail.com   */}
              </a>
                <div className='flex items-center gap-2'>

              <Link target="_blank" href="https://www.instagram.com/sarooshislamicinstitute?stkn=eGE3NTN0cXRpZHJw">
              <Image src="/insta.svg" alt="Instagram" height="15" width="15"  />
              </Link>
                 <Link target='_blank' href="https://www.facebook.com/share/1CDT2FCKS7/">
              <Image src="/fb.svg" alt="Instagram" height="15" width="15"  />
              </Link>

                    <Link
  href="https://wa.me/923199239435?text="
  target="_blank"
  rel="noopener noreferrer"
>
<Image src="whatsapp.svg" alt="Whatsapp" height="15" width="15"  />
</Link>
                </div>
      </div>

        </div>
   
    </div>
    </div>
  )
}
