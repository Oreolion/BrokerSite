import { Routes, Route } from "react-router-dom";
import Home from "./components/LandingPage/Home";
import AboutPage from "./components/About/AboutPage";
import PricingPage from "./components/PricingPage/PricingPage";
import ServicePage from "./components/ServicesPage/ServicePage";
import ContactPage from "./components/ContactPage/ContactPage";
import Login from "./components/AuthPage/Login";
import SignUp from "./components/AuthPage/SignUp";


const App = () => {
  return (
    <>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/components/About/AboutPage' element={<AboutPage />}/>
        <Route path="/pricing" element={<PricingPage />}/>
        <Route path="/services" element={<ServicePage />}/>
        <Route path="/contact" element={<ContactPage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
      </Routes>
      
        
    </>
  )
}

export default App;

