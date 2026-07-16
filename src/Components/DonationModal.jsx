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

    // Clear the error for the field being edited
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // Validation checks for enabling the button
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

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
    } else if (!isValidEmail) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!isValidPhone) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!paymentMethod) {
      newErrors.paymentMethod =
        "Please select a payment method.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = () => {
    if (!validateForm()) return;

    alert("🎉 COMING SOON");

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
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl bg-white p-8">
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black"
        >
          ×
        </button>

        <h2 className="mb-4 text-2xl font-bold">
          Complete Your Donation
        </h2>

        <p className="mb-6 text-gray-600">
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
          className={`mt-8 w-full rounded-xl py-4 font-semibold transition duration-300 ${
            isFormComplete
              ? "bg-red-600 text-white hover:bg-red-800"
              : "cursor-not-allowed bg-gray-300 text-gray-500"
          }`}
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
}