export default function MicroGrantReview({ formData }) {
  return (
    <div>
      <h3 className="text-xl font-semibold border-b pb-2 mb-4">
        Micro-Grant Details
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <p><strong>Business Name:</strong> {formData.businessName}</p>
        <p><strong>Business Type:</strong> {formData.businessType}</p>
        <p><strong>Business Operating:</strong> {formData.businessOperating}</p>
        <p><strong>Grant Amount:</strong> ₦{formData.grantAmount}</p>
        <p><strong>Grant Purpose:</strong> {formData.grantPurpose}</p>
        <p><strong>People Benefiting:</strong> {formData.businessBeneficiaries}</p>
      </div>

      <p className="mt-4">
        <strong>Business Description:</strong><br />
        {formData.businessDescription}
      </p>
    </div>
  );
}