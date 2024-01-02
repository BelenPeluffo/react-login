import { TextField, Typography } from "@mui/material";
import { handleFieldChange } from "../helpers/formHandlers";
import { FieldError, RegisterOptions, useFormContext } from "react-hook-form";
import { useEffect } from "react";

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
  error,
}: FieldInputProps<objectType>) {
  const { register } = useFormContext();
  useEffect(() => {
    console.log("error?", error);
  }, [error]);
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
      {error && <Typography>This field is required.</Typography>}
    </>
  );
}

export default FieldInput;
