import { TextField, Typography } from "@mui/material";
import { handleFieldChange } from "../helpers/formHandlers";
import { FieldError, RegisterOptions, useFormContext } from "react-hook-form";

interface FieldInputProps<objectType> {
  label: string;
  placeholder?: string;
  type?: string;
  referenceObject: objectType;
  setObject: (state: React.SetStateAction<objectType>) => void;
  validations?: RegisterOptions;
  error?: FieldError;
}

function FieldInput<objectType>({
  label,
  placeholder,
  type,
  referenceObject,
  setObject,
  validations,
}: FieldInputProps<objectType>) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const lowercaseLabel = label.toLowerCase();
  const inputError = Object.keys(errors).filter((key) =>
    key.includes(lowercaseLabel)
  );
  const isFieldValid =
    Object.keys(errors).filter((key) => key.includes(lowercaseLabel)).length ===
    0;

  return (
    <>
      <TextField
        variant="filled"
        label={label}
        placeholder={placeholder}
        {...register(lowercaseLabel, validations)}
        onChange={(event) => {
          handleFieldChange<objectType>(
            lowercaseLabel.split(" ")[0],
            event.target.value,
            referenceObject as objectType,
            setObject
          );
        }}
        type={type}
      />
      {!isFieldValid && <Typography sx={{ pt: 0 }}>required</Typography>}
    </>
  );
}

export default FieldInput;
