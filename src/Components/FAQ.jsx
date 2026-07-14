import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "Is my donation secure?",
    answer:
      "Yes. We use trusted and secure payment methods to ensure your donation is processed safely.",
  },
  {
    question: "Can I make monthly donations?",
    answer:
      "Yes. Once recurring donations are available, you will be able to support HopeBridge every month.",
  },
  {
    question: "Will I receive a donation receipt?",
    answer:
      "Absolutely. A confirmation and receipt will be provided after your donation is completed.",
  },
  {
    question: "How are donations used?",
    answer:
      "Your donations support food assistance, education, healthcare, housing, skills training, and community development initiatives.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-gray-600">
            Have questions? We've answered some of the most common ones below.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-semibold text-gray-800">
                  {faq.question}
                </span>

                {openIndex === index ? (
                  <FaChevronUp className="text-black" />
                ) : (
                  <FaChevronDown className="text-red-600" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}