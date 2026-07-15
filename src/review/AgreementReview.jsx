export default function AgreementReview({
  formData,
  handleChange,
}) {
  return (
    <div className="mt-10 border-t pt-6">
      <label className="flex items-start gap-3">
        <input
          type="checkbox"
          name="agreement"
          checked={formData.agreement}
          onChange={handleChange}
          className="mt-1"
        />

        <span>
          I declare that the information I have provided is true and correct.
        </span>
      </label>
    </div>
  );
}