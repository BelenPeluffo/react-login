import { TextField, Typography } from "@mui/material";
import { handleFieldChange } from "../helpers/formHandlers";
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  RegisterOptions,
  useFormContext,
} from "react-hook-form";

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
  const inputError:
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined =
    errors[Object.keys(errors).filter((key) => key === lowercaseLabel)[0]];
  const isFieldValid =
    Object.keys(errors).filter((key) => key === lowercaseLabel).length === 0;

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
      {!isFieldValid && inputError && (
        <Typography sx={{ pt: 0 }}>{inputError.message as string}</Typography>
      )}
    </>
  );
}

export default FieldInput;
