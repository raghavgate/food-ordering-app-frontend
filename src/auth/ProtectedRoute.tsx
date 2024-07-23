import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth0();

  //outlet renders all child routes of the component if user is authenticated, replace changes url
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace/>;
};

export default ProtectedRoute;
