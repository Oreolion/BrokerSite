import { Link, useNavigate } from "react-router-dom";
import picture1 from "/src/assets/images/pexels-alesia-kozik-6781365.jpg";
import picture2 from "/src/assets/images/pexels-leeloo-thefirst-8919523.jpg";

const ServiceSection1 = () => {
    const navigate = useNavigate();
    const navigateTo = (url) => {
        console.log("clicked");
        navigate(url);
      };

  return (
    <>
      <section className="servicesection1">
        <div className="box">
          <div className="infobox">
            <h1>Meet the new stars on the crypto horizon</h1>
            <p>
              With Bitpanda Spotlight you can invest in fast-moving, hard to
              find crypto coins and projects
            </p>
            <button><Link
              to={`/services`}
              className="link"
              onClick={() => navigateTo(`/services`)}
            >
              Read more
            </Link></button>
          </div>

          <div className="imgbox">
            <img src={picture2} alt="picture1" />
          </div>
        </div>

        <div className="box">
          <div className="infobox">
            <h1>Put your investment to work</h1>
            <p>
              Stake your coins on Bitpanda and earn extra rewards on top of your
              holdings. It&apos;s safe, simple and hassle-free.
            </p>
            <button><Link
              to={`/services`}
              className="link"
              onClick={() => navigateTo(`/services`)}
            >
              Read more
            </Link></button>
          </div>
          <div className="imgbox">
            <img src={picture1} alt="picture2" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection1;
