import React from "react";
import { sheperd } from "../utils";
import FaqList from "./FaqList";

const Versprechen = () => {
  return (
    <>
      <section>
        <h2>Unser Versprechen an die Natur</h2>
        <div
          id="content-wrapper"
          className="lg:flex w-5/6 max-w-7xl justify-self-center pt-8 pb-24 lg:pb-0"
        >
          <div>
            <p className="pt-4 pb-4 text-center lg:text-left">
              Glückliche Schafe, hochqualitative Wolle.
            </p>
            <h5 className="text-base font-now text-medium text-center lg:text-left">
              “Unsere Schafe spielen eine wichtige Rolle für die
              Landschaftspflege im Schwarzwald. Sie halten die Vegetation in
              Schach und dadurch die biologische Vielfalt im Gleichgewicht.”
            </h5>
            <p className="pt-4 font-medium text-center lg:text-left">
              Thomas Schäfer
            </p>
            <div className="py-12 pt-20 max-w-xl justify-self-center lg:justify-self-start">
              <FaqList />
            </div>
          </div>

          <div className="hidden lg:block lg:ml-12 pt-16 lg:pt-0 max-w-xl justify-self-center">
            <img src={sheperd} alt="Schäfer" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Versprechen;
