export default function SkillsReview({ formData }) {
  return (
    <div>
      <h3 className="text-xl font-semibold border-b pb-2 mb-4">
        Skills Training Details
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <p><strong>Skill to Learn:</strong> {formData.skillType}</p>
        <p><strong>Previous Training:</strong> {formData.previousTraining}</p>
        <p><strong>Highest Education:</strong> {formData.highestEducation}</p>
        <p><strong>Currently Employed:</strong> {formData.currentlyEmployed}</p>
        <p><strong>Preferred Schedule:</strong> {formData.trainingSchedule}</p>
      </div>

      <p className="mt-4">
        <strong>Reason for Learning:</strong><br />
        {formData.trainingReason}
      </p>
    </div>
  );
}