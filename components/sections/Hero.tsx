import React from 'react'
import TouchBtn from '../TouchBtn'



const Hero = ({headline, highlightedText, subText, showCTA}:HeroProps) => {
  return (
    <section className=" w-full bg-[url('/bg.png')] h-screen bg-no-repeat bg-cover">
       <div className=' h-screen mx-auto  max-w-[1440px] grid gap-6 place-content-center' >
            <h1 className="text-5xl text-center text-balance md:text-7xl font-bold capitalize ">{headline} {highlightedText && (
            <span className="text-[#FEB273]">{highlightedText}</span>
          )}</h1>
          {subText && (
          <h4 className="text-2xl  md:text-3xl text-center font-light opacity-90  max-w-3xl mx-auto text-balance">
            {subText}
          </h4>
        )}
        <div className='mt-14 place-self-center'>
          {showCTA && <TouchBtn  className=" px-10 sm:px-16 md:px-25" href='/contact' children='get in touch<' /> }
        </div>
       </div>
    </section>
  )
}

export default Hero