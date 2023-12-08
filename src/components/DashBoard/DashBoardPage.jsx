import { useNavigate } from "react-router";
import { UserAuth } from "../AuthPage/AuthContext";

const DashBoardPage = () => {
    const {user, logout} = UserAuth()
    const navigate = useNavigate()


    const handleLogOut = async () => {
        try {
            await logout()
            navigate("/")
            alert("You are logged out")

        } catch (e) {
            console.log(e.message);
        }
    }


  return (
    <>
        <section className="">
            <h1 className="">Account</h1>
            <p>User Email: {user?.email}</p>
            <p>User Unique ID: {user?.uid}</p>
            <button onClick={handleLogOut} className="">Logout</button>
        </section>
    
    </>
  )
};

export default DashBoardPage;
