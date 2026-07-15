export default function AssistanceReview({ formData }) {
  return (
    <div>
      <h3 className="text-xl font-semibold border-b pb-2 mb-4">
        Assistance Information
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <p><strong>Assistance Type:</strong> {formData.assistanceType}</p>
        <p><strong>Urgency:</strong> {formData.urgency}</p>
        <p><strong>Employment Status:</strong> {formData.employmentStatus}</p>
        <p><strong>Monthly Income:</strong> ₦{formData.monthlyIncome}</p>
      </div>
    </div>
  );
}