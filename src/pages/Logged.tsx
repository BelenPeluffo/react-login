import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Logged = () => {
  const auth = useContext(AuthContext);
  return <div>Bienvenidx, {auth.user.name}</div>;
};

export default Logged;
