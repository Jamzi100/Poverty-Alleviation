export const validateAssistanceDetails = (formData) => {
  const newErrors = {};

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
      // Your healthcare validation...
      break;

    case "Housing Assistance":
      // Your housing validation...
      break;

    case "Education Assistance":
      // Your education validation...
      break;

    case "Micro-Grant":
      // Your micro-grant validation...
      break;

    case "Skills Training":
      // Your skills training validation...
      break;

    case "Community Development":
      // Your community development validation...
      break;

    default:
      break;
  }

  return newErrors;
};