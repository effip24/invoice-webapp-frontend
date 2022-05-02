import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to={"/demo"} replace />;
  }

  return children;
};
export default ProtectedRoute;
