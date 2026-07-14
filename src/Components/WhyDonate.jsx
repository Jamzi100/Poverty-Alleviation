import {
  FaUtensils,
  FaGraduationCap,
  FaHeartbeat,
  FaHome,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaUtensils size={40} />,
    title: "Feed Families",
    description:
      "Provide nutritious meals to families facing hunger and food insecurity.",
  },
  {
    icon: <FaGraduationCap size={40} />,
    title: "Support Education",
    description:
      "Help children and young adults access quality education and school supplies.",
  },
  {
    icon: <FaHeartbeat size={40} />,
    title: "Improve Healthcare",
    description:
      "Assist vulnerable individuals with access to essential medical care and treatment.",
  },
  {
    icon: <FaHome size={40} />,
    title: "Strengthen Communities",
    description:
      "Support housing, community projects, and sustainable development initiatives.",
  },
];

export default function WhyDonate() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            Why Your Donation Matters
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Every contribution, no matter the size, creates opportunities and
            transforms lives. Your support enables HopeBridge to provide
            essential services and long-term solutions for those in need.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition duration-300"
            >
              <div className="text-red-600 flex justify-center mb-5">
                {reason.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {reason.title}
              </h3>

              <p className="text-gray-600 text-sm leading-7">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}