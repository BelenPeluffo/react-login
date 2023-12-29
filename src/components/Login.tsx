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

const loginFields: { label: string; placeholder: string }[] = [
  { label: "Email", placeholder: "example@gmail.com" },
  { label: "Password", placeholder: "Password in!" },
];

const Login = () => {
  const [credentials, setCredentials] = useState<LoginData>({
    email: "",
    password: "",
  });
  const auth = useContext(AuthContext);
  const [validationMessage, setValidationMessage] = useState("");
  const [loginError,setLoginError] = useState("");

  const handleChange = (property: string, newValue: string) => {
    setCredentials({ ...credentials, [property]: newValue });
  };

  const handleSubmit = () => {
    console.log("Holis");
    const isDataValid = validate();
    if (isDataValid) {
      const error = auth.login(credentials);
      setLoginError(error ? error : "");
    } else {
      setValidationMessage("No");
    }
  };

  return (
    <Box
      sx={{
        p: 2,
        border: "solid 1px gray",
        width: "40%",
        height: "60%",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRadius: "10px",
        backgroundColor: "white",
      }}
    >
      <Typography variant="h2" textAlign="center" sx={{ p: 2, pt: 5 }}>
        Log In
      </Typography>
      <FormControl sx={{ height: "100%", justifyContent: "center" }}>
        <Stack gap={2}>
          {loginFields.map((field) => (
            <FieldInput
              label={field.label}
              key={field.label}
              placeholder={field.placeholder}
              onChange={handleChange}
            />
          ))}
          <Button variant="contained" size="large" onClick={handleSubmit}>
            Get in, loser!
          </Button>
        </Stack>
      </FormControl>
      {validationMessage ? <Alert severity="warning">{validationMessage}</Alert> : null}
      {loginError ? <Alert severity="warning">{loginError}</Alert> : null}
    </Box>
  );
};

export default Login;
