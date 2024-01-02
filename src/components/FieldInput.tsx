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
  validations
}: FieldInputProps<objectType>) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  console.log("errors?", errors);
  const isFieldValid =
    Object.keys(errors).filter((key) => key.includes(label)).length > 0;

  return (
    <>
      <TextField
        variant="filled"
        label={label}
        placeholder={placeholder}
        {...register(label.toLowerCase(), validations)}
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
      {!isFieldValid && (
        <Typography sx={{ pt: 0 }}>This field is required.</Typography>
      )}
    </>
  );
}

export default FieldInput;
