export default function EducationReview({ formData }) {
  return (
    <div>
      <h3 className="text-xl font-semibold border-b pb-2 mb-4">
        Education Assistance Details
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <p><strong>Education For:</strong> {formData.educationFor}</p>
        <p><strong>Education Level:</strong> {formData.educationLevel}</p>
        <p><strong>School Name:</strong> {formData.schoolName}</p>
        <p><strong>Support Needed:</strong> {formData.educationSupportType}</p>
        <p><strong>Amount Needed:</strong> ₦{formData.educationAmount}</p>
        <p><strong>Receiving Support:</strong> {formData.receivingEducationSupport}</p>
      </div>

      <p className="mt-4">
        <strong>Reason for Assistance:</strong><br />
        {formData.educationReason}
      </p>
    </div>
  );
}