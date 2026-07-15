export const validateReview = (formData) => {
  const newErrors = {};

  if (!formData.agreement) {
    newErrors.agreement =
      "You must agree to the declaration before submitting.";
  }

  return newErrors;
};