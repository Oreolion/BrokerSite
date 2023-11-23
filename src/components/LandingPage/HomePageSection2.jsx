import picture from "/src/assets/images/shubham-dhage-T9rKvI3N0NM-unsplash.jpg";

const HomePageSection2 = () => {
  return (
    <>
      <section className="homepagesection2">
        <div className="box1">
          <div className="img__box">
            <img
              src={picture}
              alt="image2"
            />
          </div>
        </div>
        <div className="box2">
          <h1>WE OFFER SAFE AND SECURE INVESTMENTS</h1>
          <p>
            We offer Clients premium tehcnical analysis and research products
            developed by a leading team of financial and economic experts. With
            over 30 years of combined and industry experience, our analysts
            produce high quality technical analysis and macroeconomic reports
            available to clients on daily basis.
          </p>
          <ul>
            <li>POWERFUL SYSTEM</li>
            <li>EXPERT MANAGERS</li>
            <li>24/7 SERVICES</li>

          </ul>
          <p>
            Our primary goal is to provide our customers with an exclusive platform to interact with their investments. Our winning  Auto Trader trading platform has been developed for beginners and professionals alike.
          </p>
          <button>Read More</button>
        </div>
      </section>
    </>
  );
};

export default HomePageSection2;
