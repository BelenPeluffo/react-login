import { Box, Button, Stack, Typography } from "@mui/material";
import FieldInput from "../components/FieldInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import {
  Registration,
  registerFields,
  registerValidationSchema,
} from "../config/register";
import { yupResolver } from "@hookform/resolvers/yup";

const Register = () => {
  const [registration, setRegistration] = useState({
    name: "",
    password: "",
    email: "",
    confirm: "",
  });
  const navigate = useNavigate();
  const methods = useForm<Registration>({
    resolver: yupResolver(registerValidationSchema),
  });
  const onSubmit = methods.handleSubmit((data) => {
    console.log("data?", data);
  });

  return (
    <div className="main-container full-height">
      <Box className="card-container register-form">
        <Box
          sx={{
            p: 2,
            pb: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h3" sx={{ p: 0, lineHeight: 1 }}>
            기다리지 마세요!
          </Typography>
          <Typography
            variant="h2"
            sx={{ p: 0, lineHeight: 1, fontWeight: "750" }}
          >
            Register now!
          </Typography>
        </Box>
        <FormProvider {...methods}>
          <form noValidate onSubmit={(event) => event.preventDefault}>
            <Stack gap={2}>
              {registerFields.map((field) => (
                <FieldInput<Registration>
                  label={field.label}
                  key={field.label}
                  type={field.type}
                  referenceObject={registration}
                  setObject={setRegistration}
                  name={field.id}
                />
              ))}
              <Button variant="contained" size="large" onClick={onSubmit}>
                갑시다!!
              </Button>
              <Button size="small" onClick={() => navigate("/")}>
                집으로 데려가 주세요.
              </Button>
            </Stack>
          </form>
        </FormProvider>
      </Box>
    </div>
  );
};

export default Register;
