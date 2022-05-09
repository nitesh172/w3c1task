import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../Components";

const Home = () => {
  const [cookies, setCookies, removeCookie] = useCookies(["userToken"]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!cookies.token) {
      navigate("/auth");
    } else {
      navigate("/");
    }
  }, [cookies, navigate]);
  return (
    <div className="loginContainer">
      <div>
        <div className="heading">
          {cookies.user.name}
          <span className="dot">.</span>
        </div>
      </div>
      <CustomButton
        text="Log out"
        onClick={() => {
          removeCookie("token", { path: "/" });
          removeCookie("user", { path: "/" });
          navigate("/auth");
        }}
      />
    </div>
  );
};

export default Home;
