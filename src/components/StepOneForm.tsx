import { Box, Button, Stack, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import FieldInput from "./FieldInput";
import { StepOneData, stepOneFields } from "../config/stepOneForm";
import { useEffect, useState } from "react";

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
  const methods = useForm<StepOneData>();

  useEffect(() => {
    console.log("stepOneFields?", stepOneFields);
  }, []);

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
          <Stack direction="row" flexWrap="wrap" width="100%" gap={2} p={3}>
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
          <Button>Yas</Button>
        </form>
      </FormProvider>
    </Box>
  );
};

export default StepOneForm;
