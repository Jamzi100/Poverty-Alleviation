import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScrollTop from "./Components/ScrollTop";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Donate = lazy(() => import("./pages/Donate"));
const GetHelp = lazy(() => import("./pages/GetHelp"));

function App() {
  return (
    <div>
      <ScrollTop />
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
         <Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="/donate" element={<Donate />} />
<Route path="/get-help" element={<GetHelp />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;