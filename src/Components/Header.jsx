import {Link} from 'react-router-dom';
import Logo from '../assets/hopebridge-logo.png';


function Header() {
  return (
    <nav className="sticky top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between p-2 bg-gray-600 text-white ">
      <img src={Logo} 
      alt="HopeBridge logo" 
      width="100" 
      height="80" 
      />
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/donate">Donate</Link>
      <Link to="/get-involved">Get Involved</Link>
      <Link to="/impact">Impact</Link>
      </div>
    </nav>
  );
}

export default Header;