export default function HousingReview({ formData }) {
  return (
    <div>
      <h3 className="text-xl font-semibold border-b pb-2 mb-4">
        Housing Details
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <p><strong>Housing Status:</strong> {formData.housingStatus}</p>
        <p><strong>Housing Assistance:</strong> {formData.housingAssistanceType}</p>
        <p><strong>Facing Eviction:</strong> {formData.facingEviction}</p>
        <p><strong>Household Size:</strong> {formData.housingHouseholdSize}</p>
        <p><strong>Problem Duration:</strong> {formData.housingProblemDuration}</p>
      </div>

      <p className="mt-4">
        <strong>Housing Situation:</strong><br />
        {formData.housingSituation}
      </p>
    </div>
  );
}