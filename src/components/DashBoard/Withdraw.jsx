
import { UserAuth } from "../AuthPage/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { IoIosNotifications, IoMdHome } from "react-icons/io";
import { LuHistory } from "react-icons/lu";
import { MdOutlineSettings } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineMinus } from "react-icons/ai";
import { IoAddSharp, IoMenu } from "react-icons/io5";
import { FaCaretDown, FaUserTie } from "react-icons/fa";
import TradingViewWidget from "../LandingPage/TradingViewWidget";


const Withdraw = () => {
    const { user, logout } = UserAuth();
    const navigate = useNavigate();
  
    const [menu, setMenu] = useState(true);
    const [toggle, setToggle] = useState(false);
  
    const handleMenuBtn = () => {
      setToggle(!toggle);
      setMenu(!menu);
    };
  
    const navigateTo = (url) => {
      console.log("clicked");
      navigate(url);
    };
  
    const handleLogOut = async () => {
      try {
        await logout();
        navigate("/");
        alert("You are logged out");
      } catch (e) {
        console.log(e.message);
      }
    };
  
    return (
      <>
        {menu && (
          <>
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
                <Link className="link" to={`/login/deposit`} onClick={() => navigateTo(`/login/deposit`)}>
                  <IoAddSharp size={20} /> <p>Deposit</p>{" "}
                </Link>
              </li>
              <li>
                <Link className="link"
                to={`/login/withdraw`}
                onClick={() => navigateTo(`/login/withdraw`)}
                >
                  <AiOutlineMinus size={20} /> <p>Withdraw</p>{" "}
                </Link>
              </li>
              <li>
                <Link className="link"
                to={`/login/deposittransaction`}
                onClick={() => navigateTo(`/login/deposittransaction`)}>
                  <LuHistory size={20} /> <p> Deposit Transactions</p>
                </Link>
              </li>
              <li>
                <Link className="link"
                to={`/login/withdrawtransaction`}
                onClick={() => navigateTo(`/login/withdrawtransaction`)}>
                  <LuHistory size={20} />
                  <p>Withdraw Transactions </p>{" "}
                </Link>
              </li>
              <li>
                  <Link className="link"
                  to={`/login/accountsettings`}
                  onClick={() => navigateTo(`/login/accountsettings`)}>
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
            
        <main className="deposit__page">
        <div className="user__info">
          <h1>Withdraw Funds</h1>
          <div>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
          </div>
        </div>
        </main>
          </>
        )}
        <div className="icons">
          {menu && !toggle ? (
            <MdClose className="menu-icon" size={30} onClick={handleMenuBtn} />
          ) : (
            <IoMenu className="close-icon" size={30} onClick={handleMenuBtn} />
          )}
          <IoIosNotifications size={30} className="notification-icon" />
        </div>
        <div className="dashboard">
          <div className="header">
            <div className="user">
              <FaUserTie className="user-img" size={30} />
              <p>{user.email}</p>
              <FaCaretDown size={20} />
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
              <FaCaretDown size={20} />
            </div>
          </div>
          <main className="dashboard__widget1">
            <TradingViewWidget className="widgetbox" />
          </main>
        </div> 
        </>)
}

export default Withdraw;