import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
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
// import UserReservations from "./components/Reservations/UserReservations";
import { ReservationContextProvider } from "./context/ReservationContext";
import ReservationsPage from "./pages/ReservationPage";
import AddStuidoPage from "./pages/AddStuidoPage";

function App() {
  return (
    <AuthContextProvider>
      <ReservationContextProvider>
        <Router>
          <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
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
                  <ReservationsPage />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/add-studio"
              element={
                <ProtectedRoute>
                  <AddStuidoPage />
                </ProtectedRoute>
              }
            ></Route>
          </Routes>
        </Router>
      </ReservationContextProvider>
    </AuthContextProvider>
  );
}

export default App;
