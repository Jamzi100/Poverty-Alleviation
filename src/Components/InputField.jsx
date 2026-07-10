function InputField({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  required = true,
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
        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
      />
    </div>
  );
}

export default InputField;