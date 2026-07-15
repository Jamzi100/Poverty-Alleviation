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

    const isFormComplete =
  formData.fullName.trim() &&
  formData.email.trim() &&
  formData.phone.trim() &&
  paymentMethod;

    
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
  formData.email
);

const isValidPhone = /^\d{10,15}$/.test(formData.phone);

const isFormComplete =
  formData.fullName.trim() !== "" &&
  isValidEmail &&
  isValidPhone &&
  paymentMethod !== "";

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!paymentMethod) {
      newErrors.paymentMethod = "Please select a payment method.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = () => {
    if (!validateForm()) {
      return;
    }

    alert(`🎉COMING SOON`)

    
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      message: "",
    });

    setPaymentMethod("");
    setErrors({});

    
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
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
  onClick={handlePayment}
  disabled={!isFormComplete}
  className={`w-full mt-8 py-4 rounded-xl font-semibold transition duration-300 ${
    isFormComplete
      ? "bg-red-600 hover:bg-red-800 text-white"
      : "bg-gray-300 text-gray-500 cursor-not-allowed"
  }`}
>
  Continue to Payment
</button>

      </div>
    </div>
  );
}