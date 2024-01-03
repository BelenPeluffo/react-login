import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Box, Button, Typography } from "@mui/material";
import "../assets/styles.css";
import StepOneForm from "../components/StepOneForm";

const Logged = () => {
  const auth = useContext(AuthContext);
  return (
    <Box className="big-container">
      <Typography variant="h5" textAlign="center" sx={{ fontWeight: "700" }}>
        Welcome back, {auth.user.name}! We missed you!
      </Typography>
      <StepOneForm />
      <Button onClick={auth.logout} variant="contained" size="large">
        Log out
      </Button>
    </Box>
  );
};

export default Logged;
