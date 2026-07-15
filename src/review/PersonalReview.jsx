export default function PersonalReview({ formData }) {
  return (
    <div>
      <h3 className="text-xl font-semibold border-b pb-2 mb-4">
        Personal Information
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <p><strong>First Name:</strong> {formData.firstName}</p>
        <p><strong>Last Name:</strong> {formData.lastName}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
        <p><strong>Gender:</strong> {formData.gender}</p>
        <p><strong>Country:</strong> {formData.country}</p>
        <p><strong>State:</strong> {formData.state}</p>
        <p><strong>LGA:</strong> {formData.lga}</p>
        <p><strong>ZIP:</strong> {formData.zip}</p>
        <p><strong>Marital Status:</strong> {formData.maritalStatus}</p>
        <p><strong>Household Size:</strong> {formData.householdSize}</p>
        <p><strong>Address:</strong> {formData.address}</p>
      </div>
    </div>
  );
}