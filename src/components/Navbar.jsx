import React, { useState } from "react";
import {
  logo,
  shoppingBagIcon,
  searchIcon,
  burgerIcon,
  closeMenuIcon,
} from "../utils";
import MobileMenu from "./MobileMenu";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="navbar-container z-30">
      <nav className="bg-black border-box w-full h-20 text-light flex justify-between items-center">
        <div
          id="navbar-links"
          className="flex p-6 uppercase space-x-8 font-now"
        >
          <img src={logo} alt="Woolies Logo" className="mb-1 mr-2 ml-6" />

          <div className="hidden lg:flex items-center uppercase space-x-8 font-now">
            <svg width="1" height="32">
              {" "}
              <rect width="100%" height="100%" fill="#fff" />{" "}
            </svg>
            <Link
              to="collection"
              smooth={true}
              className="pt-0.5 cursor-pointer tracking-widest hover:opacity-80"
              duration={1000}
              easing="easeInOutCubic"
            >
              Oberteile
            </Link>
            <Link
              to="collection"
              smooth={true}
              className="pt-0.5 cursor-pointer tracking-widest hover:opacity-80"
              duration={1000}
              easing="easeInOutCubic"
            >
              Hosen
            </Link>
            <Link
              to="collection"
              smooth={true}
              className="pt-0.5 cursor-pointer tracking-widest hover:opacity-80"
              duration={1000}
              easing="easeInOutCubic"
            >
              Jacken
            </Link>
            <Link
              to="collection"
              smooth={true}
              className="pt-0.5 cursor-pointer tracking-widest hover:opacity-80"
              duration={1000}
              easing="easeInOutCubic"
            >
              Accessoires
            </Link>
          </div>
        </div>
        <div className="flex">
          <img src={searchIcon} alt="Search" className="mr-4 cursor-pointer" />
          <img
            src={shoppingBagIcon}
            alt="Shopping Basket"
            className="mr-4 cursor-pointer"
          />
          <div>
            <img
              src={isMenuOpen ? closeMenuIcon : burgerIcon}
              alt="Menu"
              className="mr-6 lg:hidden cursor-pointer"
              onClick={handleMenuClick}
            />
          </div>
        </div>
      </nav>
      {isMenuOpen && <MobileMenu />}
    </header>
  );
};

export default Navbar;
