import { GrSecure } from "react-icons/gr";
import { TbWorldCheck } from "react-icons/tb";
import { BsCashCoin } from "react-icons/bs";
import { MdMobileScreenShare, MdPayments, MdConnectWithoutContact   } from "react-icons/md";


const HomePageSection3 = () => {
  return (
    <>
        <section className="homepagesection3">
            <div className="inner__box">

            <div className="box">
                <GrSecure className="icon" size={40}/>
                <h3>STRONG SECURITY</h3>
                <p>Our website is under very reliable information protection</p>
            </div>
            <div className="box">
                <TbWorldCheck className="icon" size={40} />
                <h3> REPRESENTATIVES WORLDWIDE</h3>
                <p>We Cooperate with hundreds of representatives in dozens of countries</p>

            </div>
            <div className="box">
                <BsCashCoin className="icon" size={40}/>
                <h3> INSTANT PAYOUT</h3>
                <p>When your balance reaches the threshold, you can use the function to make a withdrawal</p>

            </div>
            <div className="box">
                <MdMobileScreenShare className="icon" size={40}/>
                <h3> MOBILE APP</h3>
                <p>Our trading mobile app will soon be available in Play Store and Appstore</p>

            </div>
            <div className="box">
                <MdPayments className="icon" size={40}/>
                <h3> PROGRESSIVE WEEKLY INCOME</h3>
                <p>Your daily earnings depend solely on the size of your deposits</p>

            </div>
            <div className="box">
                <MdConnectWithoutContact className="icon" size={40}/>
                <h3> 24/7 ONLINE SUPPORT</h3>
                <p>You can get a full-fledged consultation by contacting our customer support</p>

            </div>
            </div>
            

        </section>
    </>
  )
}

export default HomePageSection3