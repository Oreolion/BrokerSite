import { Link, useNavigate } from "react-router-dom";
import "/src/css/auth.css";
import { useState } from "react";
import {UserAuth} from "./AuthContext"

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [country, setCountry] = useState("");
  const [, setError] = useState("")
  const {createUser} = UserAuth()
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    try {
        await createUser(email, password, firstname, lastname, country)
        navigate("/dashboardpage")

    } catch (e) {
        setError(e.message)
        console.log(e.message);
    }

  };

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

          <form action="" onSubmit={handleSubmit}>
            <div className="name">
              <input
                type="text"
                value={firstname}
                name="first name"
                placeholder="First Name"
                onChange={(e) => setFirstname(e.target.value)}
              />
              <input
                type="text"
                value={lastname}
                name="last name"
                placeholder="Last Name"
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>

            <input
              type="email"
              value={email}
              name="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              value={password}
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="text"
              value={country}
              name="country"
              placeholder="Country of residence"
              onChange={(e) => setCountry(e.target.value)}
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
