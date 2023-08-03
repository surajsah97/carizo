import React, { useEffect, useState } from "react";
import "../components/style/createCategory.css";
import axios from "axios";
// import rollsroys from "../components/carLogo/rolls roys.jpg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateItem = () => {
  const [superCatList, setsuperCatList] = useState([]);
  const [CatList, setCatList] = useState([]);
  const [subCatList, setSubCatList] = useState([]);


  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");

  const [image, setImage] = useState(null);
  const [count, setCount] = useState("");
  const [desc, setDesc] = useState("");
  const [superCatagoryId, setSuperCatagoryId] = useState("");
  const [subCatagoryId, setSubCatagoryId] = useState("");
  const [parentId, setParentId] = useState("");
  const [rating, setRating] = useState(0);

  const [price, setPrice] = useState(0);
  const baseUrl=process.env.REACT_APP_BaseUrl

  useEffect(() => {
    axios.get(baseUrl+"/super-catagory").then((value) => {
      if (value.data.status == 1) {
        setsuperCatList(value.data.data);
      }
    });
  }, []);
  useEffect(()=>{
    axios.get(baseUrl+"/sub-catagory").then((value) => {
      if (value.data.status == 1) {
        setSubCatList(value.data.data);
      }
    });
    // handleSubCategoryChange
  },[])
  useEffect(() => {
    axios.get(baseUrl+"/catagory").then((value) => {
      if (value.data.status == 1) {
        setCatList(value.data.data);
      }
    });
  }, []);

const handleSubCategoryChange=(e)=>{
    setSubCatagoryId(e.target.value)
}

  const handleCategoryChange=(e)=>{
    setParentId(e.target.value)
  }

  const handleSuperCategoryChange = (e) => {
    setSuperCatagoryId(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    console.log({ name: e.target.value, image: e.target.files });
    setImage(e.target.files[0]);
  };

  const handleCountChange = (e) => {
    setCount(e.target.value);
  };
  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };
  const handleRatingChange=(e)=>{
    setRating(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("desc", desc);
      formData.append("name", name);
      formData.append("count", count);
      formData.append("superCatgoryId", superCatagoryId);
      formData.append("subCatagoryId", subCatagoryId);
      formData.append("rating", rating);


      formData.append("parentId", parentId);

      formData.append("price", price);

      // {
      const login_key = localStorage.getItem("login_data");

      const response = await axios.post(
        baseUrl+"/item   ",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `${login_key}`,
          },
        }
      );

      console.log(response, "...........response");
      console.log(response.data, ".........data");
      console.log(response.data.status, ".......status");
      console.log(response.data.message, ".......message");
      if (response.status === 200) {
        toast.dark("Product Add successFull");
        // setName("");
        // setImage("");
        // setCount("");
        // setDesc("");
        // setPrice("");
        // setParentId("");
        return;
      }
    } catch (e) {
      toast.warn(`${e} & please aad product carefully `);
      console.log(e, "object");
      // alert(`please enter valid email and mobile`);
      // navigate("/signup");
    }
  };

  return (
    <>
      <div className="outerMainRegisterForm">
        <div className="innerMainRegisterForm">
          <div className="RegisterFormImage">
            {/* <img src={rollsroys} alt="" /> */}
          </div>
          <h2>Add Category Carefully</h2>
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
                  placeholder="Enter Category Name"
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
                  placeholder="Enter Category Image"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                />
                
                <label className="labelRegisterForm" htmlFor="desc">
                  brand:
                </label>

                <input
                  className="inputRegister"
                  type="text"
                  id="desc"
                  placeholder="Enter Category Description"
                  value={brand}
                  onChange={handleBrandChange}
                />

                <label className="labelRegisterForm" htmlFor="count">
                  Count:
                </label>
                <input
                  className="inputRegister"
                  type="number"
                  id="count"
                  placeholder="Enter Category Count"
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
                  placeholder="Enter Category Description"
                  value={desc}
                  onChange={handleDescChange}
                />

                <label className="labelRegisterForm" htmlFor="parentid">
                  SuperCategory:
                </label>
                <select
                  className="inputRegister"
                  onChange={handleSuperCategoryChange}
                  id="parentid"
                >
                  <option value="">Choose SuperCategory</option>
                  {superCatList.map((x, i) => (
                    <option key={i} value={x.id}>
                      {x.name}
                    </option>
                  ))}
                </select>

                <label className="labelRegisterForm" htmlFor="parentid">
                  Category:
                </label>
                <select
                  className="inputRegister"
                  onChange={handleCategoryChange}
                  id="parentid"
                >
                  <option value="">Choose Category</option>
                  {CatList.map((x, i) => (
                    <option key={i} value={x.id}>
                      {x.name}
                    </option>
                  ))}
                </select>

                <label className="labelRegisterForm" htmlFor="parentid">
                 Sub Category:
                </label>
                <select
                  className="inputRegister"
                  onChange={handleSubCategoryChange}
                  id="parentid"
                >
                  <option value="">Choose Category</option>
                  {subCatList.map((x, i) => (
                    <option key={i} value={x.id}>
                      {x.name}
                    </option>
                  ))}
                </select>


                <label className="labelRegisterForm" htmlFor="price">
                  Price:
                </label>

                <input
                  className="inputRegister"
                  type="number"
                  id="price"
                  placeholder="Enter Category Price"
                  value={price}
                  onChange={handlePriceChange}
                />

<label className="labelRegisterForm" htmlFor="price">
                  Rating:
                </label>

                <input
                  className="inputRegister"
                  type="number"
                  id="price"
                  placeholder="Enter Category Price"
                  value={rating}
                  onChange={handleRatingChange}
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

export default CreateItem;
