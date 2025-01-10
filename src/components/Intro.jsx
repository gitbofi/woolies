import React from "react";
import { collectionPair2, collectionSingle } from "../utils";

const Intro = () => {
  return (
    <>
      <div>
        <h2 className="pt-24">Neu im Herbst</h2>
      </div>
      <div className="md:grid grid-cols-8 grid-rows-5 gap-2 w-full px-12 max-w-7xl justify-self-center pt-8 pb-16 lg:pb-0">
        <div className="row-span-3 col-span-3">
          <div className="h-fit w-fit overflow-hidden cursor-pointer">
            <img
              src={collectionSingle}
              alt="Collection Single"
              className="transition duration-700 hover:scale-110"
            />
          </div>
        </div>
        <div className="col-start-5 col-end-9 row-start-1 row-end-3 xl:pr-12 pt-8">
          <h3 className="p-2 pt-2 lg:pt-6 pb-2">
            Mit Woolies smart casual in den Herbst starten
          </h3>
          <p className="p-2 pt-0 pb-24 md:pb-0 max-w-3xl">
            Die neue Herbstkollektion von Woolies verbindet zeitlose Eleganz mit
            kuscheliger Wärme - perfekt für die kühleren Tage.
            <br />
            <br />
            Unsere nachhaltig produzierte Schafwolle sorgt nicht nur für
            Komfort, sondern auch für ein gutes Gewissen. Entdecke die neuen
            Lieblingsstücke für deinen Herbstlook!
          </p>
        </div>
        <div className="col-start-5 col-end-9 row-start-4 row-end-6 lg:row-start-3 lg:row-end-5">
          <div className="h-fit w-fit overflow-hidden cursor-pointer">
            <img
              src={collectionPair2}
              alt="Collection Single"
              className="w-full h-full transition duration-700 hover:scale-110"
            />
          </div>
        </div>
        <div className="col-span-4 lg:col-span-3 row-start-4 row-end-6">
          <h3 className="p-2 pr-8 pt-10 md:pt-2 pb-2">
            nachhaltiger umgang mit schafwolle
          </h3>
          <p className="p-2 pr-8 pt-0 max-w-3xl">
            Unsere Mission: hochwertige Kleidung mit gutem Gewissen. Woolies
            verwendet ausschließlich natürliche Schafwolle aus nachhaltiger
            Produktion.
            <br />
            <br />
            Das Ergebnis? Zeitlose Mode, die angenehm zu tragen ist und die
            Umwelt schont.
          </p>
          <button className="uppercase font-now font-medium tracking-widest pt-6 p-2 underline underline-offset-2 md:no-underline hover:underline cursor-pointer">
            Kollektion entdecken
          </button>
        </div>
      </div>
    </>
  );
};

export default Intro;
