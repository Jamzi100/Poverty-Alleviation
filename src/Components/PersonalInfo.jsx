import InputField from "./InputField"
import RadioGroup from "./RadioGroup"
import SelectField from "./SelectField";
import states from "../Data/State";

function PersonalInfo({ formData, handleChange }) {
return(
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
        <InputField
        label= "First Name"
        name= "firstName"
        type= "text"
        value={formData.firstName}
        onChange={handleChange}
        />
    </div>
    <div>
        <InputField
        label= "Last Name"
        name= "lastName"
        type= "text"
        value={formData.lastName}
        onChange={handleChange}

        />
    </div>
    <div>
        <InputField
        label= "Email Address"
        name= "email"
        type= "email"
        value={formData.email}
        onChange={handleChange}
        />
    </div>
    <div>
        <InputField
        label= "Phone Number"
        name= "phoneNumber"
        type= "tel"
        value={formData.phoneNumber}
        onChange={handleChange}
        />
    </div>
    <div>
        <InputField
        label= "Address"
        name= "address"
        type= "text"
        value={formData.address}
        onChange={handleChange}
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
/>
    </div>
    <div>
        <SelectField
  label="Country"
  name="country"
  options={["Nigeria"]}
  value={formData.country}
  onChange={handleChange}
/>
    </div>
    <div>
        <SelectField
  label="State"
  name="state"
  options={states}
  value={formData.state}
  onChange={handleChange}
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
/>
    </div>
    <div>
        <InputField
  label="ZIP / Postal Code"
  name="zipCode"
  type="text"
  value={formData.zipCode}
  onChange={handleChange}
  placeholder="e.g. 900001"
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
/>
    </div>
    </section>
)
}

export default PersonalInfo;