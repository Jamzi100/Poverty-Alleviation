import InputField from "./InputField";
import SelectField from "./SelectField";
import RadioGroup from "./RadioGroup";
import TextAreaField from "./TextAreaField";
import states from "../Data/State";

export default function AssistanceDetails({ formData, handleChange }) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">
        Assistance Details
      </h2>

            {formData.assistanceType === "Food Assistance" && (
        <>
          <InputField
            label="How many meals does your household eat per day?"
            name="mealsPerDay"
            type="number"
            value={formData.mealsPerDay}
            onChange={handleChange}
          />

          <InputField
            label="How many people need food assistance?"
            name="peopleNeedingFood"
            type="number"
            value={formData.peopleNeedingFood}
            onChange={handleChange}
          />

          <RadioGroup
            label="Are you receiving food support from another organization?"
            name="receivingFoodSupport"
            options={["Yes", "No"]}
            value={formData.receivingFoodSupport}
            onChange={handleChange}
          />

          <SelectField
            label="How long have you needed food assistance?"
            name="foodNeedDuration"
            options={[
              "Less than 1 month",
              "1-3 months",
              "3-6 months",
              "More than 6 months",
            ]}
            value={formData.foodNeedDuration}
            onChange={handleChange}
          />

          <InputField
            label="Any dietary restrictions?"
            name="dietaryRestrictions"
            type="text"
            value={formData.dietaryRestrictions}
            onChange={handleChange}
          />

          <InputField
            label="Children under 5 years"
            name="childrenUnderFive"
            type="number"
            value={formData.childrenUnderFive}
            onChange={handleChange}
          />

          <InputField
            label="Elderly people (65+)"
            name="elderlyAtHome"
            type="number"
            value={formData.elderlyAtHome}
            onChange={handleChange}
          />

          <TextAreaField
            label="Describe your current food situation"
            name="foodSituation"
            value={formData.foodSituation}
            onChange={handleChange}
          />
        </>
      )}

            {formData.assistanceType === "Healthcare Assistance" && (
        <>
          <SelectField
            label="Who needs the medical assistance?"
            name="medicalAssistanceFor"
            options={["Self","Child","Spouse","Parent","Other"]}
            value={formData.medicalAssistanceFor}
            onChange={handleChange}
          />

          <SelectField
            label="Medical assistance needed"
            name="medicalAssistanceType"
            options={[
              "Consultation",
              "Medication",
              "Surgery",
              "Maternity Care",
              "Laboratory Tests",
              "Other",
            ]}
            value={formData.medicalAssistanceType}
            onChange={handleChange}
          />

          <InputField
            label="Medical diagnosis (if known)"
            name="medicalDiagnosis"
            type="text"
            value={formData.medicalDiagnosis}
            onChange={handleChange}
          />

          <RadioGroup
            label="How urgent is the medical condition?"
            name="medicalUrgency"
            options={["Emergency","Urgent","Normal"]}
            value={formData.medicalUrgency}
            onChange={handleChange}
          />

          <InputField
            label="Estimated medical cost"
            name="estimatedMedicalCost"
            type="number"
            value={formData.estimatedMedicalCost}
            onChange={handleChange}
          />

          <TextAreaField
            label="Describe the medical situation"
            name="medicalSituation"
            value={formData.medicalSituation}
            onChange={handleChange}
          />
        </>
      )}

            {formData.assistanceType === "Housing Assistance" && (
        <>
          <SelectField
            label="Current housing status"
            name="housingStatus"
            options={[
              "Own Home",
              "Renting",
              "Living with Family",
              "Homeless",
              "Temporary Shelter",
            ]}
            value={formData.housingStatus}
            onChange={handleChange}
          />

          <SelectField
            label="Housing assistance needed"
            name="housingAssistanceType"
            options={[
              "Rent Support",
              "Temporary Shelter",
              "Home Repair",
              "Relocation",
              "Other",
            ]}
            value={formData.housingAssistanceType}
            onChange={handleChange}
          />

          <RadioGroup
            label="Are you facing eviction?"
            name="facingEviction"
            options={["Yes","No"]}
            value={formData.facingEviction}
            onChange={handleChange}
          />

          <InputField
            label="Number of people in your household"
            name="housingHouseholdSize"
            type="number"
            value={formData.housingHouseholdSize}
            onChange={handleChange}
          />

          <InputField
            label="How long have you had this housing problem?"
            name="housingProblemDuration"
            type="text"
            value={formData.housingProblemDuration}
            onChange={handleChange}
          />

          <TextAreaField
            label="Describe your housing situation"
            name="housingSituation"
            value={formData.housingSituation}
            onChange={handleChange}

          />
        </>
      )}


