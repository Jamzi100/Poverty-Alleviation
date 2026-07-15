import PersonalReview from "../review/PersonalReview";
import AssistanceReview from "../review/AssistanceReview";
import FoodReview from "../review/FoodReview";
import HealthcareReview from "../review/HealthcareReview";
import HousingReview from "../review/HousingReview";
import EducationReview from "../review/EducationReview";
import MicroGrantReview from "../review/MicroGrantReview";
import SkillsReview from "../review/SkillsReview";
import CommunityReview from "../review/CommunityReview";
import AgreementReview from "../review/AgreementReview";

function ReviewApplication({ formData, handleChange }) {
  return (
    <section className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-8">

      <h2 className="text-3xl font-bold text-center">
        Review Your Application
      </h2>

      <PersonalReview formData={formData} />

      <AssistanceReview formData={formData} />

      {formData.assistanceType === "Food Assistance" && (
        <FoodReview formData={formData} />
      )}

      {formData.assistanceType === "Healthcare Assistance" && (
        <HealthcareReview formData={formData} />
      )}

      {formData.assistanceType === "Housing Assistance" && (
        <HousingReview formData={formData} />
      )}

      {formData.assistanceType === "Education Assistance" && (
        <EducationReview formData={formData} />
      )}

      {formData.assistanceType === "Micro-Grant" && (
        <MicroGrantReview formData={formData} />
      )}

      {formData.assistanceType === "Skills Training" && (
        <SkillsReview formData={formData} />
      )}

      {formData.assistanceType === "Community Development" && (
        <CommunityReview formData={formData} />
      )}

      <AgreementReview
        formData={formData}
        handleChange={handleChange}
      />
    </section>
  );
}

export default ReviewApplication;