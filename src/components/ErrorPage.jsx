import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <section style={{ textAlign: "center", marginTop: 200, fontSize: 25, color: "red" }}>
        <p>Error 404!!!</p>
        <Link to='/' style={{ fontSize: 20, color: "red"}} >
        &#60; &#60; &#60; return to Home page
        </Link>
      </section>
    </>
  );
};

export default ErrorPage;
