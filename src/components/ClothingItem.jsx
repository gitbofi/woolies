import React from "react";

const ClothingItem = ({
  defaultImage,
  hoverImage,
  altText,
  itemName,
  price,
}) => {
  return (
    <>
      <div className="cursor-pointer">
        <div className="group relative aspect-square overflow-hidden">
          {/* Image container */}
          <img
            src={defaultImage}
            alt={altText}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-100"
          />
          <img
            src={hoverImage}
            alt={`${altText} on hover`}
            className=" absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-105 transform transition-transform duration-500 ease-out"
          />
        </div>
        <div className="flex flex-col pt-2 pl-2 justify-between">
          <p className="uppercase font-normal tracking-widest">{itemName}</p>
          <div className="flex">
            <p className="font-light text-sm">€ {price}</p>
            {/*<p className="pl-0.5">€</p>*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClothingItem;
