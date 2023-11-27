import { Link, useNavigate } from "react-router-dom"

const HomePageSection4 = () => {


    const navigate = useNavigate();
    const navigateTo = (url) => {
        console.log("clicked");
        navigate(url);
      };

  return (
    <>
        <section className="homepagesection4">
            <div className="innerbox">
                <h1>JOIN OTHER REGISTERED USERS</h1>
                <p>Open Account today and start trading</p>
                <button><Link
              to={`/signup`}
              className="link"
              onClick={() => navigateTo(`/signup`)}
            >
              Sign Up
            </Link></button>
            

            </div>

        </section>
    </>
  )
}

export default HomePageSection4