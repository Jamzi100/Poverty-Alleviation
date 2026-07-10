import { Routes, Route } from 'react-router-dom';
import './App.css' // Optional
import Header from "./Components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Donate from "./pages/Donate";
import GetInvolved from "./pages/GetInvolved";
import Contact from "./pages/Contact";
import Footer from "./Components/Footer"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;