import Contact from '@/sections/Contact'
import FAQ from '@/sections/FAQ'
import Hero from '@/sections/Hero'
import Reviews from '@/sections/Reviews'
import Services from '@/sections/Services'
import Stats from '@/sections/Stats'
import Work from '@/sections/Work'
import React from 'react'

export default function page() {
  return (
    <div className=' h-full w-full overflow-x-hidden'>
 <Hero />     
 <Services />
 <Work />
 <FAQ />
 <Contact />  
 
    </div>
  )
}
