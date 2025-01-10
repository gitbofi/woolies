import React from "react";
import { collectionPair2, collectionSingle } from "../utils";

const Collection = () => {
  return (
    <>
      <section>
        <h2 className="pt-16 text-center">Neu im Herbst</h2>
        <div id="content-wrapper" className="flex flex-col pt-6 lg:flex-row">
          <div
            id="content-1"
            className="flex-col pl-4 pr-4 md:pl-16 md:pr-16 lg:pt-10 lg:pl-32 xl:pl-64"
          >
            <div className="overflow-hidden">
              {/* Image container */}
              <img
                src={collectionSingle}
                alt="Start"
                className="inset-0 w-full object-cover transition duration-500 hover:scale-110"
              />
            </div>
            <h3 className="p-4 pt-2 lg:pt-6 pb-2">
              Mit Woolies smart casual in den Herbst starten
            </h3>
            <p className="p-4 pt-0 max-w-3xl">
              Die neue Herbstkollektion von Woolies verbindet zeitlose Eleganz
              mit kuscheliger Wärme - perfekt für die kühleren Tage.
              <br />
              <br />
              Unsere nachhaltig produzierte Schafwolle sorgt nicht nur für
              Komfort, sondern auch für ein gutes Gewissen. Entdecke die neuen
              Lieblingsstücke für deinen Herbstlook!
            </p>
            <button className="hidden uppercase font-now font-medium tracking-widest underline p-4 lg:flex">
              Kollektion entdecken
            </button>
          </div>
          <div
            id="content-2"
            className="flex flex-col pl-4 pr-4 md:pl-16 md:pr-16 lg:pt-12 lg:pr-32 xl:pr-64 lg:flex-col-reverse"
          >
            <img
              src={collectionPair2}
              alt="Model volle Größe"
              className="lg:pb-40 lg:pt-8"
            />
            <div>
              <h3 className="p-4 pt-2 pb-2">
                nachhaltiger umgang mit schafwolle
              </h3>
              <p className="p-4 pt-0 max-w-3xl">
                Unsere Mission: hochwertige Kleidung mit gutem Gewissen. Woolies
                verwendet ausschließlich natürliche Schafwolle aus nachhaltiger
                Produktion.
                <br />
                <br />
                Das Ergebnis? Zeitlose Mode, die angenehm zu tragen ist und die
                Umwelt schont.
              </p>
            </div>
            <div>
              <button className="uppercase text-sm font-now font-medium tracking-widest underline underline-offset-2 p-4 lg:hidden">
                Kollektion entdecken
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Collection;
