import { Routes, Route } from "react-router-dom";
import Home from "./components/LandingPage/Home";
import AboutPage from "./components/About/AboutPage";
import PricingPage from "./components/PricingPage/PricingPage";
import ServicePage from "./components/ServicesPage/ServicePage";
import ContactPage from "./components/ContactPage/ContactPage";
import Login from "./components/AuthPage/Login";
import SignUp from "./components/AuthPage/SignUp";
import { AuthContextProvider } from "./components/AuthPage/AuthContext";
import { ProtectedRoute } from "./components/AuthPage/ProtectedRoute";
import DashBoardPage from "./components/DashBoard/DashBoardPage";
import Deposit from "./components/DashBoard/Deposit";
import AccountSettings from "./components/DashBoard/AccountSettings";
import DepositTransaction from "./components/DashBoard/DepositTransaction";
import WithdrawTransaction from "./components/DashBoard/WithdrawTransaction";
import Withdraw from "./components/DashBoard/Withdraw";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import ErrorPage from "./components/ErrorPage";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    // Simulate an 8-second delay
    const delay = 6000;

    const preloaderTimeout = setTimeout(() => {
      setIsLoading(false);
      setShowComponent(true);
    }, delay);

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(preloaderTimeout);
  }, []);

  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/"element={
            isLoading ? (
                <Loader />
              ) : (
                <>
                {showComponent && <Home /> }
                  
                </>
              )}
          
           />
          <Route
            path="/components/About/AboutPage"
            element={
              isLoading ? <Loader /> : <>{showComponent && <AboutPage />}</>
            }
          />
          <Route
            path="/pricing"
            element={
              isLoading ? <Loader /> : <>{showComponent && <PricingPage />}</>
            }
          />
          <Route
            path="/services"
            element={
              isLoading ? <Loader /> : <>{showComponent && <ServicePage />}</>
            }
          />
          <Route
            path="/contact"
            element={
              isLoading ? <Loader /> : <>{showComponent && <ContactPage />}</>
            }
          />
          <Route
            path="/login"
            element={isLoading ? <Loader /> : <>{showComponent && <Login />}</>}
          />
          <Route
            path="/signup"
            element={
              isLoading ? <Loader /> : <>{showComponent && <SignUp />}</>
            }
          />
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
                {isLoading ? <Loader /> : <>{showComponent && <Deposit />}</>}
              </ProtectedRoute>
            }
          />
          <Route
            path="/login/withdraw"
            element={
              <ProtectedRoute>
                {isLoading ? <Loader /> : <>{showComponent && <Withdraw />}</>}
              </ProtectedRoute>
            }
          />
          <Route
            path="/login/deposittransaction"
            element={
              <ProtectedRoute>
                {isLoading ? (
                  <Loader />
                ) : (
                  <>{showComponent && <DepositTransaction />}</>
                )}
              </ProtectedRoute>
            }
          />
          <Route
            path="/login/withdrawtransaction"
            element={
              <ProtectedRoute>
                {isLoading ? (
                  <Loader />
                ) : (
                  <>{showComponent && <WithdrawTransaction />}</>
                )}
              </ProtectedRoute>
            }
          />
          <Route
            path="/login/accountsettings"
            element={
              <ProtectedRoute>
                {isLoading ? (
                  <Loader />
                ) : (
                  <>{showComponent && <AccountSettings />}</>
                )}
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/login/*" element={<ErrorPage />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
};

export default App;