{/* Education Assistance */}
{formData.assistanceType === "Education Assistance" && (
  <>
    <SelectField
      label="Who is the education assistance for?"
      name="educationFor"
      options={[
        "Self",
        "Child",
        "Sibling",
        "Other",
      ]}
      value={formData.educationFor}
      onChange={handleChange}
    />

    <SelectField
      label="Current Level of Education"
      name="educationLevel"
      options={[
        "Primary School",
        "Secondary School",
        "Vocational Training",
        "College",
        "University",
        "Postgraduate",
      ]}
      value={formData.educationLevel}
      onChange={handleChange}
    />

    <InputField
      label="School or Institution Name"
      name="schoolName"
      type="text"
      value={formData.schoolName}
      onChange={handleChange}
    />

    <SelectField
      label="Type of Educational Assistance Needed"
      name="educationSupportType"
      options={[
        "School Fees",
        "Tuition",
        "Books",
        "School Uniform",
        "Examination Fees",
        "Learning Materials",
        "Transportation",
        "Other",
      ]}
      value={formData.educationSupportType}
      onChange={handleChange}
    />

    <InputField
      label="Estimated Amount Needed"
      name="educationAmount"
      type="number"
      value={formData.educationAmount}
      onChange={handleChange}
    />

    <RadioGroup
      label="Are you currently receiving any scholarship or educational support?"
      name="receivingEducationSupport"
      options={[
        "Yes",
        "No",
      ]}
      value={formData.receivingEducationSupport}
      onChange={handleChange}
    />

    <TextAreaField
      label="Please explain why you need educational assistance."
      name="educationReason"
      value={formData.educationReason}
      onChange={handleChange}
      placeholder="Explain your educational needs..."
    />
  </>
)}

