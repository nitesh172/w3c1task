import React from "react";
import { CustomButton, CustomInput } from "../../Components";
import "./Login.css";

const Login = () => {
  return (
    <div className="loginContainer">
      <div>
        <div className="heading">
          Login<span className="dot">.</span>
        </div>
        <div className="deatilText">Create a new account <span className="textButton">Sign Up</span></div>
      </div>
      <div>
        <CustomInput
          size="fullwidth"
          placeholder="Email"
          type="text"
          icon={"alternate_email"}
        />
        <CustomInput
          size="fullwidth"
          placeholder="Password"
          type="password"
          icon={"password"}
        />
      </div>
      <div>
        <CustomButton text="Login" />
      </div>
    </div>
  );
};

export default Login;
