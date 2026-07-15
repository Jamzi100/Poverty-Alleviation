export default function FoodReview({ formData }) {
  return (
    <div>
      <h3 className="text-xl font-semibold border-b pb-2 mb-4">
        Food Assistance Details
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <p><strong>Meals Per Day:</strong> {formData.mealsPerDay}</p>
        <p><strong>People Needing Food:</strong> {formData.peopleNeedingFood}</p>
        <p><strong>Receiving Food Support:</strong> {formData.receivingFoodSupport}</p>
        <p><strong>Need Duration:</strong> {formData.foodNeedDuration}</p>
        <p><strong>Dietary Restrictions:</strong> {formData.dietaryRestrictions}</p>
        <p><strong>Children Under 5:</strong> {formData.childrenUnderFive}</p>
        <p><strong>Elderly:</strong> {formData.elderlyAtHome}</p>
      </div>

      <p className="mt-4">
        <strong>Food Situation:</strong><br />
        {formData.foodSituation}
      </p>
    </div>
  );
}