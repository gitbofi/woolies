import React from 'react'
import { fullBody1, pants1 } from '../utils'

const Collection = () => {
  return (
    <>
        <section>
            <h2 className='font-artifika text-gray-950 p-6 lowercase text-4xl text-center'>Neu im Herbst</h2>
            <div id="content-wrapper" className='flex p-12 pt-20'>
                <div id="content-left" className='flex-col'>
                    <img src={pants1} alt="Hose" className='w-60 h-auto'/>
                    <h3 className='uppercase font-now tracking-widest pt-8'>smart casual in den Herbst starten</h3>
                    <p className='pt-4 text-sm'>Melde dich jetzt für den Pre-Sale an und erhalte vor allen anderen Zugriff auf die neuen Stücke melde dich jetzt für den Pre-Sale an und. Halte vor allen anderen Zugriff auf die neuen Stücke erhalte vor allen anderen Zugriff auf die neuen Stücke. Melde dich jetzt für den Pre-Sale an und erhalte vor allen anderen Zugriff auf die neuen Stücke melde dich jetzt für den Pre-Sale an und das wars dann.</p>
                </div>
                <div id="content-right" className='flex-col p-4'>
                    <h3 className='uppercase font-now tracking-widest pt-10'>nachhaltiger umgang mit schafwolle</h3>
                    <p className='pt-4 text-sm'>Melde dich jetzt für den Pre-Sale an und erhalte vor allen anderen Zugriff auf die neuen Stücke. Melde dich jetzt für den Pre-Sale an und erhalte vor allen anderen Zugriff auf die neuen Stücke erhalte vor allen anderen Zugriff auf die neuen Stücke.</p>
                    <img src={fullBody1} alt="Model volle Größe" className='pt-8'/>
                </div>
            </div>
        </section>
    </>
  )
}

export default Collection
