import { TextField, Typography } from "@mui/material";
import { handleFieldChange } from "../helpers/formHandlers";
import { FieldError, useFormContext } from "react-hook-form";
import { useEffect } from "react";

interface FieldInputProps<objectType> {
  label: string;
  placeholder?: string;
  type?: string;
  referenceObject: objectType;
  setObject: (state: React.SetStateAction<objectType>) => void;
  error?: FieldError;
}

function FieldInput<objectType>({
  label,
  placeholder,
  type,
  referenceObject,
  setObject,
}: FieldInputProps<objectType>) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const lowercaseLabel = label.toLowerCase().split(" ")[0];

  return (
    <>
      <TextField
        variant="filled"
        label={label}
        placeholder={placeholder}
        {...register(lowercaseLabel)}
        onChange={(event) => {
          handleFieldChange<objectType>(
            lowercaseLabel,
            event.target.value,
            referenceObject as objectType,
            setObject
          );
        }}
        type={type}
        error={!!errors[lowercaseLabel]}
      />
      {errors && (
        <Typography sx={{ pt: 0 }}>
          {errors?.[lowercaseLabel]?.message as string}
        </Typography>
      )}
    </>
  );
}

export default FieldInput;
