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
        className="w-full border rounded-lg p-3"
      />
    </div>
  );
}

export default TextAreaField;