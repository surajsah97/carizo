import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import banner5 from '../assets/images/banner5.jpg'
import { Rating } from 'react-simple-star-rating'


const Shop = () => {
  const [data, setdata] = useState([])
  const location=useLocation()
  let baseUrl=process.env.REACT_APP_BaseUrl

  useEffect(() => {
    let loc=location.pathname.split("/")
    let id=loc[loc.length-1]
  let baseUrl=process.env.REACT_APP_BaseUrl
    axios.get(`${baseUrl}/catagory/item/${id}`).then(res => {
      console.log({ res: res.data }, "-===============ddgdjgdg==");
      if (res.data.status == 1) {
        setdata(res.data.data)
      }
      else if (res.data.status == 2) {
        setdata(res.data.data)

      }
      // setdata([])
    }).catch(err => {
      setdata([])

    })

    
    
  }, [])

  const breadcrumbStyle = {
    backgroundImage: 'url("/assets/images/banner5.jpg")', // Replace with the URL of your background image
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  };
  
  return (
    <div>
      {/* <!-- START SECTION BREADCRUMB --> */}
      <div className="breadcrumb_section" style={breadcrumbStyle}>
        <div className="container">
          {/* <!-- STRART CONTAINER --> */}
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="page-title">
                <h1>Shop</h1>
              </div>
            </div>
            <div className="col-md-6">
              <ol className="breadcrumb justify-content-md-end">
                <li className="breadcrumb-item">
                  <Link href="#">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="#">Shop</Link>
                </li>
                <li className="breadcrumb-item active">Shop </li>
              </ol>
            </div>
          </div>
          {/* <img src={bannerp}/> */}
        </div>
        {/* <!-- END CONTAINER--> */}
      </div>
      {/* <!-- END SECTION BREADCRUMB --> */}

      {/* <!-- START MAIN CONTENT --> */}
      <div className="main_content">
        {/* <!-- START SECTION SHOP --> */}
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="row align-items-center mb-4 pb-1">
                  <div className="col-12">
                    <div className="product_header">
                      <div className="product_header_left">
                        <div className="custom_select"></div>
                      </div>
                      <div className="product_header_right">
                        <div className="products_view">
                          <Link
                            href="#javascript"
                            className="shorting_icon grid active"
                          >
                            <i className="ti-view-grid"></i>
                          </Link>
                        </div>
                        <div className="custom_select">
                          <select className="form-control form-control-sm">
                            <option value="order">Best Selling</option>
                            <option value="popularity">
                              Sort by popularity
                            </option>
                            <option value="date">Sort by newness</option>
                            <option value="price">
                              Sort by price: low to high
                            </option>
                            <option value="price-desc">
                              Sort by price: high to low
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row shop_container">
                  {data.map((ele,i)=>{
                    return (<div className="col-md-4 col-6" key={i}>
                    <div className="product">
                      {console.log({ele})}
                    <Link to={`/item/${ele.id}`}>
                      <div className="product_img">
                        
                          <img
                            src={ele.image}
                            alt="product_img1"
                          />
                       
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart">
                              <Link href="/cart">
                                <i className="icon-basket-loaded"></i> Add To
                                Cart
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-compare.html"
                                className="popup-ajax"
                              >
                                <i className="icon-shuffle"></i>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-quick-view.html"
                                className="popup-ajax"
                              >
                                <i className="icon-magnifier-add"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="icon-heart"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        
                      </div>
                      </Link>
                      <div className="product_info">
                        <h6 className="product_title">
                          <Link href="shop-product-detail.php">
                            {ele.name}
                          </Link>
                        </h6>
                        <div className="product_price" style={{height:"3rem"}}>
                          <span className="price">₹{ele.count}</span>
                          {console.log(ele.count)}
                          <del>₹{ele.count}</del>
                          <div className="on_sale">
                            <span>35% Off</span>
                          </div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div
                              className="product_rate"
                              style={{ width: `${(ele.rating/5)*100}%` }}
                            ></div>
                          </div>
                          {/* rating */}
                          {/* <Rating onClick={()=>{}} style={{height:""}} initialValue={ele.rating} /> */}
                          {/* <span className="rating_num">{ele.rating}</span> */}
                        </div>
                        <div className="pr_desc">
                          <p>
                            {ele.desc}
                          </p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch">
                            <span
                              className="active"
                              data-color="#87554B"
                            ></span>
                            <span data-color="#333333"></span>
                            <span data-color="#DA323F"></span>
                          </div>
                        </div>
                        <div className="list_product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart">
                              <Link href="#">
                                <i className="icon-basket-loaded"></i> Add To
                                Cart
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-compare.html"
                                className="popup-ajax"
                              >
                                <i className="icon-shuffle"></i>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-quick-view.html"
                                className="popup-ajax"
                              >
                                <i className="icon-magnifier-add"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="icon-heart"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>)
                  })}
                  <div className="col-md-4 col-6">
                    <div className="product">
                      <div className="product_img">
                        <Link href="shop-product-detail.php">
                          <img
                            src="assets/images/product_img1.jpg"
                            alt="product_img1"
                          />
                        </Link>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart">
                              <Link href="#">
                                <i className="icon-basket-loaded"></i> Add To
                                Cart
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-compare.html"
                                className="popup-ajax"
                              >
                                <i className="icon-shuffle"></i>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-quick-view.html"
                                className="popup-ajax"
                              >
                                <i className="icon-magnifier-add"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="icon-heart"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title">
                          <Link href="shop-product-detail.php">
                            Blue Dress For Woman
                          </Link>
                        </h6>
                        <div className="product_price">
                          <span className="price">₹45.00</span>
                          <del>₹55.25</del>
                          <div className="on_sale">
                            <span>35% Off</span>
                          </div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div
                              className="product_rate"
                              style={{ width: "80%" }}
                            ></div>
                          </div>
                          <span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus blandit massa enim. Nullam id varius
                            nunc id varius nunc.
                          </p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch">
                            <span
                              className="active"
                              data-color="#87554B"
                            ></span>
                            <span data-color="#333333"></span>
                            <span data-color="#DA323F"></span>
                          </div>
                        </div>
                        <div className="list_product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart">
                              <Link href="#">
                                <i className="icon-basket-loaded"></i> Add To
                                Cart
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-compare.html"
                                className="popup-ajax"
                              >
                                <i className="icon-shuffle"></i>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-quick-view.html"
                                className="popup-ajax"
                              >
                                <i className="icon-magnifier-add"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="icon-heart"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="product">
                      <div className="product_img">
                        <Link href="shop-product-detail.php">
                          <img
                            src="assets/images/product_img2.jpg"
                            alt="product_img2"
                          />
                        </Link>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart">
                              <Link href="#">
                                <i className="icon-basket-loaded"></i> Add To
                                Cart
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-compare.html"
                                className="popup-ajax"
                              >
                                <i className="icon-shuffle"></i>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-quick-view.html"
                                className="popup-ajax"
                              >
                                <i className="icon-magnifier-add"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="icon-heart"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title">
                          <Link href="shop-product-detail.php">
                            Lether Gray Tuxedo
                          </Link>
                        </h6>
                        <div className="product_price">
                          <span className="price">₹55.00</span>
                          <del>₹95.00</del>
                          <div className="on_sale">
                            <span>25% Off</span>
                          </div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div
                              className="product_rate"
                              style={{ width: "68%" }}
                            ></div>
                          </div>
                          <span className="rating_num">(15)</span>
                        </div>
                        <div className="pr_desc">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus blandit massa enim. Nullam id varius
                            nunc id varius nunc.
                          </p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch">
                            <span
                              className="active"
                              data-color="#847764"
                            ></span>
                            <span data-color="#0393B5"></span>
                            <span data-color="#DA323F"></span>
                          </div>
                        </div>
                        <div className="list_product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart">
                              <Link href="#">
                                <i className="icon-basket-loaded"></i> Add To
                                Cart
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-compare.html"
                                className="popup-ajax"
                              >
                                <i className="icon-shuffle"></i>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-quick-view.html"
                                className="popup-ajax"
                              >
                                <i className="icon-magnifier-add"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="icon-heart"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="product">
                      <span className="pr_flash">New</span>
                      <div className="product_img">
                        <Link href="shop-product-detail.php">
                          <img
                            src="assets/images/product_img3.jpg"
                            alt="product_img3"
                          />
                        </Link>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart">
                              <Link href="#">
                                <i className="icon-basket-loaded"></i> Add To
                                Cart
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-compare.html"
                                className="popup-ajax"
                              >
                                <i className="icon-shuffle"></i>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-quick-view.html"
                                className="popup-ajax"
                              >
                                <i className="icon-magnifier-add"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="icon-heart"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title">
                          <Link href="shop-product-detail.php">
                            woman full sliv dress
                          </Link>
                        </h6>
                        <div className="product_price">
                          <span className="price">₹68.00</span>
                          <del>₹99.00</del>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div
                              className="product_rate"
                              style={{ width: "87%" }}
                            ></div>
                          </div>
                          <span className="rating_num">(25)</span>
                        </div>
                        <div className="pr_desc">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus blandit massa enim. Nullam id varius
                            nunc id varius nunc.
                          </p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch">
                            <span
                              className="active"
                              data-color="#333333"
                            ></span>
                            <span data-color="#7C502F"></span>
                            <span data-color="#2F366C"></span>
                            <span data-color="#874A3D"></span>
                          </div>
                        </div>
                        <div className="list_product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart">
                              <Link href="#">
                                <i className="icon-basket-loaded"></i> Add To
                                Cart
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-compare.html"
                                className="popup-ajax"
                              >
                                <i className="icon-shuffle"></i>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-quick-view.html"
                                className="popup-ajax"
                              >
                                <i className="icon-magnifier-add"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="icon-heart"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="product">
                      <div className="product_img">
                        <Link href="shop-product-detail.php">
                          <img
                            src="assets/images/product_img4.jpg"
                            alt="product_img4"
                          />
                        </Link>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart">
                              <Link href="#">
                                <i className="icon-basket-loaded"></i> Add To
                                Cart
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-compare.html"
                                className="popup-ajax"
                              >
                                <i className="icon-shuffle"></i>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-quick-view.html"
                                className="popup-ajax"
                              >
                                <i className="icon-magnifier-add"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="icon-heart"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title">
                          <Link href="shop-product-detail.php">
                            light blue Shirt
                          </Link>
                        </h6>
                        <div className="product_price">
                          <span className="price">₹69.00</span>
                          <del>₹89.00</del>
                          <div className="on_sale">
                            <span>20% Off</span>
                          </div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div
                              className="product_rate"
                              style={{ width: "70%" }}
                            ></div>
                          </div>
                          <span className="rating_num">(22)</span>
                        </div>
                        <div className="pr_desc">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus blandit massa enim. Nullam id varius
                            nunc id varius nunc.
                          </p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch">
                            <span
                              className="active"
                              data-color="#333333"
                            ></span>
                            <span data-color="#A92534"></span>
                            <span data-color="#B9C2DF"></span>
                          </div>
                        </div>
                        <div className="list_product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart">
                              <Link href="#">
                                <i className="icon-basket-loaded"></i> Add To
                                Cart
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-compare.html"
                                className="popup-ajax"
                              >
                                <i className="icon-shuffle"></i>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-quick-view.html"
                                className="popup-ajax"
                              >
                                <i className="icon-magnifier-add"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="icon-heart"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="product">
                      <div className="product_img">
                        <Link href="shop-product-detail.php">
                          <img
                            src="assets/images/product_img5.jpg"
                            alt="product_img5"
                          />
                        </Link>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart">
                              <Link href="#">
                                <i className="icon-basket-loaded"></i> Add To
                                Cart
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-compare.html"
                                className="popup-ajax"
                              >
                                <i className="icon-shuffle"></i>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-quick-view.html"
                                className="popup-ajax"
                              >
                                <i className="icon-magnifier-add"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="icon-heart"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title">
                          <Link href="shop-product-detail.php">
                            blue dress for woman
                          </Link>
                        </h6>
                        <div className="product_price">
                          <span className="price">₹45.00</span>
                          <del>₹55.25</del>
                          <div className="on_sale">
                            <span>35% Off</span>
                          </div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div
                              className="product_rate"
                              style={{ width: "80%" }}
                            ></div>
                          </div>
                          <span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus blandit massa enim. Nullam id varius
                            nunc id varius nunc.
                          </p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch">
                            <span
                              className="active"
                              data-color="#87554B"
                            ></span>
                            <span data-color="#333333"></span>
                            <span data-color="#5FB7D4"></span>
                          </div>
                        </div>
                        <div className="list_product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart">
                              <Link href="#">
                                <i className="icon-basket-loaded"></i> Add To
                                Cart
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-compare.html"
                                className="popup-ajax"
                              >
                                <i className="icon-shuffle"></i>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-quick-view.html"
                                className="popup-ajax"
                              >
                                <i className="icon-magnifier-add"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="icon-heart"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="product">
                      <span className="pr_flash bg-danger">Hot</span>
                      <div className="product_img">
                        <Link href="shop-product-detail.php">
                          <img
                            src="assets/images/product_img6.jpg"
                            alt="product_img6"
                          />
                        </Link>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart">
                              <Link href="#">
                                <i className="icon-basket-loaded"></i> Add To
                                Cart
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-compare.html"
                                className="popup-ajax"
                              >
                                <i className="icon-shuffle"></i>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-quick-view.html"
                                className="popup-ajax"
                              >
                                <i className="icon-magnifier-add"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="icon-heart"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title">
                          <Link href="shop-product-detail.php">
                            Blue casual check shirt
                          </Link>
                        </h6>
                        <div className="product_price">
                          <span className="price">₹55.00</span>
                          <del>₹95.00</del>
                          <div className="on_sale">
                            <span>25% Off</span>
                          </div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div
                              className="product_rate"
                              style={{ width: "68%" }}
                            ></div>
                          </div>
                          <span className="rating_num">(15)</span>
                        </div>
                        <div className="pr_desc">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus blandit massa enim. Nullam id varius
                            nunc id varius nunc.
                          </p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch">
                            <span
                              className="active"
                              data-color="#87554B"
                            ></span>
                            <span data-color="#333333"></span>
                          </div>
                        </div>
                        <div className="list_product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart">
                              <Link href="#">
                                <i className="icon-basket-loaded"></i> Add To
                                Cart
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-compare.html"
                                className="popup-ajax"
                              >
                                <i className="icon-shuffle"></i>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-product-detail.php"
                                className="popup-ajax"
                              >
                                <i className="icon-magnifier-add"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="icon-heart"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="product">
                      <span className="pr_flash bg-success">Sale</span>
                      <div className="product_img">
                        <Link href="shop-product-detail.php">
                          <img
                            src="assets/images/product_img7.jpg"
                            alt="product_img7"
                          />
                        </Link>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart">
                              <Link href="#">
                                <i className="icon-basket-loaded"></i> Add To
                                Cart
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-compare.html"
                                className="popup-ajax"
                              >
                                <i className="icon-shuffle"></i>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-quick-view.html"
                                className="popup-ajax"
                              >
                                <i className="icon-magnifier-add"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="icon-heart"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title">
                          <Link href="shop-product-detail.php">
                            white black line dress
                          </Link>
                        </h6>
                        <div className="product_price">
                          <span className="price">₹68.00</span>
                          <del>₹99.00</del>
                          <div className="on_sale">
                            <span>20% Off</span>
                          </div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div
                              className="product_rate"
                              style={{ width: "87%" }}
                            ></div>
                          </div>
                          <span className="rating_num">(25)</span>
                        </div>
                        <div className="pr_desc">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus blandit massa enim. Nullam id varius
                            nunc id varius nunc.
                          </p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch">
                            <span
                              className="active"
                              data-color="#333333"
                            ></span>
                            <span data-color="#7C502F"></span>
                            <span data-color="#2F366C"></span>
                          </div>
                        </div>
                        <div className="list_product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart">
                              <Link href="#">
                                <i className="icon-basket-loaded"></i> Add To
                                Cart
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-compare.html"
                                className="popup-ajax"
                              >
                                <i className="icon-shuffle"></i>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-quick-view.html"
                                className="popup-ajax"
                              >
                                <i className="icon-magnifier-add"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="icon-heart"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="product">
                      <div className="product_img">
                        <Link href="shop-product-detail.php">
                          <img
                            src="assets/images/product_img8.jpg"
                            alt="product_img8"
                          />
                        </Link>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart">
                              <Link href="#">
                                <i className="icon-basket-loaded"></i> Add To
                                Cart
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-compare.html"
                                className="popup-ajax"
                              >
                                <i className="icon-shuffle"></i>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-quick-view.html"
                                className="popup-ajax"
                              >
                                <i className="icon-magnifier-add"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="icon-heart"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title">
                          <Link href="shop-product-detail.php">
                            Men blue jins Shirt
                          </Link>
                        </h6>
                        <div className="product_price">
                          <span className="price">₹69.00</span>
                          <del>₹89.00</del>
                          <div className="on_sale">
                            <span>20% Off</span>
                          </div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div
                              className="product_rate"
                              style={{ width: "70%" }}
                            ></div>
                          </div>
                          <span className="rating_num">(22)</span>
                        </div>
                        <div className="pr_desc">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus blandit massa enim. Nullam id varius
                            nunc id varius nunc.
                          </p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch">
                            <span
                              className="active"
                              data-color="#333333"
                            ></span>
                            <span data-color="#444653"></span>
                            <span data-color="#B9C2DF"></span>
                          </div>
                        </div>
                        <div className="list_product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart">
                              <Link href="#">
                                <i className="icon-basket-loaded"></i> Add To
                                Cart
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-compare.html"
                                className="popup-ajax"
                              >
                                <i className="icon-shuffle"></i>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-quick-view.html"
                                className="popup-ajax"
                              >
                                <i className="icon-magnifier-add"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="icon-heart"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="product">
                      <div className="product_img">
                        <Link href="shop-product-detail.php">
                          <img
                            src="assets/images/product_img9.jpg"
                            alt="product_img9"
                          />
                        </Link>
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart">
                              <Link href="#">
                                <i className="icon-basket-loaded"></i> Add To
                                Cart
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-compare.html"
                                className="popup-ajax"
                              >
                                <i className="icon-shuffle"></i>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-quick-view.html"
                                className="popup-ajax"
                              >
                                <i className="icon-magnifier-add"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="icon-heart"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title">
                          <Link href="shop-product-detail.php">
                            T-Shirt Form Girls
                          </Link>
                        </h6>
                        <div className="product_price">
                          <span className="price">₹45.00</span>
                          <del>₹55.25</del>
                          <div className="on_sale">
                            <span>35% Off</span>
                          </div>
                        </div>
                        <div className="rating_wrap">
                          <div className="rating">
                            <div
                              className="product_rate"
                              style={{ width: "80%" }}
                            ></div>
                          </div>
                          <span className="rating_num">(21)</span>
                        </div>
                        <div className="pr_desc">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus blandit massa enim. Nullam id varius
                            nunc id varius nunc.
                          </p>
                        </div>
                        <div className="pr_switch_wrap">
                          <div className="product_color_switch">
                            <span
                              className="active"
                              data-color="#B5B6BB"
                            ></span>
                            <span data-color="#333333"></span>
                            <span data-color="#DA323F"></span>
                          </div>
                        </div>
                        <div className="list_product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart">
                              <Link href="#">
                                <i className="icon-basket-loaded"></i> Add To
                                Cart
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-compare.html"
                                className="popup-ajax"
                              >
                                <i className="icon-shuffle"></i>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="shop-quick-view.html"
                                className="popup-ajax"
                              >
                                <i className="icon-magnifier-add"></i>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
                                <i className="icon-heart"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <ul className="pagination mt-3 justify-content-center pagination_style1">
                      <li className="page-item active">
                        <Link className="page-link" href="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" href="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" href="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" href="#">
                          <i className="linearicons-arrow-right"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 order-lg-first mt-4 pt-2 mt-lg-0 pt-lg-0">
                <div className="sidebar">
                  <div className="widget">
                    <h5 className="widget_title">Categories</h5>
                    <ul className="widget_categories">
                      <li>
                        <Link href="#">
                          <span className="categories_name">
                            CAR AUDIO SYSTEMS'S
                          </span>
                          <span className="categories_num">(9)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <span className="categories_name">CAR PARTS</span>
                          <span className="categories_num">(6)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <span className="categories_name">Bike</span>
                          <span className="categories_num">(4)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <span className="categories_name">Lighting</span>
                          <span className="categories_num">(7)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <span className="categories_name">Interiors</span>
                          <span className="categories_num">(12)</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="widget">
                    <h5 className="widget_title">Filter</h5>
                    <div className="filter_price">
                      <div
                        id="price_filter"
                        data-min="0"
                        data-max="50000"
                        data-min-value="400"
                        data-max-value="3000"
                        data-price-sign="₹"
                      ></div>
                      <div className="price_range">
                        <span>
                          Price: <span id="flt_price"></span>
                        </span>
                        <input type="hidden" id="price_first" />
                        <input type="hidden" id="price_second" />
                      </div>
                    </div>
                  </div>
                  <div className="widget">
                    <h5 className="widget_title">Brand</h5>
                    <ul className="list_brand">
                      <li>
                        <div className="custome-checkbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="Arrivals"
                            value=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="Arrivals"
                          >
                            <span>MRF</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custome-checkbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="Lighting"
                            value=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="Lighting"
                          >
                            <span>CEAT</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custome-checkbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="Tables"
                            value=""
                          />
                          <label className="form-check-label" htmlFor="Tables">
                            <span>TVS</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custome-checkbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="Chairs"
                            value=""
                          />
                          <label className="form-check-label" htmlFor="Chairs">
                            <span>BKT</span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custome-checkbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="Accessories"
                            value=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="Accessories"
                          >
                            <span>JK</span>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="widget">
                    <div className="shop_banner">
                      <div className="banner_img overlay_bg_20">
                        <img
                          src="assets/images/sidebar_banner_img.jpg"
                          alt="sidebar_banner_img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- END SECTION SHOP --> */}
      </div>
    </div>
  );
};

export default Shop;
