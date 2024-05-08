import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import StudioDetailsPage from "./pages/StudioDetailsPage";
import SelectTimePage from "./pages/SelectTimePage";
import SuccessPage from "./pages/SuccessPage";
import api from "./api";
import { REFRESH_TOKEN } from "./constants";
import { useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContextProvider } from "./context/AuthContext";
import UserReservations from "./components/Reservations/UserReservations";

const Logout = () => {
  useEffect(() => {
    const handleLogout = async () => {
      try {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);

        if (!refreshToken) {
          console.warn(
            "Refresh token not found in localStorage. Skipping logout."
          );
          return;
        }

        const response = await api.post("auth/api/logout/", {
          refresh_token: refreshToken,
        });

        if (response.status !== 200) {
          console.error("Logout failed with status:", response.status);
        } else {
          console.log("Logout successful.");
        }

        // Clear localStorage after successful logout
        localStorage.clear();
      } catch (error) {
        console.error("Logout failed:", error);
      }
    };

    // Call logout only on component mount (empty dependency array)
    handleLogout();
  }, []);

  return <Navigate to="/login" />;
};

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/studios/:id" element={<StudioDetailsPage />} />
          <Route
            path="/select-time"
            element={
              <ProtectedRoute>
                <SelectTimePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/success"
            element={
              <ProtectedRoute>
                <SuccessPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reservations"
            element={
              <ProtectedRoute>
                <UserReservations />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
