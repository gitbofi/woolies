import React from 'react'
import { collectionPair, collectionPants, fullBody1, pants1 } from '../utils'

const Collection = () => {
  return (
    <>
        <section>
            <h2 className='font-artifika text-dark pt-12 lowercase text-4xl text-center'>Neu im Herbst</h2>
            <div id="content-wrapper" className='flex flex-col'>
                <div id="content-1" className='flex-col'>
                    <img src={collectionPants} alt="Hose" className='w-screen h-auto p-6 pb-2'/>
                    <h3 className='uppercase font-now tracking-widest p-6 pt-2 pb-2'>Mit Woolies smart casual in den Herbst starten</h3>
                    <p className='p-6 pt-0 text-sm'>Melde dich jetzt für den Pre-Sale an und erhalte vor allen anderen Zugriff auf die neuen Stücke melde dich jetzt für den Pre-Sale an und. Halte vor allen anderen Zugriff auf die neuen Stücke erhalte vor allen anderen Zugriff auf die neuen Stücke. Melde dich jetzt für den Pre-Sale an und erhalte vor allen anderen Zugriff auf die neuen Stücke melde dich jetzt für den Pre-Sale an und das wars dann.</p>
                    <button></button>
                </div>
                <div id="content-2" className='flex-col p-4'>
                    <img src={collectionPair} alt="Model volle Größe" className='pt-8'/> 
                    <h3 className='uppercase font-now tracking-widest pt-10'>nachhaltiger umgang mit schafwolle</h3>
                    <p className='pt-4 text-sm'>Melde dich jetzt für den Pre-Sale an und erhalte vor allen anderen Zugriff auf die neuen Stücke. Melde dich jetzt für den Pre-Sale an und erhalte vor allen anderen Zugriff auf die neuen Stücke erhalte vor allen anderen Zugriff auf die neuen Stücke.</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Collection
