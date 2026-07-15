import { useState } from "react";
import PersonalInfo from "../Components/PersonalInfo"
import AssistanceInformation from "../Components/AssistanceInformation"
import AssistanceDetails from "../Components/AssistanceDetails";
import ReviewApplication from "../Components/ReviewApplication";
import SuccessMessage from "../Components/SuccessMessage";
import FormHeader from "../Components/FormHeader";
import { validateStep } from "../utils/HopeFormValidation";

export default function HopeForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
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

  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value,
  }));

  setErrors((prev) => ({
    ...prev,
    [name]: "",
  }));
};

const handleNext = () => {
  const newErrors = validateStep(step, formData);

  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
    setStep(step + 1);
  }
};


const prevStep = () => {
  setStep((prev) => prev - 1);
};

const handleSubmit = () => {
  const newErrors = validateStep(step, formData);

  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
    setSubmitted(true);
  }
};

if (submitted) {
  return <SuccessMessage />;
}

const progress = (step / 4) * 100;

return (
  <section className="bg-gray-100 py-12">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">

        <FormHeader />

        {/* Progress Bar */}
        <div className="mt-8 mb-10">
          <div className="flex justify-between items-center mb-2 text-sm font-medium text-gray-600">
            <span>Application Progress</span>
            <span>{progress}%</span>
          </div>

          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-red-700 rounded-full transition-all duration-500 ease-in-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <p className="text-center text-gray-500 mt-3">
            Step {step} of 4
          </p>
        </div>

        {step === 1 && (
          <PersonalInfo
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        )}

        {step === 2 && (
          <AssistanceInformation
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        )}

        {step === 3 && (
          <AssistanceDetails
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        )}

        {step === 4 && (
          <ReviewApplication
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        )}

        <div className="flex justify-between mt-8">

          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
            >
              Previous
            </button>
          )}

          {step < 4 ? (
            <button
  type="button"
  onClick={handleNext}
  className="ml-auto px-6 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition"
>
  Next
</button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="ml-auto px-6 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition"
            >
              Submit
            </button>
          )}

        </div>

      </div>
    </div>
  </section>
);
}