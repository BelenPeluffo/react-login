import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import FieldInput from "./FieldInput";
import {
  StepOneData,
  disabilityParser,
  stepOneFields,
  stepOneFormValidationSchema,
} from "../config/stepOneForm";
import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCases } from "../services/ApiFormData";

const initialValue: StepOneData = {
  documentType: 2,
  documentNumber: 2,
  gender: 2,
  lastname: "",
  name: "",
  dateOfBirth: new Date(),
  countryOfBirth: "",
  provinceOfBirth: "",
  placeOfBirth: "",
  schoolYear: 2,
  grade: 2,
};

const StepOneForm = () => {
  const [stepOneData, setStepOneData] = useState<StepOneData>(initialValue);
  const [useCase, setUseCase] = useState(0);
  const [disabledFields, setDisabledFields] = useState<{
    [index: keyof StepOneData]: boolean;
  }>({});
  const methods = useForm<StepOneData>({
    resolver: yupResolver(stepOneFormValidationSchema),
  });

  const onCancel = () => {};

  const onSave = methods.handleSubmit((data) => {
    // Ésto sólo se va a ejecutar cuando se hayan cumplido todos los requisitos
    console.log("data?", data);
  });

  const onNext = () => {
    onSave();
  };

  const disabilitySetter = (fields: string[]) => {
    console.log("fields?", fields);
    const disabledStates: { [key in keyof StepOneData]: boolean } = {} as {
      [key in keyof StepOneData]: boolean;
    };
    fields.forEach((field) => (disabledStates[field] = true));
    setDisabledFields(disabledStates);
  };

  useEffect(() => {
    if (useCase > 0) {
      console.log("Use case elegido?", useCase);
      console.log(
        "Campos a deshabilitar?",
        disabilityParser(initialValue, useCase)
      );
      const disabledFields = disabilityParser(initialValue, useCase);
      disabilitySetter(disabledFields as string[]);
    }
  }, [useCase]);

  return (
    <Box
      sx={{
        width: "100%",
        border: "solid 1px",
        borderRadius: "5px",
        my: 1,
      }}
    >
      <Typography variant="h5">Información dxl estudiante</Typography>
      <Box sx={{ mx: 3 }}>
        <InputLabel>Caso de uso</InputLabel>
        <Select
          fullWidth
          displayEmpty
          onChange={(event) => setUseCase(event.target.value as number)}
        >
          <MenuItem value="">
            <em>Seleccioná un caso de uso</em>
          </MenuItem>
          {useCases.map((useCase) => (
            <MenuItem value={useCase.value}>{useCase.label}</MenuItem>
          ))}
        </Select>
      </Box>
      <FormProvider {...methods}>
        <form noValidate onSubmit={(event) => event.preventDefault}>
          <Stack
            direction="row"
            flexWrap="wrap"
            width="100%"
            gap={2}
            p={3}
            alignItems="flex-end"
          >
            {stepOneFields.map((field) => (
              <FieldInput<StepOneData>
                label={field.label}
                referenceObject={stepOneData}
                setObject={setStepOneData}
                key={field.id}
                name={field.id}
                type={field.type}
                options={field.options}
                width={field.width}
                disabled={disabledFields[field.id]}
              />
            ))}
          </Stack>
          <Button onClick={onCancel}>Cancelar</Button>
          <Button onClick={onSave}>Guardar</Button>
          <Button onClick={onNext}>Continuar</Button>
        </form>
      </FormProvider>
    </Box>
  );
};

export default StepOneForm;
