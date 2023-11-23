import Header from "./components/LandingPage/Header"
import HomeFooter from "./components/LandingPage/HomeFooter"
import HomePageSection3 from "./components/LandingPage/HomePageSection3"
import HomePageSection4 from "./components/LandingPage/HomePageSection4"
import Homepage from "./components/LandingPage/Homepage"
import HomePageSection2 from "./components/LandingPage/HomepageSection2"
import TradingPlan from "./components/LandingPage/TradingPlan"
import TradingViewChart from "./components/TradingViewChart"

function App() {

  return (
    <>
      <Header />
      <Homepage />
      <HomePageSection2 />
      <TradingViewChart />
      <HomePageSection3 />
      <TradingPlan />
      <HomePageSection4 />
      <HomeFooter />
      
    </>
  )
}

export default App
