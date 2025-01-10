import React from "react";
import NewsletterForm from "./NewsletterForm";
import { instagram, tiktok, whatsapp } from "../utils";

const Footer = () => {
  return (
    <div>
      <section>
        <NewsletterForm />
      </section>
      <div className="cursor-pointer h-32 flex justify-center mt-16">
        <img
          src={instagram}
          alt="Instagram"
          className="h-8 mx-4 hover:scale-110 transition ease-in-out duration-100"
        />
        <img
          src={tiktok}
          alt="Tiktok"
          className="h-8 mx-4 hover:scale-110 transition ease-in-out duration-100"
        />
        <img
          src={whatsapp}
          alt="Whatsapp"
          className="h-8 mx-4 hover:scale-110 transition ease-in-out duration-100"
        />
      </div>
      <div className="flex justify-center">
        <ul className="flex w-fit flex-col text-xs font-now mx-12 text-center space-y-2 mb-8">
          <li className="font-artifika text-lg mb-4">woolies</li>
          <li className="cursor-pointer hover:underline">Versand</li>
          <li className="cursor-pointer hover:underline">Datenschutz</li>
          <li className="cursor-pointer hover:underline">
            Geschäftsbedingungen
          </li>
          <li className="cursor-pointer hover:underline">Privatsphäre</li>
          <li className="cursor-pointer hover:underline">Cookies</li>
        </ul>
      </div>
      <p className="font-now text-xs text-center mb-4">
        &copy; 2025 Fabian Fritz. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
