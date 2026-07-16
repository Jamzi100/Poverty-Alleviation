import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/hopebridge-logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Get Help", path: "/get-help" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-red-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/">
            <img
              src={Logo}
              alt="HopeBridge Logo"
              className="h-14 md:h-16 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-white text-red-700"
                      : "text-white border border-white hover:bg-white hover:text-red-700"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <NavLink
              to="/donate"
              className={({ isActive }) =>
                `px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-white text-red-700"
                    : "border border-white text-white hover:bg-white hover:text-red-700"
                }`
              }
            >
              Donate
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden bg-red-700 pb-6">
            <nav className="flex flex-col gap-4 mt-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block text-center px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-white text-red-700"
                        : "text-white border border-white hover:bg-white hover:text-red-700"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <NavLink
                to="/donate"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-center px-5 py-3 rounded-full font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-white text-red-700"
                      : "border border-white text-white hover:bg-white hover:text-red-700"
                  }`
                }
              >
                Donate
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}