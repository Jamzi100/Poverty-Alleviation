import { useState } from "react";
import DonationModal from "./DonationModal";

const amounts = ["₦2,000", "₦5,000", "₦10,000", "₦20,000", "₦50,000"];

export default function DonationOptions() {
  const [selectedAmount, setSelectedAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Choose Your Donation
          </h2>

          <p className="mt-4 text-gray-600">
            Select one of the suggested amounts or enter a custom amount.
          </p>
        </div>

        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {amounts.map((amount) => (
            <button
              key={amount}
              onClick={() => {
                setSelectedAmount(amount);
                setCustomAmount("");
              }}
              className={`py-4 rounded-lg font-semibold border transition ${
                selectedAmount === amount
                  ? "bg-red-600 text-white border-red-600"
                  : "bg-white text-gray-700 border-gray-300 hover:border-green-600"
              }`}
            >
              {amount}
            </button>
          ))}
        </div>

        
        <div className="mb-8">
          <label className="block text-gray-700 font-medium mb-2">
            Or Enter a Custom Amount
          </label>

          <input
            type="number"
            placeholder="Enter amount"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setSelectedAmount("");
            }}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        
        {(selectedAmount || customAmount) && (
          <div className="text-center mb-8">
            <p className="text-lg text-gray-700">
              Selected Donation:
            </p>

            <p className="text-3xl font-bold text-red-600 mt-2">
              {selectedAmount || `₦${customAmount}`}
            </p>
          </div>
        )}

        
        <div className="text-center">
          <button
            disabled={!selectedAmount && !customAmount}
            onClick={() => setShowModal(true)}
            className={`px-10 py-4 rounded-lg font-semibold transition duration-300 ${
              selectedAmount || customAmount
                ? "bg-red-600 hover:bg-red-800 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Proceed to Donate
          </button>
        </div>
      </div>

      
      <DonationModal
        showModal={showModal}
        setShowModal={setShowModal}
        amount={selectedAmount || `₦${customAmount}`}
      />
    </section>
  );
}