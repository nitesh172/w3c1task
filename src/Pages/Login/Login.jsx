import React, { useEffect, useState } from "react";
import { CustomButton, CustomInput } from "../../Components";
import "./Login.css";
import { create } from "../../utils/index";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const loginState = {
  email: "",
  name: "",
};

const Login = () => {
  const [cookies] = useCookies(["userToken"]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!cookies.token) {
      navigate("/auth");
    } else {
      navigate("/");
    }
  }, [cookies, navigate]);
  const [login, setLogin] = useState(loginState);
  return (
    <div className="loginContainer">
      <div>
        <div className="heading">
          Login<span className="dot">.</span>
        </div>
        <div className="deatilText">
          Enter Your deatil login with Otp<span className="textButton">.</span>
        </div>
      </div>
      <div>
        <CustomInput
          size="fullwidth"
          placeholder="Name"
          type="text"
          icon={"person"}
          onChange={(e) => {
            setLogin((prev) => {
              return { ...prev, name: e.target.value };
            });
          }}
        />
        <CustomInput
          size="fullwidth"
          placeholder="Email"
          type="text"
          icon={"alternate_email"}
          onChange={(e) => {
            setLogin((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
        />
      </div>
      <div>
        <CustomButton
          text="Continue"
          onClick={() => {
            create(login);
            navigate("/verify", { state: login });
          }}
        />
      </div>
    </div>
  );
};

export default Login;
