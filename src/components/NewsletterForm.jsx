import React, { useState } from "react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [errors, setErrors] = useState({ email: "", birthdate: "" });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateBirthdate = (birthdate) => {
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return dateRegex.test(birthdate);
  };

  const handleBirthdateChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }
    if (value.length > 5) {
      value = `${value.slice(0, 5)}/${value.slice(5)}`;
    }
    setBirthdate(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateEmail(email)) {
      newErrors.email =
        "Bitte verwende ein gültige Email (z.B., woolies@gmail.com).";
    }

    if (!validateBirthdate(birthdate)) {
      newErrors.birthdate =
        "Bitte gib ein gültiges Geburtsdatum ein (z.B. 03/12/1999).";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Proceed with form submission logic
      alert("Newsletter form submitted successfully!");
      setEmail("");
      setBirthdate("");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 mt-12">
      <h4 className="text-base text-center font-bold font-artifika py-8 px-6">
        Melde dich zum Newsletter an & erhalte ein Geschenk an deinem
        Geburtstag!
      </h4>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="lg:flex md:px-20 lg:px-0"
      >
        {/* Email Field */}
        <div className="pb-6 lg:pb-0 lg:pr-4 self-end lg:max-w-96 w-full">
          <label
            htmlFor="email"
            className="block text-xs font-medium font-now mb-1 text-center"
          >
            Deine Email-Adresse
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="deine@email.com"
            className={`w-full h-10 px-4 py-2 bg-zinc-200 text-sm font-now text-center ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Birthdate Field */}
        <div className="pb-6 lg:pb-0 lg:pr-4 self-end w-full lg:max-w-48">
          <label
            htmlFor="birthdate"
            className="block text-center text-xs font-medium font-now text-dark mb-1"
          >
            Dein Geburtsdatum
          </label>
          <input
            type="text"
            id="birthdate"
            value={birthdate}
            onChange={handleBirthdateChange}
            placeholder="tt/mm/jjjj"
            className={`w-full h-10 px-4 bg-zinc-200 font-now text-sm text-center ${
              errors.birthdate ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.birthdate && (
            <p className="text-red-500 text-xs mt-1">{errors.birthdate}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full lg:max-w-48 h-10 self-end px-4 bg-dark text-white hover:bg-gray-950 font-now uppercase tracking-widest text-sm"
        >
          Anmelden
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
