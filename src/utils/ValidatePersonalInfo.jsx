export const validatePersonalInfo = (formData) => {
  const newErrors = {};

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

  if (!formData.zip.trim()) {
    newErrors.zip = "ZIP Code is required.";
  }

  if (!formData.maritalStatus.trim()) {
    newErrors.maritalStatus = "Marital Status is required.";
  }

  if (!formData.householdSize.trim()) {
    newErrors.householdSize = "Household size is required.";
  }

  return newErrors;
};