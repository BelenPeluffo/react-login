import { TextField } from "@mui/material";
import { handleFieldChange } from "../helpers/formHandlers";
import { useForm } from "react-hook-form";

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
  const { register } = useForm();
  return (
    <>
      <TextField
        variant="filled"
        label={label}
        placeholder={placeholder}
        {...register(label.toLowerCase())}
        onChange={(event) => {
          handleFieldChange<objectType>(
            label.split(" ")[0].toLowerCase(),
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
