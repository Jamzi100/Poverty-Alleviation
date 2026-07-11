function ReviewApplication({ formData, handleChange }) {
  return (
    <section className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-8">

      <h2 className="text-3xl font-bold text-center">
        Review Your Application
      </h2>

    
      <div>
        <h3 className="text-xl font-semibold border-b pb-2 mb-4">
          Personal Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <p><strong>First Name:</strong> {formData.firstName}</p>
          <p><strong>Last Name:</strong> {formData.lastName}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone Number:</strong> {formData.phone}</p>
          <p><strong>Gender:</strong> {formData.gender}</p>
          <p><strong>Country:</strong> {formData.country}</p>
          <p><strong>State:</strong> {formData.state}</p>
          <p><strong>LGA:</strong> {formData.lga}</p>
          <p><strong>ZIP Code:</strong> {formData.zip}</p>
          <p><strong>Marital Status:</strong> {formData.maritalStatus}</p>
          <p><strong>Household Size:</strong> {formData.householdSize}</p>
          <p><strong>Address:</strong> {formData.address}</p>
        </div>
      </div>

    
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

    
      {formData.assistanceType === "Food Assistance" && (
        <div>
          <h3 className="text-xl font-semibold border-b pb-2 mb-4">
            Food Assistance Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p><strong>Meals Per Day:</strong> {formData.mealsPerDay}</p>
            <p><strong>People Needing Food:</strong> {formData.peopleNeedingFood}</p>
            <p><strong>Receiving Food Support:</strong> {formData.receivingFoodSupport}</p>
            <p><strong>Need Duration:</strong> {formData.foodNeedDuration}</p>
            <p><strong>Dietary Restrictions:</strong> {formData.dietaryRestrictions}</p>
            <p><strong>Children Under 5:</strong> {formData.childrenUnderFive}</p>
            <p><strong>Elderly:</strong> {formData.elderlyAtHome}</p>
          </div>

          <p className="mt-4">
            <strong>Food Situation:</strong><br />
            {formData.foodSituation}
          </p>
        </div>
      )}

    
      {formData.assistanceType === "Healthcare Assistance" && (
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
      )}

      
      {formData.assistanceType === "Housing Assistance" && (
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
      )}

      {formData.assistanceType === "Education Assistance" && (
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
      <strong>Reason for Assistance:</strong>
      <br />
      {formData.educationReason}
    </p>
  </div>
)}

{formData.assistanceType === "Micro-Grant" && (
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
      <strong>Business Description:</strong>
      <br />
      {formData.businessDescription}
    </p>
  </div>
)}

{/* Skills Training */}
{formData.assistanceType === "Skills Training" && (
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
      <strong>Reason for Learning:</strong>
      <br />
      {formData.trainingReason}
    </p>
  </div>
)}

{/* Community Development */}
{formData.assistanceType === "Community Development" && (
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
      <strong>Community Challenge:</strong>
      <br />
      {formData.communityProblem}
    </p>

    <p className="mt-4">
      <strong>Expected Community Impact:</strong>
      <br />
      {formData.communityImpact}
    </p>
  </div>
)}

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
    </section>
  );
}

export default ReviewApplication;