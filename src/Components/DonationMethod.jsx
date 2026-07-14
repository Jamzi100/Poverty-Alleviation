import {
  FaUniversity,
  FaCreditCard,
  FaMobileAlt,
} from "react-icons/fa";

const methods = [
  {
    icon: <FaCreditCard size={40} />,
    title: "Online Payment",
    description:
      "Donate securely using your debit or credit card through our trusted payment partners.",
  },
  {
    icon: <FaUniversity size={40} />,
    title: "Bank Transfer",
    description:
      "Transfer directly to the HopeBridge bank account. Account details will be provided after clicking Donate.",
  },
  {
    icon: <FaMobileAlt size={40} />,
    title: "USSD & Mobile Banking",
    description:
      "Make quick donations using your bank's USSD code or mobile banking application.",
  },
];

export default function DonationMethods() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            Ways to Donate
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            We provide secure and convenient ways for you to support our
            mission. Choose the method that works best for you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {methods.map((method, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md p-8 text-center hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-center text-red-700 mb-5">
                {method.icon}
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {method.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {method.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}