import { MenuItem, Select, TextField, Typography } from "@mui/material";
import { handleFieldChange } from "../helpers/formHandlers";
import { FieldError, useFormContext } from "react-hook-form";
import { FieldType } from "../config/register";
import { Option } from "../config/stepOneForm";

interface FieldInputProps<objectType> {
  label: string;
  placeholder?: string;
  type: FieldType;
  referenceObject: objectType;
  setObject: (state: React.SetStateAction<objectType>) => void;
  error?: FieldError;
  name: string;
  options?: Option[];
  width?: string;
}

function FieldInput<objectType>({
  label,
  placeholder,
  type,
  referenceObject,
  setObject,
  name,
  options,
  width,
}: FieldInputProps<objectType>) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      {(type === "text" || type === "password") && (
        <TextField
          variant="filled"
          label={label}
          placeholder={placeholder}
          {...register(name)}
          onChange={(event) => {
            handleFieldChange<objectType>(
              name,
              event.target.value,
              referenceObject as objectType,
              setObject
            );
          }}
          type={type}
          error={!!errors[name]}
          sx={{ width: width }}
        />
      )}

      {type === "dropdown" && options && (
        <Select label={label} sx={{ width: width }}>
          {options.map((option) => (
            <MenuItem value={option.value}>{option.label}</MenuItem>
          ))}
        </Select>
      )}

      {type !== "text" && type !== "password" && type !== "dropdown" && (
        <Typography>{label}</Typography>
      )}

      {errors && (
        <Typography sx={{ pt: 0 }}>
          {errors?.[name]?.message as string}
        </Typography>
      )}
    </>
  );
}

export default FieldInput;
