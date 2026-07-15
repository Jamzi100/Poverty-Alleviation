function RadioGroup({
  label,
  name,
  options,
  value,
  onChange,
  required = true,
  error,
}) {
  return (
    <div className="w-full mb-6">
      <label className="block text-sm sm:text-base font-semibold text-gray-700 mb-2">
        {label}

        {required && (
          <span className="text-red-600 ml-1">*</span>
        )}
      </label>

      <div className="flex flex-wrap gap-6">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center gap-2 text-gray-700 cursor-pointer"
          >
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={onChange}
              required={required}
              className="h-4 w-4 accent-red-700"
            />

            <span>{option}</span>
          </label>
        ))}
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default RadioGroup;