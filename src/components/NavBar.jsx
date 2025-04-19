import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import hamburger & close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close menu on link click (for mobile)
  };

  return (
    <nav className="bg-secondary/10 lg:flex justify-between lg:px-40 lg:h-[6rem] text-text shadow-lg shadow-secondary p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link to="/" onClick={handleLinkClick}>
            OFFSET DESIGN
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`flex flex-col items-center lg:flex-row gap-4 text-lg mt-4 lg:mt-0 lg:gap-8 ${
          isOpen ? "block" : "hidden"
        } lg:flex`}
      >
        <li className="cursor-pointer hover:text-textSecondary duration-300 font-medium">
          <Link to="/" onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li className="cursor-pointer hover:text-textSecondary duration-300 font-medium">
          <Link to="/portfolio" onClick={handleLinkClick}>
            Portfolio
          </Link>
        </li>
        <li className="cursor-pointer hover:text-textSecondary duration-300 font-medium">
          <Link to="/our-team" onClick={handleLinkClick}>
            Our Team
          </Link>
        </li>
        <li className="cursor-pointer hover:text-textSecondary duration-300 font-medium">
          <Link to="/services" onClick={handleLinkClick}>
            Services
          </Link>
        </li>
        <li className="cursor-pointer hover:text-textSecondary duration-300 font-medium">
          <Link to="/contact" onClick={handleLinkClick}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
