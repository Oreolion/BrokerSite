import { Link, useNavigate } from "react-router-dom";
import "/src/css/auth.css";
import { useState } from "react";
import {UserAuth} from './AuthContext'


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setError] = useState("")
  const {signIn} = UserAuth()
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
        await signIn(email, password)
        navigate("/dashboardpage")

    } catch (e) {
        setError(e.message)
        console.log(e.message);
    }

  }

  return (
    <>
      <section className="login__section">
        <div className="innerbox">
          <div className="left__container">
            <div className="logo">
              <Link className="link" to={"/"}>
                <h1>FFB</h1>
                <p>Fidelity First Brokers</p>
              </Link>
            </div>
            <h1>Welcome Back</h1>
            <p>The world of Investing is already waiting...</p>

            <form action="" onSubmit={handleSubmit}>
              <label htmlFor="email">
                Email address <br />{" "}
              </label>
              <input
                type="email"
                value={email}
                name="password"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password">
                Password <br />{" "}
              </label>
              <input
                type="password"
                value={password}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <p>Forgot your password?</p>
              <button type="submit">Log in</button>
              <p>
                <Link className="link" to="/signup">
                  Don&apos;t have an account yet? Sign Up...
                </Link>
              </p>
            </form>
          </div>
          <div className="right__container">
            <h1>Invest in you, no matter where you’re going</h1>
            <p>
              No matter your budget, take a confident step closer to your goals
              today and embrace a promising future.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
