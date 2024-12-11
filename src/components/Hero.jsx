import React from 'react'
import { heroVideo } from '../utils'

const Hero = () => {
  return (
    <>
      <section>
        <video src={heroVideo} autoPlay loop muted className='relative h-hero object-cover xl:w-full'></video>
        <div id="text-wrapper" className="absolute bottom-1/4 md:top-1/3 left-0 right-0 text-text flex flex-col items-center text-center">
          <h1 className="text-6xl md:text-8xl font-artifika">woolies</h1>
          <h3 className='text-md uppercase tracking-widest font-now'>Fall Collection</h3>
          <p className='text-md md:text-sm mt-8 w-80'>Für eine bessere Zukunft. Entdecke unsere neue Herbst Kollektion mit neuen Pieces aus nachhaltig produzierter Schafwolle.</p>
          <button className='transition ease-in-out mt-8 text-md md:text-sm w-fit rounded-md pt-3 pb-3 pr-5 pl-5 border-2 border-text font-now tracking-widest hover:scale-105 hover:font-medium'>Kollektion entdecken</button>
        </div>        
      </section>
    </>
  )
}

export default Hero
