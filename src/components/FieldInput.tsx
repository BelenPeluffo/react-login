import { TextField } from "@mui/material";

interface FieldInputProps {
  label: string;
  placeholder: string;
  onChange: (property: string, newValue: string) => void;
}

const FieldInput = ({ label, placeholder, onChange }: FieldInputProps) => {
  const handleChange = (property: string, newValue: string) => {
    onChange(property, newValue);
  };

  return (
    <>
      <TextField
        variant="filled"
        label={label}
        placeholder={placeholder}
        onChange={(event) => handleChange(label.toLowerCase(), event.target.value)}
      />
    </>
  );
};

export default FieldInput;