{/* Micro-Grant */}
{formData.assistanceType === "Micro-Grant" && (
  <>
    <InputField
      label="Business Name (If Applicable)"
      name="businessName"
      type="text"
      value={formData.businessName}
      onChange={handleChange}
    />

    <SelectField
      label="Business Type"
      name="businessType"
      options={[
        "Agriculture",
        "Retail",
        "Food & Catering",
        "Fashion & Tailoring",
        "Beauty & Cosmetics",
        "Technology",
        "Transportation",
        "Crafts & Art",
        "Other",
      ]}
      value={formData.businessType}
      onChange={handleChange}
    />

    <RadioGroup
      label="Is your business already operating?"
      name="businessOperating"
      options={[
        "Yes",
        "No (Startup)",
      ]}
      value={formData.businessOperating}
      onChange={handleChange}
    />

    <InputField
      label="Amount of Grant Requested"
      name="grantAmount"
      type="number"
      value={formData.grantAmount}
      onChange={handleChange}
      />

    <SelectField
      label="How will you use the grant?"
      name="grantPurpose"
      options={[
        "Purchase Equipment",
        "Buy Inventory",
        "Business Expansion",
        "Rent Shop/Workspace",
        "Transportation",
        "Other",
      ]}
      value={formData.grantPurpose}
      onChange={handleChange}
    />

    <InputField
      label="How many people will benefit from this business?"
      name="businessBeneficiaries"
      type="number"
      value={formData.businessBeneficiaries}
      onChange={handleChange}
    />

    <TextAreaField
      label="Describe your business and explain how this grant will improve your livelihood."
      name="businessDescription"
      value={formData.businessDescription}
      onChange={handleChange}
      placeholder="Tell us about your business..."
    />
  </>
)}
        
 {/* Micro-Grant */}
{formData.assistanceType === "Micro-Grant" && (
  <>
    <InputField
      label="Business Name (If Applicable)"
      name="businessName"
      type="text"
      value={formData.businessName}
      onChange={handleChange}
    />

    <SelectField
      label="Business Type"
      name="businessType"
      options={[
        "Agriculture",
        "Retail",
        "Food & Catering",
        "Fashion & Tailoring",
        "Beauty & Cosmetics",
        "Technology",
        "Transportation",
        "Crafts & Art",
        "Other",
      ]}
      value={formData.businessType}
      onChange={handleChange}
    />

    <RadioGroup
      label="Is your business already operating?"
      name="businessOperating"
      options={[
        "Yes",
        "No (Startup)",
      ]}
      value={formData.businessOperating}
      onChange={handleChange}
    />

    <InputField
      label="Amount of Grant Requested"
      name="grantAmount"
      type="number"
      value={formData.grantAmount}
      onChange={handleChange}
    />

    <SelectField
      label="How will you use the grant?"
      name="grantPurpose"
      options={[
        "Purchase Equipment",
        "Buy Inventory",
        "Business Expansion",
        "Rent Shop/Workspace",
        "Transportation",
        "Other",
      ]}
      value={formData.grantPurpose}
      onChange={handleChange}
    />

    <InputField
      label="How many people will benefit from this business?"
      name="businessBeneficiaries"
      type="number"
      value={formData.businessBeneficiaries}
      onChange={handleChange}
    />

    <TextAreaField
      label="Describe your business and explain how this grant will improve your livelihood."
      name="businessDescription"
      value={formData.businessDescription}
      onChange={handleChange}
      placeholder="Tell us about your business..."
    />
  </>
)}

        {formData.assistanceType === "Community Development" && (
      <>
      <InputField
        label="Community Name"
        name="communityName"
        type="text"
        value={formData.communityName}
        onChange={handleChange}
      />
      
      <InputField
        label="Local Government Area"
        name="communityLga"
        type="text"
        value={formData.communityLga}
        onChange={handleChange}
      />
      
      <SelectField
        label="State"
        name="communityState"
        options={states}
        value={formData.communityState}
        onChange={handleChange}
      />
      
      <InputField
        label="Approximately how many people will benefit?"
        name="beneficiaryCount"
        type="number"
        value={formData.beneficiaryCount}
        onChange={handleChange}
      />
      
      <SelectField
        label="Type of Community Project"
        name="projectType"
        options={[
          "Clean Water",
          "Healthcare",
          "Education",
          "Agriculture",
          "Road Improvement",
          "Sanitation",
          "Youth Empowerment",
          "Women's Empowerment",
          "Community Hall",
          "Other",
        ]}
        value={formData.projectType}
        onChange={handleChange}
      />
      
      <RadioGroup
        label="Has this issue been reported to local authorities?"
        name="reportedToAuthorities"
        options={["Yes", "No"]}
        value={formData.reportedToAuthorities}
        onChange={handleChange}
      />
      
      <TextAreaField
        label="Describe the community challenge."
        name="communityProblem"
        value={formData.communityProblem}
        onChange={handleChange}
        placeholder="Explain the problem affecting your community..."
      />
      
      <TextAreaField
        label="How will this project improve your community?"
        name="communityImpact"
        value={formData.communityImpact}
        onChange={handleChange}
        placeholder="Describe the expected impact..."
      />
      </>
      )}
      </section>
  )
}
