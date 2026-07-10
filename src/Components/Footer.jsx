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
          <p className="text-gray-400 leading-7">
    HopeBridge is dedicated to empowering individuals and families through
    food assistance, education, healthcare, housing support, skill
    development, and community-driven initiatives.
  </p>

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
    </div>
    </footer>
    )
}