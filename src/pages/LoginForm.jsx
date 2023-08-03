import React, { useState } from "react";
import "../components/style/loginform.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import carlogo from "../components/carLogo/carLogo.png";

const LoginForm = () => {
  const navigate = useNavigate();
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const baseUrl=process.env.REACT_APP_BaseUrl

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    setLoginUser({
      ...loginUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("object");
    try {
      var response = await axios.post(
        baseUrl+"/login",
        loginUser
      )

      console.log(response, "status34567890");
      console.log(response,"...........response");
      console.log(response.data, "data");
      if (response.data.status === 1) {
        localStorage.setItem("login_data", response.data.token);
        if (localStorage.getItem("login_data")) {
          toast.dark("Login successFull");
          navigate("/");
        }
      }
    } catch (e) {
      // toast.warn(`${e.response.status} & ${e.response.status} `);
      // console.log(`${e.response.status} & ${e.response.data.message}`);
      console.log(e.response,"object");
      // alert(`please enter valid email and mobile`);
      // navigate("/signup");
    }
  };

  return (
    <>
      <div className="outerMainLoginForm">
        <div className="innerMainLoginForm">
          <div className="loginFormImage">
            <img src={carlogo} alt="" />
          </div>
          <div className="outerLoginForm">
            <div className="loginFormForm">
              <form className="" onSubmit={handleSubmit}>
                <label className="labelLoginForm" htmlFor="email">
                  Email:
                </label>
                <input
                  className="inputLogin"
                  type="email"
                  name="email"
                  placeholder="Enter Your Email "
                  value={loginUser.email}
                  onChange={handleChange}
                  required
                  autoFocus
                />
                <label className="labelLoginForm" htmlFor="password">
                  Password:
                </label>
                <div className="passwordShowHide">
                  <input
                    className="inputLogin"
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    placeholder="Enter Your Password"
                    value={loginUser.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    className="passwordHideShow"
                    type="button"
                    onClick={handleTogglePassword}
                  >
                    {passwordVisible ? (
                      <i className="bi bi-eye-slash"></i>
                    ) : (
                      <i className="bi bi-eye"></i>
                    )}
                  </button>
                </div>
                <div className="allButton">
                  <button className="submitLoginForms" type="submit">
                    LogIn
                  </button>
                  <p className="signupButton">
                    Don't have account ?{" "}
                    <Link to={"/registrationform"} className="textRed">
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
