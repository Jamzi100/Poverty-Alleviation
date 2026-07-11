function TextAreaField({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = true,
  error,
}) {
  return (
    <div className="w-full mb-6">
      <label
        htmlFor={name}
        className="block text-sm sm:text-base font-semibold text-gray-700 mb-2"
      >
        {label}
        {required && <span className="text-red-600 ml-1">*</span>}
      </label>

      <textarea
        id={name}
        name={name}
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={5}
        className={`
          w-full
          rounded-xl
          border
          bg-white
          px-4
          py-3
          text-gray-700
          placeholder:text-gray-400
          resize-none
          outline-none
          transition-all
          duration-200
          ${
            error
              ? "border-red-500 focus:ring-2 focus:ring-red-300"
              : "border-gray-300 focus:border-red-600 focus:ring-2 focus:ring-red-200"
          }
        `}
      />

      {error && (
        <p className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default TextAreaField;