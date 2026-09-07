import { Navigate } from "react-router";
function ProtectedRoute({ isLoggedIn, children }) {
  if (isLoggedIn) {
    return children;
  }

  return <Navigate to="/login" />;
}

export default ProtectedRoute;
