import React from "react";

const Versprechen = () => {
  return (
    <>
      <section>
        <h2>Unser Versprechen an die Natur</h2>
        <div id="content-wrapper" className="flex flex-col pt-6 lg:flex-row">
          <div
            id="content-1"
            className="flex-col pl-4 pr-4 md:pl-16 md:pr-16 lg:pt-12 lg:pl-32 lg:mr-6"
          >
            <h3 className="p-4 pt-2 lg:pt-6 pb-2">
              Gutes für unsere (Um-)Welt
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Versprechen;
