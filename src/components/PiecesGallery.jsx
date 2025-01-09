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
      defaultImage: pulli4,
      hoverImage: pulli4close,
      price: 59,
      itemName: "Sweater Grün",
    },
    {
      id: 2,
      type: "Oberteile",
      defaultImage: jacket3,
      hoverImage: jacket3close,
      price: 59,
      itemName: "Shirt Beige",
    },
    {
      id: 3,
      type: "Hosen",
      defaultImage: pants2,
      hoverImage: pants2close,
      price: 89,
      itemName: "Comfort Pants",
    },
    {
      id: 4,
      type: "Mützen",
      defaultImage: scarf1,
      hoverImage: scarf1close,
      price: 39,
      itemName: "Schaal Moos",
    },
    {
      id: 5,
      type: "Jacken",
      defaultImage: jacket1,
      hoverImage: jacket1close,
      price: 129,
      itemName: "Jacke Fell",
    },
    {
      id: 6,
      type: "Oberteile",
      defaultImage: pulli1,
      hoverImage: pulli1close,
      price: 129,
      itemName: "Jacke Fell",
    },
    {
      id: 7,
      type: "Mützen",
      defaultImage: beanie1,
      hoverImage: beanie1close,
      price: 129,
      itemName: "Jacke Fell",
    },
    {
      id: 8,
      type: "Jacken",
      defaultImage: jacket3,
      hoverImage: jacket3close,
      price: 129,
      itemName: "Jacke Fell",
    },
    {
      id: 9,
      type: "Oberteile",
      defaultImage: pulli5,
      hoverImage: pulli5close,
      price: 129,
      itemName: "Jacke Fell",
    },
    {
      id: 10,
      type: "Oberteile",
      defaultImage: pulli3,
      hoverImage: pulli3close,
      price: 129,
      itemName: "Jacke Fell",
    },
    {
      id: 11,
      type: "Mützen",
      defaultImage: beanie2,
      hoverImage: beanie2close,
      price: 129,
      itemName: "Jacke Fell",
    },
    {
      id: 12,
      type: "Shirts",
      defaultImage: shirt1,
      hoverImage: shirt1close,
      price: 129,
      itemName: "Jacke Fell",
    },
    {
      id: 13,
      type: "Oberteile",
      defaultImage: pulli2,
      hoverImage: pulli2close,
      price: 129,
      itemName: "Jacke Fell",
    },
    {
      id: 14,
      type: "Jacken",
      defaultImage: jacket2,
      hoverImage: jacket2close,
      price: 129,
      itemName: "Jacke Fell",
    },
    {
      id: 15,
      type: "Socken",
      defaultImage: socks1,
      hoverImage: socks1close,
      price: 129,
      itemName: "Jacke Fell",
    },
    {
      id: 16,
      type: "Socken",
      defaultImage: socks2,
      hoverImage: socks2close,
      price: 129,
      itemName: "Jacke Fell",
    },
    {
      id: 17,
      type: "Socken",
      defaultImage: socks3,
      hoverImage: socks3close,
      price: 129,
      itemName: "Jacke Fell",
    },
    {
      id: 18,
      type: "Hosen",
      defaultImage: pants1,
      hoverImage: pants1close,
      price: 79,
      itemName: "Comfort Pants Light",
    },
  ];

  const [selectedType, setSelectedType] = useState("");

  const filteredItems = selectedType
    ? clothingItems.filter((item) => item.type === selectedType)
    : clothingItems;

  const types = ["Oberteile", "Hosen", "Jacken", "Shirts", "Socken", "Mützen"];

  return (
    <div className="bg-gray-100">
      <div>
        <h2>Entdecke alle Pieces</h2>
      </div>
      {/* Filter Pills */}
      <div className="flex overflow-x-auto gap-2 pl-2 pr-2 pb-6 no-scrollbar">
        {types.map((type) => (
          <button
            key={type}
            onClick={() =>
              setSelectedType((prev) => (prev === type ? "" : type))
            }
            className={`px-4 py-2 pt-2.5 rounded-full text-sm font-medium font-now ${
              selectedType === type
                ? "bg-gray-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="w-screen md:pl-20 md:pr-20">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 gap-y-8">
          {filteredItems.map((item) => (
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
    </div>
  );
};

export default PiecesGallery;
