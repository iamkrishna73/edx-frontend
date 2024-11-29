import { Navigate } from "react-router-dom";
import PrivateHome from "./PrivateHome";
import { useAuth } from "../context/AuthContext";

const PrivateRoutes = () => {
  const { auth } = useAuth();

  const isAuth = { token: auth.isAuthenticated };
  return isAuth.token ? <PrivateHome /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
