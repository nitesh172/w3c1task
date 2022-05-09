import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CustomButton, CustomInput } from "../../Components";
import { loginUser } from "../../utils/verify";
import { useCookies } from "react-cookie";
import "./Verification.css";

const otpState = {
  first: "",
  second: "",
  third: "",
  fourth: "",
  fifth: "",
  sixth: "",
};

var click = 0

const Verification = () => {
  const [otp, setOtp] = useState(otpState);
  const [cookies, setCookies] = useCookies(["userToken"]);
  const state = useLocation();
  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();
  const fourthRef = useRef();
  const fifthRef = useRef();
  const sixthRef = useRef();
  const navigate = useNavigate();
  return (
    <div className="loginContainer">
      <div>
        <div className="heading">
          OTP Verification<span className="dot">.</span>
        </div>
        <div className="deatilText">
          Enter OTP sent to your email<span className="textButton">.</span>
        </div>
      </div>
      <div className="otpBox">
        <CustomInput
          refernce={firstRef}
          size="fullwidth"
          type="text"
          maxLength={1}
          textalign="center"
          onChange={(e) => {
            setOtp({ ...otp, first: e.target.value });
            e.target.value && secondRef.current.focus();
          }}
        />
        <CustomInput
          refernce={secondRef}
          size="fullwidth"
          type="text"
          maxLength={1}
          textalign="center"
          onChange={(e) => {
            setOtp({ ...otp, second: e.target.value });
            e.target.value
              ? thirdRef.current.focus()
              : firstRef.current.focus();
          }}
        />
        <CustomInput
          refernce={thirdRef}
          size="fullwidth"
          type="text"
          maxLength={1}
          textalign="center"
          onChange={(e) => {
            setOtp({ ...otp, third: e.target.value });
            e.target.value
              ? fourthRef.current.focus()
              : secondRef.current.focus();
          }}
        />
        <CustomInput
          refernce={fourthRef}
          size="fullwidth"
          type="text"
          maxLength={1}
          textalign="center"
          onChange={(e) => {
            setOtp({ ...otp, fourth: e.target.value });
            e.target.value
              ? fifthRef.current.focus()
              : thirdRef.current.focus();
          }}
        />
        <CustomInput
          refernce={fifthRef}
          size="fullwidth"
          type="text"
          maxLength={1}
          textalign="center"
          onChange={(e) => {
            setOtp({ ...otp, fifth: e.target.value });
            e.target.value
              ? sixthRef.current.focus()
              : fourthRef.current.focus();
          }}
        />
        <CustomInput
          refernce={sixthRef}
          size="fullwidth"
          type="text"
          maxLength={1}
          textalign="center"
          onChange={(e) => {
            setOtp({ ...otp, sixth: e.target.value });
            !e.target.value && fifthRef.current.focus();
          }}
        />
      </div>
      <div>
        <CustomButton
          text="Continue"
          onClick={() => {
            click++;
            if (click <= 1) {
              loginUser(state.state, otp, setCookies, navigate, cookies);
              click--;
            }
          }}
        />
      </div>
    </div>
  );
};

export default Verification;
