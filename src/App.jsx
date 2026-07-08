import { Routes, Route } from 'react-router-dom';
import './App.css' // Optional
import Header from "./Components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import GetInvolved from "./pages/GetInvolved";
import Impact from "./pages/Impact";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/impact" element={<Impact />} />
      </Routes>
    </div>
  );
}

export default App;