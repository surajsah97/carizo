import React, { useEffect, useState } from "react";
import "../components/style/createCategory.css";
import axios from "axios";
// import rollsroys from "../components/carLogo/rolls roys.jpg";
import { toast } from "react-toastify";
import { MultiSelect } from "react-multi-select-component";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


const CreateItemDetail = () => {
  const [itemList, setItemList] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState([]);
  const [brand, setBrand] = useState("")
  const [itemNames, setitemNames] = useState([]);

  
  const [count, setCount] = useState("");
  const [desc, setDesc] = useState("");
  const [parentId, setParentId] = useState("");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [rating, setRating] = useState(0);
  const [isCashOnDelivary, setIsCashOnDelivary] = useState(false);
  const [returnPolicy, setReturnPolicy] = useState(false);
  const [warantyPeriod, setWarantyPeriod] = useState("");
  const [mappingItem, setMappingItem] = useState([]);
  const [itemsForMatch, setitemsForMatch] = useState([]);
  const [key, setkey] = useState({});
  const [value, setvalue] = useState({});
  const [val, setval] = useState("");
  const [values, setvalues] = useState("");
  const [valueLIst, setvalueLIst] = useState([]);
  const [AdCall, setAdCall] = useState(1);

  
const navigate=useNavigate()
  
  const [title, setTitle] = useState("");
  let baseUrl=process.env.REACT_APP_BaseUrl


  useEffect(() => {
    axios.get(baseUrl+"/item").then((value) => {
      if (value.data.status == 1) {
        setitemNames([...value.data.data.map(el=>{
return   { label: el.name, value: el.id,image:el.image }
        })])
        console.log({itemNames});

        setItemList(value.data.data);
      }
    });
  }, []);

const handleChange=(item)=>{
console.log({item});
setitemsForMatch([...item])


// let items=mappingItem.filter(el=>{return el[item[0]["value"]]==undefined})
// if(items.length==mappingItem.length||mappingItem.length==0){
// setMappingItem([...mappingItem,{[item[0].value]:item[0].image}])
// setitemsForMatch([...itemsForMatch,...item])
// }
// else{
//   setitemsForMatch([...itemsForMatch.filter(el=>{
// return el.value==item[0]["value"]
//   })])
// setMappingItem([...items])

// }
}


  const handleSuperCategoryChange = (e) => {
    console.log({id:e.target.value});
    setParentId(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    console.log(e.target.files,"----------");
    console.log({ name: e.target.value, image: e.target.files });
    setImage(e.target.files);
  };

  const handleCountChange = (e) => {
    setCount(e.target.value);
  };
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  const handleSubmit = async (e) => {
    console.log({image});
    e.preventDefault();
    try {
      if(itemsForMatch.length>0){
      setMappingItem([...itemsForMatch.filter(el=>{
        console.log({el});
        return {[el.value]:el.image}
          })])
        }
      const formData = new FormData();
      Array.from(image).map(el=>{
      formData.append("image", el);

      })
      // formData.append("image", image);
      let dd=Object.keys(key)
      let cc=dd.length%2==0?dd.slice(0,dd.length/2):dd.slice(0,parseInt(dd.length/2)+1)
      // console.log({dddddd:[...[...cc].map((el,i)=>{let obj={};obj[key["key"+i]]=key["value"+i];return obj})]});
      formData.append("fectures",[...[...cc].map((el,i)=>{let obj={};obj[key["key"+i]]=key["value"+i];return obj})])
      formData.append("desc", desc);
      formData.append("name", name);
      formData.append("count", count);
      formData.append("itemId", parentId);
      formData.append("price", price);
      formData.append("rating", rating);
      formData.append("brand", brand);
      formData.append("isCashOnDelivary", isCashOnDelivary);
      formData.append("discount", discount);

      formData.append("returnPolicy", returnPolicy);

      formData.append("warantyPeriod", warantyPeriod);
      console.log({formData},"=======>");
      let mapData={}
      itemsForMatch.filter(el=>{
        mapData[el.value]=el.image
        // console.log({el});
        // return {[el.value]:el.image}
          })
      formData.append("mappingItem",JSON.stringify(mapData));
      formData.append("title", title);


      // {
      const login_key = localStorage.getItem("login_data");

      const response = await axios.post(
        baseUrl+"/item/item-detail",
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
        setName("");
        setImage("");
        setCount("");
        setDesc("");
        setPrice("");
        setParentId("");
        return;
      }
    } catch (e) {
      toast.warn(`${e} & please aad product carefully `);
      console.log(e, "object");
      navigate("/login")
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

<label className="labelRegisterForm" htmlFor="name">
                  title:
                </label>
                <input
                  className="inputRegister"
                  type="text"
                  id="name"
                  placeholder="Enter Category Name"
                  value={title}
                  onChange={(e)=>{setTitle(e.target.value)}}
                  required
                  autoFocus
                />

                <label className="labelRegisterForm" htmlFor="image">
                  Image:
                </label>
                <input
                  className="inputRegister"
                  type="file"
                  multiple  
                  id="image"
                  placeholder="Enter Category Image"
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
                  placeholder="Enter Category Count"
                  value={count}
                  onChange={handleCountChange}
                />
                <label className="labelRegisterForm" htmlFor="count">
                  matching item:
                </label>
                <MultiSelect
        options={itemNames}
        value={itemsForMatch}
        onChange={handleChange}
        labelledBy="Select"
      />

<label className="labelRegisterForm" htmlFor="parentid">
CashOnDelivary:
                </label>
                <select
                  className="inputRegister"
                  onChange={(e)=>{setIsCashOnDelivary(e.target.value)}}
                  id="parentid"
                >
                  <option value="true">True</option>
                  <option value="false">False</option>                  
                </select>

                
<label className="labelRegisterForm" htmlFor="parentid">
returnPolicy:
                </label>
                <select
                  className="inputRegister"
                  onChange={(e)=>{setReturnPolicy(e.target.value)}}
                  id="parentid"
                >
                  <option value="true">True</option>
                  <option value="false">False</option>                  
                </select>
                <label className="labelRegisterForm" htmlFor="desc">
                           brand:
                </label>

                <input
                  className="inputRegister"

                  type="text"
                  id="desc"
                  placeholder="Enter Category Description"
                  value={brand}
                  onChange={(e)=>{setBrand(e.target.value)}}
                />
                           <label className="labelRegisterForm" htmlFor="desc">
                           discount:
                </label>

                <input
                  className="inputRegister"

                  type="number"
                  id="desc"
                  placeholder="Enter Category Description"
                  value={discount}
                  onChange={(e)=>{setDiscount(e.target.value)}}
                />

<label className="labelRegisterForm" htmlFor="desc">
rating:
                </label>

                <input
                  className="inputRegister"

                  type="number"
                  id="desc"
                  placeholder="Enter Category Description"
                  value={rating}
                  onChange={(e)=>{setRating(e.target.value)}}
                />
     
     <label className="labelRegisterForm" htmlFor="desc">
     warantyPeriod:
                </label>

                <input
                  className="inputRegister"
                  type="text"
                  id="desc"
                  placeholder="Enter Category Description"
                  value={warantyPeriod}
                  onChange={(e)=>{setWarantyPeriod(e.target.value)}}
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
                  item:
                </label>
                <select
                  className="inputRegister"
                  onChange={handleSuperCategoryChange}
                  id="parentid"
                >
                  <option value="">Choose SuperCategory</option>
                  {itemList.map((x, i) => (
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
                fectures
                </label>
                {Array(AdCall).fill().map((_, index) => {
                  return(
                   <div className="row">
                  <div className="col-6">
                <input
                  className="inputRegister"
                  type="text"
                  id="price"
                  
                  placeholder="Add your properties"
                  value={Object.keys(key).length>0?key["key"+index]:""}
                  onChange={(e)=>{e.preventDefault();setkey({...key,["key"+index]:e.target.value})}}
                  //{...key,["name "+name]:e.target.value}
                />
                </div>
                <div className="col-6">
                <input
                  className="inputRegister"
                  type="text"
                  id="price"
                  placeholder="Add your properties desc"
                  value={Object.keys(key).length>0?key["value"+index]:""}
                  onChange={(e)=>{e.preventDefault();setkey({...key,["value"+index]:e.target.value})}}
                />
                </div>
                </div>)
                })}
                <button onClick={(e)=>{setAdCall(AdCall+1)}}>add</button>

                <div className="allButton">
                  <button className="submitSignupForm" type="submit">
                    Add item
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

export default CreateItemDetail;
