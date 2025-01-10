import React from "react";
import { star } from "../utils";

const Trenner = () => {
  return (
    <div className="flex flex-col items-center lg:flex lg:flex-row text-center lg:justify-between w-5/6 justify-self-center my-12 xl:mt-0 py-4 lg:border-y-2 border-zinc-800 max-w-7xl">
      <div>
        <img src={star} alt="" className="animate-slowspin" />
      </div>
      <p className="font-now font-medium text-base pb-6 lg:pb-4 pt-6">
        von lokalen Schäfern
      </p>
      <img src={star} alt="" className="animate-slowspin" />
      <p className="font-now font-medium text-base pb-6 lg:pb-4 pt-6">
        umwelt-positive Produktion
      </p>
      <img src={star} alt="" className="animate-slowspin" />
      <p className="font-now font-medium text-base pb-6 lg:pb-4 pt-6">
        nachhaltig
      </p>
      <img src={star} alt="" className="animate-slowspin" />
    </div>
  );
};

export default Trenner;
