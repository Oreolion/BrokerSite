import Header from "../LandingPage/Header";
import HomeFooter from "../LandingPage/HomeFooter";
import ServiceSection1 from "./ServiceSection1";
import ServiceSection2 from "./ServiceSection2";
import "/src/css/services.css";

const ServicePage = () => {
  return (
    <>
      <Header />
      <ServiceSection1 />
      <ServiceSection2 />
      <HomeFooter />
    </>
  );
};

export default ServicePage;
