import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          {/* <Route
            path="/dashboard"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                {" "}
                <Dashboard setIsLoggedIn={setIsLoggedIn} />
              </ProtectedRoute>
            }
          /> */}
          <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
            <Route
              path="/dashboard/*"
              element={<Dashboard setIsLoggedIn={setIsLoggedIn} />}
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      {/* <Login /> */}
    </>
  );
}

export default App;
