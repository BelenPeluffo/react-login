import { Box, Button, Stack, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import FieldInput from "./FieldInput";
import { StepOneData, stepOneFields, stepOneFormValidationSchema } from "../config/stepOneForm";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

const StepOneForm = () => {
  const [stepOneData, setStepOneData] = useState<StepOneData>({
    documentType: 2,
    documentNumber: 2,
    gender: 2,
    lastname: "string",
    name: "string",
    dateOfBirth: new Date(),
    countryOfBirth: "string",
    provinceOfBirth: "string",
    placeOfBirth: "string",
    schoolYear: 2,
    grade: 2,
  });
  const methods = useForm<StepOneData>({
    resolver: yupResolver(stepOneFormValidationSchema)
  });

  const onCancel = () => {}

  const onSave = methods.handleSubmit((data) => {
    console.log('data?',data);
    // const isValid = stepOneFormValidationSchema.validate(data);
    // console.log('isValid?',isValid);
  })

  const onNext = () => {
    onSave();
  }

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
      <FormProvider {...methods}>
        <form noValidate onSubmit={(event) => event.preventDefault}>
          <Stack direction="row" flexWrap="wrap" width="100%" gap={2} p={3} alignItems="flex-end">
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
