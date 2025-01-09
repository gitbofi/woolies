import React from 'react'
import { heroVideo } from '../utils'
import CTA from './CTA'
import GreenBanner from './GreenBanner'

const Hero = () => {
  return (
    <>
      <section>
        <video src={heroVideo} autoPlay loop muted className='relative h-heroLarge object-cover xl:w-full'></video>
        <div id="text-wrapper" className="absolute top-1/3 left-0 right-0 text-light flex flex-col items-center text-center">
          <h1 className="text-6xl md:text-8xl font-artifika">woolies</h1>
          <h3 className='text-md uppercase tracking-widest font-now'>Fall Collection</h3>
          <p className='text-md md:text-sm mt-8 w-80'>Für eine bessere Zukunft. Entdecke unsere neue Herbst Kollektion mit neuen Pieces aus nachhaltig produzierter Schafwolle.</p>
          <CTA/>
        </div>
        <GreenBanner/>
      </section>
    </>
  )
}

export default Hero
