import { Link, useNavigate } from "react-router-dom";

const HomeFooter = () => {

    const navigate = useNavigate();

    const navigateTo = (url) => {
        console.log("clicked");
        navigate(url);
      };

  return (
    <>
      <footer>
        <div className="inner__footer">
          <div className="box">
            <div className="logo">
            <Link className="link" to={"/"}>
                <h1>FFB</h1>
                <p>Fidelity First Brokers</p>
              </Link>
            </div>
          </div>
          <ul className="box">
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
          <ul className="box">
            <li>FAQ</li>
            <li><Link
              to={`/login`}
              className="link"
              onClick={() => navigateTo(`/login`)}
            >
              Login
            </Link></li>
            <li><Link
              to={`/signup`}
              className="link"
              onClick={() => navigateTo(`/signup`)}
            >
              Sign Up
            </Link></li>
            <li><Link
              to={`/services`}
              className="link"
              onClick={() => navigateTo(`/services`)}
            >
              LEARN MORE
            </Link></li>
          </ul>
          <ul className="box">
            <li>LEGAL</li>
            <li>Legal information</li>
            <li>Privacy Policy</li>
            <li>Regulations</li>
            <li>Risk Disclaimer</li>
          </ul>
          <ul className="box">
            <li>Invest</li>
            <li>Forex</li>
            <li>Commodities</li>
            <li>Stocks</li>
            <li>Cryptocurrencies</li>
            <li>Cashback Rebates</li>
          </ul>
          <ul className="box">
            <li>Earn</li>
            <li>Cash Plus</li>
            <li>Staking</li>
            <li>Best Stocks</li>
            <li>Tell-a-Friend</li>
            <li>Affiliate programme</li>
          </ul>
        </div>
        <p> &copy; FFB 2023 || all rights reserved</p>
        <p>
          This website is operated by FP Markets LLC. FP Markets LLC is a
          company registered with FSA of St. Vincent and the Grenadines, with
          registration number 126 LLC 2019 and registered address at Richmond
          Hill Road, Kingstown, VC0100, St. Vincent and the Grenadines. FP
          Markets is a trading name of FP Markets LLC. Risk Warning: Derivative
          products are highly leveraged, carry a high level of risk and may not
          be appropriate for all investors. The legal documents should be
          considered before entering into transactions with us. The information
          on this website is not intended for residents of certain jurisdictions
          and are not intended for distribution to, or use by, any person or
          entity in any jurisdiction where such distribution or use may be
          contrary to any local laws or regulations of that jurisdiction. Those
          who access this website do so on their own initiative. The release
          does not constitute any invitation to trade. FP Markets operates
          through the following entities: First Prudential Markets Pty Ltd, an
          ASIC regulated provider of Derivatives and Forex trading services (ABN
          16 112 600 281, AFS License No. 286354) First Prudential Markets Ltd
          (registration number HE 372179), a company authorised and regulated by
          the Cyprus Securities and Exchange Commission (CySEC License number
          371/18) with registered address at 35 Omonoias, UAD Court, 7th Floor,
          3045 Limassol, Cyprus. FP Markets (Pty) Ltd, a Financial Services
          Provider authorised and regulated by the Financial Sector Conduct
          Authority in South Africa (FSP Number 50926) First Prudential Markets
          Limited, a company authorized and regulated by the Financial Services
          Authority (FSA) in Seychelles with License Number SD130 FP Markets
          Ltd, an Investment Dealer, authorized and regulated by the Financial
          Services Commission in Mauritius (License No. GB21026264) Some
          payments may be processed by our group entity, Bivalto Ltd, an entity
          registered under the laws of the Republic of Cyprus, with registration
          number HE 442382, having its registered address at Griva Digeni,109,
          Aigeo Court, 3101, Limassol Cyprus. We do not offer our services to
          residents of certain jurisdictions such as Afghanistan, Cuba, Iraq,
          Islamic Republic of Iran, Liberia, Libya, Myanmar, Palestine, Russian
          Federation, Somalia, Syrian Arab Republic, Sudan, Yemen, United States
          and to jurisdictions on the FATF and EU/UN sanctions lists. * / ^ Sat
          & Sun 08:00am to 16:00pm (GMT+2) ** / ^^ Terms and conditions apply.
        </p>
      </footer>
    </>
  );
};

export default HomeFooter;
