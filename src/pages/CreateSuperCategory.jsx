import React, { useState } from "react";
import "../components/style/createSuperCategory.css";
import axios from "axios";
// import rollsroys from "../components/carLogo/rolls roys.jpg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateSuperCategory = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [count, setCount] = useState("");
  const [desc, setDesc] = useState("");
  const baseUrl=process.env.REACT_APP_BaseUrl

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    console.log({name:e.target.value, image:e.target.files});
    setImage(e.target.files[0]);
  };

  const handleCountChange = (e) => {
    setCount(e.target.value);
  };
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // const formData = new FormData()
        // formData.append("image", image)
        // formData.append("desc", desc)
        // formData.append("name", name)
        // formData.append("count", count)

        
        const login_key = localStorage.getItem("login_data");
      
        const response = await axios.post(baseUrl+'/super-catagory', {name,image,desc,count}, { headers: {'Content-Type': 'multipart/form-data',Authorization: `${login_key}`}});
        
      console.log(response, "...........response");
      console.log(response.data, ".........data");
      console.log(response.data.status, ".......status");
      console.log(response.data.message, ".......message");
      if (response.status === 200) {
        toast.dark("SuperCategory Add successFull");
        return;
      }
    } catch (e) {
      toast.warn(`${e} & please aad SuperCategory carefully `);
      console.log(e, "object");
      // alert(`please enter valid email and mobile`);
      // navigate("/signup");
    }
    // setName("");
    // setImage("");
    // setCount("");
    // setDesc("");
  };

  return (
    <>
      <div className="outerMainRegisterForm">
        <div className="innerMainRegisterForm">
          <div className="RegisterFormImage">
            {/* <img src={rollsroys} alt="" /> */}
          </div>
          <h2>Add SuperCategory Carefully</h2>
          <div className="outerRegisterForm">
            <div className="RegisterFormForm">
              <form className="" onSubmit={handleSubmit}>
                <label className="labelRegisterForm" htmlFor="name">
                  Name:
                </label>
                <input
                  className="inputRegister"
                  type="text"
                  id="name"
                  placeholder="Enter SuperCategory Name"
                  value={name}
                  onChange={handleNameChange}
                  required
                  autoFocus
                />

                <label className="labelRegisterForm" htmlFor="image">
                  Image:
                </label>
                <input
                  className="inputRegister"
                  type="file"
                  id="image"
                  placeholder="Enter SuperCategory Image"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                />

                <label className="labelRegisterForm" htmlFor="count">
                  Count:
                </label>
                <input
                  className="inputRegister"
                  type="number"
                  id="count"
                  placeholder="Enter SuperCategory Count"
                  value={count}
                  onChange={handleCountChange}
                />

                <label className="labelRegisterForm" htmlFor="desc">
                  description:
                </label>

                <input
                  className="inputRegister"
                  type="text"
                  id="desc"
                  placeholder="Enter SuperCategory Description"
                  value={desc}
                  onChange={handleDescChange}
                />

                <div className="allButton">
                  <button className="submitSignupForm" type="submit">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateSuperCategory;
