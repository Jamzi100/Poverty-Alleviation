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
import Logo from '../assets/hopebridge-logo.png';

export default function Footer(){
    return(
        <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-3 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px">
        <div className="">
            <img src={Logo} alt="HopeBridge Logo" className="w-28 h-22" />

            <h2 className="text-2xl font-bold">
      HopeBridge
    </h2>


    </div>
    <div>
        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

        <ul className="space-y-3 text-gray-400">
    <li>
      <Link to="/" className="hover:text-green-400 transition-colors">
        Home
      </Link>
    </li>

    <li>
      <Link to="/about" className="hover:text-green-400 transition-colors">
        About
      </Link>
    </li>

    <li>
      <Link to="/services" className="hover:text-green-400 transition-colors">
        Services
      </Link>
    </li>

    <li>
      <Link to="/gethelp" className="hover:text-green-400 transition-colors">
        Get Help
      </Link>
    </li>

    <li>
      <Link to="/donate" className="hover:text-green-400 transition-colors">
        Donate
      </Link>
    </li>

    <li>
      <Link to="/contact" className="hover:text-green-400 transition-colors">
        Contact
      </Link>
    </li>
  </ul>
</div>
<div>
  <h3 className="text-xl font-semibold mb-4">Our Services</h3>

  <ul className="space-y-3 text-gray-400">
    <li>Food Assistance</li>
    <li>Education Support</li>
    <li>Healthcare</li>
    <li>Housing Support</li>
    <li>Skill Training</li>
    <li>Micro Grants</li>
  </ul>
</div>

<div>
  <h3 className="text-xl font-semibold mb-4">Contact Us</h3>

  <div className="space-y-4 text-gray-400">

    <div className="flex items-center gap-3">
      <FaLocationDot className="text-green-500" />
      <span>Abuja, Nigeria</span>
    </div>

    <div className="flex items-center gap-3">
      <FaPhone className="text-green-500" />
      <span>+234 800 000 0000</span>
    </div>

    <div className="flex items-center gap-3">
      <FaEnvelope className="text-green-500" />
      <span>support@hopebridge.org</span>
    </div>

  </div>

  {/* Social Media */}
  <div className="flex gap-5 mt-6 text-2xl">
    <FaFacebook className="hover:text-blue-500 cursor-pointer transition-colors" />
    <FaInstagram className="hover:text-pink-500 cursor-pointer transition-colors" />
    <FaXTwitter className="hover:text-gray-300 cursor-pointer transition-colors" />
    <FaLinkedin className="hover:text-blue-400 cursor-pointer transition-colors" />
  </div>
  <p className="text-2"mt-4>
    © 2026 HopeBridge. All Rights Reserved.
Privacy Policy | Terms of Service
  </p>
</div>
</div>
    </div>
    </footer>
    )
}