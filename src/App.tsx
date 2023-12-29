import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Logged from "./pages/Logged";
import NotLogged from "./pages/NotLogged";

function App() {
  const auth = useContext(AuthContext);

  return auth.username ? <Logged /> : <NotLogged />;
}

export default App;
