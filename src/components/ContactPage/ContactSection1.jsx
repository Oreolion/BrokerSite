import { Link, useNavigate } from "react-router-dom";

const ContactSection1 = () => {


    const navigate = useNavigate();
    const navigateTo = (url) => {
        console.log("clicked");
        navigate(url);
      };

  return (
    <>
      <section className="contactsection1">
        <div className="innerbox">
          <h1>Contact Us</h1>

          <p>
            Find the best ways to get in contact with our award-winning 24/7^^
            customer support team
          </p>
          <button><Link
              to={`/signup`}
              className="link"
              onClick={() => navigateTo(`/signup`)}
            >
              START TRADING
            </Link></button>
        </div>
      </section>
    </>
  );
};

export default ContactSection1;
