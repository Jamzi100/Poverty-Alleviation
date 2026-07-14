import { Link } from "react-router-dom";

export default function DonateCTA() {
  return (
    <section className="bg-red-700 py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Together, We Can Change Lives
        </h2>

        <p className="mt-6 text-lg text-green-100 max-w-3xl mx-auto leading-8">
          Every donation helps HopeBridge provide food, education,
          healthcare, housing, skills training, and opportunities for
          individuals and families in need. Your generosity creates hope
          and empowers communities to build a better future.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/contact"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-700 transition"
          >
            Contact Us
          </Link>

        </div>
      </div>
    </section>
  );
}