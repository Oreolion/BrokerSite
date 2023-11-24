import { useState } from "react";
import TradingViewWidget from "./TradingViewWidget";
import { TiThMenu } from "react-icons/ti";
import { MdClose } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const handleMenuBtn = () => {
    setToggle(!toggle);
    setMenu(!menu);
  };

  window.onscroll = () => {
    setMenu(false);
    setToggle(false);
  };

  const navigateTo = (url) => {
    console.log("clicked");
    navigate(url);
  };

  return (
    <>
      <header>
        <div className="logo">
          <h1>FFB</h1>
          <p>Fidelity First Brokers</p>
        </div>
        <div className="widgetbox">
          <TradingViewWidget />
        </div>
        <div className="header__btn">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
        {!menu && !toggle ? (
          <TiThMenu id="menubtn" size={50} onClick={handleMenuBtn} />
        ) : (
          <MdClose id="menubtn" size={50} onClick={handleMenuBtn} />
        )}
      </header>
      <nav>
        <ul className="navlists">
          <li>
            {" "}
            <Link to={`/`} className="link">
              Home
            </Link>
          </li>
          <li>
            <Link
              to={`/components/About/AboutPage`}
              className="link"
              onClick={() => navigateTo(`/about`)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to={`/services`}
              className="link"
              onClick={() => navigateTo(`/services`)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to={`/pricing`}
              className="link"
              onClick={() => navigateTo(`/pricing`)}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to={`/contact`}
              className="link"
              onClick={() => navigateTo(`/contact`)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
      {/* mobile menu */}
      {menu && (
        <nav
          className={toggle && menu ? " mobile__menu active" : "mobile__menu"}
        >
          <ul className="nav">
            <li>
              {" "}
              <Link to={`/`} className="link">
                Home
              </Link>
            </li>
            <li>
              <Link
                to={`/components/About/AboutPage`}
                className="link"
                onClick={() => navigateTo(`/about`)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to={`/services`}
                className="link"
                onClick={() => navigateTo(`/services`)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to={`/pricing`}
                className="link"
                onClick={() => navigateTo(`/pricing`)}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to={`/contact`}
                className="link"
                onClick={() => navigateTo(`/contact`)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="mobilemenu-btn">
            <button className="login-btn">Login</button>
            <button className="signup-btn">Sign Up</button>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
