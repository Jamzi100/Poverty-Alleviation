import { validatePersonalInfo } from "./ValidatePersonalInfo";
import { validateAssistanceType } from "./ValidateAssistanceType";
import { validateAssistanceDetails } from "./ValidateAssistanceDetails";
import { validateReview } from "./ValidateReview";

export const validateStep = (step, formData) => {
  switch (step) {
    case 1:
      return validatePersonalInfo(formData);

    case 2:
      return validateAssistanceType(formData);

    case 3:
      return validateAssistanceDetails(formData);

    case 4:
      return validateReview(formData);

    default:
      return {};
  }
};