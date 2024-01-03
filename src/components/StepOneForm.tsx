import { Box, Typography } from "@mui/material";
import { Form, FormProvider, useForm } from "react-hook-form";

const StepOneForm = () => {
  const methods = useForm();
  return (
    <Box>
      <Typography variant="h5">Información dxl estudiante</Typography>
      <FormProvider {...methods}>
        <Form></Form>
      </FormProvider>
    </Box>
  );
};

export default StepOneForm;
