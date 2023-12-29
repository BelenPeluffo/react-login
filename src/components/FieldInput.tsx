import { TextField } from "@mui/material";
import { handleFieldChange } from "../helpers/formHandlers";

interface FieldInputProps<objectType> {
  label: string;
  placeholder?: string;
  type?: string;
  referenceObject: objectType;
  setObject: (state: React.SetStateAction<objectType>) => void;
}

function FieldInput<objectType>({
  label,
  placeholder,
  type,
  referenceObject,
  setObject,
}: FieldInputProps<objectType>) {
  return (
    <>
      <TextField
        variant="filled"
        label={label}
        placeholder={placeholder}
        onChange={(event) => {
          handleFieldChange<objectType>(
            label.toLowerCase(),
            event.target.value,
            referenceObject as objectType,
            setObject
          );
        }}
        type={type}
      />
    </>
  );
}

export default FieldInput;
