import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import Pin from './Pin'

const ShopProductDetails = () => {
  const [data, setdata] = useState({})
  const [images, setImages] = useState([])
  const [imagesrc , setImagesrc] = useState(null)
  const location=useLocation()
  const [img,setImg]=useState("")
  const [mappingItem, setmappingItem] = useState([])
  let baseUrl=process.env.REACT_APP_BaseUrl

  useEffect(() => {
    let loc=location.pathname.split("/")
    let id=loc[loc.length-1]
    axios.get(`${baseUrl}/item/item-detail/${id}`).then(res => {
      console.log({ res: res.data.data[0],item:res.data.item[0] }, "-========hjsj=======ddgdjgdg==gghsjg");
      if (res.data.status === 1) {
        setdata(res.data.data[0])
        setImg(res.data.item[0].image)
        setImages(res.data.data[0].images);
        setmappingItem(res.data.data[0].mappingItem)
      }
      else if (res.data.status === 2) {
        setdata(res.data.data)

      }
      // setdata([])
    }).catch(err => {
      setdata([])

    })
  }, [location.pathname])
  
  const update = ()=>{

  }
  return (
    <>
      {/* <!-- START SECTION BREADCRUMB --> */}
      <div className="breadcrumb_section bg_gray page-title-mini">
        <div className="container">
          {/* <!-- STRART CONTAINER --> */}
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="page-title">
                <h1>Product Detail </h1>
              </div>
            </div>
            <div className="col-md-6">
              <ol className="breadcrumb justify-content-md-end">
                <li className="breadcrumb-item">
                  <Link  href="#">Home</Link >
                </li>
                <li className="breadcrumb-item">
                  <Link  href="#">Pages</Link >
                </li>
                <li className="breadcrumb-item active">Product Detail </li>
              </ol>
            </div>
          </div>
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
              <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                <div className="product-image vertical_gallery">
                  <div
                    id="pr_item_gallery"
                    className="product_gallery_item slick_slider"
                    data-vertical="true"
                    data-vertical-swiping="true"
                    data-slides-to-show="5"
                    data-slides-to-scroll="1"
                    data-infinite="false"
                  >

                    {images?.map(el=>{
                      return(<div className="item">
                      <Link 
                        // href="#"
                        onClick={(e)=>{e.preventDefault();setImagesrc(el)}}
                        // onChange={}
                        className="product_gallery_item"
                        data-image="assets/images/product_img4.jpg"
                        data-zoom-image="assets/images/product_img4.jpg"
                      >
                        <img
                          src={el}
                          id="productImage"
                          alt="product_small_img4"
                        />
                      </Link >
                    </div>)
                    })}
                  </div>
                  <div className="product_img_box">
                    <img
                      id="product_img"
                      src={imagesrc||img}
                      data-zoom-image="assets/images/product_zoom_img1.jpg"
                      alt="product_img1"
                    />
                    <Link  href="#" className="product_img_zoom" title="Zoom">
                      <span className="linearicons-zoom-in"></span>
                    </Link >
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="pr_detail">
                  <div className="product_description">
                    <h4 className="product_title">
                      <Link  href="#">
                        {data.title}
                        {/* 3D Custom PU Leather Car Seat Covers For Hyundai Creta
                        2020 - (HT-505 Mojo) */}
                      </Link >
                    </h4>
                    <div className="product_price">
                      <span className="price">₹{data?.price}.00</span>
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
                        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus blandit massa enim. Nullam id varius nunc id
                        varius nunc. */}
                        {data?.desc}
                      </p>
                    </div>
                    <div className="product_sort_info">
                      <ul>
                        <li>
                          <i className="linearicons-shield-check"></i>{data?.warantyPeriod} AL
                          Jazeera Brand Warranty
                        </li>
                        <li>
                          <i className="linearicons-sync"></i> 30 Day Return
                          Policy
                        </li>
                        <li>
                          <i className="linearicons-bag-dollar"></i> Cash on
                          Delivery available
                        </li>
                      </ul>
                    </div>
                    {/* <div className="colors">
                      <div
                        className="color"
                        style={{
                          backgroundColor: "#000000", //data-hex="000000"
                        }}
                      ></div>
                      <div
                        className="color"
                        style={{
                          backgroundColor: "#0d4671",
                          dataHex: "0d4671",
                        }}
                      ></div>
                      <div
                        className="color"
                        style={{
                          backgroundColor: "#63803a",
                          dataHex: "63803a",
                        }}
                      ></div>
                      <div
                        className="color"
                        style={{
                          backgroundColor: "#841210",
                          dataHex: "841210",
                        }}
                      ></div>
                      <div
                        className="color"
                        style={{ backgroundColor: "#a09e9f", dataHex: "none" }}
                      ></div>
                      <input
                        id="customColour"
                        className="color jscolor"
                        value=""
                        onChange={update()}
                        data-hex=""
                      />
                    </div>
                  </div>
                  <hr /> */}
                  <div className="cart_extra">
                    <div className="cart-product-quantity">
                      <div className="quantity">
                        <input type="button" value="-" className="minus" />
                        <input
                          type="text"
                          name="quantity"
                          value="1"
                          title="Qty"
                          className="qty"
                          size="4"
                        />
                        <input type="button" value="+" className="plus" />
                      </div>
                    </div>
                    <Pin mappingItem={mappingItem}/>
                    <div className="cart_btn">
                      <button
                        className="btn btn-fill-line view-car"
                        type="button"
                      >
                        <i className="linearicons-bag2"></i> Buy Now
                      </button>
                      <button
                        className="btn btn-fill-out btn-addtocart"
                        type="button"
                      >
                        <i className="icon-basket-loaded"></i> Add to cart
                      </button>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="large_divider clearfix"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="tab-style3">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <Link 
                        className="nav-link active"
                        id="Description-tab"
                        data-toggle="tab"
                        href="#Description"
                        role="tab"
                        aria-controls="Description"
                        aria-selected="true"
                      >
                        Description
                      </Link >
                    </li>
                    <li className="nav-item">
                      <Link 
                        className="nav-link"
                        id="Additional-info-tab"
                        data-toggle="tab"
                        href="#Additional-info"
                        role="tab"
                        aria-controls="Additional-info"
                        aria-selected="false"
                      >
                        Specification
                      </Link >
                    </li>
                    <li className="nav-item">
                      <Link 
                        className="nav-link"
                        id="Reviews-tab"
                        data-toggle="tab"
                        href="#Reviews"
                        role="tab"
                        aria-controls="Reviews"
                        aria-selected="false"
                      >
                        Reviews (2)
                      </Link >
                    </li>
                  </ul>
                  <div className="tab-content shop_info_tab">
                    <div
                      className="tab-pane fade show active"
                      id="Description"
                      role="tabpanel"
                      aria-labelledby="Description-tab"
                    >
                      <p>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classNameical
                        Latin literature from 45 BC, making it over 2000 years
                        old. Vivamus bibendum magna Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.Contrary to popular belief,
                        Lorem Ipsum is not simply random text. It has roots in a
                        piece of classNameical Latin literature from 45 BC,
                        making it over 2000 years old.
                      </p>
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti quos dolores et quas molestias excepturi
                        sint occaecati cupiditate non provident, similique sunt
                        in culpa qui officia deserunt mollitia animi, id est
                        laborum et dolorum fuga. Et harum quidem rerum facilis
                        est et expedita distinctio.
                      </p>
                      <div className="section small_pt pb_20">
                        <div className="container">
                          <div className="row shop_container">
                            <div className="col-lg-4 col-md-4 col-6">
                              <div className=" text-center">
                                <div className="">
                                  <img
                                    src="assets/images/shop_banner_img67.png"
                                    alt="furniture_img1"
                                  />
                                </div>
                                <div className="product_info">
                                  <h6 className="product_title">
                                    enim expedita sed
                                  </h6>

                                  <p style={{ textAlign: "left" }}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Phasellus blandit massa
                                    enim. Nullam id varius nunc id varius nunc.
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-6">
                              <div className=" text-center">
                                <div className="">
                                  <img
                                    src="assets/images/shop_banner_img67.png"
                                    alt="furniture_img1"
                                  />
                                </div>
                                <div className="product_info">
                                  <h6 className="product_title">
                                    enim expedita sed
                                  </h6>

                                  <p style={{ textAlign: "left" }}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Phasellus blandit massa
                                    enim. Nullam id varius nunc id varius nunc.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-6">
                              <div className=" text-center">
                                <div className="">
                                  <img
                                    src="assets/images/shop_banner_img67.png"
                                    alt="furniture_img1"
                                  />
                                </div>
                                <div className="product_info">
                                  <h6 className="product_title">
                                    enim expedita sed
                                  </h6>

                                  <p style={{ textAlign: "left" }}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Phasellus blandit massa
                                    enim. Nullam id varius nunc id varius nunc.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-6">
                              <div className=" text-center">
                                <div className="">
                                  <img
                                    src="assets/images/shop_banner_img67.png"
                                    alt="furniture_img1"
                                  />
                                </div>
                                <div className="product_info">
                                  <h6 className="product_title">
                                    enim expedita sed
                                  </h6>

                                  <p style={{ textAlign: "left" }}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Phasellus blandit massa
                                    enim. Nullam id varius nunc id varius nunc.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-6">
                              <div className=" text-center">
                                <div className="">
                                  <img
                                    src="assets/images/shop_banner_img67.png"
                                    alt="furniture_img1"
                                  />
                                </div>
                                <div className="product_info">
                                  <h6 className="product_title">
                                    enim expedita sed
                                  </h6>

                                  <p style={{ textAlign: "left" }}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Phasellus blandit massa
                                    enim. Nullam id varius nunc id varius nunc.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-6">
                              <div className=" text-center">
                                <div className="">
                                  <img
                                    src="assets/images/shop_banner_img67.png"
                                    alt="furniture_img1"
                                  />
                                </div>
                                <div className="product_info">
                                  <h6 className="product_title">
                                    enim expedita sed
                                  </h6>

                                  <p style={{ textAlign: "left" }}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Phasellus blandit massa
                                    enim. Nullam id varius nunc id varius nunc.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="section pb_20 small_pt">
                        <div className="container">
                          <div className="row">
                            <div className="col-12">
                              <div className="sale-banner mb-3 mb-md-4">
                                <img
                                  src="assets/images/255.png"
                                  style={{ height: "500px", width: "1000px" }}
                                  alt="shop_banner_img11"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="section pb_20 small_pt">
                          <div>
                            <table className="table table-bordered">
                              <tbody>
                                {/* {data.fectures?.map((el,i)=>{
                                 return( <tr>
                                  <td>{Object.keys(el.fectures)[0]}</td>
                                  <td>{Object.values(el.fectures)[0]}</td>
                                </tr>)
                                }):} */}
                                
                              </tbody>
                            </table>
                          </div>
                          <div className="container">
                            <div className="row">
                              <div className="col-12">
                                <div className="sale-banner mb-3 mb-md-4">
                                  <img
                                    src="assets/images/255.png"
                                    style={{ height: "500px", width: "1000px" }}
                                    alt="shop_banner_img11"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <table className="table table-bordered">
                            <tbody>
                              <tr>
                                <td>Capacity</td>
                                <td>5 Kg</td>
                                <td>5 Kg</td>
                              </tr>
                              <tr>
                                <td>Color</td>
                                <td>Black, Brown, Red,</td>
                                <td>Water Resistant</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <div className="heading_s1">
                          <h5>Warenty</h5>
                        </div>
                        <div>
                          <p>
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classNameical Latin literature from 45 BC, making it
                            over 2000 years old. Vivamus bibendum magna Lorem
                            ipsum dolor sit amet, consectetur adipiscing
                            elit.Contrary to popular belief, Lorem Ipsum is not
                            s imply random text. It has roots in a piece of
                            classNameical Latin literature from 45 BC, making it
                            over 2000 years old.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="Additional-info"
                      role="tabpanel"
                      aria-labelledby="Additional-info-tab"
                    >
                      <table className="table table-bordered">
                        <tbody>
                          <tr>
                            <td>Capacity</td>
                            <td>5 Kg</td>
                          </tr>
                          <tr>
                            <td>Color</td>
                            <td>Black, Brown, Red,</td>
                          </tr>
                          <tr>
                            <td>Water Resistant</td>
                            <td>Yes</td>
                          </tr>
                          <tr>
                            <td>Material</td>
                            <td>Artificial Leather</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="Reviews"
                      role="tabpanel"
                      aria-labelledby="Reviews-tab"
                    >
                      <div className="comments">
                        <h5 className="product_tab_title">
                          2 Review For <span>Blue Dress For Woman</span>
                        </h5>
                        <ul className="list_none comment_list mt-4">
                          <li>
                            <div className="comment_img">
                              <img src="assets/images/user1.jpg" alt="user1" />
                            </div>
                            <div className="comment_block">
                              <div className="rating_wrap">
                                <div className="rating">
                                  <div
                                    className="product_rate"
                                    style={{ width: "80%" }}
                                  ></div>
                                </div>
                              </div>
                              <p className="customer_meta">
                                <span className="review_author">
                                  Alea Brooks
                                </span>
                                <span className="comment-date">
                                  March 5, 2018
                                </span>
                              </p>
                              <div className="description">
                                <p>
                                  Lorem Ipsumin gravida nibh vel velit auctor
                                  aliquet. Aenean sollicitudin, lorem quis
                                  bibendum auctor, nisi elit consequat ipsum,
                                  nec sagittis sem nibh id elit. Duis sed odio
                                  sit amet nibh vulputate
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="comment_img">
                              <img src="assets/images/user2.jpg" alt="user2" />
                            </div>
                            <div className="comment_block">
                              <div className="rating_wrap">
                                <div className="rating">
                                  <div
                                    className="product_rate"
                                    style={{ width: "60%" }}
                                  ></div>
                                </div>
                              </div>
                              <p className="customer_meta">
                                <span className="review_author">
                                  Grace Wong
                                </span>
                                <span className="comment-date">
                                  June 17, 2018
                                </span>
                              </p>
                              <div className="description">
                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content of
                                  a page when looking at its layout. The point
                                  of using Lorem Ipsum is that it has a
                                  more-or-less normal distribution of letters
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="review_form field_form">
                        <h5>Add a review</h5>
                        <form className="row mt-3">
                          <div className="form-group col-12">
                            <div className="star_rating">
                              <span data-value="1">
                                <i className="far fa-star"></i>
                              </span>
                              <span data-value="2">
                                <i className="far fa-star"></i>
                              </span>
                              <span data-value="3">
                                <i className="far fa-star"></i>
                              </span>
                              <span data-value="4">
                                <i className="far fa-star"></i>
                              </span>
                              <span data-value="5">
                                <i className="far fa-star"></i>
                              </span>
                            </div>
                          </div>
                          <div className="form-group col-12">
                            <textarea
                              required="required"
                              placeholder="Your review *"
                              className="form-control"
                              name="message"
                              rows="4"
                            ></textarea>
                          </div>
                          <div className="form-group col-md-6">
                            <input
                              required="required"
                              placeholder="Enter Name *"
                              className="form-control"
                              name="name"
                              type="text"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <input
                              required="required"
                              placeholder="Enter Email *"
                              className="form-control"
                              name="email"
                              type="email"
                            />
                          </div>

                          <div className="form-group col-12">
                            <button
                              type="submit"
                              className="btn btn-fill-out"
                              name="submit"
                              value="Submit"
                            >
                              Submit Review
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="small_divider"></div>
                <div className="divider"></div>
                <div className="medium_divider"></div>
              </div>
            </div>
            {/* <!-- START SECTION BANNER -->  */}

            {/* <!-- END SECTION BANNER --> */}
            <div className="row">
              <div className="col-12">
                <div className="heading_s1">
                  <h3>Releted Products</h3>
                </div>
                <div
                  className="releted_product_slider carousel_slider owl-carousel owl-theme"
                  data-margin="20"
                  data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "1199":{"items": "4"}}'
                >
                  <div className="item">
                    <div className="product">
                      <div className="product_img">
                        <Link  href="/shop-product-detail.html">
                          <img
                            src="assets/images/product_img1.jpg"
                            alt="product_img1"
                          />
                        </Link >
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart">
                              <Link  href="#">
                                <i className="icon-basket-loaded"></i> Add To
                                Cart
                              </Link >
                            </li>
                            <li>
                              <Link  href="shop-compare.html">
                                <i className="icon-shuffle"></i>
                              </Link >
                            </li>
                            <li>
                              <Link 
                                href="shop-quick-view.html"
                                className="popup-ajax"
                              >
                                <i className="icon-magnifier-add"></i>
                              </Link >
                            </li>
                            <li>
                              <Link  href="#">
                                <i className="icon-heart"></i>
                              </Link >
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title">
                          <Link  href="shop-product-detail.html">
                            Blue Dress For Woman
                          </Link >
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
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product">
                      <div className="product_img">
                        <Link  href="shop-product-detail.html">
                          <img
                            src="assets/images/product_img2.jpg"
                            alt="product_img2"
                          />
                        </Link >
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart">
                              <Link  href="#">
                                <i className="icon-basket-loaded"></i> Add To
                                Cart
                              </Link >
                            </li>
                            <li>
                              <Link  href="shop-compare.html">
                                <i className="icon-shuffle"></i>
                              </Link >
                            </li>
                            <li>
                              <Link 
                                href="shop-quick-view.html"
                                className="popup-ajax"
                              >
                                <i className="icon-magnifier-add"></i>
                              </Link >
                            </li>
                            <li>
                              <Link  href="#">
                                <i className="icon-heart"></i>
                              </Link >
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title">
                          <Link  href="shop-product-detail.html">
                            Lether Gray Tuxedo
                          </Link >
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
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product">
                      <span className="pr_flash">New</span>
                      <div className="product_img">
                        <Link  href="shop-product-detail.html">
                          <img
                            src="assets/images/product_img3.jpg"
                            alt="product_img3"
                          />
                        </Link >
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart">
                              <Link  href="#">
                                <i className="icon-basket-loaded"></i> Add To
                                Cart
                              </Link >
                            </li>
                            <li>
                              <Link  href="shop-compare.html">
                                <i className="icon-shuffle"></i>
                              </Link >
                            </li>
                            <li>
                              <Link 
                                href="shop-quick-view.html"
                                className="popup-ajax"
                              >
                                <i className="icon-magnifier-add"></i>
                              </Link >
                            </li>
                            <li>
                              <Link  href="#">
                                <i className="icon-heart"></i>
                              </Link >
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title">
                          <Link  href="shop-product-detail.html">
                            woman full sliv dress
                          </Link >
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
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product">
                      <div className="product_img">
                        <Link  href="shop-product-detail.html">
                          <img
                            src="assets/images/product_img4.jpg"
                            alt="product_img4"
                          />
                        </Link >
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart">
                              <Link  href="#">
                                <i className="icon-basket-loaded"></i> Add To
                                Cart
                              </Link >
                            </li>
                            <li>
                              <Link  href="shop-compare.html">
                                <i className="icon-shuffle"></i>
                              </Link >
                            </li>
                            <li>
                              <Link 
                                href="shop-quick-view.html"
                                className="popup-ajax"
                              >
                                <i className="icon-magnifier-add"></i>
                              </Link >
                            </li>
                            <li>
                              <Link  href="#">
                                <i className="icon-heart"></i>
                              </Link >
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title">
                          <Link  href="shop-product-detail.html">
                            light blue Shirt
                          </Link >
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
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="product">
                      <div className="product_img">
                        <Link  href="shop-product-detail.html">
                          <img
                            src="assets/images/product_img5.jpg"
                            alt="product_img5"
                          />
                        </Link >
                        <div className="product_action_box">
                          <ul className="list_none pr_action_btn">
                            <li className="add-to-cart">
                              <Link  href="#">
                                <i className="icon-basket-loaded"></i> Add To
                                Cart
                              </Link >
                            </li>
                            <li>
                              <Link  href="shop-compare.html">
                                <i className="icon-shuffle"></i>
                              </Link >
                            </li>
                            <li>
                              <Link 
                                href="shop-quick-view.html"
                                className="popup-ajax"
                              >
                                <i className="icon-magnifier-add"></i>
                              </Link >
                            </li>
                            <li>
                              <Link  href="#">
                                <i className="icon-heart"></i>
                              </Link >
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product_info">
                        <h6 className="product_title">
                          <Link  href="shop-product-detail.html">
                            blue dress for woman
                          </Link >
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
    </>
  )
}

export default ShopProductDetails;
