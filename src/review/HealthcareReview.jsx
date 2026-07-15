export default function HealthcareReview({ formData }) {
  return (
    <div>
      <h3 className="text-xl font-semibold border-b pb-2 mb-4">
        Healthcare Details
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <p><strong>Patient:</strong> {formData.medicalAssistanceFor}</p>
        <p><strong>Assistance Type:</strong> {formData.medicalAssistanceType}</p>
        <p><strong>Diagnosis:</strong> {formData.medicalDiagnosis}</p>
        <p><strong>Urgency:</strong> {formData.medicalUrgency}</p>
        <p><strong>Estimated Cost:</strong> ₦{formData.estimatedMedicalCost}</p>
      </div>

      <p className="mt-4">
        <strong>Medical Situation:</strong><br />
        {formData.medicalSituation}
      </p>
    </div>
  );
}