import React from 'react'
import { collectionPair, collectionSingle } from '../utils'

const Collection = () => {
  return (
    <>
        <section>
            <h2 className='font-artifika text-dark pt-16 lowercase text-4xl text-center'>Neu im Herbst</h2>
            <div id="content-wrapper" className='flex flex-col pt-6 lg:flex-row'>
                <div id="content-1" className='flex-col md:pl-16 md:pr-16 lg:pt-12 lg:pl-32 lg:mr-6'>
                    <img src={collectionSingle} alt="Hose" className='pb-2'/>
                    <h3 className='p-4 uppercase font-now font-semibold tracking-widest pt-2 lg:pt-6 pb-2'>Mit Woolies smart casual in den Herbst starten</h3>
                    <p className='p-4 pt-0 text-sm max-w-3xl'>Die neue Herbstkollektion von Woolies verbindet zeitlose Eleganz mit kuscheliger Wärme - perfekt für die kühleren Tage.<br /><br />Unsere nachhaltig produzierte Schafwolle sorgt nicht nur für Komfort, sondern auch für ein gutes Gewissen. Entdecke die neuen Lieblingsstücke für deinen Herbstlook!</p>
                    <button className='hidden uppercase font-now font-semibold tracking-widest underline p-4 lg:flex'>Kollektion entdecken</button>
                </div>
                <div id="content-2" className='flex flex-col md:pl-16 md:pr-16 lg:pt-12 lg:ml-6 lg:pr-32 lg:flex-col-reverse'>
                    <img src={collectionPair} alt="Model volle Größe" className='lg:pb-40 lg:pt-8'/> 
                    <div>
                        <h3 className='p-4 uppercase font-now font-semibold tracking-widest pt-2 pb-2'>nachhaltiger umgang mit schafwolle</h3>
                        <p className='p-4 pt-0 text-sm max-w-3xl'>Unsere Mission: hochwertige Kleidung mit gutem Gewissen. Woolies verwendet ausschließlich natürliche Schafwolle aus nachhaltiger Produktion.<br /><br />Das Ergebnis? Zeitlose Mode, die angenehm zu tragen ist und die Umwelt schont.</p>
                    </div>
                    <button className='uppercase font-now font-semibold tracking-widest underline p-4 lg:hidden'>Kollektion entdecken</button>
                </div>
            </div>
        </section>
    </>
  )
}

export default Collection
