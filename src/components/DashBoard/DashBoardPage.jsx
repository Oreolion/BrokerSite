import { useNavigate } from "react-router";
import { UserAuth } from "../AuthPage/AuthContext";
import "/src/css/dashboard.css";
import { FaUser, FaUserTie } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoSettings } from "react-icons/io5";
import { MdAttachEmail, MdClose } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { LuHistory } from "react-icons/lu";
import { MdOutlineSettings } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineMinus } from "react-icons/ai";
import { IoAddSharp } from "react-icons/io5";
import TradingViewChart from "../LandingPage/TradingViewChart";
import TradingViewWidget from "../LandingPage/TradingViewWidget";
import DashBoardData from "./DashBoardData";

const DashBoardPage = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const [menu, setMenu] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [notification, setNotification] = useState(false);
  const [nav, setNav] = useState(false);

  const handleMenuBtn = () => {
    setToggle(!toggle);
    setMenu(!menu);
  };
  const handleNotificationBtn = () => {
    setNotification(!notification);
  };
  const handleNavBtn = () => {
    setNav(!nav);
  };

  const navigateTo = (url) => {
    console.log("clicked");
    navigate(url);
  };

  const handleLogOut = async () => {
    try {
      await logout();
      navigate("/login");
      alert("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <div
        className="dashboard__nav mobile"
        //    className={`dashboard__nav isactive ${!menu ? "  open-nav" : ""}`}
      >
        <div className="logo">
          <Link className="link" to={"/"}>
            <h1>FFB</h1>
            <p>Fidelity First Brokers</p>
          </Link>
        </div>
        <div className="user">
          <FaUserTie size={40} />
          <div className="user__info">
            <p>{user.email}</p>
            <p>$0.00</p>
          </div>
        </div>
        <ul className="dashboard__navlists">
          <li>
            <Link
              className="link"
              to={`/login/dashboardpage`}
              onClick={() => navigateTo(`/login/dashboardpage`)}
            >
              <IoMdHome size={20} /> <p>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to={`/login/deposit`}
              onClick={() => navigateTo(`/login/deposit`)}
            >
              <IoAddSharp size={20} /> <p>Deposit</p>{" "}
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to={`/login/withdraw`}
              onClick={() => navigateTo(`/login/withdraw`)}
            >
              <AiOutlineMinus size={20} /> <p>Withdraw</p>{" "}
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to={`/login/deposittransaction`}
              onClick={() => navigateTo(`/login/deposittransaction`)}
            >
              <LuHistory size={20} /> <p> Deposit Transactions</p>
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to={`/login/withdrawtransaction`}
              onClick={() => navigateTo(`/login/withdrawtransaction`)}
            >
              <LuHistory size={20} />
              <p>Withdraw Transactions </p>{" "}
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to={`/login/accountsettings`}
              onClick={() => navigateTo(`/login/accountsettings`)}
            >
              <MdOutlineSettings size={20} /> <p>Account Settings</p>{" "}
            </Link>
          </li>
          <li onClick={handleLogOut}>
            {" "}
            <div className="link">
              <BiLogOut size={20} /> <p>Logout</p>{" "}
            </div>
          </li>
        </ul>
      </div>

      {menu && (
        <>
          {nav && (
            <>
              <ul className="navigationlist">
                <li>
                  <Link
                    className="link"
                    to={`/login/accountsettings`}
                    onClick={() => navigateTo(`/login/accountsettings`)}
                  >
                    <MdOutlineSettings size={20} /> <p>Account Settings</p>{" "}
                  </Link>
                </li>
                <li onClick={handleLogOut}>
                  {" "}
                  <div className="link">
                    <BiLogOut size={20} /> <p>Logout</p>{" "}
                  </div>
                </li>
              </ul>
            </>
          )}

          {notification && (
            <>
              <div className="notificationbox">
                <p>You currently have no notification.</p>
              </div>
            </>
          )}

          <div
            className={`dashboard__nav isactive ${!menu ? "  open-nav" : ""}`}
          >
            <div className="logo">
              <Link className="link" to={"/"}>
                <h1>FFB</h1>
                <p>Fidelity First Brokers</p>
              </Link>
            </div>
            <div className="user">
              <FaUserTie size={40} />
              <div className="user__info">
                <p>{user.email}</p>
                <p>$0.00</p>
              </div>
            </div>

            <ul className="dashboard__navlists">
              <li>
                <Link
                  className="link"
                  to={`/login/dashboardpage`}
                  onClick={() => navigateTo(`/login/dashboardpage`)}
                >
                  <IoMdHome size={20} /> <p>Dashboard</p>
                </Link>
              </li>
              <li>
                <Link
                  className="link"
                  to={`/login/deposit`}
                  onClick={() => navigateTo(`/login/deposit`)}
                >
                  <IoAddSharp size={20} /> <p>Deposit</p>{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="link"
                  to={`/login/withdraw`}
                  onClick={() => navigateTo(`/login/withdraw`)}
                >
                  <AiOutlineMinus size={20} /> <p>Withdraw</p>{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="link"
                  to={`/login/deposittransaction`}
                  onClick={() => navigateTo(`/login/deposittransaction`)}
                >
                  <LuHistory size={20} /> <p> Deposit Transactions</p>
                </Link>
              </li>
              <li>
                <Link
                  className="link"
                  to={`/login/withdrawtransaction`}
                  onClick={() => navigateTo(`/login/withdrawtransaction`)}
                >
                  <LuHistory size={20} />
                  <p>Withdraw Transactions </p>{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="link"
                  to={`/login/accountsettings`}
                  onClick={() => navigateTo(`/login/accountsettings`)}
                >
                  <MdOutlineSettings size={20} /> <p>Account Settings</p>{" "}
                </Link>
              </li>
              <li onClick={handleLogOut}>
                {" "}
                <div className="link">
                  <BiLogOut size={20} /> <p>Logout</p>{" "}
                </div>
              </li>
            </ul>
          </div>
        </>
      )}
      <div className="icons">
        {menu && !toggle ? (
          <MdClose className="menu-icon" size={30} onClick={handleMenuBtn} />
        ) : (
          <IoMenu className="close-icon" size={30} onClick={handleMenuBtn} />
        )}
        <IoIosNotifications
          size={30}
          className="notification-icon"
          onClick={handleNotificationBtn}
        />
      </div>

      <div className="dashboard">
        <div className="header">
          <div className="user">
            <FaUserTie className="user-img" size={30} />
            <p>{user.email}</p>
            <FaCaretDown size={20} onClick={handleNavBtn} />
          </div>
        </div>
        <div className="mobile-header">
          <div className="logo">
            <Link className="link" to={"/"}>
              <h1>FFB</h1>
              <p style={{ color: "white" }}>Fidelity First Brokers</p>
            </Link>
          </div>
          <div className="user">
            <FaUserTie className="user-img" size={30} />
            <p>{user.email}</p>
            <FaCaretDown size={20} onClick={handleNavBtn}/>
          </div>
        </div>
        <main className="dashboard__widget1">
          <TradingViewWidget className="widgetbox" />
        </main>
        <main className="dashboard__info">
          <div className="user__info">
            <h1>HI Name... Welcome!</h1>
            <div>
              <p>
                {" "}
                <FaUser size={18} /> <span>Username: {user.username}</span>{" "}
              </p>
              <p>
                <MdAttachEmail size={18} /> <span>Email: {user.email}</span>{" "}
              </p>
            </div>
          </div>
          <div className="inner-box">
            <div className="box box1">
              <IoSettings size={30} className="settings-icon" />
              <p>Account Balance:</p>
              <h2>
                $0.<span>00</span>{" "}
              </h2>
              <p> your account balance</p>
            </div>
            <div className="box box2">
              <IoSettings size={30} className="settings-icon" />

              <p>Earnings:</p>
              <h2>
                $0.<span>00</span>{" "}
              </h2>
              <p> your Earnings</p>
            </div>
            <div className="box box3">
              <IoSettings size={30} className="settings-icon" />

              <p>Registered Date:</p>
              <h2>
                $0.<span>00</span>{" "}
              </h2>
              <p> Account Registered Date</p>
            </div>
          </div>
        </main>
        <TradingViewChart />
        <DashBoardData />
      </div>
      <p className="footer__text">
        Copyright © Secure cryptocurrency Platform.
      </p>
    </>
  );
};

export default DashBoardPage;
