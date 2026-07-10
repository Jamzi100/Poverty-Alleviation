import InputField from "./InputField";
import SelectField from "./SelectField";
import RadioGroup from "./RadioGroup";

function AssistanceInformation({
    formData,
    handleChange
}) {
    return(
        <section>
            <div>
                <SelectField
    label="Type of Assistance"
    name="assistanceType"
    options={[
        "Food Assistance",
        "Healthcare Assistance",
        "Housing Assistance",
        "Education Assistance",
        "Micro-Grant",
        "Skills Training",
        "Community Development",
    ]}
    value={formData.assistanceType}
    onChange={handleChange}
/>
            </div>
            <div>
                <RadioGroup
    label="Urgency Level"
    name="urgency"
    options={[
        "Emergency",
        "Urgent",
        "Normal",
    ]}
    value={formData.urgency}
    onChange={handleChange}
/>
            </div>
            <div>
                <SelectField
    label="Employment Status"
    name="employmentStatus"
    options={[
        "Employed",
        "Self-employed",
        "Unemployed",
        "Student",
        "Retired",
    ]}
    value={formData.employmentStatus}
    onChange={handleChange}
/>
            </div>
            <div>
                <InputField
    label="Monthly Household Income"
    name="monthlyIncome"
    type="number"
    value={formData.monthlyIncome}
    onChange={handleChange}
/>
            </div>
        </section>
    )
}

export default AssistanceInformation;