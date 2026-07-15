export default function CommunityReview({ formData }) {
  return (
    <div>
      <h3 className="text-xl font-semibold border-b pb-2 mb-4">
        Community Development Details
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <p><strong>Community Name:</strong> {formData.communityName}</p>
        <p><strong>Local Government Area:</strong> {formData.communityLga}</p>
        <p><strong>State:</strong> {formData.communityState}</p>
        <p><strong>Estimated Beneficiaries:</strong> {formData.beneficiaryCount}</p>
        <p><strong>Project Type:</strong> {formData.projectType}</p>
        <p><strong>Reported to Authorities:</strong> {formData.reportedToAuthorities}</p>
      </div>

      <p className="mt-4">
        <strong>Community Challenge:</strong><br />
        {formData.communityProblem}
      </p>

      <p className="mt-4">
        <strong>Expected Community Impact:</strong><br />
        {formData.communityImpact}
      </p>
    </div>
  );
}