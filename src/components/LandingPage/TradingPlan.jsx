import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const TradingPlan = () => {
    const navigate = useNavigate();

    const navigateTo = (url) => {
        console.log("clicked");
        navigate(url);
      };
  return (
    <>
      <section className="tradingplansection">
        <h1>SELECT A TRADING PLAN</h1>
        <div className="innerbox">
          <div className="box">
            <h3>BITCOIN MINI PLAN 1</h3>
            <p>Weekly Interest: 10%</p>
            <p>Investment Sum - $100</p>
            <p>Trading/Withdrawal Commmission - 10%</p>
            <p>Refferal Bonus - 7%</p>

            <h2>$500+</h2>

            <button><Link
              to={`/signup`}
              className="link"
              onClick={() => navigateTo(`/signup`)}
            >
              APPLY NOW
            </Link></button>
          </div>
          <div className="box">
            <h3>BITCOIN MINI PLAN 2</h3>
            <p>Weekly Interest: 12%</p>
            <p>Investment Sum - $10,000</p>
            <p>Trading/Withdrawal Commmission - 15%</p>
            <p>Refferal Bonus - 8%</p>

            <h2>$10,000+</h2>

            <button><Link
              to={`/signup`}
              className="link"
              onClick={() => navigateTo(`/signup`)}
            >
              APPLY NOW
            </Link></button>
          </div>
          <div className="box">
            <h3>BITCOIN FX SILVER PLAN</h3>
            <p>Weekly Interest: 15%</p>
            <p>Investment Sum - $20,000</p>
            <p>Trading/Withdrawal Commmission - 15%</p>
            <p>Refferal Bonus - 10%</p>

            <h2>$20,000+</h2>

            <button>APPLY NOW</button>
          </div>
          <div className="box">
            <h3>BITCOIN FX GOLD PLAN</h3>
            <p>Weekly Interest: 18%</p>
            <p>Investment Sum - $30,000</p>
            <p>Trading/Withdrawal Commmission - 20%</p>
            <p>Refferal Bonus - 10%</p>

            <h2>$30,000+</h2>

            <button><Link
              to={`/signup`}
              className="link"
              onClick={() => navigateTo(`/signup`)}
            >
              APPLY NOW
            </Link></button>
          </div>
          <div className="box">
            <h3>PLATINUM ELITE PLAN</h3>
            <p>Weekly Interest: 20%</p>
            <p>Investment Sum - $40,000</p>
            <p>Trading/Withdrawal Commmission - 20%</p>
            <p>Refferal Bonus - 10%</p>

            <h2>$40,000+</h2>

            <button><Link
              to={`/signup`}
              className="link"
              onClick={() => navigateTo(`/signup`)}
            >
              APPLY NOW
            </Link></button>
          </div>
          <div className="box">
            <h3>PLATINUM CORPORATE PLAN</h3>
            <p>Weekly Interest: 25%</p>
            <p>Investment Sum - $50,000</p>
            <p>Trading/Withdrawal Commmission - 25%</p>
            <p>Refferal Bonus - 10%</p>

            <h2>$50,000+</h2>

            <button><Link
              to={`/signup`}
              className="link"
              onClick={() => navigateTo(`/signup`)}
            >
              APPLY NOW
            </Link></button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TradingPlan;
