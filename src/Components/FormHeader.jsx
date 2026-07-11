import { FaHandsHelping } from "react-icons/fa";

export default function FormHeader() {
  return (
    <section className="bg-gradient-to-r from-red-800 to-red-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-24">

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full mb-6">
            <FaHandsHelping className="text-xl text-yellow-300" />
            <span className="font-medium">
              HopeBridge Assistance Program
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Apply for Assistance
          </h1>

          <div className="mt-8 flex flex-wrap gap-4">

            <span className="bg-white/10 px-4 py-2 rounded-full text-sm sm:text-base">
              ✓ Secure Application
            </span>

            <span className="bg-white/10 px-4 py-2 rounded-full text-sm sm:text-base">
              ✓ Free to Apply
            </span>

            <span className="bg-white/10 px-4 py-2 rounded-full text-sm sm:text-base">
              ✓ Confidential
            </span>

          </div>
        </div>

      </div>
    </section>
  );
}