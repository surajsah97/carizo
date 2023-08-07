import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo22 from '../components/carLogo/logo22.jpg'

const Navbar = () => {
  const [data, setdata] = useState([])
  const baseUrl=process.env.REACT_APP_BaseUrl
  const [car, setcar] = useState([])
  const [bike, setbike] = useState([])


  useEffect(() => {
    axios.get(baseUrl+"/cat-super-catagory").then(res => {
      console.log({ res: res.data }, "-=================");
      if (res.data.status === 1) {
        setdata(res.data.data?res.data.data:[])
        let datas={}
        res.data.data.map(el=>{
          if(datas[el.type]){
            datas[el.type].append(el)
          }
          else{
            datas[el.type]=[el]
          }
        })
        console.log({datas},"-=-=-=-=-=-");
        setbike(datas["bike"]?datas["bike"]:[])
        setcar(datas["car"]?datas["car"]:[])

      }
      else if (res.data.status === 2) {
        setdata(res.data.data?res.data.data:[])

      }
      // setdata([])
    }).catch(err => {
      setdata([])

    })

  }, [])

  const handleCart=(e,type)=>{
    e.preventDefault();
    axios.get(baseUrl+`/cat-super-catagory?type=${type}`).then(res => {
      console.log({ res: res.data }, "-=================");
      if (res.data.status === 1) {
        setdata(res.data.data?res.data.data:[])
      }
      else if (res.data.status === 2) {
        setdata(res.data.data?res.data.data:[])

      }

  })
}

  return (
    <div>
      <header className="header_wrap">
        <div className="top-header light_skin bg_dark d-none d-md-block">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-8">
                <div className="header_topbar_info">
                  <div className="header_offer">
                    <span>Free Ground Shipping Over ₹250</span>
                  </div>
                  <div className="download_wrap">
                    <span className="mr-3">Download App</span>
                    <ul className="icon_list text-center text-lg-left">
                      <li>
                        <Link href="#">
                          <i className="fab fa-apple"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-android"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-windows"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-4">
                <div className="d-flex align-items-center justify-content-center justify-content-md-end">
                  <div className="lng_dropdown">
                    <select name="countries" className="custome_select">
                      <option
                        value="en"
                        data-image="assets/images/eng.png"
                        data-title="English"
                      >
                        English
                      </option>
                      <option
                        value="fn"
                        data-image="assets/images/fn.png"
                        data-title="France"
                      >
                        France
                      </option>
                      <option
                        value="us"
                        data-image="assets/images/us.png"
                        data-title="United States"
                      >
                        United States
                      </option>
                    </select>
                  </div>
                  <div className="ml-3">
                    <select name="countries" className="custome_select">
                      <option value="USD" data-title="USD">
                        USD
                      </option>
                      <option value="EUR" data-title="EUR">
                        EUR
                      </option>
                      <option value="GBR" data-title="GBR">
                        GBR
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="middle-header dark_skin">
          <div className="container">
            <div className="nav_block">
              <Link className="navbar-brand" href="index.index">
                <img
                  className="logo_light"
                  src={logo22}
                  style={{ width: "182px", height: "47px", alt: "logo" }}
                  alt="logo22"
                />
                <img
                  className="logo_dark"
                  src={logo22}
                  style={{ width: "182px", height: "47px", alt: "logo" }}
                  alt="logoImage"
                />
              </Link>
              <div className="product_search_form radius_input search_form_btn">
                <form>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="custom_select">
                        <select className="first_null not_chosen">
                          <option value="">All Category</option>
                          {data?.map(el => {
                            return <option value={el.id}>{el.name}</option>
                          })}
                          {/* <option value="Dresses">Car</option>
                          <option value="Shirt-Tops">Bike</option>
                          <option value="T-Shirt">Lighting</option>
                          <option value="Pents">Interiors</option> */}
                        </select>
                      </div>
                    </div>
                    <input
                      className="form-control"
                      placeholder="Search Product..."
                      required=""
                      type="text"
                    />
                    <button type="submit" className="search_btn3">
                      Search
                    </button>
                  </div>
                </form>
              </div>
              <ul className="navbar-nav attr-nav align-items-center">
                <li>
                  <Link href="login.php" className="nav-link">
                    <i className="linearicons-user"></i>
                  </Link>
                </li>
                <li>
                  <Link href="wishlist.php" className="nav-link">
                    <i className="linearicons-heart"></i>
                    <span className="wishlist_count">0</span>
                  </Link>
                </li>
                <li className="dropdown cart_dropdown">
                  <Link
                    className="nav-link cart_trigger"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <i className="linearicons-bag2"></i>
                    <span className="cart_count">2</span>
                    <span className="amount">
                      <span className="currency_symbol">₹</span>159.00
                    </span>
                  </Link>
                  <div className="cart_box cart_right dropdown-menu dropdown-menu-right">
                    <ul className="cart_list">
                      <li>
                        <Link href="#" className="item_remove">
                          <i className="ion-close"></i>
                        </Link>
                        <Link href="#">
                          <img
                            src="assets/images/cart_thamb1.jpg"
                            alt="cart_thumb1"
                          />
                          Variable product 001
                        </Link>
                        <span className="cart_quantity">
                          {" "}
                          1 x{" "}
                          <span className="cart_amount">
                            {" "}
                            <span className="price_symbole">₹</span>
                          </span>
                          78.00
                        </span>
                      </li>
                      <li>
                        <Link href="#" className="item_remove">
                          <i className="ion-close"></i>
                        </Link>
                        <Link href="#">
                          <img
                            src="assets/images/cart_thamb2.jpg"
                            alt="cart_thumb2"
                          />
                          Ornare sed consequat
                        </Link>
                        <span className="cart_quantity">
                          {" "}
                          1 x{" "}
                          <span className="cart_amount">
                            {" "}
                            <span className="price_symbole">₹</span>
                          </span>
                          81.00
                        </span>
                      </li>
                    </ul>
                    <div className="cart_footer">
                      <p className="cart_total">
                        <strong>Subtotal:</strong>{" "}
                        <span className="cart_price">
                          {" "}
                          <span className="price_symbole">₹</span>
                        </span>
                        159.00
                      </p>
                      <p className="cart_buttons">
                        <Link
                          href="shop-cart.php"
                          className="btn btn-fill-line view-cart"
                        >
                          View Cart
                        </Link>
                        <Link
                          href="checkout.php"
                          className="btn btn-fill-out checkout"
                        >
                          Checkout
                        </Link>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bottom_header dark_skin main_menu_uppercase border-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-4 col-sm-6 col-3">
                <div className="categories_wrap">
                  {/* <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> */}
                  <button
                    type="button"
                    data-toggle="collapse"
                    data-target="#navCatContent"
                    aria-expanded="false"
                    className="categories_btn categories_menu"
                  >
                    {/* <button class="btn btn-danger" type="button" data-toggle="collapse" data-target="#navCatContent" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button> */}
                    <span>All Categories </span>
                    <i className="linearicons-menu"></i>
                  </button>
                  <div id="navCatContent" className="navbar collapse">
                    <ul>
                      <li className="dropdown dropdown-mega-menu">
                        <Link
                          className="dropdown-item nav-link dropdown-toggler"
                          href="#"
                          data-toggle="dropdown"
                        >
                          <i className="flaticon-plugins"></i>{" "}
                          <span>INTERIORS</span>
                        </Link>
                        <div className="dropdown-menu dropdown">
                          <ul>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                CAR SUNSHADES
                              </Link>
                              <div className="dropdown-menu">
                                <ul>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-three-columns.html"
                                    >
                                      Fix Curtains
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-four-columns.html"
                                    >
                                      Magnet Curtains
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-left-sidebar.html"
                                    >
                                      Rear Curtains
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-right-sidebar.html"
                                    >
                                      Front Curtains
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-standard-left-sidebar.html"
                                    >
                                      Sun Block
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-standard-right-sidebar.html"
                                    >
                                      Front Windshield Internal
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-standard-right-sidebar.html"
                                    >
                                      Front Winshield External
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                CAR FLOOR MATS
                              </Link>
                              <div className="dropdown-menu">
                                <ul>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-masonry-three-columns.html"
                                    >
                                      Carpet Mats
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-masonry-four-columns.html"
                                    >
                                      Grass Mats
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-masonry-left-sidebar.html"
                                    >
                                      3D Mats
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-masonry-right-sidebar.html"
                                    >
                                      {" "}
                                      5D Mats
                                    </Link>
                                  </li>

                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-masonry-right-sidebar.html"
                                    >
                                      7D Mats
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-masonry-right-sidebar.html"
                                    >
                                      Rubber Mats
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-masonry-right-sidebar.html"
                                    >
                                      Boot Mats
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                CAR CARE & STYLING{" "}
                              </Link>
                              <div className="dropdown-menu">
                                <ul>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-single.html"
                                    >
                                      Car Organizers
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-single-left-sidebar.html"
                                    >
                                      Tissue Box
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-single-slider.html"
                                    >
                                      Boot Organisers
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-single-video.html"
                                    >
                                      Car Seat Cushion
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-single-audio.html"
                                    >
                                      Gear Knobs
                                    </Link>
                                  </li>

                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-single-slider.html"
                                    >
                                      Blind Spots Mirror
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-single-video.html"
                                    >
                                      Fender Blind Sport Mirror
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-single-audio.html"
                                    >
                                      Key Covers
                                    </Link>
                                  </li>

                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-single-slider.html"
                                    >
                                      Polish and Wax
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-single-video.html"
                                    >
                                      Scratch Remover
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-single-audio.html"
                                    >
                                      Shampoos
                                    </Link>
                                  </li>

                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-single-slider.html"
                                    >
                                      Tyre Polish and Dresser
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-single-video.html"
                                    >
                                      Antitheft Lock
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-single-audio.html"
                                    >
                                      Tyre Wheel Lock
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                CAR ARMREST
                              </Link>
                              <div className="dropdown-menu">
                                <ul>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-list-left-sidebar.html"
                                    >
                                      Armrest
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-list-right-sidebar.html"
                                    >
                                      Armrest with Glass Holder
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                CAR AUDIO SYSTEMS
                              </Link>
                              <div className="dropdown-menu">
                                <ul>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-list-left-sidebar.html"
                                    >
                                      Speakers
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-list-right-sidebar.html"
                                    >
                                      Base Tubes
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-list-right-sidebar.html"
                                    >
                                      Stereo
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-list-right-sidebar.html"
                                    >
                                      Processors
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-list-right-sidebar.html"
                                    >
                                      Amplifiers{" "}
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-list-right-sidebar.html"
                                    >
                                      Dumping Sheets
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                CAR STEERING WHEEL COVERS
                              </Link>
                              <div className="dropdown-menu">
                                <ul>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-list-left-sidebar.html"
                                    >
                                      Stitch Type Steering Cover
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-list-right-sidebar.html"
                                    >
                                      Ring Type Steering Covers
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-list-right-sidebar.html"
                                    >
                                      Steering Grips{" "}
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                CAR DOOR SCUFF SILL PLATES
                              </Link>
                              <div className="dropdown-menu">
                                <ul>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-list-left-sidebar.html"
                                    >
                                      Steel{" "}
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-list-right-sidebar.html"
                                    >
                                      Led{" "}
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-list-right-sidebar.html"
                                    >
                                      Rubber{" "}
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-list-right-sidebar.html"
                                    >
                                      Sticker and Decals{" "}
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                CAR SEAT COVERS
                              </Link>
                              <div className="dropdown-menu"></div>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                CAR STEERING KNOBS
                              </Link>
                              <div className="dropdown-menu"></div>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                GAR BOOT COVER AND KNOBS
                              </Link>
                              <div className="dropdown-menu">
                                <ul>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-list-left-sidebar.html"
                                    >
                                      Gear Lever Cover{" "}
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-list-right-sidebar.html"
                                    >
                                      Gear Knobs{" "}
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-list-right-sidebar.html"
                                    >
                                      Gear Extender{" "}
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li className="dropdown dropdown-mega-menu">
                        <Link
                          className="dropdown-item nav-link dropdown-toggler"
                          href="#"
                          data-toggle="dropdown"
                        >
                          <i className="flaticon-plugins"></i>{" "}
                          <span>EXTERIOR</span>
                        </Link>
                        <div className="dropdown-menu dropdown">
                          <ul>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                CAR BODY COVERS{" "}
                              </Link>
                              <div className="dropdown-menu">
                                <ul>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-three-columns.html"
                                    >
                                      Grey
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-four-columns.html"
                                    >
                                      Silver
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-left-sidebar.html"
                                    >
                                      Blue{" "}
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-right-sidebar.html"
                                    >
                                      Blue & Red
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-standard-left-sidebar.html"
                                    >
                                      Blue and & Blue
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-standard-right-sidebar.html"
                                    >
                                      Magic Silver
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                CAR HORNS MATS
                              </Link>
                              <div className="dropdown-menu">
                                <ul>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-masonry-three-columns.html"
                                    >
                                      Hella
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-masonry-four-columns.html"
                                    >
                                      Navik
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-masonry-left-sidebar.html"
                                    >
                                      Minda
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-masonry-right-sidebar.html"
                                    >
                                      {" "}
                                      Bosch
                                    </Link>
                                  </li>

                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-masonry-right-sidebar.html"
                                    >
                                      Caros{" "}
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                DOOR VISORS{" "}
                              </Link>
                              <div className="dropdown-menu">
                                <ul>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-single.html"
                                    >
                                      Basic
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-single-left-sidebar.html"
                                    >
                                      {" "}
                                      Chrome Line
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                CHROME ACCESSORIES
                              </Link>
                              <div className="dropdown-menu">
                                <ul>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-list-left-sidebar.html"
                                    >
                                      Tail Light
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-list-right-sidebar.html"
                                    >
                                      Head Light{" "}
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-list-left-sidebar.html"
                                    >
                                      Side Mirror{" "}
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-list-right-sidebar.html"
                                    >
                                      Handle{" "}
                                    </Link>
                                  </li>

                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-list-left-sidebar.html"
                                    >
                                      Dicky
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-list-right-sidebar.html"
                                    >
                                      Door{" "}
                                    </Link>
                                  </li>

                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-list-left-sidebar.html"
                                    >
                                      Fog Light
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-list-right-sidebar.html"
                                    >
                                      Indicator{" "}
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                BLIND SPOT MIRRORS
                              </Link>
                              <div className="dropdown-menu">
                                <ul>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-list-left-sidebar.html"
                                    >
                                      Basic
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-list-right-sidebar.html"
                                    >
                                      Adjustable
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                DOOR GUARDS{" "}
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                BUMPER PROTECTORS{" "}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li className="dropdown dropdown-mega-menu">
                        <Link
                          className="dropdown-item nav-link dropdown-toggler"
                          href="#"
                          data-toggle="dropdown"
                        >
                          <i className="flaticon-plugins"></i>{" "}
                          <span>LIGHTENING</span>
                        </Link>
                        <div className="dropdown-menu dropdown">
                          <ul>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                Fog Lamps{" "}
                              </Link>
                              <div className="dropdown-menu">
                                <ul>
                                  <li className="dropdown dropdown-mega-menu">
                                    <Link
                                      className="dropdown-item nav-link dropdown-toggler"
                                      href="#"
                                      data-toggle="dropdown"
                                    >
                                      <i className="flaticon-plugins"></i>{" "}
                                      <span>Halogen Fog Lamps</span>
                                    </Link>
                                    <div className="dropdown-menu dropdown">
                                      <ul>
                                        <li>
                                          <Link
                                            className="dropdown-item nav-link nav_item"
                                            href="blog-list-left-sidebar.html"
                                          >
                                            LED Fog Lamps
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                Halogen Bulbs
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                LED Lights{" "}
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                HID Lights{" "}
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Reflector Lights
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Pillar Lights{" "}
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                DRL Lights{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Bar Lights{" "}
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Decorative Lights{" "}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li className="dropdown dropdown-mega-menu">
                        <Link
                          className="dropdown-item nav-link dropdown-toggler"
                          href="#"
                          data-toggle="dropdown"
                        >
                          <i className="flaticon-plugins"></i>{" "}
                          <span>CAR CARE & UTILITY</span>
                        </Link>
                        <div className="dropdown-menu dropdown">
                          <ul>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Cleaning
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Vacuum Cleaners{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Air Compressors{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                Duster & Microfibers
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Scratch Removers{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Spray Paints{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Lubricants{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Coolants{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Spray Paints{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Lubricants{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Coolants{" "}
                              </Link>
                            </li>{" "}
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Filters{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Tyre Guage{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Jumper Cables{" "}
                              </Link>
                            </li>{" "}
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Decal Magnet Sticker{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Puncture Repair Kits{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Tyre Wax Polish{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                Numper Plate Frames{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Tyre Polish{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                GPS and Mobile Holder{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                Drink Holders{" "}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li className="dropdown dropdown-mega-menu">
                        <Link
                          className="dropdown-item nav-link dropdown-toggler"
                          href="#"
                          data-toggle="dropdown"
                        >
                          <i className="flaticon-plugins"></i>{" "}
                          <span>FILTERS</span>
                        </Link>
                        <div className="dropdown-menu dropdown">
                          <ul>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Cabin A/C Filters
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Enigne Air Filters{" "}
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Engine Oil Filters{" "}
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                Fuel Filters
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li className="dropdown dropdown-mega-menu">
                        <Link
                          className="dropdown-item nav-link dropdown-toggler"
                          href="#"
                          data-toggle="dropdown"
                        >
                          <i className="flaticon-plugins"></i>{" "}
                          <span>WHEEL COVERS</span>
                        </Link>
                        <div className="dropdown-menu dropdown">
                          <ul>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                12 Inch
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                13 Inch{" "}
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                14 Inch{" "}
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                15 Inch
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                16 Inch
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li className="dropdown dropdown-mega-menu">
                        <Link
                          className="dropdown-item nav-link dropdown-toggler"
                          href="#"
                          data-toggle="dropdown"
                        >
                          <i className="flaticon-plugins"></i>{" "}
                          <span>GAS SPRINGS</span>
                        </Link>
                        <div className="dropdown-menu dropdown">
                          <ul>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Bonnet Gas Spring
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                Boot Gas Spring
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li className="dropdown dropdown-mega-menu">
                        <Link
                          className="dropdown-item nav-link dropdown-toggler"
                          href="#"
                          data-toggle="dropdown"
                        >
                          <i className="flaticon-plugins"></i>{" "}
                          <span>
                            CAR STYLING AND BODY
                            <br />
                            FITTINGS
                          </span>
                        </Link>
                        <div className="dropdown-menu dropdown">
                          <ul>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                Mud Flaps{" "}
                              </Link>
                              <div className="dropdown-menu">
                                <ul>
                                  <li className="dropdown dropdown-mega-menu">
                                    <Link
                                      className="dropdown-item nav-link dropdown-toggler"
                                      href="#"
                                      data-toggle="dropdown"
                                    >
                                      <i className="flaticon-plugins"></i>{" "}
                                      <span>Plastics</span>
                                    </Link>
                                    <div className="dropdown-menu dropdown">
                                      <ul>
                                        <li>
                                          <Link
                                            className="dropdown-item nav-link nav_item"
                                            href="blog-list-left-sidebar.html"
                                          >
                                            Rubber
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Rubber Flaps
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Aerials/Anteena{" "}
                              </Link>
                              <div className="dropdown-menu">
                                <ul>
                                  <li className="dropdown dropdown-mega-menu">
                                    <Link
                                      className="dropdown-item nav-link dropdown-toggler"
                                      href="#"
                                      data-toggle="dropdown"
                                    >
                                      <i className="flaticon-plugins"></i>{" "}
                                      <span>Dummy</span>
                                    </Link>
                                    <div className="dropdown-menu dropdown">
                                      <ul>
                                        <li>
                                          <Link
                                            className="dropdown-item nav-link nav_item"
                                            href="blog-list-left-sidebar.html"
                                          >
                                            AM/FM
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Bumper Clips{" "}
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Spoilers{" "}
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Wing Mirror Rear View Glass
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Wing Mirror Assembly{" "}
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Wing Mirror Outer Covers{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Car Pedal Kit{" "}
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Boot Garnish{" "}
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                Roof Rails{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                Side Beadings{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Bumper Diffusers{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                Window Garnish{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Front Grills{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Wipers{" "}
                              </Link>
                              <div className="dropdown-menu">
                                <ul>
                                  <li className="dropdown dropdown-mega-menu">
                                    <Link
                                      className="dropdown-item nav-link dropdown-toggler"
                                      href="#"
                                      data-toggle="dropdown"
                                    >
                                      <i className="flaticon-plugins"></i>{" "}
                                      <span>Metal</span>
                                    </Link>
                                    <div className="dropdown-menu dropdown">
                                      <ul>
                                        <li>
                                          <Link
                                            className="dropdown-item nav-link nav_item"
                                            href="blog-list-left-sidebar.html"
                                          >
                                            Rubber
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                Protective Side Beaadings{" "}
                              </Link>
                              <div className="dropdown-menu">
                                <ul>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-single.html"
                                    >
                                      Universal
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-single-left-sidebar.html"
                                    >
                                      {" "}
                                      Vehicle Specifice
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li className="dropdown dropdown-mega-menu">
                        <Link
                          className="dropdown-item nav-link dropdown-toggler"
                          href="#"
                          data-toggle="dropdown"
                        >
                          <i className="flaticon-plugins"></i>{" "}
                          <span>
                            SAFETY & BREAKDOWN
                            <br /> ASSISTANCE
                          </span>
                        </Link>
                        <div className="dropdown-menu dropdown">
                          <ul>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                Eemergency Tool Kits
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Jumper Cable{" "}
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Towing Ropes{" "}
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Tyre Inflators
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Tow Hooks{" "}
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Tyre Puncture Kits{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                Central Locking{" "}
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Tyre Lock{" "}
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                Steering Wheel Lock{" "}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li className="dropdown dropdown-mega-menu">
                        <Link
                          className="dropdown-item nav-link dropdown-toggler"
                          href="#"
                          data-toggle="dropdown"
                        >
                          <i className="flaticon-plugins"></i>{" "}
                          <span>AIR FRESHNERS</span>
                        </Link>
                        <div className="dropdown-menu dropdown">
                          <ul>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                Gel Freshner
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Solar Perfume{" "}
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                Spray
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li className="dropdown dropdown-mega-menu">
                        <Link
                          className="dropdown-item nav-link dropdown-toggler"
                          href="#"
                          data-toggle="dropdown"
                        >
                          <i className="flaticon-plugins"></i>{" "}
                          <span>WRAP DECALS & STICKERS</span>
                        </Link>
                        <div className="dropdown-menu dropdown">
                          <ul>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                Car Vents
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Wing Mirror Stickers{" "}
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                Side Fener Stickersy
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                Bumper Stickers
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                Dicky Stickers
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                Rim Stickers
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li className="dropdown dropdown-mega-menu">
                        <Link
                          className="dropdown-item nav-link dropdown-toggler"
                          href="#"
                          data-toggle="dropdown"
                        >
                          <i className="flaticon-plugins"></i>{" "}
                          <span>ESSENTIALS</span>
                        </Link>
                        <div className="dropdown-menu dropdown">
                          <ul>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                Steering Wheel Tray{" "}
                              </Link>
                              <div className="dropdown-menu">
                                <ul>
                                  <li className="dropdown dropdown-mega-menu">
                                    <Link
                                      className="dropdown-item nav-link dropdown-toggler"
                                      href="#"
                                      data-toggle="dropdown"
                                    >
                                      <i className="flaticon-plugins"></i>{" "}
                                      <span>Fixed (Black & Grey Color)</span>
                                    </Link>
                                    <div className="dropdown-menu dropdown">
                                      <ul>
                                        <li>
                                          <Link
                                            className="dropdown-item nav-link nav_item"
                                            href="blog-list-left-sidebar.html"
                                          >
                                            Adjustable
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Shoulde Pad
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Mobile Chargers{" "}
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Non Slip Mats and Trays{" "}
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                {" "}
                                Ashtray
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item menu-link dropdown-toggler"
                                href="#"
                              >
                                Door Buffer
                              </Link>
                              <div className="dropdown-menu">
                                <ul>
                                  <li>
                                    <Link
                                      className="dropdown-item nav-link nav_item"
                                      href="blog-three-columns.html"
                                    >
                                      Color: Black, Blue and Red
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                    <div className="more_categories">More Categories</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-8 col-sm-6 col-9">
                <nav className="navbar navbar-expand-lg">
                  <button
                    className="navbar-toggler side_navbar_toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSidetoggle"
                    aria-expanded="false"
                  >
                    <span className="ion-android-menu"></span>
                  </button>
                  <div className="pr_search_icon">
                    <Link
                      href="#javascript"
                      className="nav-link pr_search_trigger"
                    >
                      <i className="linearicons-magnifier"></i>
                    </Link>
                  </div>
                  <div
                    className="collapse navbar-collapse mobile_side_menu"
                    id="navbarSidetoggle"
                  >
                    <ul className="navbar-nav">
                      <li>
                        <Link className="nav-link nav_item" href="index.php">
                          {" "}
                          Home
                        </Link>
                      </li>

                      <li className="dropdown dropdown-mega-menu" >
                        <Link
                          className="dropdown-toggle nav-link"
                          onClick={e=>{handleCart(e,"car")}}
                          data-toggle="dropdown"
                        >
                          Car
                        </Link>
                        <div className="dropdown-menu">
                          <ul className="mega-menu d-lg-flex">
                            {car.map((el, i) => {
                              return (<li key={el.id} className="mega-menu-col col-lg-3">
                                <ul>
                                  <li className="dropdown-header">
                                    {el.name}
                                  </li>
                                  {el.catagory?.map((ele, i) => {
                                    return (<li key={i}>
                                      <Link
                                        className="dropdown-item nav-link nav_item"
                                        to={`/product/${ele.id}`}
                                      >

                                        {ele.name}
                                      </Link>
                                    </li>)
                                  })}
                                </ul>
                              </li>)
                            })}
                            {/* <li className="mega-menu-col col-lg-3">
                              <ul>
                                <li className="dropdown-header">
                                  Car Audio Systems's
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item nav-link nav_item"
                                    href="#l"
                                  >
                                    {" "}
                                    Fix Curtains
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item nav-link nav_item"
                                    href="s#"
                                  >
                                    Magnet Curtains
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Rear Curtains
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Front Curtains
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Sun Block
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="mega-menu-col col-lg-3">
                              <ul>
                                <li className="dropdown-header">Car Parts</li>
                                <li>
                                  <Link
                                    className="dropdown-item nav-link nav_item"
                                    href="#l"
                                  >
                                    Tail Light
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Head Light
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Side Mirror
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Handle
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    {" "}
                                    Dicky
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="mega-menu-col col-lg-3">
                              <ul>
                                <li className="dropdown-header">
                                  Car Care & Styling Accessories
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Indicator
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Speakers
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Base Tubes
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Stereo
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Processors
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="mega-menu-col col-lg-3">
                              <ul>
                                <li className="dropdown-header">Car Utility</li>
                                <li>
                                  <Link
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Indicator
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Speakers
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Base Tubes
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Stereo
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="dropdown-item nav-link nav_item"
                                    href="#"
                                  >
                                    Processors
                                  </Link>
                                </li>
                              </ul>
                            </li> */}
                          </ul>
                          <div className="d-lg-flex menu_banners">
                            <div className="col-lg-6">
                              <div className="header-banner">
                                <div className="sale-banner">
                                  <Link className="hover_effect1" href="#">
                                    {/* <img src="assets/images/shop_banner_img33.png" alt="shop_banner_img7"> */}
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="header-banner">
                                <div className="sale-banner">
                                  <Link className="hover_effect1" href="#">
                                    {/* <img src="assets/images/shop_banner_img34.png" alt="shop_banner_img8"> */}
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="dropdown dropdown-mega-menu" >
                        <Link
                          className="dropdown-toggle nav-link"
                          onClick={e=>{handleCart(e,"bike")}}
                          data-toggle="dropdown"
                        >
                          Bike
                        </Link>
                        <div className="dropdown-menu">
                          <ul className="mega-menu d-lg-flex">
                          {bike.length>0?bike.map((el, i) => {
                              return (<li key={el.id} className="mega-menu-col col-lg-3">
                                <ul>
                                  <li className="dropdown-header">
                                    {el.name}
                                  </li>
                                  {el.catagory?.map((ele, i) => {
                                    return (<li key={i}>
                                      <Link
                                        className="dropdown-item nav-link nav_item"
                                        to={`/product/${ele.id}`}
                                      >

                                        {ele.name}
                                      </Link>
                                    </li>)
                                  })}
                                </ul>
                              </li>)
                            }):
                            <li className="mega-menu-col col-lg-9">
                              <ul className="d-lg-flex">
                                <li className="mega-menu-col col-lg-4">
                                  <ul>
                                    <li className="dropdown-header">
                                      Shop Page Layout
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Indicator
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Speakers
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Base Tubes
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Stereo
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Processors
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                                <li className="mega-menu-col col-lg-4">
                                  <ul>
                                    <li className="dropdown-header">
                                      Other Pages
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Indicator
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Speakers
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Base Tubes
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Stereo
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Processors
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                                <li className="mega-menu-col col-lg-4">
                                  <ul>
                                    <li className="dropdown-header">
                                      Product Pages
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Indicator
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Speakers
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Base Tubes
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Stereo
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item nav-link nav_item"
                                        href="#"
                                      >
                                        Processors
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>}
                            <li className="mega-menu-col col-lg-3">
                              <div className="header_banner">
                                <div className="header_banner_content">
                                  <div className="shop_banner">
                                    <div className="banner_img overlay_bg_40">
                                      <img
                                        src="assets/images/shop_banner_img67.png"
                                        alt="shop_banner2"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link className="nav-link nav_item" href="">
                          Interiors
                        </Link>
                      </li>
                      <li>
                        <Link className="nav-link nav_item" href="">
                          Exterior
                        </Link>
                      </li>
                      <li>
                        <Link className="nav-link nav_item" href="">
                          Lighting
                        </Link>
                      </li>
                      <li>
                        <Link className="nav-link nav_item" href="shop.php">
                          Shop
                        </Link>
                      </li>
                      <li>
                        <Link className="nav-link nav_item" href="">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="contact_phone contact_support">
                    <i className="linearicons-phone-wave"></i>
                    <span>123-456-7689</span>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
