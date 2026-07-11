import Image from "../assets/struggle.jpeg";
import { Link } from "react-router-dom";

export default function AboutSec() {
  return (
    <section className="bg-gray-100 py-14 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

        <div className="flex justify-center w-full lg:w-1/2">
          <img
            src={Image}
            alt="Children struggling with poverty"
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[480px] lg:h-[480px] object-cover rounded-full shadow-2xl"
          />
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-lg sm:text-xl font-bold text-gray-800 tracking-wide">
            ABOUT HOPEBRIDGE
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-red-900 leading-tight">
            Fighting Poverty Through Compassion and Action
          </h2>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-700 leading-8">
            HopeBridge is committed to reducing poverty by connecting
            communities with education, healthcare, food assistance, and
            sustainable opportunities. We believe every person deserves the
            chance to build a better future.
          </p>

          <div className="mt-8">
            <Link
              to="/about"
              className="inline-block bg-red-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 hover:scale-105 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}