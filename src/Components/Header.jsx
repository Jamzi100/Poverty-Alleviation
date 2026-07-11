import { Link } from "react-router-dom";

export default function DonateCTA() {
  return (
    <section className="bg-green-700 py-14 sm:py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Together, We Can Change Lives
        </h2>

        <p className="mt-5 text-base sm:text-lg text-green-100 max-w-3xl mx-auto leading-7 sm:leading-8">
          Every donation helps HopeBridge provide food, education,
          healthcare, housing, skills training, and opportunities for
          individuals and families in need. Your generosity creates hope
          and empowers communities to build a better future.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-center hover:bg-gray-100 transition duration-300"
          >
            Contact Us
          </Link>

          <button className="w-full sm:w-auto bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition duration-300">
            Donate Today
          </button>
        </div>
      </div>
    </section>
  );
}