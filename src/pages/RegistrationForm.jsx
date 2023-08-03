import React, { useState } from "react";
import "../components/style/RegistrationPage.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import carlogo from "../components/carLogo/carLogo.png";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(address);
    console.log(image);
    axios
      .post("http://192.168.31.6:4000/register", {name,email,password,address,image})
      .then((response) => {
        if (response.status === 200) {
          navigate("/loginform");
          return;
        }
      })
      .catch((error) => {
        alert(`${error} already register with email or password`);
      });
  };

  return (
    <>
      <div className="outerMainRegisterForm">
        <div className="innerMainRegisterForm">
          <div className="RegisterFormImage">
            <img src={carlogo} alt="" />
          </div>
          <div className="outerRegisterForm">
            <div className="RegisterFormForm">
              <form onSubmit={handleSubmit}>
              <label className="labelRegisterForm" htmlFor="name">
                  Name:
                </label>
                  <input className="inputRegister"
                  name="name" type="text" value={name} onChange={handleNameChange} />
                
                  <label className="labelRegisterForm" htmlFor="email">                  Email:
                  </label>
                  <input
                  className="inputRegister"
                  name="email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                  />
            
                <label className="labelRegisterForm" htmlFor="password">
                  Password:
                  </label>
                  <div className="passwordShowHide">
                  <input
                    className="inputRegister"
                    
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={handlePasswordChange}
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
                
                <label className="labelRegisterForm" htmlFor="address">
                  Address:
                </label>
                  <textarea className="inputRegister"
                  name="address" value={address} onChange={handleAddressChange} />
                
                <label className="labelRegisterForm" htmlFor="image">
                  Image:
                  </label>
                  <input
                  className="inputRegister"
                  name="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                
                <div className="allButton">
                  <button className="submitSignupForm" type="submit">
                    Register
                  </button>
                  <p className="loginButton">
                    Already have account ?{" "}
                    <Link to={"/loginform"} className="textTomato">
                      Login
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

export default RegistrationForm;
