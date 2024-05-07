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

const Logout = () => {
  useEffect(() => {
    const handleLogout = async () => {
      try {
        // Clear localStorage
        localStorage.clear();

        // Send logout request to the API
        await api.post("auth/api/logout/", {
          refresh_token: REFRESH_TOKEN,
        });
      } catch (error) {
        console.error("Logout failed:", error);
      }
    };

    // Call the logout function when component mounts
    handleLogout();
  }, []);

  return <Navigate to="/login" />;
};
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/studios/:id" element={<StudioDetailsPage />} />
        <Route path="/select-time" element={<SelectTimePage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
