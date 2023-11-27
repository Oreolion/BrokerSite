import { Link } from "react-router-dom";
import "/src/css/auth.css";

const SignUp = () => {
  return (
    <>
      <section className="signup__page">
        <div className="signup__logo">
          <Link className="link" to={"/"}>
            <h1>FFB</h1>
            <p>Fidelity First Brokers</p>
          </Link>
        </div>
        <div className="container">
          <h1>Create Your FFB Account</h1>
          <p>The world of Investing is already waiting...</p>

          <form action="">
            <div className="name">
              <input
                type="text"
                value=""
                name="first name"
                placeholder="First Name"
              />
              <input
                type="text"
                value=""
                name="last name"
                placeholder="Last Name"
              />
            </div>

            <input
              type="email"
              value=""
              name="email"
              placeholder="Email address"
            />

            <input
              type="password"
              value=""
              name="password"
              placeholder="Password"
            />
            <input
              type="text"
              value=""
              name="country"
              placeholder="Country of residence"
            />
            <p>Can’t find your country of residence?</p>
            <div className="agreement__box">
              <p>
                I agree to the FFB Payments T&Cs, FFB Metals T&Cs, FFB Group
                T&Cs, FFB GmbH T&Cs & BAM and confirm I’m acting under my own
                name and on my own behalf.{" "}
                <span>
                  <input type="checkbox" />
                </span>
              </p>
              <p>
                I agree to the FFB Group Privacy Policy{" "}
                <span>
                  <input type="checkbox" />
                </span>
              </p>
              <p>
                I accept the FFB Financial Services T&Cs and privacy policy and
                to receive documents via email.{" "}
                <span>
                  <input type="checkbox" />
                </span>
              </p>
            </div>
            <button>Create Account</button>
            <p>
              <Link className="link" to="/login">
                Already have an account? Login In...
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUp;
