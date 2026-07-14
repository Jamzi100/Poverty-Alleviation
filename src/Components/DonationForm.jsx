import InputField from "./InputField";

export default function DonationForm({
  formData,
  handleChange,
  errors,
}) {
  return (
    <section className="space-y-5">
      <h3 className="text-xl font-semibold text-gray-800">
        Donor Information
      </h3>

      <InputField
        label="Full Name"
        name="fullName"
        type="text"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Enter your full name"
        error={errors.fullName}
      />

      <InputField
        label="Email Address"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email address"
        error={errors.email}
      />

      <InputField
        label="Phone Number"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter your phone number"
        error={errors.phone}
      />

      <div>
        <label className="block mb-2 font-medium text-gray-700">
          Message <span className="text-gray-400">(Optional)</span>
        </label>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Leave a message..."
          rows="4"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>
    </section>
  );
}