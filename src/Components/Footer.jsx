import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";
import Logo from "../assets/hopebridge-logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Main Footer */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Logo Section */}
          <div className="lg:col-span-1">
            <img
              src={Logo}
              alt="HopeBridge Logo"
              className="w-28"
            />

            <h2 className="mt-4 text-2xl font-bold">
              HopeBridge
            </h2>

            <div className="flex gap-4 mt-6 text-xl">

              <a
                href="https://web.facebook.com/daniel.joseph.434791"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition"
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.instagram.com/danieljosedj100/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://x.com/jos33060"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition"
              >
                <FaXTwitter />
              </a>

              <a
                href="#"
                className="hover:text-red-500 transition"
              >
                <FaLinkedin />
              </a>

            </div>
          </div>

          {/* Links Area */}
          <div className="lg:col-span-4">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

              {/* Quick Links */}
              <div>
                <h3 className="text-red-500 font-bold uppercase text-sm mb-5">
                  Quick Links
                </h3>

                <ul className="space-y-3 text-gray-300 text-sm">

                  <li>
                    <Link to="/" className="hover:text-red-400">
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link to="/about" className="hover:text-red-400">
                      About
                    </Link>
                  </li>

                  <li>
                    <Link to="/get-help" className="hover:text-red-400">
                      Get Help
                    </Link>
                  </li>

                  <li>
                    <Link to="/donate" className="hover:text-red-400">
                      Donate
                    </Link>
                  </li>

                  <li>
                    <Link to="/contact" className="hover:text-red-400">
                      Contact
                    </Link>
                  </li>

                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-red-500 font-bold uppercase text-sm mb-5">
                  Services
                </h3>

                <ul className="space-y-3 text-gray-300 text-sm">
                  <li>Food Assistance</li>
                  <li>Healthcare</li>
                  <li>Education</li>
                  <li>Housing</li>
                  <li>Skills Training</li>
                  <li>Micro-Grants</li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-red-500 font-bold uppercase text-sm mb-5">
                  Contact
                </h3>

                <div className="space-y-4 text-gray-300 text-sm">

                  <div className="flex items-start gap-3">
                    <FaLocationDot className="mt-1 text-red-500" />
                    <span>Abuja, Nigeria</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaPhone className="mt-1 text-red-500" />
                    <a
                      href="tel:+2349132804333"
                      className="hover:text-red-400"
                    >
                      +234 913 280 4333
                    </a>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaEnvelope className="mt-1 text-red-500" />
                    <a
                      href="mailto:support@hopebridge.org"
                      className="hover:text-red-400 break-all"
                    >
                      support@hopebridge.org
                    </a>
                  </div>

                </div>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-red-500 font-bold uppercase text-sm mb-5">
                  Legal
                </h3>

                <ul className="space-y-3 text-gray-300 text-sm">

                  <li>
                    <Link to="/privacy" className="hover:text-red-400">
                      Privacy Policy
                    </Link>
                  </li>

                  <li>
                    <Link to="/terms" className="hover:text-red-400">
                      Terms of Service
                    </Link>
                  </li>

                </ul>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-sm">
            © 2026 HopeBridge. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Empowering Communities • Changing Lives
          </p>

        </div>

      </div>
    </footer>
  );
}