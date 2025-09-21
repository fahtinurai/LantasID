// src/components/PrivateRoute.jsx
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem("user"); // ambil user dari localStorage
  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
