import picture1 from "/src/assets/images/istockphoto-1307254034-170667a.webp";
import picture2 from "/src/assets/images/micheile-henderson-ZVprbBmT8QA-unsplash.jpg";
import picture3 from "/src/assets/images/pexels-alesia-kozik-6771120.jpg";
import picture4 from "/src/assets/images/BestRewards.png";
import picture5 from "/src/assets/images/SWAP.png";
import picture6 from "/src/assets/images/payments.png";
import picture7 from "/src/assets/images/Tellafriend.png";
import picture8 from "/src/assets/images/Affiliate.png";

const ServiceSection2 = () => {
  return (
    <>
      <section className="servicesection2">
        <div className="box">
          <h1>Popular Features</h1>
          <div className="innerbox">
            <div className="box1">
              <div className="infobox">
                <p>FFP CRPTO INDEX</p>
                <h4>Auto-invest in the whole crypto market</h4>
                <button>Get Started</button>
              </div>
              <div className="imgbox">
                <img src={picture1} alt="picture1" />
              </div>
            </div>
            <div className="box2">
              <div className="infobox">
                <p>SAVINGS PLAN</p>
                <h4>Save effortlessly with a savings plan</h4>
                <button>Get Started</button>
              </div>
              <div className="imgbox">
                <img src={picture2} alt="picture1" />
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <h1>Benefits and Rewards</h1>
          <div className="innerbox">
            <div className="box1">
              <div className="infobox">
                <p>CASHBACK</p>
                <h4>Cashback in Bitcoin</h4>
                <button>Learn more</button>
              </div>
              <div className="imgbox">
                <img src={picture3} alt="picture1" />
              </div>
            </div>
            <div className="box2">
              <div className="infobox">
                <p>BEST REWARDS</p>
                <h4>Earn rewards and exclusive perks</h4>
                <button>Learn more</button>
              </div>
              <div className="imgbox">
                <img src={picture4} alt="picture1" />
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <h1>Save Time and Money</h1>
          <div className="innerbox">
            <div className="box1">
              <div className="infobox">
                <p>SWAP</p>
                <h4>Exchange digital assets instantly</h4>
                <button>Learn more</button>
              </div>
              <div className="imgbox">
                <img src={picture5} alt="picture1" />
              </div>
            </div>
            <div className="box2">
              <div className="infobox">
                <p>PAYMENTS</p>
                <h4>Send money with our app</h4>
                <button>Learn more</button>
              </div>
              <div className="imgbox">
                <img src={picture6} alt="picture1" />
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <h1>Make money</h1>
          <div className="innerbox">
            <div className="box1">
              <div className="infobox">
                <p>FFP CRPTO INDEX</p>
                <h4>Auto-invest in the whole crypto market</h4>
                <button>Get Started</button>
              </div>
              <div className="imgbox">
                <img src={picture7} alt="picture1" />
              </div>
            </div>
            <div className="box2">
              <div className="infobox">
                <p>FFP CRPTO INDEX</p>
                <h4>Auto-invest in the whole crypto market</h4>
                <button>Get Started</button>
              </div>
              <div className="imgbox">
                <img src={picture8} alt="picture1" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection2;
