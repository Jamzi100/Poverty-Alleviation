import { FaHandHoldingHeart } from "react-icons/fa";

const impacts = [
  {
    amount: "₦5,000",
    description: "Provides nutritious meals for a family in need.",
  },
  {
    amount: "₦10,000",
    description: "Supplies school materials for a child to continue learning.",
  },
  {
    amount: "₦25,000",
    description: "Supports basic healthcare services for vulnerable individuals.",
  },
  {
    amount: "₦50,000",
    description: "Helps fund skills training or small business support programs.",
  },
];

export default function DonationImpact() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            Your Donation Creates Real Impact
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Every contribution helps us provide essential support to individuals,
            families, and communities. Here's what your generosity can achieve.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-8 text-center hover:border-red-700 hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center mb-4 text-red-700">
                <FaHandHoldingHeart size={45} />
              </div>

              <h3 className="text-3xl font-bold text-red-700 mb-3">
                {impact.amount}
              </h3>

              <p className="text-gray-600 leading-7">
                {impact.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}