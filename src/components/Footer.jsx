import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-secondary text-text p-2">
      <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-40 py-6 gap-6">
        {/* Left Section (Socials & Contact) */}
        <div>
          <h2 className="text-xl font-bold text-textSecondary mb-2">
            Our Socials
          </h2>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/offsetdesign1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-2xl hover:text-textSecondary transition" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl hover:text-textSecondary transition" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl hover:text-textSecondary transition" />
            </a>
          </div>

          <h2 className="text-xl font-bold text-textSecondary mt-4">Contact</h2>
          <p>+977-9808477776, 9860138720</p>

          <h2 className="text-xl font-bold text-textSecondary mt-4">Email</h2>
          <p>offsetdesign4@gmail.com</p>

          <h2 className="text-xl font-bold text-textSecondary mt-4">
            Location
          </h2>
          <p>Gatthaghar, Bhaktapur</p>
        </div>

        {/* Right Section (Quick Links) */}
        <div>
          <h2 className="text-xl font-bold text-textSecondary mb-2">
            Quick Links
          </h2>
          <ul className="flex flex-col gap-2">
            <li className="cursor-pointer hover:text-textSecondary">FAQ</li>
            <li className="cursor-pointer hover:text-textSecondary">
              Services
            </li>
            <li className="cursor-pointer hover:text-textSecondary">
              Portfolio
            </li>
            <li className="cursor-pointer hover:text-textSecondary">Contact</li>
            <li className="cursor-pointer hover:text-textSecondary">Blogs</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-2 border-t border-textSecondary py-2 ">
        Copyright © Offset Design. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
