import Login from "../components/Login";

const NotLogged = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "gray",
      }}
    >
      <Login />
    </div>
  );
};

export default NotLogged;
