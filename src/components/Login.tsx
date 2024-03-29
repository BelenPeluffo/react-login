import {
  Alert,
  Box,
  Button,
  FormControl,
  Stack,
  Typography,
} from "@mui/material";
import FieldInput from "./FieldInput";
import { useContext, useState } from "react";
import { LoginData } from "../services/AuthServices";
import { AuthContext } from "../context/AuthContext";
import { validate } from "../helpers/validate";
import "../assets/styles.css";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { FormField } from "../config/register";

const loginFields: FormField[] = [
  {
    label: "Email",
    placeholder: "example@gmail.com",
    type: "text",
    id: "email",
  },
  {
    label: "Password",
    placeholder: "Password in!",
    type: "password",
    id: "password",
  },
];

const Login = () => {
  const [credentials, setCredentials] = useState<LoginData>({
    email: "",
    password: "",
  });
  const auth = useContext(AuthContext);
  const [validationMessage, setValidationMessage] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const methods = useForm<LoginData>();

  const handleSubmit = methods.handleSubmit(() => {
    console.log("Holis");
    const isDataValid = validate();
    if (isDataValid) {
      const error = auth.login(credentials);
      setLoginError(error ? error : "");
    } else {
      setValidationMessage("No");
    }
  });

  return (
    <Box className="card-container">
      <Typography variant="h2" textAlign="center" sx={{ p: 2, pt: 5 }}>
        Log In
      </Typography>
      {loginError ? (
        <Alert severity="warning" sx={{ mb: 2 }}>
          {loginError}
        </Alert>
      ) : null}
      <FormProvider {...methods}>
        <FormControl sx={{ height: "100%", justifyContent: "center" }}>
          <Stack gap={2}>
            {loginFields.map((field) => (
              <FieldInput<LoginData>
                label={field.label}
                key={field.label}
                placeholder={field.placeholder || ""}
                type={field.type}
                referenceObject={credentials}
                setObject={setCredentials}
                name={field.id}
              />
            ))}
            <Button variant="contained" size="large" onClick={handleSubmit}>
              들어와, loser!
            </Button>
            <Button
              size="small"
              sx={{ textTransform: "none", px: 0.5 }}
              onClick={() => navigate("/register")}
            >
              아직도 register을 하지 않았으면 이쪽으로 들어오세요.
            </Button>
          </Stack>
        </FormControl>
      </FormProvider>
      {validationMessage ? (
        <Alert severity="warning">{validationMessage}</Alert>
      ) : null}
    </Box>
  );
};

export default Login;
