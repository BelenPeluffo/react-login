import {
  Box,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { handleFieldChange } from "../helpers/formHandlers";
import { FieldError, useFormContext } from "react-hook-form";
import { FieldType } from "../config/register";
import { Option } from "../config/stepOneForm";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

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
  disabled?: boolean;
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
  disabled,
}: FieldInputProps<objectType>) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Box sx={{ width: width }}>
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
          sx={{ width: "100%" }}
          value={referenceObject[name]}
          disabled={disabled}
        />
      )}

      {type === "dropdown" && options && (
        <Box sx={{ width: "100%" }}>
          <InputLabel>{label}</InputLabel>
          <Select
            displayEmpty
            sx={{ width: "100%" }}
            error={!!errors[name]}
            disabled={disabled}
          >
            <MenuItem>
              <em>Seleccioná {label.toLowerCase()}</em>
            </MenuItem>
            {options.map((option) => (
              <MenuItem value={option.value}>{option.label}</MenuItem>
            ))}
          </Select>
        </Box>
      )}

      {type === "date" && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label={label}
            sx={{ width: "100%" }}
            // value={referenceObject[name]}
            // maxDate={new Date()}
            onChange={(newValue: Date | null) => {
              console.log("newValue?", dayjs(newValue as Date).toString());
              handleFieldChange<objectType>(
                name,
                dayjs(newValue as Date).toString(),
                referenceObject as objectType,
                setObject
              );
            }}
            disabled={disabled}
          />
        </LocalizationProvider>
      )}

      {errors && (
        <Typography sx={{ pt: 0 }}>
          {errors?.[name]?.message as string}
        </Typography>
      )}
    </Box>
  );
}

export default FieldInput;
