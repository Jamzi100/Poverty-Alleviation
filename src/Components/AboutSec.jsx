import Image from "../assets/struggle.jpeg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function AboutSec() {
  return (
    <section className="flex items-center justify-center text-center py-24 bg-gray-100">
        <img src={Image} alt="Children struggling with poverty" className="w-120 h-120 object-cover rounded-[100%] shadow-2xl" />
        <div className="ml-8 flex flex-col items-center justify-between text-center w-1/2 space-y-4 max-w-2xl">
        <p className="font-bold text-2xl text-gray-800 text-center family-teko">
          ABOUT HOPEBRIDGE
        </p>

        <h2 className="text-4xl font-bold text-red-900 mt-4">
          Fighting Poverty Through Compassion and Action
        </h2>
        <p className="font-medium text-2xl mt-4 family-teko ">
          HopeBridge is committed to reducing poverty by connecting communities with education, healthcare, food assistance, and sustainable opportunities. We believe every person deserves the chance to build a better future.
        </p>
        <Link to="/About" className="bg-red-900 text-white px-6 py-3 rounded-full mt-4 hover:bg-red-700 transition duration-300 hover:scale-105">
          Learn More 
          <FaArrowRight className="inline ml-2" />
        </Link>
        </div>
    </section>
  );
}