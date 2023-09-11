import React, { useState } from "react";

const NavLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="absolute">
      <button
        className={`text-gray-800 focus:outline-none ${
          menuOpen ? "hidden" : ""
        }`}
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      <div
        className={`absolute top-0 right-0 mt-2 w-56 bg-white border rounded-lg shadow-lg ${
          menuOpen ? "" : "hidden"
        }`}
      >
        <ul className="py-2">
          {NavLinks.map((link, index) => (
            <li key={index} className="px-4 py-2 hover:bg-gray-100">
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <button
          className="absolute top-2 right-4 text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HamburgerMenu;
