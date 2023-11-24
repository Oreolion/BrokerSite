import picture from "/src/assets/images/istockphoto-1463945887-170667a.webp";
import "/src/css/about.css";


const AboutSection1 = () => {
  return (
    <>
      <section className="aboutsection1">
        <div className="box1">
          <h1>Hello...</h1>
          <p>
            We&apos;re affiliated to one of the largest stock exchange-listed FX
            & CFD brokers in the world, providing retail traders and investors instant access
            to hundreds of global markets.
          </p>
        </div>

        <div className="box2">
          <div className="img__box">
            <img src={picture} alt="picture" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection1;
