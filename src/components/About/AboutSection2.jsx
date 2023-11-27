import picture1 from "/src/assets/images/assets_3@2x.955776ab.png";
import picture2 from "/src/assets/images/assets_2@2x.5a4a98a0.png";
import picture3 from "/src/assets/images/assets_1@2x.8f2f47cf.png";
import map from "/src/assets/images/istockphoto-1435226213-170667a.webp";
import { Link, useNavigate } from "react-router-dom";

const AboutSection2 = () => {
    const navigate = useNavigate();
    const navigateTo = (url) => {
        console.log("clicked");
        navigate(url);
      };

  return (
    <>
      <section className="aboutsection2">
        <div className="topbox">
          <div className="box1">
            <img src={picture3} alt="" />
            <p>
              We constantly <span>improve our trading platform</span> trying to
              make it the best on the market
            </p>
          </div>
          <div className="box2">
            <img src={picture2} alt="box" />
            <p>
              <span>We prioritise transparency </span>
              by regularly disclosing our earnings and cash reserves on a
              quarterly basis.
            </p>
          </div>
          <div className="box3">
            <img src={picture1} alt="box" />
            <p>
              Our <span> award - winning trading solutions </span>are shaped to
              help you achieve your trading ambitions
            </p>
          </div>
        </div>

        <div className="bottombox">
          <div className="box1">
            <h1>Our company</h1>
            <p>
              With almost 20 years experience, FFB is affiliated to one of the largest stock
              exchange-listed FX & CFD brokers in the world. We have offices in
              over 7 countries including UK, Poland, Germany, France and Chile.
            </p>
            <button><Link
              to={`/signup`}
              className="link"
              onClick={() => navigateTo(`/signup`)}
            >
              GET STARTED
            </Link></button>
          </div>

          <div className="box2">
            <img src={map} alt="map" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection2;
