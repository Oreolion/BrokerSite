import { GiCash } from "react-icons/gi";
import { BsCashCoin } from "react-icons/bs";
import { RiSecurePaymentFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {


    const navigate = useNavigate();

    const navigateTo = (url) => {
        console.log("clicked");
        navigate(url);
      };

  return (
    <>
      <section className="homepage__container">
        <div className="homepage__innerbox">
          <h1>YOUR NEW <span>FINANCIAL PICTURE</span> STARTS HERE. <span> FINANCIAL ADVISORY</span>  THAT WORKS</h1>
          <div className="homepage__btn">
            <button><Link
              to={`/services`}
              className="link"
              onClick={() => navigateTo(`/services`)}
            >
              LEARN MORE
            </Link></button>
            <button><Link
              to={`/signup`}
              className="link"
              onClick={() => navigateTo(`/signup`)}
            >
              OPEN AN ACCOUNT
            </Link></button>
          </div>
        </div>
        <div className="bottombox">
            <div className="box">
                <BsCashCoin size={40}/>
                <h3>EASY TO USE</h3>
                <p>Trade Fx and Bitcoin Mining all from one account.</p>
            </div>
            <div className="box">
                <GiCash size={40}/>
                <h3>LOW COMMISSIONS</h3>
                <p>Pay as low as 15% of profit upon withdrawal from managed accounts.</p>
            </div>
            <div className="box">
                <RiSecurePaymentFill size={40}/>
                <h3>INSTANT AND SECURE</h3>
                <p>All Money Order(Western Union, Money gram) and Bitcoin.</p>
            </div>

        </div>
      </section>
    </>
  );
};

export default Homepage;
