import { Box, Stack, Typography } from "@mui/material";
import FieldInput from "../components/FieldInput";
import { useState } from "react";
import { handleFieldChange } from "../helpers/formHandlers";

export interface RegisterField {
  label: string;
  type?: string;
  placeholder?: string;
}

const registerFields: RegisterField[] = [
  {
    label: "Name",
  },
  { label: "Email address" },
  { label: "Password", type: "password" },
  { label: "Confirm password", type: "password" },
];

interface Registration {
  name: string;
  password: string;
  email: string;
}

const Register = () => {
  const [registration, setRegistration] = useState({
    name: "",
    password: "",
    email: "",
  });

  return (
    <div className="main-container" sx={{ height: "80px" }}>
      <Box className="card-container">
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
            Don't wait!
          </Typography>
          <Typography
            variant="h2"
            sx={{ p: 0, lineHeight: 1, fontWeight: "750" }}
          >
            Register now!
          </Typography>
        </Box>
        <Stack gap={2}>
          {registerFields.map((field) => (
            <FieldInput<Registration>
              label={field.label}
              type={field.type}
              referenceObject={registration}
              setObject={() => setRegistration}
            />
          ))}
        </Stack>
      </Box>
    </div>
  );
};

export default Register;
