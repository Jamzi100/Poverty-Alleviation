import { Link } from "react-router-dom";

export default function GetInvolved() {
  return (
    <section className="py-24 bg-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-3xl font-bold">
          READY TO MAKE A DIFFERENCE?
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
          Whether you need support or want to help transform lives,
          HopeBridge is here to connect compassion with action.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">
          <Link
            to="/donate"
            className="bg-white border-2 border-red-900 text-red-900 px-8 py-3 rounded-full hover:bg-red-900 hover:text-white transition duration-300 hover:scale-105"
          >
            Donate Now
          </Link>

          <Link
            to="/get-help"
            className="bg-white border-2 border-red-900 text-red-900 px-8 py-3 rounded-full hover:bg-red-900 hover:text-white transition duration-300 hover:scale-105"
          >
            Get Help
          </Link>
        </div>
      </div>
    </section>
  );
}