import { Routes, Route } from "react-router-dom";
import Home from "./components/LandingPage/Home";
import AboutPage from "./components/About/AboutPage";
import PricingPage from "./components/PricingPage/PricingPage";
import ServicePage from "./components/ServicesPage/ServicePage";
import ContactPage from "./components/ContactPage/ContactPage";
import Login from "./components/AuthPage/Login";
import SignUp from "./components/AuthPage/SignUp";
import { AuthContextProvider } from "./components/AuthPage/AuthContext";
// import DashBoard from "./components/DashBoard/DashBoard";
import { ProtectedRoute } from "./components/AuthPage/ProtectedRoute";
import DashBoardPage from "./components/DashBoard/DashBoardPage";
import Deposit from "./components/DashBoard/Deposit";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components/About/AboutPage" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/login/dashboardpage"
            element={
              <ProtectedRoute>
                <DashBoardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login/deposit"
            element={
              <ProtectedRoute>
                <Deposit />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
};

export default App;
