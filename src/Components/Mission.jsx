import Image from "../assets/volunteer.jpg";
import { FaCheckCircle } from "react-icons/fa";

export default function Mission() {
  const missions = [
    "Skills Training",
    "Micro Grants for Small Businesses",
    "Food Assistance Programs",
    "Educational Support and Scholarships",
    "Community Development Projects",
    "Healthcare Services and Medical Outreach",
    "Emergency Relief and Humanitarian Support",
  ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={Image}
              alt="HopeBridge volunteer"
              className="w-full max-w-md lg:max-w-lg aspect-square object-cover rounded-full border-8 border-white shadow-2xl"
            />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block bg-red-100 text-red-700 font-semibold px-4 py-2 rounded-full mb-5">
              Making Lives Better
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-800">
              Our Mission
            </h2>

            <div className="w-24 h-1 bg-red-700 rounded-full mt-4 mb-8"></div>

            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-8">
              At HopeBridge, we believe everyone deserves an opportunity to
              thrive. Our mission is to empower vulnerable individuals and
              underserved communities through sustainable programs that create
              lasting impact and restore hope.
            </p>

            <ul className="space-y-5">
              {missions.map((mission, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4"
                >
                  <FaCheckCircle className="text-green-600 mt-1 text-xl flex-shrink-0" />

                  <span className="text-gray-700 text-lg sm:text-xl">
                    {mission}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}