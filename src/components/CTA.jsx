import React from "react";
import { Link } from "react-scroll";

const CTA = () => {
  return (
    <>
      <Link
        className="transition ease-in-out mt-8 text-md md:text-sm w-fit pt-3 pb-3 pr-5 pl-5 border-2 border-light font-now tracking-widest hover:scale-105 hover:font-medium cursor-pointer"
        to="collection"
        smooth={true}
        easing="easeInOutCubic"
        duration={1000}
      >
        Kollektion entdecken
      </Link>
    </>
  );
};

export default CTA;
