import BlurText from '@/components/BlurText'
import CountUp from '@/components/CountUp'
import AnimatedText from '@/lib/Herotitle'
import React from 'react'

export default function Stats() {
  return (
    <AnimatedText animate="bottomToTop">
      <div className="min-h-fit md:h-[50vh] p-5 lg:p-10 bg-[#111] text-white flex flex-col lg:flex-row items-center justify-center lg:justify-around gap-10 lg:gap-8 w-full">
        
        {/* Left Heading Text (Placed at the top on mobile stack) */}
        <div className="w-full lg:w-max  items-center lg:text-left flex justify-center lg:justify-start">
          <h2
          
            className="text-xl sm:text-2xl max-w-xs text-white "
            >
         Trusted by fastest growing companies around the world  
            </h2>
        </div>

        {/* Stats Grid Container for Mobile & Desktop */}
        <div className="w-full lg:w-auto flex flex-col sm:flex-row flex-wrap lg:flex-nowrap items-center justify-center gap-8 lg:gap-12">
          
          {/* Stat Item 1 */}
          <div className="flex flex-col gap-2 items-center justify-center text-center">
            <div className="flex items-center">
              <CountUp
                from={0}
                to={50}
                separator=","
                direction="up"
                duration={3}
                className="count-up-text text-white font-semibold text-5xl sm:text-6xl lg:text-8xl"
              />
              <span className="text-white font-bold text-3xl sm:text-4xl lg:text-8xl ml-1">+</span>
            </div>
            <span className="text-neutral-400 font-medium text-xs sm:text-sm">
              Completed Projects
            </span>
          </div>

          {/* Stat Item 2 */}
          <div className="flex flex-col gap-2 items-center justify-center text-center">
            <div className="flex items-center">
              <CountUp
                from={0}
                to={30}
                separator=","
                direction="up"
                duration={3}
                className="count-up-text text-white font-semibold text-5xl sm:text-6xl lg:text-8xl"
              />
              <span className="text-white font-bold text-3xl sm:text-4xl lg:text-8xl ml-1">+</span>
            </div>
            <span className="text-neutral-400 font-medium text-xs sm:text-sm">
              Happy clients
            </span>
          </div>

          {/* Stat Item 3 */}
          <div className="flex flex-col gap-2 items-center justify-center text-center">
            <div className="flex items-center">
              <CountUp
                from={0}
                to={60}
                separator=","
                direction="up"
                duration={3}
                className="count-up-text text-white font-semibold text-5xl sm:text-6xl lg:text-8xl"
              />
              <span className="text-white font-bold text-3xl sm:text-4xl lg:text-8xl ml-1">%</span>
            </div>
            <span className="text-neutral-400 font-medium text-xs sm:text-sm max-w-xs leading-tight">
              Clients who came to us by referrals
            </span>
          </div>

        </div>

      </div>
    </AnimatedText>
  )
}