import { Button } from '@/components/ui/button'
import { servicesData } from '@/lib/constants'
import AnimatedText from '@/lib/Herotitle'
import { ArrowRight, Circle } from 'lucide-react'
import Image from 'next/image'

export default function ServicesData({ id }: { id: number | null }) {
  const service = servicesData.find((item) => item.id === id)
  if (!service) return null

  return (
    <div key={service.id} className='h-full'>


      <AnimatedText animate="bottomToTop">
      <div className='flex flex-col gap-4 items-center justify-center'>
    <div  className="h-[300px] lg:h-[500px] w-full">
        <Image
          src={service.img}
          alt={service.title}
          width={800}
          height={500}
          sizes="50vw"
          className=" h-full w-full rounded-2xl border-4 border-solid object-cover"
          />
    </div>
    <div className='flex items-center gap-4'>
       {service.features.map((item) => (
         <div className='bg-neutral-50 border  px-1 py-2 text-xs flex items-center gap-1  rounded-lg'>
        <div className='w-2 h-2 bg-lime-500 rounded-full'/>
            {item}
          </div>
       ))}
    </div>
    
       <div className='flex items-center justify-center gap-3 py-5 rounded-xs'>
    <Button className="p-5 bg-lime-500 rounded-full  cursor-pointer hover:gap-2 hover:bg-lime-400">
      Request a Quote <ArrowRight />
    </Button>
<Button variant="secondary" className="p-5  rounded-full  cursor-pointer hover:gap-2">
      View Service <ArrowRight />
    </Button>
    
    </div>
       </div>
      </AnimatedText>
          </div>
  )
}