import { useState } from "react";
import PersonalInfo from "../Components/PersonalInfo"
import AssistanceInformation from "../Components/AssistanceInformation"
import AssistanceDetails from "../Components/AssistanceDetails";
import ReviewApplication from "../Components/ReviewApplication";
import SuccessMessage from "../Components/SuccessMessage";import FormHeader from "../Components/FormHeader";

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
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const validateStep = () => {
  const newErrors = {};

  if (step === 1) {
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    if (!formData.email.trim()) {
  newErrors.email = "Email is required.";
} else if (
  !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
) {
  newErrors.email = "Enter a valid email address.";
}

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required.";
    }

    if (!formData.gender) {
      newErrors.gender = "Gender is required.";
    }
    if (!formData.country.trim()) {
      newErrors.country = "Country is required.";
    }
    if (!formData.state.trim()) {
      newErrors.state = "State is required.";
    }
    if (!formData.lga.trim()) {
      newErrors.lga = "Local Government is required.";
    }
    
    if (!formData.maritalStatus.trim()) {
      newErrors.maritalStatus = "Marital Status is required.";
    }
  }

  if (step === 2){
    if(!formData.assistanceType.trim()){
      newErrors.assistanceType = "Assistance Type is required.";
    }
    if(!formData.urgency.trim()){
      newErrors.urgency = "Urgency is required.";
    }
    if(!formData.employmentStatus.trim()){
      newErrors.employmentStatus = "Employment Status is required.";
    }
    if(!formData.monthlyIncome.trim()){
      newErrors.monthlyIncome = "Monthly Income is required.";
    }
  }

  
  if (step === 3) {
  switch (formData.assistanceType) {
    case "Food Assistance":
      if (!formData.mealsPerDay.trim())
        newErrors.mealsPerDay = "Meals per day is required.";

      if (!formData.peopleNeedingFood.trim())
        newErrors.peopleNeedingFood =
          "Number of people needing food is required.";

      if (!formData.receivingFoodSupport.trim())
        newErrors.receivingFoodSupport =
          "Please indicate if you are receiving food support.";

      if (!formData.foodNeedDuration.trim())
        newErrors.foodNeedDuration = "Food need duration is required.";

      if (!formData.dietaryRestrictions.trim())
        newErrors.dietaryRestrictions =
          "Dietary restrictions field is required.";

      if (!formData.childrenUnderFive.trim())
        newErrors.childrenUnderFive =
          "Please specify if there are children under five.";

      if (!formData.elderlyAtHome.trim())
        newErrors.elderlyAtHome =
          "Please specify if there are elderly people at home.";

      if (!formData.foodSituation.trim())
        newErrors.foodSituation =
          "Please describe your food situation.";

          break;

  case "Healthcare Assistance":
  if (!formData.medicalAssistanceFor.trim()) {
    newErrors.medicalAssistanceFor =
      "Please specify who needs medical assistance.";
  }

  if (!formData.medicalAssistanceType.trim()) {
    newErrors.medicalAssistanceType =
      "Medical assistance type is required.";
  }

  if (!formData.medicalDiagnosis.trim()) {
    newErrors.medicalDiagnosis =
      "Medical diagnosis is required.";
  }

  if (!formData.medicalUrgency.trim()) {
    newErrors.medicalUrgency =
      "Medical urgency is required.";
  }

  if (!formData.estimatedMedicalCost.trim()) {
    newErrors.estimatedMedicalCost =
      "Estimated medical cost is required.";
  }

  if (!formData.medicalSituation.trim()) {
    newErrors.medicalSituation =
      "Please describe your medical situation.";
  }

  break;

  case "Housing Assistance":
  if (!formData.housingStatus.trim()) {
    newErrors.housingStatus = "Housing status is required.";
  }

  if (!formData.housingAssistanceType.trim()) {
    newErrors.housingAssistanceType =
      "Housing assistance type is required.";
  }

  if (!formData.facingEviction.trim()) {
    newErrors.facingEviction =
      "Please indicate whether you are facing eviction.";
  }

  if (!formData.housingHouseholdSize.trim()) {
    newErrors.housingHouseholdSize =
      "Household size is required.";
  }

  if (!formData.housingProblemDuration.trim()) {
    newErrors.housingProblemDuration =
      "Housing problem duration is required.";
  }

  if (!formData.housingSituation.trim()) {
    newErrors.housingSituation =
      "Please describe your housing situation.";
  }

  break;

  case "Education Assistance":
  if (!formData.educationFor.trim()) {
    newErrors.educationFor =
      "Please specify who the education assistance is for.";
  }

  if (!formData.educationLevel.trim()) {
    newErrors.educationLevel =
      "Education level is required.";
  }

  if (!formData.schoolName.trim()) {
    newErrors.schoolName =
      "School name is required.";
  }

  if (!formData.educationSupportType.trim()) {
    newErrors.educationSupportType =
      "Education support type is required.";
  }

  if (!formData.educationAmount.trim()) {
    newErrors.educationAmount =
      "Education amount is required.";
  }

  if (!formData.receivingEducationSupport.trim()) {
    newErrors.receivingEducationSupport =
      "Please indicate whether you are currently receiving educational support.";
  }

  if (!formData.educationReason.trim()) {
    newErrors.educationReason =
      "Please explain why you need educational assistance.";
  }

  break;

case "Micro-Grant":
  if (!formData.businessName.trim()) {
    newErrors.businessName = "Business name is required.";
  }

  if (!formData.businessType.trim()) {
    newErrors.businessType = "Business type is required.";
  }

  if (!formData.businessOperating.trim()) {
    newErrors.businessOperating =
      "Please indicate how long the business has been operating.";
  }

  if (!formData.grantAmount.trim()) {
    newErrors.grantAmount = "Grant amount is required.";
  }

  if (!formData.grantPurpose.trim()) {
    newErrors.grantPurpose = "Grant purpose is required.";
  }

  if (!formData.businessBeneficiaries.trim()) {
    newErrors.businessBeneficiaries =
      "Please specify who will benefit from the business.";
  }

  if (!formData.businessDescription.trim()) {
    newErrors.businessDescription =
      "Please provide a description of your business.";
  }

  break;

  case "Skills Training":
  if (!formData.skillType.trim()) {
    newErrors.skillType = "Please select the skill you want to learn.";
  }

  if (!formData.previousTraining.trim()) {
    newErrors.previousTraining =
      "Please indicate whether you have received previous training.";
  }

  if (!formData.highestEducation.trim()) {
    newErrors.highestEducation =
      "Highest education level is required.";
  }

  if (!formData.currentlyEmployed.trim()) {
    newErrors.currentlyEmployed =
      "Please indicate your current employment status.";
  }

  if (!formData.trainingSchedule.trim()) {
    newErrors.trainingSchedule =
      "Preferred training schedule is required.";
  }

  if (!formData.trainingReason.trim()) {
    newErrors.trainingReason =
      "Please explain why you want to receive this training.";
  }

  break;

  case "Community Development":
  if (!formData.communityName.trim()) {
    newErrors.communityName = "Community name is required.";
  }

  if (!formData.communityLga.trim()) {
    newErrors.communityLga = "Local Government Area is required.";
  }

  if (!formData.communityState.trim()) {
    newErrors.communityState = "State is required.";
  }

  if (!formData.beneficiaryCount.trim()) {
    newErrors.beneficiaryCount =
      "Estimated number of beneficiaries is required.";
  }

  if (!formData.projectType.trim()) {
    newErrors.projectType = "Project type is required.";
  }

  if (!formData.reportedToAuthorities.trim()) {
    newErrors.reportedToAuthorities =
      "Please indicate whether the issue has been reported to the authorities.";
  }

  if (!formData.communityProblem.trim()) {
    newErrors.communityProblem =
      "Please describe the community problem.";
  }

  if (!formData.communityImpact.trim()) {
    newErrors.communityImpact =
      "Please describe the expected impact of this project.";
  }

  break;

  default:
    break;
}

  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

const nextStep = () => {
  if (validateStep()) {
    setStep((prev) => prev + 1);
  }
};

const prevStep = () => {
  setStep((prev) => prev - 1);
};

const handleSubmit = () => {
  if (validateStep()) {
    setSubmitted(true);
  }
};

if (submitted) {
  return <SuccessMessage />;
}

return (
  <section className="bg-gray-100 py-12">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">
        <FormHeader />

        <h2 className="text-red-600 text-2xl font-bold">
          Current Step: {step}
        </h2>

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
              className="px-6 py-2 bg-gray-500 text-white rounded-lg"
            >
              Previous
            </button>
          )}

          {step < 4 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-2 bg-green-600 text-white rounded-lg"
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg"
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