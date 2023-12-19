import Header from "../LandingPage/Header";
import HomeFooter from "../LandingPage/HomeFooter";
import TradingPlan from "../LandingPage/TradingPlan";
import HomePageSection4 from "../LandingPage/HomePageSection4";
import PricingSection1 from "./PricingSection1";
import "/src/css/pricing.css";


const PricingPage = () => {
  return (
    <>
      <Header />
      <PricingSection1 />
      <h1 className="pricingh1">AFFORDABLE PACKAGES</h1>
      <TradingPlan />
      <HomePageSection4 />
      <HomeFooter />

    </>
  );
};

export default PricingPage;
