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
        <div className="flex pt-2 pl-2 justify-between">
          <p className="uppercase tracking-widest">{itemName}</p>
          <div className="flex flex-row-reverse">
            <p className="pr-1 pl-1">€</p>
            <p className="font-semibold">{price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClothingItem;
