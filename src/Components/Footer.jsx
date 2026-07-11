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
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 py-16">

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          
          <div className="text-center sm:text-left">
            <img
              src={Logo}
              alt="HopeBridge Logo"
              className="w-28 mx-auto sm:mx-0"
            />

            <h2 className="mt-4 text-2xl font-bold">
              HopeBridge
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              Bridging the gap between hardship and opportunity by empowering
              individuals, families, and communities through sustainable
              support.
            </p>
          </div>

          
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/" className="hover:text-green-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-green-400 transition">
                  About
                </Link>
              </li>

              <li>
                <Link to="/get-help" className="hover:text-green-400 transition">
                  Get Help
                </Link>
              </li>

              <li>
                <Link to="/donate" className="hover:text-green-400 transition">
                  Donate
                </Link>
              </li>

              <li>
                <Link to="/impact" className="hover:text-green-400 transition">
                  Impact
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-green-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Our Services
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Food Assistance</li>
              <li>Healthcare Support</li>
              <li>Educational Assistance</li>
              <li>Housing Support</li>
              <li>Skills Training</li>
              <li>Micro-Grants</li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex items-center gap-3">
                <FaLocationDot className="text-green-500 text-lg" />
                <span>Abuja, Nigeria</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="text-green-500 text-lg" />
                <span>+234 800 000 0000</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-green-500 text-lg" />
                <span>support@hopebridge.org</span>
              </div>

            </div>

            
            <div className="flex justify-center sm:justify-start gap-5 mt-8 text-2xl">

              <FaFacebook className="cursor-pointer hover:text-blue-500 transition" />

              <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />

              <FaXTwitter className="cursor-pointer hover:text-gray-300 transition" />

              <FaLinkedin className="cursor-pointer hover:text-blue-400 transition" />

            </div>
          </div>

        </div>

        
        <div className="border-t border-gray-700 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">

          <p className="text-center md:text-left">
            © 2026 HopeBridge. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/privacy"
              className="hover:text-green-400 transition"
            >
              Privacy Policy
            </Link>

            <span>|</span>

            <Link
              to="/terms"
              className="hover:text-green-400 transition"
            >
              Terms of Service
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}