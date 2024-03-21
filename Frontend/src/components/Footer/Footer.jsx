import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className=" text-white py-10 bg-cover bg-center relative"
      style={{ backgroundImage: `url('/src/assets/footerbg3.svg')` }}
    >
      <div className="absolute inset-0 "></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
          {/* First Column */}
          <div className="col-span-1">
            <img
              src="/src/assets/fullLogo.svg"
              alt="Logo"
              className="h-10 w-17 mb-4"
            />
            <p className="text-sm">
              To bring quality education experience to every school in Sri
              Lanka. join hands to make a better future for our children.
            </p>
          </div>

          {/* Second Column */}
          <div className="col-span-1">
            <h3 className="text-lg mb-4">Quick links</h3>
            <ul>
              <li>
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/past-events" className="hover:text-gray-300">
                  Past Events
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-gray-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-gray-300">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Third Column */}
          <div className="col-span-1">
            <h3 className="text-lg mb-4">Contact Us</h3>
            <p>Email: example@example.com</p>
            <p>Phone: +1234567890</p>
            <a href="#" className="inline-block mt-2">
              <img
                src="/src/assets/instagram.svg"
                alt="Instagram"
                className="h-6 w-6"
              />
            </a>
          </div>

          {/* Fourth Column (Empty) */}
          <div className="col-span-1 md:col-span-4 border-t pt-4 mt-4 md:mt-0">
            <p className="text-center text-sm">
              Copyright 2023 | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
