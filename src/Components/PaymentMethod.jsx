export default function PaymentMethod({
  paymentMethod,
  setPaymentMethod,
  errors,
}) {
  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800">
        Payment Method
      </h3>

      <p className="text-gray-600">
        Select how you'd like to make your donation.
      </p>

      <label className="flex items-center gap-3 border rounded-lg p-4 cursor-pointer hover:border-green-600 transition">
        <input
          type="radio"
          name="paymentMethod"
          value="card"
          checked={paymentMethod === "card"}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />

        <span>Debit / Credit Card</span>
      </label>

      <label className="flex items-center gap-3 border rounded-lg p-4 cursor-pointer hover:border-green-600 transition">
        <input
          type="radio"
          name="paymentMethod"
          value="bank"
          checked={paymentMethod === "bank"}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />

        <span>Bank Transfer</span>
      </label>

      {errors.paymentMethod && (
        <p className="text-red-500 text-sm">
          {errors.paymentMethod}
        </p>
      )}
    </section>
  );
}