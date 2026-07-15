export const validateAssistanceType = (formData) => {
  const newErrors = {};

  if (!formData.assistanceType.trim()) {
    newErrors.assistanceType = "Assistance Type is required.";
  }

  if (!formData.urgency.trim()) {
    newErrors.urgency = "Urgency is required.";
  }

  if (!formData.employmentStatus.trim()) {
    newErrors.employmentStatus = "Employment Status is required.";
  }

  if (!formData.monthlyIncome.trim()) {
    newErrors.monthlyIncome = "Monthly Income is required.";
  }

  return newErrors;
};