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
    <header className="sticky top-0 z-50 bg-green-300 shadow-lg">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-20">

          <Link to="/">
            <img
              src={Logo}
              alt="HopeBridge Logo"
              className="h-14 md:h-16 object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-black"
                      : "text-white hover:text-red-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <NavLink
              to="/donate"
              className="bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-full font-semibold transition duration-300"
            >
              Donate
            </NavLink>

          </nav>


          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-6">

            <nav className="flex flex-col gap-5 mt-4">

              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-yellow-400"
                        : "text-white hover:text-yellow-300"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <NavLink
                to="/donate"
                onClick={() => setMenuOpen(false)}
                className="bg-red-700 hover:bg-red-800 text-white px-5 py-3 rounded-full font-semibold text-center transition duration-300"
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