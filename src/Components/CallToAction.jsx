import { Link } from "react-router-dom";

export default function GetInvolved() {
  return (
    <section className="bg-gray-100 py-14 sm:py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
          READY TO MAKE A DIFFERENCE?
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-gray-600 leading-8">
          Whether you need support or want to help transform lives,
          HopeBridge is here to connect compassion with action.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <Link
            to="/donate"
            className="w-full sm:w-auto bg-white border-2 border-red-900 text-red-900 px-8 py-3 rounded-full font-semibold hover:bg-red-900 hover:text-white transition duration-300 hover:scale-105"
          >
            Donate Now
          </Link>

          <Link
            to="/get-help"
            className="w-full sm:w-auto bg-white border-2 border-red-900 text-red-900 px-8 py-3 rounded-full font-semibold hover:bg-red-900 hover:text-white transition duration-300 hover:scale-105"
          >
            Get Help
          </Link>
        </div>
      </div>
    </section>
  );
}
