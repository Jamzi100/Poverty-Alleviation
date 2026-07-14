import { useState } from "react";
import DonationForm from "./DonationForm";
import PaymentMethod from "./PaymentMethod";

export default function DonationModal({
  showModal,
  setShowModal,
  amount,
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [paymentMethod, setPaymentMethod] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">

        
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black"
        >
          ×
        </button>

        
        <h2 className="text-2xl font-bold mb-4">
          Complete Your Donation
        </h2>

        
        <p className="text-gray-600 mb-6">
          You are donating <strong>{amount}</strong>
        </p>

        
        <DonationForm
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />

        
        <div className="mt-8">
          <PaymentMethod
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
            errors={errors}
          />
        </div>

        
        <button
          className="w-full mt-8 bg-red-600 hover:bg-red-800 text-white py-4 rounded-xl font-semibold transition"
        >
          Continue to Payment
        </button>

      </div>
    </div>
  );
}