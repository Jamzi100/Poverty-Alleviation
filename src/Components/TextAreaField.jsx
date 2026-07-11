function TextAreaField({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
}) {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-2">
        {label}
      </label>

      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={5}
        className={`w-full rounded-lg p-3 ${
    errors.message
      ? "border-2 border-red-500"
      : "border border-gray-300"
  }`}
/>

{errors.message && (
  <p className="text-red-500 text-sm mt-1">
    {errors.message}
  </p>
)}
      
    </div>
  );
}

export default TextAreaField;