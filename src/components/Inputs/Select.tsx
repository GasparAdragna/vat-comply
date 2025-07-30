import Label from "@components/Label";

type SelectProps = {
  label: string;
  options: { value: string; label: string }[];
  value: { value: string; label: string };
  onChange: (value: Currency) => void;
  isLoading?: boolean;
  isDisabled?: boolean;
};

const Select = ({
  label,
  options,
  value,
  onChange,
  isLoading,
  isDisabled,
}: SelectProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onChange(
      options.find((option) => option.value === selectedValue) || {
        value: "",
        label: "",
      }
    );
  };

  return (
    <div className="flex flex-col gap-4 relative">
      <Label label={label} />
      <select
        value={value.value}
        onChange={handleChange}
        disabled={isDisabled || isLoading}
        className="rounded-sm border-1 border-[#ccc] h-10 w-64 px-3.5 py-2.5 pr-10 appearance-none bg-white"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 top-9 right-3 flex items-center pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default Select;
