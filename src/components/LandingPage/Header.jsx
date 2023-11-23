import { useState } from "react";
import TradingViewWidget from "./TradingViewWidget";
import { TiThMenu } from "react-icons/ti";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleMenuBtn = () => {
    setToggle(!toggle);
    setMenu(!menu);
  };

  window.onscroll = () => {
    setMenu(false);
    setToggle(false);
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
          <li>Home</li>
          <li>ABout Us</li>
          <li>Services</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </nav>
      {/* mobile menu */}
      {menu && (
        <nav
          className={toggle && menu ? " mobile__menu active" : "mobile__menu"}
        >
          <ul className="nav">
            <li>Home</li>
            <li>ABout Us</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>Contact</li>
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
