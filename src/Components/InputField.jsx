function InputField({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  required = true,
  error,
}) {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-medium">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full rounded-lg p-3 focus:outline-none focus:ring-2 ${
          error
            ? "border-2 border-red-500 focus:ring-red-500"
            : "border border-gray-300 focus:ring-green-600"
        }`}
      />

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
}

export default InputField;