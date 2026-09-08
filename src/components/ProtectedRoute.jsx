import { Navigate, Outlet } from "react-router";
function ProtectedRoute({ isLoggedIn }) {
  if (isLoggedIn) {
    return <Outlet />;
  }

  return <Navigate to="/login" />;
}

export default ProtectedRoute;
