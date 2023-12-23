
import Header from "./Header"
import HomeFooter from "./HomeFooter"
import HomePageSection3 from "./HomePageSection3"
import HomePageSection4 from "./HomePageSection4"
import Homepage from "./Homepage"
import HomePageSection2 from "./HomepageSection2"
import TradingPlan from "./TradingPlan"
import TradingViewChart from "./TradingViewChart"


function Home() {
    

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

export default Home;
