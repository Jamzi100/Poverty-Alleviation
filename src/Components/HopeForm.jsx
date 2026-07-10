import { useState } from "react";
import PersonalInfo from "../Components/PersonalInfo"
import AssistanceInformation from "../Components/AssistanceInformation"
import AssistanceDetails from "../Components/AssistanceDetails";
import ReviewApplication from "../Components/ReviewApplication";
import SuccessMessage from "../Components/SuccessMessage";


function HopeForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    gender: "",
    country: "Nigeria",
    state: "",
    lga: "",
    zip: "",
    maritalStatus: "",
    householdSize: "",

    assistanceType: "",
  urgency: "",
  employmentStatus: "",
  monthlyIncome: "",
  description: "",

  mealsPerDay: "",
  peopleNeedingFood: "",
  receivingFoodSupport: "",
  foodNeedDuration: "",
  dietaryRestrictions: "",
  childrenUnderFive: "",
  elderlyAtHome: "",
  foodSituation: "",

  medicalAssistanceFor: "",
medicalAssistanceType: "",
medicalDiagnosis: "",
medicalUrgency: "",
estimatedMedicalCost: "",
medicalSituation: "",

housingStatus: "",
housingAssistanceType: "",
facingEviction: "",
housingHouseholdSize: "",
housingProblemDuration: "",
housingSituation: "",

educationFor: "",
educationLevel: "",
schoolName: "",
educationSupportType: "",
educationAmount: "",
receivingEducationSupport: "",
educationReason: "",

businessName: "",
businessType: "",
businessOperating: "",
grantAmount: "",
grantPurpose: "",
businessBeneficiaries: "",
businessDescription: "",

skillType: "",
previousTraining: "",
highestEducation: "",
currentlyEmployed: "",
trainingSchedule: "",
trainingReason: "",

communityName: "",
communityLga: "",
communityState: "",
beneficiaryCount: "",
projectType: "",
reportedToAuthorities: "",
communityProblem: "",
communityImpact: "",

agreement: false,
  });

  const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value,
  }));
};

const handleSubmit = () => {
  console.log("Button clicked!");
  console.log(formData.agreement);

    if (!formData.agreement) {
      alert("Please accept the declaration before submitting.");
      return;
    }

    console.log(formData);
    setSubmitted(true);
  };

  if (submitted) {
    return <SuccessMessage />;
  }

  const handleNext = () => {
  if (step === 1) {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phoneNumber
    ) {
      alert("Please complete all required Personal Information fields.");
      return;
    }
  }

  setStep(step + 1);
};

  return(
    <section>
        <div>
  {step === 1 && (
  <PersonalInfo
    formData={formData}
    handleChange={handleChange}
  />
)}

{step === 2 && (
  <AssistanceInformation
    formData={formData}
    handleChange={handleChange}
  />
)}

{step === 3 && (
  <AssistanceDetails
    formData={formData}
    handleChange={handleChange}
  />
)}

{step === 4 && (
  <ReviewApplication
    formData={formData}
    handleChange={handleChange}
  />
)}


        </div>
        <div className="flex justify-between mt-8">
  {step > 1 && step < 4 && (
    <button
      onClick={() => setStep(step - 1)}
      className="bg-gray-500 text-white px-6 py-2 rounded"
    >
      Previous
    </button>
  )}

  {step < 4 ? (
    <button
      onClick={() => setStep(step + 1)}
      className="bg-green-600 text-white px-6 py-2 rounded ml-auto"
    >
      Next
    </button>
  ) : (
    <button
  onClick={handleNext}
  className="bg-green-600 text-white px-6 py-2 rounded ml-auto"
>
  Next
</button>
  )}
  </div>
    </section>
  )
}

export default HopeForm;