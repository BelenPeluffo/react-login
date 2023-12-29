import { Box, Button, FormControl, Stack, Typography } from "@mui/material";
import FieldInput from "./FieldInput";
import { ChangeEvent, useEffect, useState } from "react";

const loginFields: { label: string; placeholder: string }[] = [
  { label: "Email", placeholder: "example@gmail.com" },
  { label: "Password", placeholder: "Password in!" },
];

const Login = () => {
  const [credentials, setCredentials] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });

  const handleChange = (property: string, newValue: string) => {
    setCredentials({ ...credentials, [property]: newValue });
  };

  const handleSubmit = () => {};

  useEffect(() => {
    console.log('credentials?',credentials);
  },[credentials])

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
          <Button variant="contained" size="large">
            Get in, loser!
          </Button>
        </Stack>
      </FormControl>
    </Box>
  );
};

export default Login;
