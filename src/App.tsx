import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Logged from "./pages/Logged";
import Login from "./components/Login";
import "./assets/styles.css";

function App() {
  const auth = useContext(AuthContext);

  return (
    <div className={`main-container ${auth.token ? "" : "full-height"}`}>
      {auth.token ? <Logged /> : <Login />}
    </div>
  );
}

export default App;
