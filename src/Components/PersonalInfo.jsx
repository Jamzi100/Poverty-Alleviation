import InputField from "./InputField"
import RadioGroup from "./RadioGroup"
import SelectField from "./SelectField";
import states from "../Data/State";

function PersonalInfo({
  formData,
  handleChange,
  errors,
}) {
return(
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
        <InputField
        label= "First Name"
        name= "firstName"
        type= "text"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="Enter your first name"
  error={errors.firstName}
        />
    </div>
    <div>
        <InputField
        label= "Last Name"
        name= "lastName"
        type= "text"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Enter your last name"
  error={errors.lastName}
        />
    </div>
    <div>
        <InputField
        label= "Email Address"
        name= "email"
        type= "email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
  error={errors.email}
        />
    </div>
    <div>
        <InputField
        label= "Phone Number"
        name= "phone"
        type= "tel"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter your phone number"
  error={errors.phone}
        />
    </div>
    <div>
        <InputField
        label= "Address"
        name= "address"
        type= "text"
        value={formData.address}
        onChange={handleChange}
        placeholder="Enter your Address"
  error={errors.address}
        />
    </div>
    <div>
        <RadioGroup
  label="Gender"
  name="gender"
  options={[
    "Male",
    "Female",
    "Prefer not to say",
  ]}
  value={formData.gender}
  onChange={handleChange}
  error={errors.gender}
/>
    </div>
    <div>
        <SelectField
  label="Country"
  name="country"
  options={["Nigeria"]}
  value={formData.country}
  onChange={handleChange}
  error={errors.country}
/>
    </div>
    <div>
        <SelectField
  label="State"
  name="state"
  options={states}
  value={formData.state}
  onChange={handleChange}
  error={errors.state}
/>
    </div>
    <div>
        <InputField
  label="Local Government Area (LGA)"
  name="lga"
  type="text"
  value={formData.lga}
  onChange={handleChange}
  placeholder="Enter your Local Government Area"
  error={errors.lga}
/>
    </div>
    <div>
        <InputField
  label="ZIP / Postal Code"
  name="zip"
  type="text"
  value={formData.zip}
  onChange={handleChange}
  placeholder="e.g. 900001"
  error={errors.zip}
/>
    </div>
    <div>
        <SelectField
  label="Marital Status"
  name="maritalStatus"
  options={[
    "Single",
    "Married",
    "Divorced",
    "Widowed",
    "Separated",
  ]}
  value={formData.maritalStatus}
  onChange={handleChange}
  error={errors.maritalStatus}
/>
    </div>
    <div>
        <InputField
  label="Household Size"
  name="householdSize"
  type="number"
  value={formData.householdSize}
  onChange={handleChange}
  placeholder="Enter number of people in your household"
  error={errors.householdSize}
/>
    </div>
    </section>
)
}

export default PersonalInfo;