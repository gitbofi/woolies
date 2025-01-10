import React from "react";
import { useState } from "react";
import {
  pulli1,
  pulli1close,
  pulli2,
  pulli2close,
  pulli3,
  pulli3close,
  pulli4,
  pulli4close,
  pulli5,
  pulli5close,
  pants1,
  pants1close,
  pants2,
  pants2close,
  jacket1,
  jacket1close,
  jacket2,
  jacket2close,
  jacket3,
  jacket3close,
  beanie1,
  beanie1close,
  beanie2,
  beanie2close,
  socks1,
  socks1close,
  socks2,
  socks2close,
  socks3,
  socks3close,
  scarf1,
  scarf1close,
  shirt1,
  shirt1close,
} from "../utils";
import ClothingItem from "./ClothingItem";

const PiecesGallery = () => {
  const clothingItems = [
    {
      id: 1,
      type: "Oberteile",
      defaultImage: jacket3,
      hoverImage: jacket3close,
      price: 59,
      itemName: "Hemdjacke",
    },
    {
      id: 2,
      type: "Oberteile",
      defaultImage: pulli4,
      hoverImage: pulli4close,
      price: 59,
      itemName: "Sweater Gewebt",
    },
    {
      id: 3,
      type: "Oberteile",
      defaultImage: pulli3,
      hoverImage: pulli3close,
      price: 65,
      itemName: "Stehkragen Schiefer",
    },
    {
      id: 4,
      type: "Mützen",
      defaultImage: scarf1,
      hoverImage: scarf1close,
      price: 39,
      itemName: "Schal Moos",
    },
    {
      id: 5,
      type: "Jacken",
      defaultImage: jacket1,
      hoverImage: jacket1close,
      price: 129,
      itemName: "Jacke Schafsfell",
    },
    {
      id: 6,
      type: "Oberteile",
      defaultImage: pulli1,
      hoverImage: pulli1close,
      price: 59,
      itemName: "Sweater Schiefer",
    },
    {
      id: 7,
      type: "Mützen",
      defaultImage: beanie1,
      hoverImage: beanie1close,
      price: 25,
      itemName: "Beanie Braun",
    },
    {
      id: 9,
      type: "Oberteile",
      defaultImage: pulli5,
      hoverImage: pulli5close,
      price: 59,
      itemName: "Sweater Steingrau",
    },
    {
      id: 10,
      type: "Hosen",
      defaultImage: pants2,
      hoverImage: pants2close,
      price: 89,
      itemName: "Hose Komfort",
    },
    {
      id: 11,
      type: "Mützen",
      defaultImage: beanie2,
      hoverImage: beanie2close,
      price: 25,
      itemName: "Mütze Schiefer",
    },
    {
      id: 12,
      type: "Shirts",
      defaultImage: shirt1,
      hoverImage: shirt1close,
      price: 49,
      itemName: "Shirt Natur",
    },
    {
      id: 13,
      type: "Oberteile",
      defaultImage: pulli2,
      hoverImage: pulli2close,
      price: 85,
      itemName: "Rollkragen Natur",
    },
    {
      id: 14,
      type: "Jacken",
      defaultImage: jacket2,
      hoverImage: jacket2close,
      price: 219,
      itemName: "Mantel Geo",
    },
    {
      id: 15,
      type: "Socken",
      defaultImage: socks1,
      hoverImage: socks1close,
      price: 15,
      itemName: "Socken Rost",
    },
    {
      id: 16,
      type: "Socken",
      defaultImage: socks2,
      hoverImage: socks2close,
      price: 15,
      itemName: "Socken Natur",
    },
    {
      id: 17,
      type: "Socken",
      defaultImage: socks3,
      hoverImage: socks3close,
      price: 15,
      itemName: "Socken Hell",
    },
    {
      id: 18,
      type: "Hosen",
      defaultImage: pants1,
      hoverImage: pants1close,
      price: 79,
      itemName: "Hose Komfort Leicht",
    },
  ];

  const [selectedType, setSelectedType] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredItems = selectedType
    ? clothingItems.filter((item) => item.type === selectedType)
    : clothingItems;

  const visibleItems = showAll ? filteredItems : filteredItems.slice(0, 6);

  const types = ["Oberteile", "Hosen", "Jacken", "Shirts", "Socken", "Mützen"];

  return (
    <div className="bg-gray-100 pb-20">
      <div>
        <h2>Entdecke alle Pieces</h2>
      </div>
      {/* Filter Pills */}
      <div className="flex overflow-x-auto gap-2 pl-2 md:pl-0 pr-2 pb-6 no-scrollbar md:justify-self-center">
        {types.map((type) => (
          <button
            key={type}
            onClick={() =>
              setSelectedType((prev) => (prev === type ? "" : type))
            }
            className={`px-4 py-2 pt-2.5 rounded-full md:rounded-none text-sm font-medium font-now ${
              selectedType === type
                ? "bg-gray-500 text-white md:bg-transparent md:text-dark md:font-bold md:border-2 md:border-dark"
                : "bg-gray-300 text-gray-700 md:bg-transparent md:text-dark"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="w-screen md:px-20 lg:px-32 max-w-7xl justify-self-center">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8">
          {visibleItems.map((item) => (
            <ClothingItem
              key={item.id}
              defaultImage={item.defaultImage}
              hoverImage={item.hoverImage}
              price={item.price}
              itemName={item.itemName}
              altText={`Item ${item.id}`}
            />
          ))}
        </div>
      </div>

      {/* Show More / Show Less Button */}
      {filteredItems.length > 6 && (
        <div className="text-center pt-8">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-12 py-2 text-dark border border-dark font-now text-sm hover:underline"
          >
            {showAll ? "Weniger anzeigen" : "Mehr anzeigen"}
          </button>
        </div>
      )}
    </div>
  );
};

export default PiecesGallery;
