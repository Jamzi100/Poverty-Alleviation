function RadioGroup({
  label,
  name,
  options,
  value,
  onChange,
  required,
  error,
}) {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-medium">
        {label}
      </label>

      <div className="flex gap-6">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center gap-2"
          >
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={onChange}
              required={required}
            />
            {option}
          </label>
        ))}
      </div>

      {error && (
        <p className="text-red-500 text-sm mt-2">
          {error}
        </p>
      )}
    </div>
  );
}

export default RadioGroup;