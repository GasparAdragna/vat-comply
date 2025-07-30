import Label from "@components/Label";

type InputProps = {
  label: string;
  value: string | number | undefined;
  onChange: (value: string | number | undefined) => void;
};

const Input = ({ label, value, onChange }: InputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.includes("-")) return;
    const newValue = event.target.value;
    onChange(newValue === "" ? undefined : newValue);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "-" || event.key === "e") {
      event.preventDefault();
    }
  };

  return (
    <div className="flex flex-col gap-4 w-64">
      <Label label={label} />
      <input
        type="number"
        value={value ?? ""}
        min={0}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="border border-gray-300 rounded-md p-2"
      />
    </div>
  );
};

export default Input;
