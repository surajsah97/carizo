// import React from "react";
// import { Link } from "react-router-dom";
// import Corousels from "./Corousels";

// const Home = () => {
//   return (
//     <>
//       <Corousels />
//       <div>
//         <div
//           className="modal fade subscribe_popup"
//           id="onload-popup"
//           tabhome="-1"
//           role="dialog"
//           aria-hidden="true"
//         >
//           <div
//             className="modal-dialog modal-lg modal-dialog-centered"
//             role="document"  
//           >
//             <div className="modal-content">
//               <div className="modal-body">
//                 <button
//                   type="button"
//                   className="close"
//                   data-dismiss="modal"
//                   aria-label="Close"
//                 >
//                   <span aria-hidden="true">
//                     <i className="ion-ios-close-empty"></i>
//                   </span>
//                 </button>
//                 <div className="row no-gutters">
//                   <div className="col-sm-7">
//                     <div className="popup_content text-left">
//                       <div className="popup-text">
//                         <div className="heading_s1">
//                           <h3>Subscribe Newsletter and Get 25% Discount!</h3>
//                         </div>
//                         <p>
//                           Subscribe to the newsletter to receive updates about
//                           new products.
//                         </p>
//                       </div>
//                       <form method="post">
//                         <div className="form-group">
//                           <input
//                             name="email"
//                             required
//                             type="email"
//                             className="form-control"
//                             placeholder="Enter Your Email"
//                           />
//                         </div>
//                         <div className="form-group">
//                           <button
//                             className="btn btn-fill-out btn-block text-uppercase"
//                             title="Subscribe"
//                             type="submit"
//                           >
//                             Subscribe
//                           </button>
//                         </div>
//                       </form>
//                       <div className="chek-form">
//                         <div className="custome-checkbox">
//                           <input
//                             className="form-check-input"
//                             type="checkbox"
//                             name="checkbox"
//                             id="exampleCheckbox3"
//                             value=""
//                           />
//                           <label
//                             className="form-check-label"
//                             htmlFor="exampleCheckbox3"
//                           >
//                             <span>Don't show this popup again!</span>
//                           </label>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-sm-5">
//                     <div
//                       className="background_bg h-100"
//                       data-img-src="assets/images/popup_img3.jpg"
//                     ></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="main_content">
//         {/* <!-- START SECTION BANNER -->  */}
//         <div className="section pb_20 small_pt">
//           <div className="container">
//             <div
//               className="row"
//               style={{
//                 backgroundColor: "#f2f2f2",
//                 paddingTop: "2 0px",
//                 paddingBottom: "20px",
//               }}
//             >
//               <div className="col-xl-3 d-none d-xl-block ">
//                 <div className="sale-banner">
//                   <Link className="hover_effect1" href="#">
//                     <img
//                       src="assets/images/shop_banner_img67.png"
//                       alt="shop_banner_img6"
//                     />
//                   </Link>
//                 </div>
//                 <div
//                   className="product_info "
//                   style={{ border: "0px solid", backgroundColor: "#ee8314" }}
//                 >
//                   <h6 className="product_title" style={{ textAlign: "center" }}>
//                     <Link href="#l">View More</Link>
//                   </h6>
//                 </div>
//               </div>

//               <div className="col-xl-3 d-none d-xl-block ">
//                 <div className="sale-banner">
//                   <Link className="hover_effect1" href="#">
//                     <img
//                       src="assets/images/shop_banner_img67.png"
//                       alt="shop_banner_img6"
//                     />
//                   </Link>
//                 </div>
//                 <div
//                   className="product_info "
//                   style={{ border: "0px solid", backgroundColor: "#ee8314" }}
//                 >
//                   <h6 className="product_title" style={{ textAlign: "center" }}>
//                     <Link href="#l">View More</Link>
//                   </h6>
//                 </div>
//               </div>

//               <div className="col-xl-3 d-none d-xl-block ">
//                 <div className="sale-banner">
//                   <Link className="hover_effect1" href="#">
//                     <img
//                       src="assets/images/shop_banner_img67.png"
//                       alt="shop_banner_img6"
//                     />
//                   </Link>
//                 </div>
//                 <div
//                   className="product_info "
//                   style={{ border: "0px solid", backgroundColor: "#ee8314" }}
//                 >
//                   <h6 className="product_title" style={{ textAlign: "center" }}>
//                     <Link href="#l">View More</Link>
//                   </h6>
//                 </div>
//               </div>

//               <div className="col-xl-3 d-none d-xl-block ">
//                 <div className="sale-banner">
//                   <Link className="hover_effect1" href="#">
//                     <img
//                       src="assets/images/shop_banner_img67.png"
//                       alt="shop_banner_img6"
//                     />
//                   </Link>
//                 </div>
//                 <div
//                   className="product_info "
//                   style={{ border: "0px solid", backgroundColor: "#ee8314" }}
//                 >
//                   <h6 className="product_title" style={{ textAlign: "center" }}>
//                     <Link href="#l">View More</Link>
//                   </h6>
//                 </div>
//               </div>
//             </div>
//             {/* <!-- END SECTION BANNER --> */}

//             {/* <!-- START SECTION SHOP --> */}
//             <div className="section small_pt pb_70">
//               <div className="container">
//                 <div className="row justify-content-center">
//                   <div className="col-md-6">
//                     <div className="heading_s1 text-center">
//                       <h2>Exclusive Products</h2>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-12">
//                     <div className="tab-style1">
//                       <ul
//                         className="nav nav-tabs justify-content-center"
//                         role="tablist"
//                       >
//                         <li className="nav-item">
//                           <Link
//                             className="nav-link active"
//                             id="arrival-tab"
//                             data-toggle="tab"
//                             href="#arrival"
//                             role="tab"
//                             aria-controls="arrival"
//                             aria-selected="true"
//                           >
//                             New Arrival
//                           </Link>
//                         </li>
//                         <li className="nav-item">
//                           <Link
//                             className="nav-link"
//                             id="sellers-tab"
//                             data-toggle="tab"
//                             href="#sellers"
//                             role="tab"
//                             aria-controls="sellers"
//                             aria-selected="false"
//                           >
//                             Best Sellers
//                           </Link>
//                         </li>
//                         <li className="nav-item">
//                           <Link
//                             className="nav-link"
//                             id="featured-tab"
//                             data-toggle="tab"
//                             href="#featured"
//                             role="tab"
//                             aria-controls="featured"
//                             aria-selected="false"
//                           >
//                             Featured
//                           </Link>
//                         </li>
//                         <li className="nav-item">
//                           <Link
//                             className="nav-link"
//                             id="special-tab"
//                             data-toggle="tab"
//                             href="#special"
//                             role="tab"
//                             aria-controls="special"
//                             aria-selected="false"
//                           >
//                             Special Offer
//                           </Link>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="tab-content">
//                       <div
//                         className="tab-pane fade show active"
//                         id="arrival"
//                         role="tabpanel"
//                         aria-labelledby="arrival-tab"
//                       >
//                         <div className="row shop_container">
//                           <div className="col-lg-3 col-md-4 col-6">
//                             <div className="product">
//                               <div className="product_img">
//                                 <Link href="shop-product-detail.php">
//                                   <img
//                                     src="assets/images/product_img1.jpg"
//                                     alt="product_img1"
//                                   />
//                                 </Link>
//                                 <div className="product_action_box">
//                                   <ul className="list_none pr_action_btn">
//                                     <li className="add-to-cart">
//                                       <Link href="#">
//                                         <i className="icon-basket-loaded"></i>{" "}
//                                         Add To Cart
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-compare.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-shuffle"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-quick-view.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-magnifier-add"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link href="#">
//                                         <i className="icon-heart"></i>
//                                       </Link>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </div>
//                               <div className="product_info">
//                                 <h6 className="product_title">
//                                   <Link href="shop-product-detail.php">
//                                     Blue Dress For Woman
//                                   </Link>
//                                 </h6>
//                                 <div className="product_price">
//                                   <span className="price">$45.00</span>
//                                   <del>$55.25</del>
//                                   <div className="on_sale">
//                                     <span>35% Off</span>
//                                   </div>
//                                 </div>
//                                 <div className="rating_wrap">
//                                   <div className="rating">
//                                     <div
//                                       className="product_rate"
//                                       style={{ width: "80%" }}
//                                     ></div>
//                                   </div>
//                                   <span className="rating_num">(21)</span>
//                                 </div>
//                                 <div className="pr_desc">
//                                   <p>
//                                     Lorem ipsum dolor sit amet, consectetur
//                                     adipiscing elit. Phasellus blandit massa
//                                     enim. Nullam id varius nunc id varius nunc.
//                                   </p>
//                                 </div>
//                                 <div className="pr_switch_wrap">
//                                   <div className="product_color_switch">
//                                     <span
//                                       className="active"
//                                       data-color="#87554B"
//                                     ></span>
//                                     <span data-color="#333333"></span>
//                                     <span data-color="#DA323F"></span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-lg-3 col-md-4 col-6">
//                             <div className="product">
//                               <div className="product_img">
//                                 <Link href="shop-product-detail.php">
//                                   <img
//                                     src="assets/images/product_img2.jpg"
//                                     alt="product_img2"
//                                   />
//                                 </Link>
//                                 <div className="product_action_box">
//                                   <ul className="list_none pr_action_btn">
//                                     <li className="add-to-cart">
//                                       <Link href="#">
//                                         <i className="icon-basket-loaded"></i>{" "}
//                                         Add To Cart
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-compare.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-shuffle"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-quick-view.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-magnifier-add"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link href="#">
//                                         <i className="icon-heart"></i>
//                                       </Link>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </div>
//                               <div className="product_info">
//                                 <h6 className="product_title">
//                                   <Link href="shop-product-detail.php">
//                                     Lether Gray Tuxedo
//                                   </Link>
//                                 </h6>
//                                 <div className="product_price">
//                                   <span className="price">$55.00</span>
//                                   <del>$95.00</del>
//                                   <div className="on_sale">
//                                     <span>25% Off</span>
//                                   </div>
//                                 </div>
//                                 <div className="rating_wrap">
//                                   <div className="rating">
//                                     <div
//                                       className="product_rate"
//                                       style={{ width: "68%" }}
//                                     ></div>
//                                   </div>
//                                   <span className="rating_num">(15)</span>
//                                 </div>
//                                 <div className="pr_desc">
//                                   <p>
//                                     Lorem ipsum dolor sit amet, consectetur
//                                     adipiscing elit. Phasellus blandit massa
//                                     enim. Nullam id varius nunc id varius nunc.
//                                   </p>
//                                 </div>
//                                 <div className="pr_switch_wrap">
//                                   <div className="product_color_switch">
//                                     <span
//                                       className="active"
//                                       data-color="#847764"
//                                     ></span>
//                                     <span data-color="#0393B5"></span>
//                                     <span data-color="#DA323F"></span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-lg-3 col-md-4 col-6">
//                             <div className="product">
//                               <span className="pr_flash">New</span>
//                               <div className="product_img">
//                                 <Link href="shop-product-detail.php">
//                                   <img
//                                     src="assets/images/product_img3.jpg"
//                                     alt="product_img3"
//                                   />
//                                 </Link>
//                                 <div className="product_action_box">
//                                   <ul className="list_none pr_action_btn">
//                                     <li className="add-to-cart">
//                                       <Link href="#">
//                                         <i className="icon-basket-loaded"></i>{" "}
//                                         Add To Cart
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-compare.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-shuffle"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-quick-view.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-magnifier-add"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link href="#">
//                                         <i className="icon-heart"></i>
//                                       </Link>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </div>
//                               <div className="product_info">
//                                 <h6 className="product_title">
//                                   <Link href="shop-product-detail.php">
//                                     woman full sliv dress
//                                   </Link>
//                                 </h6>
//                                 <div className="product_price">
//                                   <span className="price">$68.00</span>
//                                   <del>$99.00</del>
//                                 </div>
//                                 <div className="rating_wrap">
//                                   <div className="rating">
//                                     <div
//                                       className="product_rate"
//                                       style={{ width: "87%" }}
//                                     ></div>
//                                   </div>
//                                   <span className="rating_num">(25)</span>
//                                 </div>
//                                 <div className="pr_desc">
//                                   <p>
//                                     Lorem ipsum dolor sit amet, consectetur
//                                     adipiscing elit. Phasellus blandit massa
//                                     enim. Nullam id varius nunc id varius nunc.
//                                   </p>
//                                 </div>
//                                 <div className="pr_switch_wrap">
//                                   <div className="product_color_switch">
//                                     <span
//                                       className="active"
//                                       data-color="#333333"
//                                     ></span>
//                                     <span data-color="#7C502F"></span>
//                                     <span data-color="#2F366C"></span>
//                                     <span data-color="#874A3D"></span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-lg-3 col-md-4 col-6">
//                             <div className="product">
//                               <div className="product_img">
//                                 <Link href="shop-product-detail.php">
//                                   <img
//                                     src="assets/images/product_img4.jpg"
//                                     alt="product_img4"
//                                   />
//                                 </Link>
//                                 <div className="product_action_box">
//                                   <ul className="list_none pr_action_btn">
//                                     <li className="add-to-cart">
//                                       <Link href="#">
//                                         <i className="icon-basket-loaded"></i>{" "}
//                                         Add To Cart
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-compare.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-shuffle"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-quick-view.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-magnifier-add"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link href="#">
//                                         <i className="icon-heart"></i>
//                                       </Link>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </div>
//                               <div className="product_info">
//                                 <h6 className="product_title">
//                                   <Link href="shop-product-detail.php">
//                                     light blue Shirt
//                                   </Link>
//                                 </h6>
//                                 <div className="product_price">
//                                   <span className="price">$69.00</span>
//                                   <del>$89.00</del>
//                                   <div className="on_sale">
//                                     <span>20% Off</span>
//                                   </div>
//                                 </div>
//                                 <div className="rating_wrap">
//                                   <div className="rating">
//                                     <div
//                                       className="product_rate"
//                                       style={{ width: "70%" }}
//                                     ></div>
//                                   </div>
//                                   <span className="rating_num">(22)</span>
//                                 </div>
//                                 <div className="pr_desc">
//                                   <p>
//                                     Lorem ipsum dolor sit amet, consectetur
//                                     adipiscing elit. Phasellus blandit massa
//                                     enim. Nullam id varius nunc id varius nunc.
//                                   </p>
//                                 </div>
//                                 <div className="pr_switch_wrap">
//                                   <div className="product_color_switch">
//                                     <span
//                                       className="active"
//                                       data-color="#333333"
//                                     ></span>
//                                     <span data-color="#A92534"></span>
//                                     <span data-color="#B9C2DF"></span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-lg-3 col-md-4 col-6">
//                             <div className="product">
//                               <div className="product_img">
//                                 <Link href="shop-product-detail.php">
//                                   <img
//                                     src="assets/images/product_img5.jpg"
//                                     alt="product_img5"
//                                   />
//                                 </Link>
//                                 <div className="product_action_box">
//                                   <ul className="list_none pr_action_btn">
//                                     <li className="add-to-cart">
//                                       <Link href="#">
//                                         <i className="icon-basket-loaded"></i>{" "}
//                                         Add To Cart
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-compare.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-shuffle"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-quick-view.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-magnifier-add"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link href="#">
//                                         <i className="icon-heart"></i>
//                                       </Link>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </div>
//                               <div className="product_info">
//                                 <h6 className="product_title">
//                                   <Link href="shop-product-detail.php">
//                                     blue dress for woman
//                                   </Link>
//                                 </h6>
//                                 <div className="product_price">
//                                   <span className="price">$45.00</span>
//                                   <del>$55.25</del>
//                                   <div className="on_sale">
//                                     <span>35% Off</span>
//                                   </div>
//                                 </div>
//                                 <div className="rating_wrap">
//                                   <div className="rating">
//                                     <div
//                                       className="product_rate"
//                                       style={{ width: "80%" }}
//                                     ></div>
//                                   </div>
//                                   <span className="rating_num">(21)</span>
//                                 </div>
//                                 <div className="pr_desc">
//                                   <p>
//                                     Lorem ipsum dolor sit amet, consectetur
//                                     adipiscing elit. Phasellus blandit massa
//                                     enim. Nullam id varius nunc id varius nunc.
//                                   </p>
//                                 </div>
//                                 <div className="pr_switch_wrap">
//                                   <div className="product_color_switch">
//                                     <span
//                                       className="active"
//                                       data-color="#87554B"
//                                     ></span>
//                                     <span data-color="#333333"></span>
//                                     <span data-color="#5FB7D4"></span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-lg-3 col-md-4 col-6">
//                             <div className="product">
//                               <span className="pr_flash bg-danger">Hot</span>
//                               <div className="product_img">
//                                 <Link href="shop-product-detail.php">
//                                   <img
//                                     src="assets/images/product_img6.jpg"
//                                     alt="product_img6"
//                                   />
//                                 </Link>
//                                 <div className="product_action_box">
//                                   <ul className="list_none pr_action_btn">
//                                     <li className="add-to-cart">
//                                       <Link href="#">
//                                         <i className="icon-basket-loaded"></i>{" "}
//                                         Add To Cart
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-compare.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-shuffle"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-quick-view.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-magnifier-add"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link href="#">
//                                         <i className="icon-heart"></i>
//                                       </Link>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </div>
//                               <div className="product_info">
//                                 <h6 className="product_title">
//                                   <Link href="shop-product-detail.php">
//                                     Blue casual check shirt
//                                   </Link>
//                                 </h6>
//                                 <div className="product_price">
//                                   <span className="price">$55.00</span>
//                                   <del>$95.00</del>
//                                   <div className="on_sale">
//                                     <span>25% Off</span>
//                                   </div>
//                                 </div>
//                                 <div className="rating_wrap">
//                                   <div className="rating">
//                                     <div
//                                       className="product_rate"
//                                       style={{ width: "68%" }}
//                                     ></div>
//                                   </div>
//                                   <span className="rating_num">(15)</span>
//                                 </div>
//                                 <div className="pr_desc">
//                                   <p>
//                                     Lorem ipsum dolor sit amet, consectetur
//                                     adipiscing elit. Phasellus blandit massa
//                                     enim. Nullam id varius nunc id varius nunc.
//                                   </p>
//                                 </div>
//                                 <div className="pr_switch_wrap">
//                                   <div className="product_color_switch">
//                                     <span
//                                       className="active"
//                                       data-color="#87554B"
//                                     ></span>
//                                     <span data-color="#333333"></span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-lg-3 col-md-4 col-6">
//                             <div className="product">
//                               <span className="pr_flash bg-success">Sale</span>
//                               <div className="product_img">
//                                 <Link href="shop-product-detail.php">
//                                   <img
//                                     src="assets/images/product_img7.jpg"
//                                     alt="product_img7"
//                                   />
//                                 </Link>
//                                 <div className="product_action_box">
//                                   <ul className="list_none pr_action_btn">
//                                     <li className="add-to-cart">
//                                       <Link href="#">
//                                         <i className="icon-basket-loaded"></i>{" "}
//                                         Add To Cart
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-compare.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-shuffle"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-quick-view.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-magnifier-add"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link href="#">
//                                         <i className="icon-heart"></i>
//                                       </Link>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </div>
//                               <div className="product_info">
//                                 <h6 className="product_title">
//                                   <Link href="shop-product-detail.php">
//                                     white black line dress
//                                   </Link>
//                                 </h6>
//                                 <div className="product_price">
//                                   <span className="price">$68.00</span>
//                                   <del>$99.00</del>
//                                   <div className="on_sale">
//                                     <span>20% Off</span>
//                                   </div>
//                                 </div>
//                                 <div className="rating_wrap">
//                                   <div className="rating">
//                                     <div
//                                       className="product_rate"
//                                       style={{ width: "87%" }}
//                                     ></div>
//                                   </div>
//                                   <span className="rating_num">(25)</span>
//                                 </div>
//                                 <div className="pr_desc">
//                                   <p>
//                                     Lorem ipsum dolor sit amet, consectetur
//                                     adipiscing elit. Phasellus blandit massa
//                                     enim. Nullam id varius nunc id varius nunc.
//                                   </p>
//                                 </div>
//                                 <div className="pr_switch_wrap">
//                                   <div className="product_color_switch">
//                                     <span
//                                       className="active"
//                                       data-color="#333333"
//                                     ></span>
//                                     <span data-color="#7C502F"></span>
//                                     <span data-color="#2F366C"></span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-lg-3 col-md-4 col-6">
//                             <div className="product">
//                               <div className="product_img">
//                                 <Link href="shop-product-detail.php">
//                                   <img
//                                     src="assets/images/product_img8.jpg"
//                                     alt="product_img8"
//                                   />
//                                 </Link>
//                                 <div className="product_action_box">
//                                   <ul className="list_none pr_action_btn">
//                                     <li className="add-to-cart">
//                                       <Link href="#">
//                                         <i className="icon-basket-loaded"></i>{" "}
//                                         Add To Cart
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-compare.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-shuffle"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-quick-view.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-magnifier-add"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link href="#">
//                                         <i className="icon-heart"></i>
//                                       </Link>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </div>
//                               <div className="product_info">
//                                 <h6 className="product_title">
//                                   <Link href="shop-product-detail.php">
//                                     Men blue jins Shirt
//                                   </Link>
//                                 </h6>
//                                 <div className="product_price">
//                                   <span className="price">$69.00</span>
//                                   <del>$89.00</del>
//                                   <div className="on_sale">
//                                     <span>20% Off</span>
//                                   </div>
//                                 </div>
//                                 <div className="rating_wrap">
//                                   <div className="rating">
//                                     <div
//                                       className="product_rate"
//                                       style={{ width: "70%" }}
//                                     ></div>
//                                   </div>
//                                   <span className="rating_num">(22)</span>
//                                 </div>
//                                 <div className="pr_desc">
//                                   <p>
//                                     Lorem ipsum dolor sit amet, consectetur
//                                     adipiscing elit. Phasellus blandit massa
//                                     enim. Nullam id varius nunc id varius nunc.
//                                   </p>
//                                 </div>
//                                 <div className="pr_switch_wrap">
//                                   <div className="product_color_switch">
//                                     <span
//                                       className="active"
//                                       data-color="#333333"
//                                     ></span>
//                                     <span data-color="#444653"></span>
//                                     <span data-color="#B9C2DF"></span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div
//                         className="tab-pane fade show active"
//                         id="sellers"
//                         role="tabpanel"
//                         aria-labelledby="sellers-tab"
//                       >
//                         <div className="row shop_container">
//                           <div className="col-lg-3 col-md-4 col-6">
//                             <div className="product">
//                               <div className="product_img">
//                                 <Link href="shop-product-detail.php">
//                                   <img
//                                     src="assets/images/product_img9.jpg"
//                                     alt="product_img9"
//                                   />
//                                 </Link>
//                                 <div className="product_action_box">
//                                   <ul className="list_none pr_action_btn">
//                                     <li className="add-to-cart">
//                                       <Link href="#">
//                                         <i className="icon-basket-loaded"></i>{" "}
//                                         Add To Cart
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-compare.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-shuffle"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-quick-view.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-magnifier-add"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link href="#">
//                                         <i className="icon-heart"></i>
//                                       </Link>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </div>
//                               <div className="product_info">
//                                 <h6 className="product_title">
//                                   <Link href="shop-product-detail.php">
//                                     T-Shirt Form Girls
//                                   </Link>
//                                 </h6>
//                                 <div className="product_price">
//                                   <span className="price">$45.00</span>
//                                   <del>$55.25</del>
//                                   <div className="on_sale">
//                                     <span>35% Off</span>
//                                   </div>
//                                 </div>
//                                 <div className="rating_wrap">
//                                   <div className="rating">
//                                     <div
//                                       className="product_rate"
//                                       style={{ width: "80%" }}
//                                     ></div>
//                                   </div>
//                                   <span className="rating_num">(21)</span>
//                                 </div>
//                                 <div className="pr_desc">
//                                   <p>
//                                     Lorem ipsum dolor sit amet, consectetur
//                                     adipiscing elit. Phasellus blandit massa
//                                     enim. Nullam id varius nunc id varius nunc.
//                                   </p>
//                                 </div>
//                                 <div className="pr_switch_wrap">
//                                   <div className="product_color_switch">
//                                     <span
//                                       className="active"
//                                       data-color="#B5B6BB"
//                                     ></span>
//                                     <span data-color="#333333"></span>
//                                     <span data-color="#DA323F"></span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-lg-3 col-md-4 col-6">
//                             <div className="product">
//                               <span className="pr_flash bg-danger">Hot</span>
//                               <div className="product_img">
//                                 <Link href="shop-product-detail.php">
//                                   <img
//                                     src="assets/images/product_img6.jpg"
//                                     alt="product_img6"
//                                   />
//                                 </Link>
//                                 <div className="product_action_box">
//                                   <ul className="list_none pr_action_btn">
//                                     <li className="add-to-cart">
//                                       <Link href="#">
//                                         <i className="icon-basket-loaded"></i>{" "}
//                                         Add To Cart
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-compare.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-shuffle"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-quick-view.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-magnifier-add"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link href="#">
//                                         <i className="icon-heart"></i>
//                                       </Link>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </div>
//                               <div className="product_info">
//                                 <h6 className="product_title">
//                                   <Link href="shop-product-detail.php">
//                                     Blue casual check shirt
//                                   </Link>
//                                 </h6>
//                                 <div className="product_price">
//                                   <span className="price">$55.00</span>
//                                   <del>$95.00</del>
//                                   <div className="on_sale">
//                                     <span>25% Off</span>
//                                   </div>
//                                 </div>
//                                 <div className="rating_wrap">
//                                   <div className="rating">
//                                     <div
//                                       className="product_rate"
//                                       style={{ width: "68%" }}
//                                     ></div>
//                                   </div>
//                                   <span className="rating_num">(15)</span>
//                                 </div>
//                                 <div className="pr_desc">
//                                   <p>
//                                     Lorem ipsum dolor sit amet, consectetur
//                                     adipiscing elit. Phasellus blandit massa
//                                     enim. Nullam id varius nunc id varius nunc.
//                                   </p>
//                                 </div>
//                                 <div className="pr_switch_wrap">
//                                   <div className="product_color_switch">
//                                     <span
//                                       className="active"
//                                       data-color="#87554B"
//                                     ></span>
//                                     <span data-color="#333333"></span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-lg-3 col-md-4 col-6">
//                             <div className="product">
//                               <div className="product_img">
//                                 <Link href="shop-product-detail.php">
//                                   <img
//                                     src="assets/images/product_img11.jpg"
//                                     alt="product_img11"
//                                   />
//                                 </Link>
//                                 <div className="product_action_box">
//                                   <ul className="list_none pr_action_btn">
//                                     <li className="add-to-cart">
//                                       <Link href="#">
//                                         <i className="icon-basket-loaded"></i>{" "}
//                                         Add To Cart
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-compare.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-shuffle"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-quick-view.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-magnifier-add"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link href="#">
//                                         <i className="icon-heart"></i>
//                                       </Link>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </div>
//                               <div className="product_info">
//                                 <h6 className="product_title">
//                                   <Link href="shop-product-detail.php">
//                                     Black dress for woman
//                                   </Link>
//                                 </h6>
//                                 <div className="product_price">
//                                   <span className="price">$68.00</span>
//                                   <del>$99.00</del>
//                                   <div className="on_sale">
//                                     <span>20% Off</span>
//                                   </div>
//                                 </div>
//                                 <div className="rating_wrap">
//                                   <div className="rating">
//                                     <div
//                                       className="product_rate"
//                                       style={{ width: "87%" }}
//                                     ></div>
//                                   </div>
//                                   <span className="rating_num">(25)</span>
//                                 </div>
//                                 <div className="pr_desc">
//                                   <p>
//                                     Lorem ipsum dolor sit amet, consectetur
//                                     adipiscing elit. Phasellus blandit massa
//                                     enim. Nullam id varius nunc id varius nunc.
//                                   </p>
//                                 </div>
//                                 <div className="pr_switch_wrap">
//                                   <div className="product_color_switch">
//                                     <span
//                                       className="active"
//                                       data-color="#090909"
//                                     ></span>
//                                     <span data-color="#AC644D"></span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-lg-3 col-md-4 col-6">
//                             <div className="product">
//                               <span className="pr_flash bg-success">Sale</span>
//                               <div className="product_img">
//                                 <Link href="shop-product-detail.php">
//                                   <img
//                                     src="assets/images/product_img7.jpg"
//                                     alt="product_img7"
//                                   />
//                                 </Link>
//                                 <div className="product_action_box">
//                                   <ul className="list_none pr_action_btn">
//                                     <li className="add-to-cart">
//                                       <Link href="#">
//                                         <i className="icon-basket-loaded"></i>{" "}
//                                         Add To Cart
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-compare.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-shuffle"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-quick-view.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-magnifier-add"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link href="#">
//                                         <i className="icon-heart"></i>
//                                       </Link>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </div>
//                               <div className="product_info">
//                                 <h6 className="product_title">
//                                   <Link href="shop-product-detail.php">
//                                     white black line dress
//                                   </Link>
//                                 </h6>
//                                 <div className="product_price">
//                                   <span className="price">$68.00</span>
//                                   <del>$99.00</del>
//                                   <div className="on_sale">
//                                     <span>20% Off</span>
//                                   </div>
//                                 </div>
//                                 <div className="rating_wrap">
//                                   <div className="rating">
//                                     <div
//                                       className="product_rate"
//                                       style={{ width: "87%" }}
//                                     ></div>
//                                   </div>
//                                   <span className="rating_num">(25)</span>
//                                 </div>
//                                 <div className="pr_desc">
//                                   <p>
//                                     Lorem ipsum dolor sit amet, consectetur
//                                     adipiscing elit. Phasellus blandit massa
//                                     enim. Nullam id varius nunc id varius nunc.
//                                   </p>
//                                 </div>
//                                 <div className="pr_switch_wrap">
//                                   <div className="product_color_switch">
//                                     <span
//                                       className="active"
//                                       data-color="#333333"
//                                     ></span>
//                                     <span data-color="#7C502F"></span>
//                                     <span data-color="#2F366C"></span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-lg-3 col-md-4 col-6">
//                             <div className="product">
//                               <div className="product_img">
//                                 <Link href="shop-product-detail.php">
//                                   <img
//                                     src="assets/images/product_img8.jpg"
//                                     alt="product_img8"
//                                   />
//                                 </Link>
//                                 <div className="product_action_box">
//                                   <ul className="list_none pr_action_btn">
//                                     <li className="add-to-cart">
//                                       <Link href="#">
//                                         <i className="icon-basket-loaded"></i>{" "}
//                                         Add To Cart
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-compare.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-shuffle"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-quick-view.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-magnifier-add"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link href="#">
//                                         <i className="icon-heart"></i>
//                                       </Link>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </div>
//                               <div className="product_info">
//                                 <h6 className="product_title">
//                                   <Link href="shop-product-detail.php">
//                                     Men blue jins Shirt
//                                   </Link>
//                                 </h6>
//                                 <div className="product_price">
//                                   <span className="price">$69.00</span>
//                                   <del>$89.00</del>
//                                   <div className="on_sale">
//                                     <span>20% Off</span>
//                                   </div>
//                                 </div>
//                                 <div className="rating_wrap">
//                                   <div className="rating">
//                                     <div
//                                       className="product_rate"
//                                       style={{ width: "70%" }}
//                                     ></div>
//                                   </div>
//                                   <span className="rating_num">(22)</span>
//                                 </div>
//                                 <div className="pr_desc">
//                                   <p>
//                                     Lorem ipsum dolor sit amet, consectetur
//                                     adipiscing elit. Phasellus blandit massa
//                                     enim. Nullam id varius nunc id varius nunc.
//                                   </p>
//                                 </div>
//                                 <div className="pr_switch_wrap">
//                                   <div className="product_color_switch">
//                                     <span
//                                       className="active"
//                                       data-color="#333333"
//                                     ></span>
//                                     <span data-color="#444653"></span>
//                                     <span data-color="#B9C2DF"></span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-lg-3 col-md-4 col-6">
//                             <div className="product">
//                               <div className="product_img">
//                                 <Link href="shop-product-detail.php">
//                                   <img
//                                     src="assets/images/product_img5.jpg"
//                                     alt="product_img5"
//                                   />
//                                 </Link>
//                                 <div className="product_action_box">
//                                   <ul className="list_none pr_action_btn">
//                                     <li className="add-to-cart">
//                                       <Link href="#">
//                                         <i className="icon-basket-loaded"></i>{" "}
//                                         Add To Cart
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-compare.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-shuffle"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-quick-view.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-magnifier-add"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link href="#">
//                                         <i className="icon-heart"></i>
//                                       </Link>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </div>
//                               <div className="product_info">
//                                 <h6 className="product_title">
//                                   <Link href="shop-product-detail.php">
//                                     blue dress for woman
//                                   </Link>
//                                 </h6>
//                                 <div className="product_price">
//                                   <span className="price">$45.00</span>
//                                   <del>$55.25</del>
//                                   <div className="on_sale">
//                                     <span>35% Off</span>
//                                   </div>
//                                 </div>
//                                 <div className="rating_wrap">
//                                   <div className="rating">
//                                     <div
//                                       className="product_rate"
//                                       style={{ width: "80%" }}
//                                     ></div>
//                                   </div>
//                                   <span className="rating_num">(21)</span>
//                                 </div>
//                                 <div className="pr_desc">
//                                   <p>
//                                     Lorem ipsum dolor sit amet, consectetur
//                                     adipiscing elit. Phasellus blandit massa
//                                     enim. Nullam id varius nunc id varius nunc.
//                                   </p>
//                                 </div>
//                                 <div className="pr_switch_wrap">
//                                   <div className="product_color_switch">
//                                     <span
//                                       className="active"
//                                       data-color="#87554B"
//                                     ></span>
//                                     <span data-color="#333333"></span>
//                                     <span data-color="#5FB7D4"></span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-lg-3 col-md-4 col-6">
//                             <div className="product">
//                               <div className="product_img">
//                                 <Link href="shop-product-detail.php">
//                                   <img
//                                     src="assets/images/product_img12.jpg"
//                                     alt="product_img12"
//                                   />
//                                 </Link>
//                                 <div className="product_action_box">
//                                   <ul className="list_none pr_action_btn">
//                                     <li className="add-to-cart">
//                                       <Link href="#">
//                                         <i className="icon-basket-loaded"></i>{" "}
//                                         Add To Cart
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-compare.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-shuffle"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-quick-view.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-magnifier-add"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link href="#">
//                                         <i className="icon-heart"></i>
//                                       </Link>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </div>
//                               <div className="product_info">
//                                 <span className="pr_flash">New</span>
//                                 <h6 className="product_title">
//                                   <Link href="shop-product-detail.php">
//                                     Black T-shirt for woman
//                                   </Link>
//                                 </h6>
//                                 <div className="product_price">
//                                   <span className="price">$69.00</span>
//                                   <del>$89.00</del>
//                                   <div className="on_sale">
//                                     <span>20% Off</span>
//                                   </div>
//                                 </div>
//                                 <div className="rating_wrap">
//                                   <div className="rating">
//                                     <div
//                                       className="product_rate"
//                                       style={{ width: "70%" }}
//                                     ></div>
//                                   </div>
//                                   <span className="rating_num">(22)</span>
//                                 </div>
//                                 <div className="pr_desc">
//                                   <p>
//                                     Lorem ipsum dolor sit amet, consectetur
//                                     adipiscing elit. Phasellus blandit massa
//                                     enim. Nullam id varius nunc id varius nunc.
//                                   </p>
//                                 </div>
//                                 <div className="pr_switch_wrap">
//                                   <div className="product_color_switch">
//                                     <span
//                                       className="active"
//                                       data-color="#1B1B25"
//                                     ></span>
//                                     <span data-color="#444653"></span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-lg-3 col-md-4 col-6">
//                             <div className="product">
//                               <span className="pr_flash bg-danger">Hot</span>
//                               <div className="product_img">
//                                 <Link href="shop-product-detail.php">
//                                   <img
//                                     src="assets/images/product_img10.jpg"
//                                     alt="product_img10"
//                                   />
//                                 </Link>
//                                 <div className="product_action_box">
//                                   <ul className="list_none pr_action_btn">
//                                     <li className="add-to-cart">
//                                       <Link href="#">
//                                         <i className="icon-basket-loaded"></i>{" "}
//                                         Add To Cart
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-compare.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-shuffle"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-quick-view.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-magnifier-add"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link href="#">
//                                         <i className="icon-heart"></i>
//                                       </Link>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </div>
//                               <div className="product_info">
//                                 <h6 className="product_title">
//                                   <Link href="shop-product-detail.php">
//                                     Red & Black check shirt
//                                   </Link>
//                                 </h6>
//                                 <div className="product_price">
//                                   <span className="price">$55.00</span>
//                                   <del>$95.00</del>
//                                   <div className="on_sale">
//                                     <span>25% Off</span>
//                                   </div>
//                                 </div>
//                                 <div className="rating_wrap">
//                                   <div className="rating">
//                                     <div
//                                       className="product_rate"
//                                       style={{ width: "68%" }}
//                                     ></div>
//                                   </div>
//                                   <span className="rating_num">(15)</span>
//                                 </div>
//                                 <div className="pr_desc">
//                                   <p>
//                                     Lorem ipsum dolor sit amet, consectetur
//                                     adipiscing elit. Phasellus blandit massa
//                                     enim. Nullam id varius nunc id varius nunc.
//                                   </p>
//                                 </div>
//                                 <div className="pr_switch_wrap">
//                                   <div className="product_color_switch">
//                                     <span
//                                       className="active"
//                                       data-color="#E8ADA9"
//                                     ></span>
//                                     <span data-color="#C38F77"></span>
//                                     <span data-color="#BE7154"></span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div
//                         className="tab-pane fade show active"
//                         id="featured"
//                         role="tabpanel"
//                         aria-labelledby="featured-tab"
//                       >
//                         <div className="row shop_container">
//                           <div className="col-lg-3 col-md-4 col-6">
//                             <div className="product">
//                               <div className="product_img">
//                                 <Link href="shop-product-detail.php">
//                                   <img
//                                     src="assets/images/product_img5.jpg"
//                                     alt="product_img5"
//                                   />
//                                 </Link>
//                                 <div className="product_action_box">
//                                   <ul className="list_none pr_action_btn">
//                                     <li className="add-to-cart">
//                                       <Link href="#">
//                                         <i className="icon-basket-loaded"></i>{" "}
//                                         Add To Cart
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-compare.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-shuffle"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-quick-view.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-magnifier-add"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link href="#">
//                                         <i className="icon-heart"></i>
//                                       </Link>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </div>
//                               <div className="product_info">
//                                 <h6 className="product_title">
//                                   <Link href="shop-product-detail.php">
//                                     blue dress for woman
//                                   </Link>
//                                 </h6>
//                                 <div className="product_price">
//                                   <span className="price">$45.00</span>
//                                   <del>$55.25</del>
//                                   <div className="on_sale">
//                                     <span>35% Off</span>
//                                   </div>
//                                 </div>
//                                 <div className="rating_wrap">
//                                   <div className="rating">
//                                     <div
//                                       className="product_rate"
//                                       style={{ width: "80%" }}
//                                     ></div>
//                                   </div>
//                                   <span className="rating_num">(21)</span>
//                                 </div>
//                                 <div className="pr_desc">
//                                   <p>
//                                     Lorem ipsum dolor sit amet, consectetur
//                                     adipiscing elit. Phasellus blandit massa
//                                     enim. Nullam id varius nunc id varius nunc.
//                                   </p>
//                                 </div>
//                                 <div className="pr_switch_wrap">
//                                   <div className="product_color_switch">
//                                     <span
//                                       className="active"
//                                       data-color="#87554B"
//                                     ></span>
//                                     <span data-color="#333333"></span>
//                                     <span data-color="#5FB7D4"></span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-lg-3 col-md-4 col-6">
//                             <div className="product">
//                               <div className="product_img">
//                                 <Link href="shop-product-detail.php">
//                                   <img
//                                     src="assets/images/product_img12.jpg"
//                                     alt="product_img12"
//                                   />
//                                 </Link>
//                                 <div className="product_action_box">
//                                   <ul className="list_none pr_action_btn">
//                                     <li className="add-to-cart">
//                                       <Link href="#">
//                                         <i className="icon-basket-loaded"></i>{" "}
//                                         Add To Cart
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-compare.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-shuffle"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-quick-view.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-magnifier-add"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link href="#">
//                                         <i className="icon-heart"></i>
//                                       </Link>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </div>
//                               <div className="product_info">
//                                 <span className="pr_flash">New</span>
//                                 <h6 className="product_title">
//                                   <Link href="shop-product-detail.php">
//                                     Black T-shirt for woman
//                                   </Link>
//                                 </h6>
//                                 <div className="product_price">
//                                   <span className="price">$69.00</span>
//                                   <del>$89.00</del>
//                                   <div className="on_sale">
//                                     <span>20% Off</span>
//                                   </div>
//                                 </div>
//                                 <div className="rating_wrap">
//                                   <div className="rating">
//                                     <div
//                                       className="product_rate"
//                                       style={{ width: "70%" }}
//                                     ></div>
//                                   </div>
//                                   <span className="rating_num">(22)</span>
//                                 </div>
//                                 <div className="pr_desc">
//                                   <p>
//                                     Lorem ipsum dolor sit amet, consectetur
//                                     adipiscing elit. Phasellus blandit massa
//                                     enim. Nullam id varius nunc id varius nunc.
//                                   </p>
//                                 </div>
//                                 <div className="pr_switch_wrap">
//                                   <div className="product_color_switch">
//                                     <span
//                                       className="active"
//                                       data-color="#1B1B25"
//                                     ></span>
//                                     <span data-color="#444653"></span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-lg-3 col-md-4 col-6">
//                             <div className="product">
//                               <div className="product_img">
//                                 <Link href="shop-product-detail.php">
//                                   <img
//                                     src="assets/images/product_img9.jpg"
//                                     alt="product_img9"
//                                   />
//                                 </Link>
//                                 <div className="product_action_box">
//                                   <ul className="list_none pr_action_btn">
//                                     <li className="add-to-cart">
//                                       <Link href="#">
//                                         <i className="icon-basket-loaded"></i>{" "}
//                                         Add To Cart
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-compare.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-shuffle"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-quick-view.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-magnifier-add"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link href="#">
//                                         <i className="icon-heart"></i>
//                                       </Link>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </div>
//                               <div className="product_info">
//                                 <h6 className="product_title">
//                                   <Link href="shop-product-detail.php">
//                                     T-Shirt Form Girls
//                                   </Link>
//                                 </h6>
//                                 <div className="product_price">
//                                   <span className="price">$45.00</span>
//                                   <del>$55.25</del>
//                                   <div className="on_sale">
//                                     <span>35% Off</span>
//                                   </div>
//                                 </div>
//                                 <div className="rating_wrap">
//                                   <div className="rating">
//                                     <div
//                                       className="product_rate"
//                                       style={{ width: "80%" }}
//                                     ></div>
//                                   </div>
//                                   <span className="rating_num">(21)</span>
//                                 </div>
//                                 <div className="pr_desc">
//                                   <p>
//                                     Lorem ipsum dolor sit amet, consectetur
//                                     adipiscing elit. Phasellus blandit massa
//                                     enim. Nullam id varius nunc id varius nunc.
//                                   </p>
//                                 </div>
//                                 <div className="pr_switch_wrap">
//                                   <div className="product_color_switch">
//                                     <span
//                                       className="active"
//                                       data-color="#B5B6BB"
//                                     ></span>
//                                     <span data-color="#333333"></span>
//                                     <span data-color="#DA323F"></span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-lg-3 col-md-4 col-6">
//                             <div className="product">
//                               <span className="pr_flash bg-success">Sale</span>
//                               <div className="product_img">
//                                 <Link href="shop-product-detail.php">
//                                   <img
//                                     src="assets/images/product_img10.jpg"
//                                     alt="product_img10"
//                                   />
//                                 </Link>
//                                 <div className="product_action_box">
//                                   <ul className="list_none pr_action_btn">
//                                     <li className="add-to-cart">
//                                       <Link href="#">
//                                         <i className="icon-basket-loaded"></i>{" "}
//                                         Add To Cart
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-compare.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-shuffle"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-quick-view.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-magnifier-add"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link href="#">
//                                         <i className="icon-heart"></i>
//                                       </Link>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </div>
//                               <div className="product_info">
//                                 <h6 className="product_title">
//                                   <Link href="shop-product-detail.php">
//                                     Red & Black check shirt
//                                   </Link>
//                                 </h6>
//                                 <div className="product_price">
//                                   <span className="price">$55.00</span>
//                                   <del>$95.00</del>
//                                   <div className="on_sale">
//                                     <span>25% Off</span>
//                                   </div>
//                                 </div>
//                                 <div className="rating_wrap">
//                                   <div className="rating">
//                                     <div
//                                       className="product_rate"
//                                       style={{ width: "68%" }}
//                                     ></div>
//                                   </div>
//                                   <span className="rating_num">(15)</span>
//                                 </div>
//                                 <div className="pr_desc">
//                                   <p>
//                                     Lorem ipsum dolor sit amet, consectetur
//                                     adipiscing elit. Phasellus blandit massa
//                                     enim. Nullam id varius nunc id varius nunc.
//                                   </p>
//                                 </div>
//                                 <div className="pr_switch_wrap">
//                                   <div className="product_color_switch">
//                                     <span
//                                       className="active"
//                                       data-color="#E8ADA9"
//                                     ></span>
//                                     <span data-color="#C38F77"></span>
//                                     <span data-color="#BE7154"></span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-lg-3 col-md-4 col-6">
//                             <div className="product">
//                               <span className="pr_flash bg-danger">Hot</span>
//                               <div className="product_img">
//                                 <Link href="shop-product-detail.php">
//                                   <img
//                                     src="assets/images/product_img7.jpg"
//                                     alt="product_img7"
//                                   />
//                                 </Link>
//                                 <div className="product_action_box">
//                                   <ul className="list_none pr_action_btn">
//                                     <li className="add-to-cart">
//                                       <Link href="#">
//                                         <i className="icon-basket-loaded"></i>{" "}
//                                         Add To Cart
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-compare.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-shuffle"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-quick-view.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-magnifier-add"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link href="#">
//                                         <i className="icon-heart"></i>
//                                       </Link>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </div>
//                               <div className="product_info">
//                                 <h6 className="product_title">
//                                   <Link href="shop-product-detail.php">
//                                     white black line dress
//                                   </Link>
//                                 </h6>
//                                 <div className="product_price">
//                                   <span className="price">$68.00</span>
//                                   <del>$99.00</del>
//                                   <div className="on_sale">
//                                     <span>20% Off</span>
//                                   </div>
//                                 </div>
//                                 <div className="rating_wrap">
//                                   <div className="rating">
//                                     <div
//                                       className="product_rate"
//                                       style={{ width: "87%" }}
//                                     ></div>
//                                   </div>
//                                   <span className="rating_num">(25)</span>
//                                 </div>
//                                 <div className="pr_desc">
//                                   <p>
//                                     Lorem ipsum dolor sit amet, consectetur
//                                     adipiscing elit. Phasellus blandit massa
//                                     enim. Nullam id varius nunc id varius nunc.
//                                   </p>
//                                 </div>
//                                 <div className="pr_switch_wrap">
//                                   <div className="product_color_switch">
//                                     <span
//                                       className="active"
//                                       data-color="#333333"
//                                     ></span>
//                                     <span data-color="#7C502F"></span>
//                                     <span data-color="#2F366C"></span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-lg-3 col-md-4 col-6">
//                             <div className="product">
//                               <div className="product_img">
//                                 <Link href="shop-product-detail.php">
//                                   <img
//                                     src="assets/images/product_img11.jpg"
//                                     alt="product_img11"
//                                   />
//                                 </Link>
//                                 <div className="product_action_box">
//                                   <ul className="list_none pr_action_btn">
//                                     <li className="add-to-cart">
//                                       <Link href="#">
//                                         <i className="icon-basket-loaded"></i>{" "}
//                                         Add To Cart
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-compare.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-shuffle"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-quick-view.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-magnifier-add"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link href="#">
//                                         <i className="icon-heart"></i>
//                                       </Link>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </div>
//                               <div className="product_info">
//                                 <h6 className="product_title">
//                                   <Link href="shop-product-detail.php">
//                                     Black dress for woman
//                                   </Link>
//                                 </h6>
//                                 <div className="product_price">
//                                   <span className="price">$68.00</span>
//                                   <del>$99.00</del>
//                                   <div className="on_sale">
//                                     <span>20% Off</span>
//                                   </div>
//                                 </div>
//                                 <div className="rating_wrap">
//                                   <div className="rating">
//                                     <div
//                                       className="product_rate"
//                                       style={{ width: "87%" }}
//                                     ></div>
//                                   </div>
//                                   <span className="rating_num">(25)</span>
//                                 </div>
//                                 <div className="pr_desc">
//                                   <p>
//                                     Lorem ipsum dolor sit amet, consectetur
//                                     adipiscing elit. Phasellus blandit massa
//                                     enim. Nullam id varius nunc id varius nunc.
//                                   </p>
//                                 </div>
//                                 <div className="pr_switch_wrap">
//                                   <div className="product_color_switch">
//                                     <span
//                                       className="active"
//                                       data-color="#090909"
//                                     ></span>
//                                     <span data-color="#AC644D"></span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-lg-3 col-md-4 col-6">
//                             <div className="product">
//                               <div className="product_img">
//                                 <Link href="shop-product-detail.php">
//                                   <img
//                                     src="assets/images/product_img8.jpg"
//                                     alt="product_img8"
//                                   />
//                                 </Link>
//                                 <div className="product_action_box">
//                                   <ul className="list_none pr_action_btn">
//                                     <li className="add-to-cart">
//                                       <Link href="#">
//                                         <i className="icon-basket-loaded"></i>{" "}
//                                         Add To Cart
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-compare.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-shuffle"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-quick-view.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-magnifier-add"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link href="#">
//                                         <i className="icon-heart"></i>
//                                       </Link>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </div>
//                               <div className="product_info">
//                                 <h6 className="product_title">
//                                   <Link href="shop-product-detail.php">
//                                     Men blue jins Shirt
//                                   </Link>
//                                 </h6>
//                                 <div className="product_price">
//                                   <span className="price">$69.00</span>
//                                   <del>$89.00</del>
//                                   <div className="on_sale">
//                                     <span>20% Off</span>
//                                   </div>
//                                 </div>
//                                 <div className="rating_wrap">
//                                   <div className="rating">
//                                     <div
//                                       className="product_rate"
//                                       style={{ width: "70%" }}
//                                     ></div>
//                                   </div>
//                                   <span className="rating_num">(22)</span>
//                                 </div>
//                                 <div className="pr_desc">
//                                   <p>
//                                     Lorem ipsum dolor sit amet, consectetur
//                                     adipiscing elit. Phasellus blandit massa
//                                     enim. Nullam id varius nunc id varius nunc.
//                                   </p>
//                                 </div>
//                                 <div className="pr_switch_wrap">
//                                   <div className="product_color_switch">
//                                     <span
//                                       className="active"
//                                       data-color="#333333"
//                                     ></span>
//                                     <span data-color="#444653"></span>
//                                     <span data-color="#B9C2DF"></span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-lg-3 col-md-4 col-6">
//                             <div className="product">
//                               <span className="pr_flash">Sale</span>
//                               <div className="product_img">
//                                 <Link href="shop-product-detail.php">
//                                   <img
//                                     src="assets/images/product_img6.jpg"
//                                     alt="product_img6"
//                                   />
//                                 </Link>
//                                 <div className="product_action_box">
//                                   <ul className="list_none pr_action_btn">
//                                     <li className="add-to-cart">
//                                       <Link href="#">
//                                         <i className="icon-basket-loaded"></i>{" "}
//                                         Add To Cart
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-compare.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-shuffle"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link
//                                         href="shop-quick-view.html"
//                                         className="popup-ajax"
//                                       >
//                                         <i className="icon-magnifier-add"></i>
//                                       </Link>
//                                     </li>
//                                     <li>
//                                       <Link href="#">
//                                         <i className="icon-heart"></i>
//                                       </Link>
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </div>
//                               <div className="product_info">
//                                 <h6 className="product_title">
//                                   <Link href="shop-product-detail.php">
//                                     Blue casual check shirt
//                                   </Link>
//                                 </h6>
//                                 <div className="product_price">
//                                   <span className="price">$55.00</span>
//                                   <del>$95.00</del>
//                                   <div className="on_sale">
//                                     <span>25% Off</span>
//                                   </div>
//                                 </div>
//                                 <div className="rating_wrap">
//                                   <div className="rating">
//                                     <div
//                                       className="product_rate"
//                                       style={{ width: "68%" }}
//                                     ></div>
//                                   </div>
//                                 </div>
//                               </div>
//                               <span className="rating_num">(15)</span>
//                             </div>
//                             <div className="pr_desc">
//                               <p>
//                                 Lorem ipsum dolor sit amet, consectetur
//                                 adipiscing elit. Phasellus blandit massa enim.
//                                 Nullam id varius nunc id varius nunc.
//                               </p>
//                             </div>
//                             <div className="pr_switch_wrap">
//                               <div className="product_color_switch">
//                                 <span
//                                   className="active"
//                                   data-color="#87554B"
//                                 ></span>
//                                 <span data-color="#333333"></span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div
//                     className="tab-pane fade show active"
//                     id="special"
//                     role="tabpanel"
//                     aria-labelledby="special-tab"
//                   >
//                     <div className="row shop_container">
//                       <div className="col-lg-3 col-md-4 col-6">
//                         <div className="product">
//                           <div className="product_img">
//                             <Link href="shop-product-detail.php">
//                               <img
//                                 src="assets/images/product_img4.jpg"
//                                 alt="product_img4"
//                               />
//                             </Link>
//                             <div className="product_action_box">
//                               <ul className="list_none pr_action_btn">
//                                 <li className="add-to-cart">
//                                   <Link href="#">
//                                     <i className="icon-basket-loaded"></i> Add
//                                     To Cart
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link
//                                     href="shop-compare.html"
//                                     className="popup-ajax"
//                                   >
//                                     <i className="icon-shuffle"></i>
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link
//                                     href="shop-quick-view.html"
//                                     className="popup-ajax"
//                                   >
//                                     <i className="icon-magnifier-add"></i>
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link href="#">
//                                     <i className="icon-heart"></i>
//                                   </Link>
//                                 </li>
//                               </ul>
//                             </div>
//                           </div>
//                           <div className="product_info">
//                             <h6 className="product_title">
//                               <Link href="shop-product-detail.php">
//                                 light blue Shirt
//                               </Link>
//                             </h6>
//                             <div className="product_price">
//                               <span className="price">$69.00</span>
//                               <del>$89.00</del>
//                               <div className="on_sale">
//                                 <span>20% Off</span>
//                               </div>
//                             </div>
//                             <div className="rating_wrap">
//                               <div className="rating">
//                                 <div
//                                   className="product_rate"
//                                   style={{ width: "70%" }}
//                                 ></div>
//                               </div>
//                               <span className="rating_num">(22)</span>
//                             </div>
//                             <div className="pr_desc">
//                               <p>
//                                 Lorem ipsum dolor sit amet, consectetur
//                                 adipiscing elit. Phasellus blandit massa enim.
//                                 Nullam id varius nunc id varius nunc.
//                               </p>
//                             </div>
//                             <div className="pr_switch_wrap">
//                               <div className="product_color_switch">
//                                 <span
//                                   className="active"
//                                   data-color="#333333"
//                                 ></span>
//                                 <span data-color="#A92534"></span>
//                                 <span data-color="#B9C2DF"></span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-lg-3 col-md-4 col-6">
//                         <div className="product">
//                           <div className="product_img">
//                             <Link href="shop-product-detail.php">
//                               <img
//                                 src="assets/images/product_img9.jpg"
//                                 alt="product_img9"
//                               />
//                             </Link>
//                             <div className="product_action_box">
//                               <ul className="list_none pr_action_btn">
//                                 <li className="add-to-cart">
//                                   <Link href="#">
//                                     <i className="icon-basket-loaded"></i> Add
//                                     To Cart
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link
//                                     href="shop-compare.html"
//                                     className="popup-ajax"
//                                   >
//                                     <i className="icon-shuffle"></i>
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link
//                                     href="shop-quick-view.html"
//                                     className="popup-ajax"
//                                   >
//                                     <i className="icon-magnifier-add"></i>
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link href="#">
//                                     <i className="icon-heart"></i>
//                                   </Link>
//                                 </li>
//                               </ul>
//                             </div>
//                           </div>
//                           <div className="product_info">
//                             <h6 className="product_title">
//                               <Link href="shop-product-detail.php">
//                                 T-Shirt Form Girls
//                               </Link>
//                             </h6>
//                             <div className="product_price">
//                               <span className="price">$45.00</span>
//                               <del>$55.25</del>
//                               <div className="on_sale">
//                                 <span>35% Off</span>
//                               </div>
//                             </div>
//                             <div className="rating_wrap">
//                               <div className="rating">
//                                 <div
//                                   className="product_rate"
//                                   style={{ width: "80%" }}
//                                 ></div>
//                               </div>
//                               <span className="rating_num">(21)</span>
//                             </div>
//                             <div className="pr_desc">
//                               <p>
//                                 Lorem ipsum dolor sit amet, consectetur
//                                 adipiscing elit. Phasellus blandit massa enim.
//                                 Nullam id varius nunc id varius nunc.
//                               </p>
//                             </div>
//                             <div className="pr_switch_wrap">
//                               <div className="product_color_switch">
//                                 <span
//                                   className="active"
//                                   data-color="#B5B6BB"
//                                 ></span>
//                                 <span data-color="#333333"></span>
//                                 <span data-color="#DA323F"></span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-lg-3 col-md-4 col-6">
//                         <div className="product">
//                           <div className="product_img">
//                             <Link href="shop-product-detail.php">
//                               <img
//                                 src="assets/images/product_img8.jpg"
//                                 alt="product_img8"
//                               />
//                             </Link>
//                             <div className="product_action_box">
//                               <ul className="list_none pr_action_btn">
//                                 <li className="add-to-cart">
//                                   <Link href="#">
//                                     <i className="icon-basket-loaded"></i> Add
//                                     To Cart
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link
//                                     href="shop-compare.html"
//                                     className="popup-ajax"
//                                   >
//                                     <i className="icon-shuffle"></i>
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link
//                                     href="shop-quick-view.html"
//                                     className="popup-ajax"
//                                   >
//                                     <i className="icon-magnifier-add"></i>
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link href="#">
//                                     <i className="icon-heart"></i>
//                                   </Link>
//                                 </li>
//                               </ul>
//                             </div>
//                           </div>
//                           <div className="product_info">
//                             <h6 className="product_title">
//                               <Link href="shop-product-detail.php">
//                                 Men Checks Casual Shirt
//                               </Link>
//                             </h6>
//                             <div className="product_price">
//                               <span className="price">$69.00</span>
//                               <del>$89.00</del>
//                               <div className="on_sale">
//                                 <span>20% Off</span>
//                               </div>
//                             </div>
//                             <div className="rating_wrap">
//                               <div className="rating">
//                                 <div
//                                   className="product_rate"
//                                   style={{ width: "70%" }}
//                                 ></div>
//                               </div>
//                               <span className="rating_num">(22)</span>
//                             </div>
//                             <div className="pr_desc">
//                               <p>
//                                 Lorem ipsum dolor sit amet, consectetur
//                                 adipiscing elit. Phasellus blandit massa enim.
//                                 Nullam id varius nunc id varius nunc.
//                               </p>
//                             </div>
//                             <div className="pr_switch_wrap">
//                               <div className="product_color_switch">
//                                 <span
//                                   className="active"
//                                   data-color="#333333"
//                                 ></span>
//                                 <span data-color="#444653"></span>
//                                 <span data-color="#B9C2DF"></span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-lg-3 col-md-4 col-6">
//                         <div className="product">
//                           <span className="pr_flash">New</span>
//                           <div className="product_img">
//                             <Link href="shop-product-detail.php">
//                               <img
//                                 src="assets/images/product_img1.jpg"
//                                 alt="product_img1"
//                               />
//                             </Link>
//                             <div className="product_action_box">
//                               <ul className="list_none pr_action_btn">
//                                 <li className="add-to-cart">
//                                   <Link href="#">
//                                     <i className="icon-basket-loaded"></i> Add
//                                     To Cart
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link
//                                     href="shop-compare.html"
//                                     className="popup-ajax"
//                                   >
//                                     <i className="icon-shuffle"></i>
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link
//                                     href="shop-quick-view.html"
//                                     className="popup-ajax"
//                                   >
//                                     <i className="icon-magnifier-add"></i>
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link href="#">
//                                     <i className="icon-heart"></i>
//                                   </Link>
//                                 </li>
//                               </ul>
//                             </div>
//                           </div>
//                           <div className="product_info">
//                             <h6 className="product_title">
//                               <Link href="shop-product-detail.php">
//                                 Blue Dress For Woman
//                               </Link>
//                             </h6>
//                             <div className="product_price">
//                               <span className="price">$45.00</span>
//                               <del>$55.25</del>
//                               <div className="on_sale">
//                                 <span>35% Off</span>
//                               </div>
//                             </div>
//                             <div className="rating_wrap">
//                               <div className="rating">
//                                 <div
//                                   className="product_rate"
//                                   style={{ width: "80%" }}
//                                 ></div>
//                               </div>
//                               <span className="rating_num">(21)</span>
//                             </div>
//                             <div className="pr_desc">
//                               <p>
//                                 Lorem ipsum dolor sit amet, consectetur
//                                 adipiscing elit. Phasellus blandit massa enim.
//                                 Nullam id varius nunc id varius nunc.
//                               </p>
//                             </div>
//                             <div className="pr_switch_wrap">
//                               <div className="product_color_switch">
//                                 <span
//                                   className="active"
//                                   data-color="#87554B"
//                                 ></span>
//                                 <span data-color="#333333"></span>
//                                 <span data-color="#DA323F"></span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-lg-3 col-md-4 col-6">
//                         <div className="product">
//                           <div className="product_img">
//                             <Link href="shop-product-detail.php">
//                               <img
//                                 src="assets/images/product_img12.jpg"
//                                 alt="product_img12"
//                               />
//                             </Link>
//                             <div className="product_action_box">
//                               <ul className="list_none pr_action_btn">
//                                 <li className="add-to-cart">
//                                   <Link href="#">
//                                     <i className="icon-basket-loaded"></i> Add
//                                     To Cart
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link
//                                     href="shop-compare.html"
//                                     className="popup-ajax"
//                                   >
//                                     <i className="icon-shuffle"></i>
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link
//                                     href="shop-quick-view.html"
//                                     className="popup-ajax"
//                                   >
//                                     <i className="icon-magnifier-add"></i>
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link href="#">
//                                     <i className="icon-heart"></i>
//                                   </Link>
//                                 </li>
//                               </ul>
//                             </div>
//                           </div>
//                           <div className="product_info">
//                             <span className="pr_flash bg-danger">Hot</span>
//                             <h6 className="product_title">
//                               <Link href="shop-product-detail.php">
//                                 Black T-shirt for woman
//                               </Link>
//                             </h6>
//                             <div className="product_price">
//                               <span className="price">$69.00</span>
//                               <del>$89.00</del>
//                               <div className="on_sale">
//                                 <span>20% Off</span>
//                               </div>
//                             </div>
//                             <div className="rating_wrap">
//                               <div className="rating">
//                                 <div
//                                   className="product_rate"
//                                   style={{ width: "70%" }}
//                                 ></div>
//                               </div>
//                               <span className="rating_num">(22)</span>
//                             </div>
//                             <div className="pr_desc">
//                               <p>
//                                 Lorem ipsum dolor sit amet, consectetur
//                                 adipiscing elit. Phasellus blandit massa enim.
//                                 Nullam id varius nunc id varius nunc.
//                               </p>
//                             </div>
//                             <div className="pr_switch_wrap">
//                               <div className="product_color_switch">
//                                 <span
//                                   className="active"
//                                   data-color="#1B1B25"
//                                 ></span>
//                                 <span data-color="#444653"></span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-lg-3 col-md-4 col-6">
//                         <div className="product">
//                           <div className="product_img">
//                             <Link href="shop-product-detail.php">
//                               <img
//                                 src="assets/images/product_img6.jpg"
//                                 alt="product_img6"
//                               />
//                             </Link>
//                             <div className="product_action_box">
//                               <ul className="list_none pr_action_btn">
//                                 <li className="add-to-cart">
//                                   <Link href="#">
//                                     <i className="icon-basket-loaded"></i> Add
//                                     To Cart
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link
//                                     href="shop-compare.html"
//                                     className="popup-ajax"
//                                   >
//                                     <i className="icon-shuffle"></i>
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link
//                                     href="shop-quick-view.html"
//                                     className="popup-ajax"
//                                   >
//                                     <i className="icon-magnifier-add"></i>
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link href="#">
//                                     <i className="icon-heart"></i>
//                                   </Link>
//                                 </li>
//                               </ul>
//                             </div>
//                           </div>
//                           <div className="product_info">
//                             <h6 className="product_title">
//                               <Link href="shop-product-detail.php">
//                                 Blue casual check shirt
//                               </Link>
//                             </h6>
//                             <div className="product_price">
//                               <span className="price">$55.00</span>
//                               <del>$95.00</del>
//                               <div className="on_sale">
//                                 <span>25% Off</span>
//                               </div>
//                             </div>
//                             <div className="rating_wrap">
//                               <div className="rating">
//                                 <div
//                                   className="product_rate"
//                                   style={{ width: "68%" }}
//                                 ></div>
//                               </div>
//                               <span className="rating_num">(15)</span>
//                             </div>
//                             <div className="pr_desc">
//                               <p>
//                                 Lorem ipsum dolor sit amet, consectetur
//                                 adipiscing elit. Phasellus blandit massa enim.
//                                 Nullam id varius nunc id varius nunc.
//                               </p>
//                             </div>
//                             <div className="pr_switch_wrap">
//                               <div className="product_color_switch">
//                                 <span
//                                   className="active"
//                                   data-color="#87554B"
//                                 ></span>
//                                 <span data-color="#333333"></span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-lg-3 col-md-4 col-6">
//                         <div className="product">
//                           <span className="pr_flash bg-success">Sale</span>
//                           <div className="product_img">
//                             <Link href="shop-product-detail.php">
//                               <img
//                                 src="assets/images/product_img7.jpg"
//                                 alt="product_img7"
//                               />
//                             </Link>
//                             <div className="product_action_box">
//                               <ul className="list_none pr_action_btn">
//                                 <li className="add-to-cart">
//                                   <Link href="#">
//                                     <i className="icon-basket-loaded"></i> Add
//                                     To Cart
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link
//                                     href="shop-compare.html"
//                                     className="popup-ajax"
//                                   >
//                                     <i className="icon-shuffle"></i>
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link
//                                     href="shop-quick-view.html"
//                                     className="popup-ajax"
//                                   >
//                                     <i className="icon-magnifier-add"></i>
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link href="#">
//                                     <i className="icon-heart"></i>
//                                   </Link>
//                                 </li>
//                               </ul>
//                             </div>
//                           </div>
//                           <div className="product_info">
//                             <h6 className="product_title">
//                               <Link href="shop-product-detail.php">
//                                 white black line dress
//                               </Link>
//                             </h6>
//                             <div className="product_price">
//                               <span className="price">$68.00</span>
//                               <del>$99.00</del>
//                               <div className="on_sale">
//                                 <span>20% Off</span>
//                               </div>
//                             </div>
//                             <div className="rating_wrap">
//                               <div className="rating">
//                                 <div
//                                   className="product_rate"
//                                   style={{ width: "87%" }}
//                                 ></div>
//                               </div>
//                               <span className="rating_num">(25)</span>
//                             </div>
//                             <div className="pr_desc">
//                               <p>
//                                 Lorem ipsum dolor sit amet, consectetur
//                                 adipiscing elit. Phasellus blandit massa enim.
//                                 Nullam id varius nunc id varius nunc.
//                               </p>
//                             </div>
//                             <div className="pr_switch_wrap">
//                               <div className="product_color_switch">
//                                 <span
//                                   className="active"
//                                   data-color="#333333"
//                                 ></span>
//                                 <span data-color="#7C502F"></span>
//                                 <span data-color="#2F366C"></span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-lg-3 col-md-4 col-6">
//                         <div className="product">
//                           <div className="product_img">
//                             <Link href="shop-product-detail.php">
//                               <img
//                                 src="assets/images/product_img11.jpg"
//                                 alt="product_img11"
//                               />
//                             </Link>
//                             <div className="product_action_box">
//                               <ul className="list_none pr_action_btn">
//                                 <li className="add-to-cart">
//                                   <Link href="#">
//                                     <i className="icon-basket-loaded"></i> Add
//                                     To Cart
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link
//                                     href="shop-compare.html"
//                                     className="popup-ajax"
//                                   >
//                                     <i className="icon-shuffle"></i>
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link
//                                     href="shop-quick-view.html"
//                                     className="popup-ajax"
//                                   >
//                                     <i className="icon-magnifier-add"></i>
//                                   </Link>
//                                 </li>
//                                 <li>
//                                   <Link href="#">
//                                     <i className="icon-heart"></i>
//                                   </Link>
//                                 </li>
//                               </ul>
//                             </div>
//                           </div>
//                           <div className="product_info">
//                             <h6 className="product_title">
//                               <Link href="shop-product-detail.php">
//                                 Black dress for woman
//                               </Link>
//                             </h6>
//                             <div className="product_price">
//                               <span className="price">$68.00</span>
//                               <del>$99.00</del>
//                               <div className="on_sale">
//                                 <span>20% Off</span>
//                               </div>
//                             </div>
//                             <div className="rating_wrap">
//                               <div className="rating">
//                                 <div
//                                   className="product_rate"
//                                   style={{ width: "87%" }}
//                                 ></div>
//                               </div>
//                               <span className="rating_num">(25)</span>
//                             </div>
//                             <div className="pr_desc">
//                               <p>
//                                 Lorem ipsum dolor sit amet, consectetur
//                                 adipiscing elit. Phasellus blandit massa enim.
//                                 Nullam id varius nunc id varius nunc.
//                               </p>
//                             </div>
//                             <div className="pr_switch_wrap">
//                               <div className="product_color_switch">
//                                 <span
//                                   className="active"
//                                   data-color="#090909"
//                                 ></span>
//                                 <span data-color="#AC644D"></span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* <!-- END SECTION SHOP --> */}
//         <div>
//           <div className="section pt-0 pb-0">
//             <div className="custom-container">
//               <div className="row">
//                 <div className="col-md-12">
//                   <div className="heading_tab_header">
//                     <div className="heading_s2">
//                       <h4>Deal Of The Day</h4>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col-md-12">
//                   <div
//                     className="product_slider carousel_slider owl-carousel owl-theme nav_style3"
//                     data-loop="true"
//                     data-dots="false"
//                     data-nav="true"
//                     data-margin="30"
//                     data-responsive='{"0":{"items": "1"}, "650":{"items": "2"}, "1199":{"items": "2"}}'
//                   >
//                     <div className="item">
//                       <div className="deal_wrap">
//                         <div className="product_img">
//                           <Link href="shop-product-detail.php">
//                             <img
//                               src="assets/images/el_img1.jpg"
//                               alt="el_img1"
//                             />
//                           </Link>
//                         </div>
//                         <div className="deal_content">
//                           <div className="product_info">
//                             <h5 className="product_title">
//                               <Link href="shop-product-detail.php">
//                                 Red & Black Headphone
//                               </Link>
//                             </h5>
//                             <div className="product_price">
//                               <span className="price">$45.00</span>
//                               <del>$55.25</del>
//                             </div>
//                           </div>
//                           <div className="deal_progress">
//                             <span className="stock-sold">
//                               Already Sold: <strong>6</strong>
//                             </span>
//                             <span className="stock-available">
//                               Available: <strong>8</strong>
//                             </span>
//                             <div className="progress">
//                               <div
//                                 className="progress-bar"
//                                 role="progressbar"
//                                 aria-valuenow="46"
//                                 aria-valuemin="0"
//                                 aria-valuemax="100"
//                                 style={{ width: "46%" }}
//                               >
//                                 {" "}
//                                 46%{" "}
//                               </div>
//                             </div>
//                           </div>
//                           <div
//                             className="countdown_time countdown_style4 mb-4"
//                             data-time="2021/10/02 12:30:15"
//                           ></div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="item">
//                       <div className="deal_wrap">
//                         <div className="product_img">
//                           <Link href="shop-product-detail.php">
//                             <img
//                               src="assets/images/el_img2.jpg"
//                               alt="el_img2"
//                             />
//                           </Link>
//                         </div>
//                         <div className="deal_content">
//                           <div className="product_info">
//                             <h5 className="product_title">
//                               <Link href="shop-product-detail.php">
//                                 Smart Watch External
//                               </Link>
//                             </h5>
//                             <div className="product_price">
//                               <span className="price">$55.00</span>
//                               <del>$95.00</del>
//                             </div>
//                           </div>
//                           <div className="deal_progress">
//                             <span className="stock-sold">
//                               Already Sold: <strong>4</strong>
//                             </span>
//                             <span className="stock-available">
//                               Available: <strong>22</strong>
//                             </span>
//                             <div className="progress">
//                               <div
//                                 className="progress-bar"
//                                 role="progressbar"
//                                 aria-valuenow="26"
//                                 aria-valuemin="0"
//                                 aria-valuemax="100"
//                                 style={{ width: "26%" }}
//                               >
//                                 {" "}
//                                 26%{" "}
//                               </div>
//                             </div>
//                           </div>
//                           <div
//                             className="countdown_time countdown_style4 mb-4"
//                             data-time="2021/09/02 12:30:15"
//                           ></div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="item">
//                       <div className="deal_wrap">
//                         <div className="product_img">
//                           <Link href="shop-product-detail.php">
//                             <img
//                               src="assets/images/el_img3.jpg"
//                               alt="el_img3"
//                             />
//                           </Link>
//                         </div>
//                         <div className="deal_content">
//                           <div className="product_info">
//                             <h5 className="product_title">
//                               <Link href="shop-product-detail.php">
//                                 Nikon HD camera
//                               </Link>
//                             </h5>
//                             <div className="product_price">
//                               <span className="price">$68.00</span>
//                               <del>$99.25</del>
//                             </div>
//                           </div>
//                           <div className="deal_progress">
//                             <span className="stock-sold">
//                               Already Sold: <strong>16</strong>
//                             </span>
//                             <span className="stock-available">
//                               Available: <strong>20</strong>
//                             </span>
//                             <div className="progress">
//                               <div
//                                 className="progress-bar"
//                                 role="progressbar"
//                                 aria-valuenow="28"
//                                 aria-valuemin="0"
//                                 aria-valuemax="100"
//                                 style={{ width: "28%" }}
//                               >
//                                 {" "}
//                                 28%{" "}
//                               </div>
//                             </div>
//                           </div>
//                           <div
//                             className="countdown_time countdown_style4 mb-4"
//                             data-time="2021/11/02 12:30:15"
//                           ></div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="section small_pt small_pb">
//             <div className="custom-container">
//               <div className="row">
//                 <div className="col-xl-3 d-none d-xl-block">
//                   <div className="sale-banner">
//                     <Link className="hover_effect1" href="#">
//                       <img
//                         src="assets/images/s.jpg"
//                         alt="s"
//                       />
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="col-xl-9">
//                   <div className="row">
//                     <div className="col-12">
//                       <div className="heading_tab_header">
//                         <div className="heading_s2">
//                           <h4>Trending products</h4>
//                         </div>
//                         <div className="view_all">
//                           <Link href="shop.php" className="text_default">
//                             <i className="linearicons-power"></i>{" "}
//                             <span>View All</span>
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="col-12">
//                       <div
//                         className="product_slider carousel_slider owl-carousel owl-theme dot_style1"
//                         data-loop="true"
//                         data-margin="20"
//                         data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "991":{"items": "4"}}'
//                       >
//                         <div className="item">
//                           <div className="product_wrap">
//                             <div className="product_img">
//                               <Link href="shop-product-detail.php">
//                                 <img
//                                   src="assets/images/el_img2.jpg"
//                                   alt="el_img2"
//                                 />
//                                 <img
//                                   className="product_hover_img"
//                                   src="assets/images/el_hover_img2.jpg"
//                                   alt="el_hover_img2"
//                                 />
//                               </Link>
//                               <div className="product_action_box">
//                                 <ul className="list_none pr_action_btn">
//                                   <li className="add-to-cart">
//                                     <Link href="#">
//                                       <i className="icon-basket-loaded"></i> Add
//                                       To Cart
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link
//                                       href="shop-compare.html"
//                                       className="popup-ajax"
//                                     >
//                                       <i className="icon-shuffle"></i>
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link
//                                       href="shop-quick-view.html"
//                                       className="popup-ajax"
//                                     >
//                                       <i className="icon-magnifier-add"></i>
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link href="#">
//                                       <i className="icon-heart"></i>
//                                     </Link>
//                                   </li>
//                                 </ul>
//                               </div>
//                             </div>
//                             <div className="product_info">
//                               <h6 className="product_title">
//                                 <Link href="shop-product-detail.php">
//                                   Smart Watch External
//                                 </Link>
//                               </h6>
//                               <div className="product_price">
//                                 <span className="price">$55.00</span>
//                                 <del>$95.00</del>
//                                 <div className="on_sale">
//                                   <span>25% Off</span>
//                                 </div>
//                               </div>
//                               <div className="rating_wrap">
//                                 <div className="rating">
//                                   <div
//                                     className="product_rate"
//                                     style={{ width: "68%" }}
//                                   ></div>
//                                 </div>
//                                 <span className="rating_num">(15)</span>
//                               </div>
//                               <div className="pr_desc">
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur
//                                   adipiscing elit. Phasellus blandit massa enim.
//                                   Nullam id varius nunc id varius nunc.
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="item">
//                           <div className="product_wrap">
//                             <div className="product_img">
//                               <Link href="shop-product-detail.php">
//                                 <img
//                                   src="assets/images/el_img5.jpg"
//                                   alt="el_img5"
//                                 />
//                                 <img
//                                   className="product_hover_img"
//                                   src="assets/images/el_hover_img5.jpg"
//                                   alt="el_hover_img5"
//                                 />
//                               </Link>
//                               <div className="product_action_box">
//                                 <ul className="list_none pr_action_btn">
//                                   <li className="add-to-cart">
//                                     <Link href="#">
//                                       <i className="icon-basket-loaded"></i> Add
//                                       To Cart
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link
//                                       href="shop-compare.html"
//                                       className="popup-ajax"
//                                     >
//                                       <i className="icon-shuffle"></i>
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link
//                                       href="shop-quick-view.html"
//                                       className="popup-ajax"
//                                     >
//                                       <i className="icon-magnifier-add"></i>
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link href="#">
//                                       <i className="icon-heart"></i>
//                                     </Link>
//                                   </li>
//                                 </ul>
//                               </div>
//                             </div>
//                             <div className="product_info">
//                               <h6 className="product_title">
//                                 <Link href="shop-product-detail.php">
//                                   Smart Televisions
//                                 </Link>
//                               </h6>
//                               <div className="product_price">
//                                 <span className="price">$45.00</span>
//                                 <del>$55.25</del>
//                                 <div className="on_sale">
//                                   <span>35% Off</span>
//                                 </div>
//                               </div>
//                               <div className="rating_wrap">
//                                 <div className="rating">
//                                   <div
//                                     className="product_rate"
//                                     style={{ width: "80%" }}
//                                   ></div>
//                                 </div>
//                                 <span className="rating_num">(21)</span>
//                               </div>
//                               <div className="pr_desc">
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur
//                                   adipiscing elit. Phasellus blandit massa enim.
//                                   Nullam id varius nunc id varius nunc.
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="item">
//                           <div className="product_wrap">
//                             <div className="product_img">
//                               <Link href="shop-product-detail.php">
//                                 <img
//                                   src="assets/images/el_img9.jpg"
//                                   alt="el_img9"
//                                 />
//                                 <img
//                                   className="product_hover_img"
//                                   src="assets/images/el_hover_img9.jpg"
//                                   alt="el_hover_img9"
//                                 />
//                               </Link>
//                               <div className="product_action_box">
//                                 <ul className="list_none pr_action_btn">
//                                   <li className="add-to-cart">
//                                     <Link href="#">
//                                       <i className="icon-basket-loaded"></i> Add
//                                       To Cart
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link
//                                       href="shop-compare.html"
//                                       className="popup-ajax"
//                                     >
//                                       <i className="icon-shuffle"></i>
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link
//                                       href="shop-quick-view.html"
//                                       className="popup-ajax"
//                                     >
//                                       <i className="icon-magnifier-add"></i>
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link href="#">
//                                       <i className="icon-heart"></i>
//                                     </Link>
//                                   </li>
//                                 </ul>
//                               </div>
//                             </div>
//                             <div className="product_info">
//                               <h6 className="product_title">
//                                 <Link href="shop-product-detail.php">
//                                   oppo Reno3 Pro
//                                 </Link>
//                               </h6>
//                               <div className="product_price">
//                                 <span className="price">$68.00</span>
//                                 <del>$99.00</del>
//                                 <div className="on_sale">
//                                   <span>20% Off</span>
//                                 </div>
//                               </div>
//                               <div className="rating_wrap">
//                                 <div className="rating">
//                                   <div
//                                     className="product_rate"
//                                     style={{ width: "87%" }}
//                                   ></div>
//                                 </div>
//                                 <span className="rating_num">(25)</span>
//                               </div>
//                               <div className="pr_desc">
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur
//                                   adipiscing elit. Phasellus blandit massa enim.
//                                   Nullam id varius nunc id varius nunc.
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="item">
//                           <div className="product_wrap">
//                             <div className="product_img">
//                               <Link href="shop-product-detail.php">
//                                 <img
//                                   src="assets/images/el_img7.jpg"
//                                   alt="el_img7"
//                                 />
//                                 <img
//                                   className="product_hover_img"
//                                   src="assets/images/el_hover_img7.jpg"
//                                   alt="el_hover_img7"
//                                 />
//                               </Link>
//                               <div className="product_action_box">
//                                 <ul className="list_none pr_action_btn">
//                                   <li className="add-to-cart">
//                                     <Link href="#">
//                                       <i className="icon-basket-loaded"></i> Add
//                                       To Cart
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link
//                                       href="shop-compare.html"
//                                       className="popup-ajax"
//                                     >
//                                       <i className="icon-shuffle"></i>
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link
//                                       href="shop-quick-view.html"
//                                       className="popup-ajax"
//                                     >
//                                       <i className="icon-magnifier-add"></i>
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link href="#">
//                                       <i className="icon-heart"></i>
//                                     </Link>
//                                   </li>
//                                 </ul>
//                               </div>
//                             </div>
//                             <div className="product_info">
//                               <h6 className="product_title">
//                                 <Link href="shop-product-detail.php">
//                                   Audio Theaters
//                                 </Link>
//                               </h6>
//                               <div className="product_price">
//                                 <span className="price">$45.00</span>
//                                 <del>$55.25</del>
//                                 <div className="on_sale">
//                                   <span>35% Off</span>
//                                 </div>
//                               </div>
//                               <div className="rating_wrap">
//                                 <div className="rating">
//                                   <div
//                                     className="product_rate"
//                                     style={{ width: "80%" }}
//                                   ></div>
//                                 </div>
//                                 <span className="rating_num">(21)</span>
//                               </div>
//                               <div className="pr_desc">
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur
//                                   adipiscing elit. Phasellus blandit massa enim.
//                                   Nullam id varius nunc id varius nunc.
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="item">
//                           <div className="product_wrap">
//                             <div className="product_img">
//                               <Link href="shop-product-detail.php">
//                                 <img
//                                   src="assets/images/el_img5.jpg"
//                                   alt="el_img5"
//                                 />
//                                 <img
//                                   className="product_hover_img"
//                                   src="assets/images/el_hover_img5.jpg"
//                                   alt="el_hover_img5"
//                                 />
//                               </Link>
//                               <div className="product_action_box">
//                                 <ul className="list_none pr_action_btn">
//                                   <li className="add-to-cart">
//                                     <Link href="#">
//                                       <i className="icon-basket-loaded"></i> Add
//                                       To Cart
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link
//                                       href="shop-compare.html"
//                                       className="popup-ajax"
//                                     >
//                                       <i className="icon-shuffle"></i>
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link
//                                       href="shop-quick-view.html"
//                                       className="popup-ajax"
//                                     >
//                                       <i className="icon-magnifier-add"></i>
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link href="#">
//                                       <i className="icon-heart"></i>
//                                     </Link>
//                                   </li>
//                                 </ul>
//                               </div>
//                             </div>
//                             <div className="product_info">
//                               <h6 className="product_title">
//                                 <Link href="shop-product-detail.php">
//                                   Smart Televisions
//                                 </Link>
//                               </h6>
//                               <div className="product_price">
//                                 <span className="price">$45.00</span>
//                                 <del>$55.25</del>
//                                 <div className="on_sale">
//                                   <span>35% Off</span>
//                                 </div>
//                               </div>
//                               <div className="rating_wrap">
//                                 <div className="rating">
//                                   <div
//                                     className="product_rate"
//                                     style={{ width: "80%" }}
//                                   ></div>
//                                 </div>
//                                 <span className="rating_num">(21)</span>
//                               </div>
//                               <div className="pr_desc">
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur
//                                   adipiscing elit. Phasellus blandit massa enim.
//                                   Nullam id varius nunc id varius nunc.
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="item">
//                           <div className="product_wrap">
//                             <div className="product_img">
//                               <Link href="shop-product-detail.php">
//                                 <img
//                                   src="assets/images/el_img12.jpg"
//                                   alt="el_img12"
//                                 />
//                                 <img
//                                   className="product_hover_img"
//                                   src="assets/images/el_hover_img12.jpg"
//                                   alt="el_hover_img12"
//                                 />
//                               </Link>
//                               <div className="product_action_box">
//                                 <ul className="list_none pr_action_btn">
//                                   <li className="add-to-cart">
//                                     <Link href="#">
//                                       <i className="icon-basket-loaded"></i> Add
//                                       To Cart
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link
//                                       href="shop-compare.html"
//                                       className="popup-ajax"
//                                     >
//                                       <i className="icon-shuffle"></i>
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link
//                                       href="shop-quick-view.html"
//                                       className="popup-ajax"
//                                     >
//                                       <i className="icon-magnifier-add"></i>
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link href="#">
//                                       <i className="icon-heart"></i>
//                                     </Link>
//                                   </li>
//                                 </ul>
//                               </div>
//                             </div>
//                             <div className="product_info">
//                               <h6 className="product_title">
//                                 <Link href="shop-product-detail.php">
//                                   Sound Equipment for Low
//                                 </Link>
//                               </h6>
//                               <div className="product_price">
//                                 <span className="price">$45.00</span>
//                                 <del>$55.25</del>
//                                 <div className="on_sale">
//                                   <span>35% Off</span>
//                                 </div>
//                               </div>
//                               <div className="rating_wrap">
//                                 <div className="rating">
//                                   <div
//                                     className="product_rate"
//                                     style={{ width: "80%" }}
//                                   ></div>
//                                 </div>
//                                 <span className="rating_num">(21)</span>
//                               </div>
//                               <div className="pr_desc">
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur
//                                   adipiscing elit. Phasellus blandit massa enim.
//                                   Nullam id varius nunc id varius nunc.
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div
//             className="section small_pt small_pb"
//             style={{ marginTop: "-80px" }}
//           >
//             <div className="custom-container">
//               <div className="row">
//                 <div className="col-xl-9">
//                   <div className="row">
//                     <div className="col-12">
//                       <div className="heading_tab_header">
//                         <div className="heading_s2">
//                           <h4>Trending products</h4>
//                         </div>
//                         <div className="view_all">
//                           <Link href="shop.php" className="text_default">
//                             <i className="linearicons-power"></i>{" "}
//                             <span>View All</span>
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="col-12">
//                       <div
//                         className="product_slider carousel_slider owl-carousel owl-theme dot_style1"
//                         data-loop="true"
//                         data-margin="20"
//                         data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "991":{"items": "4"}}'
//                       >
//                         <div className="item">
//                           <div className="product_wrap">
//                             <div className="product_img">
//                               <Link href="shop-product-detail.php">
//                                 <img
//                                   src="assets/images/el_img2.jpg"
//                                   alt="el_img2"
//                                 />
//                                 <img
//                                   className="product_hover_img"
//                                   src="assets/images/el_hover_img2.jpg"
//                                   alt="el_hover_img2"
//                                 />
//                               </Link>
//                               <div className="product_action_box">
//                                 <ul className="list_none pr_action_btn">
//                                   <li className="add-to-cart">
//                                     <Link href="#">
//                                       <i className="icon-basket-loaded"></i> Add
//                                       To Cart
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link
//                                       href="shop-compare.html"
//                                       className="popup-ajax"
//                                     >
//                                       <i className="icon-shuffle"></i>
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link
//                                       href="shop-quick-view.html"
//                                       className="popup-ajax"
//                                     >
//                                       <i className="icon-magnifier-add"></i>
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link href="#">
//                                       <i className="icon-heart"></i>
//                                     </Link>
//                                   </li>
//                                 </ul>
//                               </div>
//                             </div>
//                             <div className="product_info">
//                               <h6 className="product_title">
//                                 <Link href="shop-product-detail.php">
//                                   Smart Watch External
//                                 </Link>
//                               </h6>
//                               <div className="product_price">
//                                 <span className="price">$55.00</span>
//                                 <del>$95.00</del>
//                                 <div className="on_sale">
//                                   <span>25% Off</span>
//                                 </div>
//                               </div>
//                               <div className="rating_wrap">
//                                 <div className="rating">
//                                   <div
//                                     className="product_rate"
//                                     style={{ width: "68%" }}
//                                   ></div>
//                                 </div>
//                                 <span className="rating_num">(15)</span>
//                               </div>
//                               <div className="pr_desc">
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur
//                                   adipiscing elit. Phasellus blandit massa enim.
//                                   Nullam id varius nunc id varius nunc.
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="item">
//                           <div className="product_wrap">
//                             <div className="product_img">
//                               <Link href="shop-product-detail.php">
//                                 <img
//                                   src="assets/images/el_img5.jpg"
//                                   alt="el_img5"
//                                 />
//                                 <img
//                                   className="product_hover_img"
//                                   src="assets/images/el_hover_img5.jpg"
//                                   alt="el_hover_img5"
//                                 />
//                               </Link>
//                               <div className="product_action_box">
//                                 <ul className="list_none pr_action_btn">
//                                   <li className="add-to-cart">
//                                     <Link href="#">
//                                       <i className="icon-basket-loaded"></i> Add
//                                       To Cart
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link
//                                       href="shop-compare.html"
//                                       className="popup-ajax"
//                                     >
//                                       <i className="icon-shuffle"></i>
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link
//                                       href="shop-quick-view.html"
//                                       className="popup-ajax"
//                                     >
//                                       <i className="icon-magnifier-add"></i>
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link href="#">
//                                       <i className="icon-heart"></i>
//                                     </Link>
//                                   </li>
//                                 </ul>
//                               </div>
//                             </div>
//                             <div className="product_info">
//                               <h6 className="product_title">
//                                 <Link href="shop-product-detail.php">
//                                   Smart Televisions
//                                 </Link>
//                               </h6>
//                               <div className="product_price">
//                                 <span className="price">$45.00</span>
//                                 <del>$55.25</del>
//                                 <div className="on_sale">
//                                   <span>35% Off</span>
//                                 </div>
//                               </div>
//                               <div className="rating_wrap">
//                                 <div className="rating">
//                                   <div
//                                     className="product_rate"
//                                     style={{ width: "80%" }}
//                                   ></div>
//                                 </div>
//                                 <span className="rating_num">(21)</span>
//                               </div>
//                               <div className="pr_desc">
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur
//                                   adipiscing elit. Phasellus blandit massa enim.
//                                   Nullam id varius nunc id varius nunc.
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="item">
//                           <div className="product_wrap">
//                             <div className="product_img">
//                               <Link href="shop-product-detail.php">
//                                 <img
//                                   src="assets/images/el_img9.jpg"
//                                   alt="el_img9"
//                                 />
//                                 <img
//                                   className="product_hover_img"
//                                   src="assets/images/el_hover_img9.jpg"
//                                   alt="el_hover_img9"
//                                 />
//                               </Link>
//                               <div className="product_action_box">
//                                 <ul className="list_none pr_action_btn">
//                                   <li className="add-to-cart">
//                                     <Link href="#">
//                                       <i className="icon-basket-loaded"></i> Add
//                                       To Cart
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link
//                                       href="shop-compare.html"
//                                       className="popup-ajax"
//                                     >
//                                       <i className="icon-shuffle"></i>
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link
//                                       href="shop-quick-view.html"
//                                       className="popup-ajax"
//                                     >
//                                       <i className="icon-magnifier-add"></i>
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link href="#">
//                                       <i className="icon-heart"></i>
//                                     </Link>
//                                   </li>
//                                 </ul>
//                               </div>
//                             </div>
//                             <div className="product_info">
//                               <h6 className="product_title">
//                                 <Link href="shop-product-detail.php">
//                                   oppo Reno3 Pro
//                                 </Link>
//                               </h6>
//                               <div className="product_price">
//                                 <span className="price">$68.00</span>
//                                 <del>$99.00</del>
//                                 <div className="on_sale">
//                                   <span>20% Off</span>
//                                 </div>
//                               </div>
//                               <div className="rating_wrap">
//                                 <div className="rating">
//                                   <div
//                                     className="product_rate"
//                                     style={{ width: "87%" }}
//                                   ></div>
//                                 </div>
//                                 <span className="rating_num">(25)</span>
//                               </div>
//                               <div className="pr_desc">
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur
//                                   adipiscing elit. Phasellus blandit massa enim.
//                                   Nullam id varius nunc id varius nunc.
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="item">
//                           <div className="product_wrap">
//                             <div className="product_img">
//                               <Link href="shop-product-detail.php">
//                                 <img
//                                   src="assets/images/el_img7.jpg"
//                                   alt="el_img7"
//                                 />
//                                 <img
//                                   className="product_hover_img"
//                                   src="assets/images/el_hover_img7.jpg"
//                                   alt="el_hover_img7"
//                                 />
//                               </Link>
//                               <div className="product_action_box">
//                                 <ul className="list_none pr_action_btn">
//                                   <li className="add-to-cart">
//                                     <Link href="#">
//                                       <i className="icon-basket-loaded"></i> Add
//                                       To Cart
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link
//                                       href="shop-compare.html"
//                                       className="popup-ajax"
//                                     >
//                                       <i className="icon-shuffle"></i>
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link
//                                       href="shop-quick-view.html"
//                                       className="popup-ajax"
//                                     >
//                                       <i className="icon-magnifier-add"></i>
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link href="#">
//                                       <i className="icon-heart"></i>
//                                     </Link>
//                                   </li>
//                                 </ul>
//                               </div>
//                             </div>
//                             <div className="product_info">
//                               <h6 className="product_title">
//                                 <Link href="shop-product-detail.php">
//                                   Audio Theaters
//                                 </Link>
//                               </h6>
//                               <div className="product_price">
//                                 <span className="price">$45.00</span>
//                                 <del>$55.25</del>
//                                 <div className="on_sale">
//                                   <span>35% Off</span>
//                                 </div>
//                               </div>
//                               <div className="rating_wrap">
//                                 <div className="rating">
//                                   <div
//                                     className="product_rate"
//                                     style={{ width: "80%" }}
//                                   ></div>
//                                 </div>
//                                 <span className="rating_num">(21)</span>
//                               </div>
//                               <div className="pr_desc">
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur
//                                   adipiscing elit. Phasellus blandit massa enim.
//                                   Nullam id varius nunc id varius nunc.
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="item">
//                           <div className="product_wrap">
//                             <div className="product_img">
//                               <Link href="shop-product-detail.php">
//                                 <img
//                                   src="assets/images/el_img5.jpg"
//                                   alt="el_img5"
//                                 />
//                                 <img
//                                   className="product_hover_img"
//                                   src="assets/images/el_hover_img5.jpg"
//                                   alt="el_hover_img5"
//                                 />
//                               </Link>
//                               <div className="product_action_box">
//                                 <ul className="list_none pr_action_btn">
//                                   <li className="add-to-cart">
//                                     <Link href="#">
//                                       <i className="icon-basket-loaded"></i> Add
//                                       To Cart
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link
//                                       href="shop-compare.html"
//                                       className="popup-ajax"
//                                     >
//                                       <i className="icon-shuffle"></i>
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link
//                                       href="shop-quick-view.html"
//                                       className="popup-ajax"
//                                     >
//                                       <i className="icon-magnifier-add"></i>
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link href="#">
//                                       <i className="icon-heart"></i>
//                                     </Link>
//                                   </li>
//                                 </ul>
//                               </div>
//                             </div>
//                             <div className="product_info">
//                               <h6 className="product_title">
//                                 <Link href="shop-product-detail.php">
//                                   Smart Televisions
//                                 </Link>
//                               </h6>
//                               <div className="product_price">
//                                 <span className="price">$45.00</span>
//                                 <del>$55.25</del>
//                                 <div className="on_sale">
//                                   <span>35% Off</span>
//                                 </div>
//                               </div>
//                               <div className="rating_wrap">
//                                 <div className="rating">
//                                   <div
//                                     className="product_rate"
//                                     style={{ width: "80%" }}
//                                   ></div>
//                                 </div>
//                                 <span className="rating_num">(21)</span>
//                               </div>
//                               <div className="pr_desc">
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur
//                                   adipiscing elit. Phasellus blandit massa enim.
//                                   Nullam id varius nunc id varius nunc.
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="item">
//                           <div className="product_wrap">
//                             <div className="product_img">
//                               <Link href="shop-product-detail.php">
//                                 <img
//                                   src="assets/images/el_img12.jpg"
//                                   alt="el_img12"
//                                 />
//                                 <img
//                                   className="product_hover_img"
//                                   src="assets/images/el_hover_img12.jpg"
//                                   alt="el_hover_img12"
//                                 />
//                               </Link>
//                               <div className="product_action_box">
//                                 <ul className="list_none pr_action_btn">
//                                   <li className="add-to-cart">
//                                     <Link href="#">
//                                       <i className="icon-basket-loaded"></i> Add
//                                       To Cart
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link
//                                       href="shop-compare.html"
//                                       className="popup-ajax"
//                                     >
//                                       <i className="icon-shuffle"></i>
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link
//                                       href="shop-quick-view.html"
//                                       className="popup-ajax"
//                                     >
//                                       <i className="icon-magnifier-add"></i>
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link href="#">
//                                       <i className="icon-heart"></i>
//                                     </Link>
//                                   </li>
//                                 </ul>
//                               </div>
//                             </div>
//                             <div className="product_info">
//                               <h6 className="product_title">
//                                 <Link href="shop-product-detail.php">
//                                   Sound Equipment for Low
//                                 </Link>
//                               </h6>
//                               <div className="product_price">
//                                 <span className="price">$45.00</span>
//                                 <del>$55.25</del>
//                                 <div className="on_sale">
//                                   <span>35% Off</span>
//                                 </div>
//                               </div>
//                               <div className="rating_wrap">
//                                 <div className="rating">
//                                   <div
//                                     className="product_rate"
//                                     style={{ width: "80%" }}
//                                   ></div>
//                                 </div>
//                                 <span className="rating_num">(21)</span>
//                               </div>
//                               <div className="pr_desc">
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur
//                                   adipiscing elit. Phasellus blandit massa enim.
//                                   Nullam id varius nunc id varius nunc.
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-xl-3 d-none d-xl-block">
//                   <div className="sale-banner">
//                     <Link className="hover_effect1" href="#">
//                       <img
//                         src="assets/images/i.jpg"
//                         alt="hii"
//                       />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* <!-- START SECTION BANNER -->  */}
//           <div className="section pb_20 small_pt">
//             <div className="container-fluid px-2">
//               <div className="row no-gutters">
//                 <div className="col-md-4">
//                   <div className="sale_banner">
//                     <Link className="hover_effect1" href="#">
//                       <img
//                         src="assets/images/shop_banner_img33.png"
//                         alt="shop_banner_img3"
//                       />
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="sale_banner">
//                     <Link className="hover_effect1" href="#">
//                       <img
//                         src="assets/images/shop_banner_img34.png"
//                         alt="shop_banner_img4"
//                       />
//                     </Link>
//                   </div>
//                 </div>

//                 <div className="col-md-4">
//                   <div className="sale_banner">
//                     <Link className="hover_effect1" href="#">
//                       <img
//                         src="assets/images/shop_banner_img34.png"
//                         alt="shop_banner_img5"
//                       />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* <!-- END SECTION BANNER --> 
//     <!-- START SECTION TESTIMONIAL -->
    
//     <!-- END SECTION TESTIMONIAL -->
    
//     <!-- START SECTION BLOG --> */}
//           <div className="section small_pt pb-0">
//             <div className="custom-container">
//               <div className="row">
//                 <div className="col-xl-3 d-none d-xl-block">
//                   <div className="sale-banner">
//                     <Link className="hover_effect1" href="#">
//                       <img
//                         src="assets/images/g.jpg"
//                         alt="shop_banner_img6"
//                       />
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="col-xl-9">
//                   <div className="row">
//                     <div className="col-12">
//                       <div className="heading_tab_header">
//                         <div className="heading_s2">
//                           <h4>Exclusive Products</h4>
//                         </div>
//                         <div className="tab-style2">
//                           <button
//                             className="navbar-toggler"
//                             type="button"
//                             data-toggle="collapse"
//                             data-target="#tabmenubar"
//                             aria-expanded="false"
//                           >
//                             <span className="ion-android-menu"></span>
//                           </button>
//                           <ul
//                             className="nav nav-tabs justify-content-center justify-content-md-end"
//                             id="tabmenubar"
//                             role="tablist"
//                           >
//                             <li className="nav-item">
//                               <Link
//                                 className="nav-link active"
//                                 id="arrival-tab"
//                                 data-toggle="tab"
//                                 href="#arrival"
//                                 role="tab"
//                                 aria-controls="arrival"
//                                 aria-selected="true"
//                               >
//                                 New Arrival
//                               </Link>
//                             </li>
//                             <li className="nav-item">
//                               <Link
//                                 className="nav-link"
//                                 id="sellers-tab"
//                                 data-toggle="tab"
//                                 href="#sellers"
//                                 role="tab"
//                                 aria-controls="sellers"
//                                 aria-selected="false"
//                               >
//                                 Best Sellers
//                               </Link>
//                             </li>
//                             <li className="nav-item">
//                               <Link
//                                 className="nav-link"
//                                 id="featured-tab"
//                                 data-toggle="tab"
//                                 href="#featured"
//                                 role="tab"
//                                 aria-controls="featured"
//                                 aria-selected="false"
//                               >
//                                 Featured
//                               </Link>
//                             </li>
//                             <li className="nav-item">
//                               <Link
//                                 className="nav-link"
//                                 id="special-tab"
//                                 data-toggle="tab"
//                                 href="#special"
//                                 role="tab"
//                                 aria-controls="special"
//                                 aria-selected="false"
//                               >
//                                 Special Offer
//                               </Link>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="col-12">
//                       <div className="tab_slider">
//                         <div
//                           className="tab-pane fade show active"
//                           id="arrival"
//                           role="tabpanel"
//                           aria-labelledby="arrival-tab"
//                         >
//                           <div
//                             className="product_slider carousel_slider owl-carousel owl-theme dot_style1"
//                             data-loop="true"
//                             data-margin="20"
//                             data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "991":{"items": "4"}}'
//                           >
//                             <div className="item">
//                               <div className="product_wrap">
//                                 <div className="product_img">
//                                   <Link href="shop-product-detail.php">
//                                     <img
//                                       src="assets/images/el_img1.jpg"
//                                       alt="el_img1"
//                                     />
//                                     <img
//                                       className="product_hover_img"
//                                       src="assets/images/el_hover_img1.jpg"
//                                       alt="el_hover_img1"
//                                     />
//                                   </Link>
//                                   <div className="product_action_box">
//                                     <ul className="list_none pr_action_btn">
//                                       <li className="add-to-cart">
//                                         <Link href="#">
//                                           <i className="icon-basket-loaded"></i>{" "}
//                                           Add To Cart
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-compare.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-shuffle"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-quick-view.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-magnifier-add"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link href="#">
//                                           <i className="icon-heart"></i>
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </div>
//                                 <div className="product_info">
//                                   <h6 className="product_title">
//                                     <Link href="shop-product-detail.php">
//                                       Red & Black Headphone
//                                     </Link>
//                                   </h6>
//                                   <div className="product_price">
//                                     <span className="price">$45.00</span>
//                                     <del>$55.25</del>
//                                     <div className="on_sale">
//                                       <span>35% Off</span>
//                                     </div>
//                                   </div>
//                                   <div className="rating_wrap">
//                                     <div className="rating">
//                                       <div
//                                         className="product_rate"
//                                         style={{ width: "80%" }}
//                                       ></div>
//                                     </div>
//                                     <span className="rating_num">(21)</span>
//                                   </div>
//                                   <div className="pr_desc">
//                                     <p>
//                                       Lorem ipsum dolor sit amet, consectetur
//                                       adipiscing elit. Phasellus blandit massa
//                                       enim. Nullam id varius nunc id varius
//                                       nunc.
//                                     </p>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="item">
//                               <div className="product_wrap">
//                                 <div className="product_img">
//                                   <Link href="shop-product-detail.php">
//                                     <img
//                                       src="assets/images/el_img2.jpg"
//                                       alt="el_img2"
//                                     />
//                                     <img
//                                       className="product_hover_img"
//                                       src="assets/images/el_hover_img2.jpg"
//                                       alt="el_hover_img2"
//                                     />
//                                   </Link>
//                                   <div className="product_action_box">
//                                     <ul className="list_none pr_action_btn">
//                                       <li className="add-to-cart">
//                                         <Link href="#">
//                                           <i className="icon-basket-loaded"></i>{" "}
//                                           Add To Cart
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-compare.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-shuffle"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-quick-view.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-magnifier-add"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link href="#">
//                                           <i className="icon-heart"></i>
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </div>
//                                 <div className="product_info">
//                                   <h6 className="product_title">
//                                     <Link href="shop-product-detail.php">
//                                       Smart Watch External
//                                     </Link>
//                                   </h6>
//                                   <div className="product_price">
//                                     <span className="price">$55.00</span>
//                                     <del>$95.00</del>
//                                     <div className="on_sale">
//                                       <span>25% Off</span>
//                                     </div>
//                                   </div>
//                                   <div className="rating_wrap">
//                                     <div className="rating">
//                                       <div
//                                         className="product_rate"
//                                         style={{ width: "68%" }}
//                                       ></div>
//                                     </div>
//                                     <span className="rating_num">(15)</span>
//                                   </div>
//                                   <div className="pr_desc">
//                                     <p>
//                                       Lorem ipsum dolor sit amet, consectetur
//                                       adipiscing elit. Phasellus blandit massa
//                                       enim. Nullam id varius nunc id varius
//                                       nunc.
//                                     </p>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="item">
//                               <div className="product_wrap">
//                                 <span className="pr_flash">New</span>
//                                 <div className="product_img">
//                                   <Link href="shop-product-detail.php">
//                                     <img
//                                       src="assets/images/el_img3.jpg"
//                                       alt="el_img3"
//                                     />
//                                     <img
//                                       className="product_hover_img"
//                                       src="assets/images/el_hover_img3.jpg"
//                                       alt="el_hover_img3"
//                                     />
//                                   </Link>
//                                   <div className="product_action_box">
//                                     <ul className="list_none pr_action_btn">
//                                       <li className="add-to-cart">
//                                         <Link href="#">
//                                           <i className="icon-basket-loaded"></i>{" "}
//                                           Add To Cart
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-compare.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-shuffle"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-quick-view.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-magnifier-add"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link href="#">
//                                           <i className="icon-heart"></i>
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </div>
//                                 <div className="product_info">
//                                   <h6 className="product_title">
//                                     <Link href="shop-product-detail.php">
//                                       Nikon HD camera
//                                     </Link>
//                                   </h6>
//                                   <div className="product_price">
//                                     <span className="price">$68.00</span>
//                                     <del>$99.00</del>
//                                   </div>
//                                   <div className="rating_wrap">
//                                     <div className="rating">
//                                       <div
//                                         className="product_rate"
//                                         style={{ width: "87%" }}
//                                       ></div>
//                                     </div>
//                                     <span className="rating_num">(25)</span>
//                                   </div>
//                                   <div className="pr_desc">
//                                     <p>
//                                       Lorem ipsum dolor sit amet, consectetur
//                                       adipiscing elit. Phasellus blandit massa
//                                       enim. Nullam id varius nunc id varius
//                                       nunc.
//                                     </p>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="item">
//                               <div className="product_wrap">
//                                 <div className="product_img">
//                                   <Link href="shop-product-detail.php">
//                                     <img
//                                       src="assets/images/el_img4.jpg"
//                                       alt="el_img4"
//                                     />
//                                     <img
//                                       className="product_hover_img"
//                                       src="assets/images/el_hover_img4.jpg"
//                                       alt="el_hover_img4"
//                                     />
//                                   </Link>
//                                   <div className="product_action_box">
//                                     <ul className="list_none pr_action_btn">
//                                       <li className="add-to-cart">
//                                         <Link href="#">
//                                           <i className="icon-basket-loaded"></i>{" "}
//                                           Add To Cart
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-compare.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-shuffle"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-quick-view.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-magnifier-add"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link href="#">
//                                           <i className="icon-heart"></i>
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </div>
//                                 <div className="product_info">
//                                   <h6 className="product_title">
//                                     <Link href="shop-product-detail.php">
//                                       Audio Equipment
//                                     </Link>
//                                   </h6>
//                                   <div className="product_price">
//                                     <span className="price">$69.00</span>
//                                     <del>$89.00</del>
//                                     <div className="on_sale">
//                                       <span>20% Off</span>
//                                     </div>
//                                   </div>
//                                   <div className="rating_wrap">
//                                     <div className="rating">
//                                       <div
//                                         className="product_rate"
//                                         style={{ width: "70%" }}
//                                       ></div>
//                                     </div>
//                                     <span className="rating_num">(22)</span>
//                                   </div>
//                                   <div className="pr_desc">
//                                     <p>
//                                       Lorem ipsum dolor sit amet, consectetur
//                                       adipiscing elit. Phasellus blandit massa
//                                       enim. Nullam id varius nunc id varius
//                                       nunc.
//                                     </p>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="item">
//                               <div className="product_wrap">
//                                 <div className="product_img">
//                                   <Link href="shop-product-detail.php">
//                                     <img
//                                       src="assets/images/el_img5.jpg"
//                                       alt="el_img5"
//                                     />
//                                     <img
//                                       className="product_hover_img"
//                                       src="assets/images/el_hover_img5.jpg"
//                                       alt="el_hover_img5"
//                                     />
//                                   </Link>
//                                   <div className="product_action_box">
//                                     <ul className="list_none pr_action_btn">
//                                       <li className="add-to-cart">
//                                         <Link href="#">
//                                           <i className="icon-basket-loaded"></i>{" "}
//                                           Add To Cart
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-compare.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-shuffle"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-quick-view.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-magnifier-add"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link href="#">
//                                           <i className="icon-heart"></i>
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </div>
//                                 <div className="product_info">
//                                   <h6 className="product_title">
//                                     <Link href="shop-product-detail.php">
//                                       Smart Televisions
//                                     </Link>
//                                   </h6>
//                                   <div className="product_price">
//                                     <span className="price">$45.00</span>
//                                     <del>$55.25</del>
//                                     <div className="on_sale">
//                                       <span>35% Off</span>
//                                     </div>
//                                   </div>
//                                   <div className="rating_wrap">
//                                     <div className="rating">
//                                       <div
//                                         className="product_rate"
//                                         style={{ width: "80%" }}
//                                       ></div>
//                                     </div>
//                                     <span className="rating_num">(21)</span>
//                                   </div>
//                                   <div className="pr_desc">
//                                     <p>
//                                       Lorem ipsum dolor sit amet, consectetur
//                                       adipiscing elit. Phasellus blandit massa
//                                       enim. Nullam id varius nunc id varius
//                                       nunc.
//                                     </p>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="item">
//                               <div className="product_wrap">
//                                 <span className="pr_flash bg-danger">Hot</span>
//                                 <div className="product_img">
//                                   <Link href="shop-product-detail.php">
//                                     <img
//                                       src="assets/images/el_img6.jpg"
//                                       alt="el_img6"
//                                     />
//                                     <img
//                                       className="product_hover_img"
//                                       src="assets/images/el_hover_img6.jpg"
//                                       alt="el_hover_img6"
//                                     />
//                                   </Link>
//                                   <div className="product_action_box">
//                                     <ul className="list_none pr_action_btn">
//                                       <li className="add-to-cart">
//                                         <Link href="#">
//                                           <i className="icon-basket-loaded"></i>{" "}
//                                           Add To Cart
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-compare.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-shuffle"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-quick-view.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-magnifier-add"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link href="#">
//                                           <i className="icon-heart"></i>
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </div>
//                                 <div className="product_info">
//                                   <h6 className="product_title">
//                                     <Link href="shop-product-detail.php">
//                                       Samsung Smart Phone
//                                     </Link>
//                                   </h6>
//                                   <div className="product_price">
//                                     <span className="price">$55.00</span>
//                                     <del>$95.00</del>
//                                     <div className="on_sale">
//                                       <span>25% Off</span>
//                                     </div>
//                                   </div>
//                                   <div className="rating_wrap">
//                                     <div className="rating">
//                                       <div
//                                         className="product_rate"
//                                         style={{ width: "68%" }}
//                                       ></div>
//                                     </div>
//                                     <span className="rating_num">(15)</span>
//                                   </div>
//                                   <div className="pr_desc">
//                                     <p>
//                                       Lorem ipsum dolor sit amet, consectetur
//                                       adipiscing elit. Phasellus blandit massa
//                                       enim. Nullam id varius nunc id varius
//                                       nunc.
//                                     </p>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div
//                           className="tab-pane fade show active"
//                           id="sellers"
//                           role="tabpanel"
//                           aria-labelledby="sellers-tab"
//                         >
//                           <div
//                             className="product_slider carousel_slider owl-carousel owl-theme dot_style1"
//                             data-loop="true"
//                             data-margin="20"
//                             data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "991":{"items": "4"}}'
//                           >
//                             <div className="item">
//                               <div className="product_wrap">
//                                 <div className="product_img">
//                                   <Link href="shop-product-detail.php">
//                                     <img
//                                       src="assets/images/el_img7.jpg"
//                                       alt="el_img7"
//                                     />
//                                     <img
//                                       className="product_hover_img"
//                                       src="assets/images/el_hover_img7.jpg"
//                                       alt="el_hover_img7"
//                                     />
//                                   </Link>
//                                   <div className="product_action_box">
//                                     <ul className="list_none pr_action_btn">
//                                       <li className="add-to-cart">
//                                         <Link href="#">
//                                           <i className="icon-basket-loaded"></i>{" "}
//                                           Add To Cart
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-compare.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-shuffle"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-quick-view.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-magnifier-add"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link href="#">
//                                           <i className="icon-heart"></i>
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </div>
//                                 <div className="product_info">
//                                   <h6 className="product_title">
//                                     <Link href="shop-product-detail.php">
//                                       Audio Theaters
//                                     </Link>
//                                   </h6>
//                                   <div className="product_price">
//                                     <span className="price">$45.00</span>
//                                     <del>$55.25</del>
//                                     <div className="on_sale">
//                                       <span>35% Off</span>
//                                     </div>
//                                   </div>
//                                   <div className="rating_wrap">
//                                     <div className="rating">
//                                       <div
//                                         className="product_rate"
//                                         style={{ width: "80%" }}
//                                       ></div>
//                                     </div>
//                                     <span className="rating_num">(21)</span>
//                                   </div>
//                                   <div className="pr_desc">
//                                     <p>
//                                       Lorem ipsum dolor sit amet, consectetur
//                                       adipiscing elit. Phasellus blandit massa
//                                       enim. Nullam id varius nunc id varius
//                                       nunc.
//                                     </p>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="item">
//                               <div className="product_wrap">
//                                 <span className="pr_flash bg-danger">Hot</span>
//                                 <div className="product_img">
//                                   <Link href="shop-product-detail.php">
//                                     <img
//                                       src="assets/images/el_img8.jpg"
//                                       alt="el_img8"
//                                     />
//                                     <img
//                                       className="product_hover_img"
//                                       src="assets/images/el_hover_img8.jpg"
//                                       alt="el_hover_img8"
//                                     />
//                                   </Link>
//                                   <div className="product_action_box">
//                                     <ul className="list_none pr_action_btn">
//                                       <li className="add-to-cart">
//                                         <Link href="#">
//                                           <i className="icon-basket-loaded"></i>{" "}
//                                           Add To Cart
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-compare.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-shuffle"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-quick-view.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-magnifier-add"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link href="#">
//                                           <i className="icon-heart"></i>
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </div>
//                                 <div className="product_info">
//                                   <h6 className="product_title">
//                                     <Link href="shop-product-detail.php">
//                                       Surveillance camera
//                                     </Link>
//                                   </h6>
//                                   <div className="product_price">
//                                     <span className="price">$55.00</span>
//                                     <del>$95.00</del>
//                                     <div className="on_sale">
//                                       <span>25% Off</span>
//                                     </div>
//                                   </div>
//                                   <div className="rating_wrap">
//                                     <div className="rating">
//                                       <div
//                                         className="product_rate"
//                                         style={{ width: "68%" }}
//                                       ></div>
//                                     </div>
//                                     <span className="rating_num">(15)</span>
//                                   </div>
//                                   <div className="pr_desc">
//                                     <p>
//                                       Lorem ipsum dolor sit amet, consectetur
//                                       adipiscing elit. Phasellus blandit massa
//                                       enim. Nullam id varius nunc id varius
//                                       nunc.
//                                     </p>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="item">
//                               <div className="product_wrap">
//                                 <div className="product_img">
//                                   <Link href="shop-product-detail.php">
//                                     <img
//                                       src="assets/images/el_img9.jpg"
//                                       alt="el_img9"
//                                     />
//                                     <img
//                                       className="product_hover_img"
//                                       src="assets/images/el_hover_img9.jpg"
//                                       alt="el_hover_img9"
//                                     />
//                                   </Link>
//                                   <div className="product_action_box">
//                                     <ul className="list_none pr_action_btn">
//                                       <li className="add-to-cart">
//                                         <Link href="#">
//                                           <i className="icon-basket-loaded"></i>{" "}
//                                           Add To Cart
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-compare.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-shuffle"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-quick-view.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-magnifier-add"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link href="#">
//                                           <i className="icon-heart"></i>
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </div>
//                                 <div className="product_info">
//                                   <h6 className="product_title">
//                                     <Link href="shop-product-detail.php">
//                                       oppo Reno3 Pro
//                                     </Link>
//                                   </h6>
//                                   <div className="product_price">
//                                     <span className="price">$68.00</span>
//                                     <del>$99.00</del>
//                                     <div className="on_sale">
//                                       <span>20% Off</span>
//                                     </div>
//                                   </div>
//                                   <div className="rating_wrap">
//                                     <div className="rating">
//                                       <div
//                                         className="product_rate"
//                                         style={{ width: "87%" }}
//                                       ></div>
//                                     </div>
//                                     <span className="rating_num">(25)</span>
//                                   </div>
//                                   <div className="pr_desc">
//                                     <p>
//                                       Lorem ipsum dolor sit amet, consectetur
//                                       adipiscing elit. Phasellus blandit massa
//                                       enim. Nullam id varius nunc id varius
//                                       nunc.
//                                     </p>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="item">
//                               <div className="product_wrap">
//                                 <span className="pr_flash bg-success">
//                                   Sale
//                                 </span>
//                                 <div className="product_img">
//                                   <Link href="shop-product-detail.php">
//                                     <img
//                                       src="assets/images/el_img10.jpg"
//                                       alt="el_img10"
//                                     />
//                                     <img
//                                       className="product_hover_img"
//                                       src="assets/images/el_hover_img10.jpg"
//                                       alt="el_hover_img10"
//                                     />
//                                   </Link>
//                                   <div className="product_action_box">
//                                     <ul className="list_none pr_action_btn">
//                                       <li className="add-to-cart">
//                                         <Link href="#">
//                                           <i className="icon-basket-loaded"></i>{" "}
//                                           Add To Cart
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-compare.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-shuffle"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-quick-view.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-magnifier-add"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link href="#">
//                                           <i className="icon-heart"></i>
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </div>
//                                 <div className="product_info">
//                                   <h6 className="product_title">
//                                     <Link href="shop-product-detail.php">
//                                       classNameical Headphone
//                                     </Link>
//                                   </h6>
//                                   <div className="product_price">
//                                     <span className="price">$68.00</span>
//                                     <del>$99.00</del>
//                                     <div className="on_sale">
//                                       <span>20% Off</span>
//                                     </div>
//                                   </div>
//                                   <div className="rating_wrap">
//                                     <div className="rating">
//                                       <div
//                                         className="product_rate"
//                                         style={{ width: "87%" }}
//                                       ></div>
//                                     </div>
//                                     <span className="rating_num">(25)</span>
//                                   </div>
//                                   <div className="pr_desc">
//                                     <p>
//                                       Lorem ipsum dolor sit amet, consectetur
//                                       adipiscing elit. Phasellus blandit massa
//                                       enim. Nullam id varius nunc id varius
//                                       nunc.
//                                     </p>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="item">
//                               <div className="product_wrap">
//                                 <div className="product_img">
//                                   <Link href="shop-product-detail.php">
//                                     <img
//                                       src="assets/images/el_img11.jpg"
//                                       alt="el_img11"
//                                     />
//                                     <img
//                                       className="product_hover_img"
//                                       src="assets/images/el_hover_img11.jpg"
//                                       alt="el_hover_img11"
//                                     />
//                                   </Link>
//                                   <div className="product_action_box">
//                                     <ul className="list_none pr_action_btn">
//                                       <li className="add-to-cart">
//                                         <Link href="#">
//                                           <i className="icon-basket-loaded"></i>{" "}
//                                           Add To Cart
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-compare.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-shuffle"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-quick-view.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-magnifier-add"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link href="#">
//                                           <i className="icon-heart"></i>
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </div>
//                                 <div className="product_info">
//                                   <h6 className="product_title">
//                                     <Link href="shop-product-detail.php">
//                                       Basics High-Speed HDMI
//                                     </Link>
//                                   </h6>
//                                   <div className="product_price">
//                                     <span className="price">$69.00</span>
//                                     <del>$89.00</del>
//                                     <div className="on_sale">
//                                       <span>20% Off</span>
//                                     </div>
//                                   </div>
//                                   <div className="rating_wrap">
//                                     <div className="rating">
//                                       <div
//                                         className="product_rate"
//                                         style={{ width: "70%" }}
//                                       ></div>
//                                     </div>
//                                     <span className="rating_num">(22)</span>
//                                   </div>
//                                   <div className="pr_desc">
//                                     <p>
//                                       Lorem ipsum dolor sit amet, consectetur
//                                       adipiscing elit. Phasellus blandit massa
//                                       enim. Nullam id varius nunc id varius
//                                       nunc.
//                                     </p>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="item">
//                               <div className="product_wrap">
//                                 <div className="product_img">
//                                   <Link href="shop-product-detail.php">
//                                     <img
//                                       src="assets/images/el_img12.jpg"
//                                       alt="el_img12"
//                                     />
//                                     <img
//                                       className="product_hover_img"
//                                       src="assets/images/el_hover_img12.jpg"
//                                       alt="el_hover_img12"
//                                     />
//                                   </Link>
//                                   <div className="product_action_box">
//                                     <ul className="list_none pr_action_btn">
//                                       <li className="add-to-cart">
//                                         <Link href="#">
//                                           <i className="icon-basket-loaded"></i>{" "}
//                                           Add To Cart
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-compare.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-shuffle"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-quick-view.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-magnifier-add"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link href="#">
//                                           <i className="icon-heart"></i>
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </div>
//                                 <div className="product_info">
//                                   <h6 className="product_title">
//                                     <Link href="shop-product-detail.php">
//                                       Sound Equipment for Low
//                                     </Link>
//                                   </h6>
//                                   <div className="product_price">
//                                     <span className="price">$45.00</span>
//                                     <del>$55.25</del>
//                                     <div className="on_sale">
//                                       <span>35% Off</span>
//                                     </div>
//                                   </div>
//                                   <div className="rating_wrap">
//                                     <div className="rating">
//                                       <div
//                                         className="product_rate"
//                                         style={{ width: "80%" }}
//                                       ></div>
//                                     </div>
//                                     <span className="rating_num">(21)</span>
//                                   </div>
//                                   <div className="pr_desc">
//                                     <p>
//                                       Lorem ipsum dolor sit amet, consectetur
//                                       adipiscing elit. Phasellus blandit massa
//                                       enim. Nullam id varius nunc id varius
//                                       nunc.
//                                     </p>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div
//                           className="tab-pane fade show active"
//                           id="featured"
//                           role="tabpanel"
//                           aria-labelledby="featured-tab"
//                         >
//                           <div
//                             className="product_slider carousel_slider owl-carousel owl-theme dot_style1"
//                             data-loop="true"
//                             data-margin="20"
//                             data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "991":{"items": "4"}}'
//                           >
//                             <div className="item">
//                               <div className="product_wrap">
//                                 <span className="pr_flash bg-danger">Hot</span>
//                                 <div className="product_img">
//                                   <Link href="shop-product-detail.php">
//                                     <img
//                                       src="assets/images/el_img8.jpg"
//                                       alt="el_img8"
//                                     />
//                                     <img
//                                       className="product_hover_img"
//                                       src="assets/images/el_hover_img8.jpg"
//                                       alt="el_hover_img8"
//                                     />
//                                   </Link>
//                                   <div className="product_action_box">
//                                     <ul className="list_none pr_action_btn">
//                                       <li className="add-to-cart">
//                                         <Link href="#">
//                                           <i className="icon-basket-loaded"></i>{" "}
//                                           Add To Cart
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-compare.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-shuffle"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-quick-view.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-magnifier-add"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link href="#">
//                                           <i className="icon-heart"></i>
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </div>
//                                 <div className="product_info">
//                                   <h6 className="product_title">
//                                     <Link href="shop-product-detail.php">
//                                       Surveillance camera
//                                     </Link>
//                                   </h6>
//                                   <div className="product_price">
//                                     <span className="price">$55.00</span>
//                                     <del>$95.00</del>
//                                     <div className="on_sale">
//                                       <span>25% Off</span>
//                                     </div>
//                                   </div>
//                                   <div className="rating_wrap">
//                                     <div className="rating">
//                                       <div
//                                         className="product_rate"
//                                         style={{ width: "68%" }}
//                                       ></div>
//                                     </div>
//                                     <span className="rating_num">(15)</span>
//                                   </div>
//                                   <div className="pr_desc">
//                                     <p>
//                                       Lorem ipsum dolor sit amet, consectetur
//                                       adipiscing elit. Phasellus blandit massa
//                                       enim. Nullam id varius nunc id varius
//                                       nunc.
//                                     </p>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="item">
//                               <div className="product_wrap">
//                                 <div className="product_img">
//                                   <Link href="shop-product-detail.php">
//                                     <img
//                                       src="assets/images/el_img4.jpg"
//                                       alt="el_img4"
//                                     />
//                                     <img
//                                       className="product_hover_img"
//                                       src="assets/images/el_hover_img4.jpg"
//                                       alt="el_hover_img4"
//                                     />
//                                   </Link>
//                                   <div className="product_action_box">
//                                     <ul className="list_none pr_action_btn">
//                                       <li className="add-to-cart">
//                                         <Link href="#">
//                                           <i className="icon-basket-loaded"></i>{" "}
//                                           Add To Cart
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-compare.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-shuffle"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-quick-view.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-magnifier-add"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link href="#">
//                                           <i className="icon-heart"></i>
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </div>
//                                 <div className="product_info">
//                                   <h6 className="product_title">
//                                     <Link href="shop-product-detail.php">
//                                       Audio Equipment
//                                     </Link>
//                                   </h6>
//                                   <div className="product_price">
//                                     <span className="price">$69.00</span>
//                                     <del>$89.00</del>
//                                     <div className="on_sale">
//                                       <span>20% Off</span>
//                                     </div>
//                                   </div>
//                                   <div className="rating_wrap">
//                                     <div className="rating">
//                                       <div
//                                         className="product_rate"
//                                         style={{ width: "70%" }}
//                                       ></div>
//                                     </div>
//                                     <span className="rating_num">(22)</span>
//                                   </div>
//                                   <div className="pr_desc">
//                                     <p>
//                                       Lorem ipsum dolor sit amet, consectetur
//                                       adipiscing elit. Phasellus blandit massa
//                                       enim. Nullam id varius nunc id varius
//                                       nunc.
//                                     </p>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="item">
//                               <div className="product_wrap">
//                                 <div className="product_img">
//                                   <Link href="shop-product-detail.php">
//                                     <img
//                                       src="assets/images/el_img11.jpg"
//                                       alt="el_img11"
//                                     />
//                                     <img
//                                       className="product_hover_img"
//                                       src="assets/images/el_hover_img11.jpg"
//                                       alt="el_hover_img11"
//                                     />
//                                   </Link>
//                                   <div className="product_action_box">
//                                     <ul className="list_none pr_action_btn">
//                                       <li className="add-to-cart">
//                                         <Link href="#">
//                                           <i className="icon-basket-loaded"></i>{" "}
//                                           Add To Cart
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-compare.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-shuffle"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-quick-view.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-magnifier-add"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link href="#">
//                                           <i className="icon-heart"></i>
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </div>
//                                 <div className="product_info">
//                                   <h6 className="product_title">
//                                     <Link href="shop-product-detail.php">
//                                       Basics High-Speed HDMI
//                                     </Link>
//                                   </h6>
//                                   <div className="product_price">
//                                     <span className="price">$69.00</span>
//                                     <del>$89.00</del>
//                                     <div className="on_sale">
//                                       <span>20% Off</span>
//                                     </div>
//                                   </div>
//                                   <div className="rating_wrap">
//                                     <div className="rating">
//                                       <div
//                                         className="product_rate"
//                                         style={{ width: "70%" }}
//                                       ></div>
//                                     </div>
//                                     <span className="rating_num">(22)</span>
//                                   </div>
//                                   <div className="pr_desc">
//                                     <p>
//                                       Lorem ipsum dolor sit amet, consectetur
//                                       adipiscing elit. Phasellus blandit massa
//                                       enim. Nullam id varius nunc id varius
//                                       nunc.
//                                     </p>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="item">
//                               <div className="product_wrap">
//                                 <div className="product_img">
//                                   <Link href="shop-product-detail.php">
//                                     <img
//                                       src="assets/images/el_img1.jpg"
//                                       alt="el_img1"
//                                     />
//                                     <img
//                                       className="product_hover_img"
//                                       src="assets/images/el_hover_img1.jpg"
//                                       alt="el_hover_img1"
//                                     />
//                                   </Link>
//                                   <div className="product_action_box">
//                                     <ul className="list_none pr_action_btn">
//                                       <li className="add-to-cart">
//                                         <Link href="#">
//                                           <i className="icon-basket-loaded"></i>{" "}
//                                           Add To Cart
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-compare.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-shuffle"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-quick-view.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-magnifier-add"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link href="#">
//                                           <i className="icon-heart"></i>
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </div>
//                                 <div className="product_info">
//                                   <h6 className="product_title">
//                                     <Link href="shop-product-detail.php">
//                                       Red & Black Headphone
//                                     </Link>
//                                   </h6>
//                                   <div className="product_price">
//                                     <span className="price">$45.00</span>
//                                     <del>$55.25</del>
//                                     <div className="on_sale">
//                                       <span>35% Off</span>
//                                     </div>
//                                   </div>
//                                   <div className="rating_wrap">
//                                     <div className="rating">
//                                       <div
//                                         className="product_rate"
//                                         style={{ width: "80%" }}
//                                       ></div>
//                                     </div>
//                                     <span className="rating_num">(21)</span>
//                                   </div>
//                                   <div className="pr_desc">
//                                     <p>
//                                       Lorem ipsum dolor sit amet, consectetur
//                                       adipiscing elit. Phasellus blandit massa
//                                       enim. Nullam id varius nunc id varius
//                                       nunc.
//                                     </p>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="item">
//                               <div className="product_wrap">
//                                 <div className="product_img">
//                                   <Link href="shop-product-detail.php">
//                                     <img
//                                       src="assets/images/el_img7.jpg"
//                                       alt="el_img7"
//                                     />
//                                     <img
//                                       className="product_hover_img"
//                                       src="assets/images/el_hover_img7.jpg"
//                                       alt="el_hover_img7"
//                                     />
//                                   </Link>
//                                   <div className="product_action_box">
//                                     <ul className="list_none pr_action_btn">
//                                       <li className="add-to-cart">
//                                         <Link href="#">
//                                           <i className="icon-basket-loaded"></i>{" "}
//                                           Add To Cart
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-compare.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-shuffle"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-quick-view.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-magnifier-add"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link href="#">
//                                           <i className="icon-heart"></i>
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </div>
//                                 <div className="product_info">
//                                   <h6 className="product_title">
//                                     <Link href="shop-product-detail.php">
//                                       Audio Theaters
//                                     </Link>
//                                   </h6>
//                                   <div className="product_price">
//                                     <span className="price">$45.00</span>
//                                     <del>$55.25</del>
//                                     <div className="on_sale">
//                                       <span>35% Off</span>
//                                     </div>
//                                   </div>
//                                   <div className="rating_wrap">
//                                     <div className="rating">
//                                       <div
//                                         className="product_rate"
//                                         style={{ width: "80%" }}
//                                       ></div>
//                                     </div>
//                                     <span className="rating_num">(21)</span>
//                                   </div>
//                                   <div className="pr_desc">
//                                     <p>
//                                       Lorem ipsum dolor sit amet, consectetur
//                                       adipiscing elit. Phasellus blandit massa
//                                       enim. Nullam id varius nunc id varius
//                                       nunc.
//                                     </p>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="item">
//                               <div className="product_wrap">
//                                 <span className="pr_flash bg-danger">Hot</span>
//                                 <div className="product_img">
//                                   <Link href="shop-product-detail.php">
//                                     <img
//                                       src="assets/images/el_img6.jpg"
//                                       alt="el_img6"
//                                     />
//                                     <img
//                                       className="product_hover_img"
//                                       src="assets/images/el_hover_img6.jpg"
//                                       alt="el_hover_img6"
//                                     />
//                                   </Link>
//                                   <div className="product_action_box">
//                                     <ul className="list_none pr_action_btn">
//                                       <li className="add-to-cart">
//                                         <Link href="#">
//                                           <i className="icon-basket-loaded"></i>{" "}
//                                           Add To Cart
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-compare.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-shuffle"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-quick-view.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-magnifier-add"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link href="#">
//                                           <i className="icon-heart"></i>
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </div>
//                                 <div className="product_info">
//                                   <h6 className="product_title">
//                                     <Link href="shop-product-detail.php">
//                                       Samsung Smart Phone
//                                     </Link>
//                                   </h6>
//                                   <div className="product_price">
//                                     <span className="price">$55.00</span>
//                                     <del>$95.00</del>
//                                     <div className="on_sale">
//                                       <span>25% Off</span>
//                                     </div>
//                                   </div>
//                                   <div className="rating_wrap">
//                                     <div className="rating">
//                                       <div
//                                         className="product_rate"
//                                         style={{ width: "68%" }}
//                                       ></div>
//                                     </div>
//                                     <span className="rating_num">(15)</span>
//                                   </div>
//                                   <div className="pr_desc">
//                                     <p>
//                                       Lorem ipsum dolor sit amet, consectetur
//                                       adipiscing elit. Phasellus blandit massa
//                                       enim. Nullam id varius nunc id varius
//                                       nunc.
//                                     </p>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div
//                           className="tab-pane fade show active"
//                           id="special"
//                           role="tabpanel"
//                           aria-labelledby="special-tab"
//                         >
//                           <div
//                             className="product_slider carousel_slider owl-carousel owl-theme dot_style1"
//                             data-loop="true"
//                             data-margin="20"
//                             data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "991":{"items": "4"}}'
//                           >
//                             <div className="item">
//                               <div className="product_wrap">
//                                 <div className="product_img">
//                                   <Link href="shop-product-detail.php">
//                                     <img
//                                       src="assets/images/el_img2.jpg"
//                                       alt="el_img2"
//                                     />
//                                     <img
//                                       className="product_hover_img"
//                                       src="assets/images/el_hover_img2.jpg"
//                                       alt="el_hover_img2"
//                                     />
//                                   </Link>
//                                   <div className="product_action_box">
//                                     <ul className="list_none pr_action_btn">
//                                       <li className="add-to-cart">
//                                         <Link href="#">
//                                           <i className="icon-basket-loaded"></i>{" "}
//                                           Add To Cart
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-compare.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-shuffle"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-quick-view.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-magnifier-add"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link href="#">
//                                           <i className="icon-heart"></i>
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </div>
//                                 <div className="product_info">
//                                   <h6 className="product_title">
//                                     <Link href="shop-product-detail.php">
//                                       Smart Watch External
//                                     </Link>
//                                   </h6>
//                                   <div className="product_price">
//                                     <span className="price">$55.00</span>
//                                     <del>$95.00</del>
//                                     <div className="on_sale">
//                                       <span>25% Off</span>
//                                     </div>
//                                   </div>
//                                   <div className="rating_wrap">
//                                     <div className="rating">
//                                       <div
//                                         className="product_rate"
//                                         style={{ width: "68%" }}
//                                       ></div>
//                                     </div>
//                                     <span className="rating_num">(15)</span>
//                                   </div>
//                                   <div className="pr_desc">
//                                     <p>
//                                       Lorem ipsum dolor sit amet, consectetur
//                                       adipiscing elit. Phasellus blandit massa
//                                       enim. Nullam id varius nunc id varius
//                                       nunc.
//                                     </p>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="item">
//                               <div className="product_wrap">
//                                 <div className="product_img">
//                                   <Link href="shop-product-detail.php">
//                                     <img
//                                       src="assets/images/el_img5.jpg"
//                                       alt="el_img5"
//                                     />
//                                     <img
//                                       className="product_hover_img"
//                                       src="assets/images/el_hover_img5.jpg"
//                                       alt="el_hover_img5"
//                                     />
//                                   </Link>
//                                   <div className="product_action_box">
//                                     <ul className="list_none pr_action_btn">
//                                       <li className="add-to-cart">
//                                         <Link href="#">
//                                           <i className="icon-basket-loaded"></i>{" "}
//                                           Add To Cart
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-compare.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-shuffle"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-quick-view.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-magnifier-add"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link href="#">
//                                           <i className="icon-heart"></i>
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </div>
//                                 <div className="product_info">
//                                   <h6 className="product_title">
//                                     <Link href="shop-product-detail.php">
//                                       Smart Televisions
//                                     </Link>
//                                   </h6>
//                                   <div className="product_price">
//                                     <span className="price">$45.00</span>
//                                     <del>$55.25</del>
//                                     <div className="on_sale">
//                                       <span>35% Off</span>
//                                     </div>
//                                   </div>
//                                   <div className="rating_wrap">
//                                     <div className="rating">
//                                       <div
//                                         className="product_rate"
//                                         style={{ width: "80%" }}
//                                       ></div>
//                                     </div>
//                                     <span className="rating_num">(21)</span>
//                                   </div>
//                                   <div className="pr_desc">
//                                     <p>
//                                       Lorem ipsum dolor sit amet, consectetur
//                                       adipiscing elit. Phasellus blandit massa
//                                       enim. Nullam id varius nunc id varius
//                                       nunc.
//                                     </p>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="item">
//                               <div className="product_wrap">
//                                 <div className="product_img">
//                                   <Link href="shop-product-detail.php">
//                                     <img
//                                       src="assets/images/el_img9.jpg"
//                                       alt="el_img9"
//                                     />
//                                     <img
//                                       className="product_hover_img"
//                                       src="assets/images/el_hover_img9.jpg"
//                                       alt="el_hover_img9"
//                                     />
//                                   </Link>
//                                   <div className="product_action_box">
//                                     <ul className="list_none pr_action_btn">
//                                       <li className="add-to-cart">
//                                         <Link href="#">
//                                           <i className="icon-basket-loaded"></i>{" "}
//                                           Add To Cart
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-compare.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-shuffle"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-quick-view.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-magnifier-add"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link href="#">
//                                           <i className="icon-heart"></i>
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </div>
//                                 <div className="product_info">
//                                   <h6 className="product_title">
//                                     <Link href="shop-product-detail.php">
//                                       oppo Reno3 Pro
//                                     </Link>
//                                   </h6>
//                                   <div className="product_price">
//                                     <span className="price">$68.00</span>
//                                     <del>$99.00</del>
//                                     <div className="on_sale">
//                                       <span>20% Off</span>
//                                     </div>
//                                   </div>
//                                   <div className="rating_wrap">
//                                     <div className="rating">
//                                       <div
//                                         className="product_rate"
//                                         style={{ width: "87%" }}
//                                       ></div>
//                                     </div>
//                                     <span className="rating_num">(25)</span>
//                                   </div>
//                                   <div className="pr_desc">
//                                     <p>
//                                       Lorem ipsum dolor sit amet, consectetur
//                                       adipiscing elit. Phasellus blandit massa
//                                       enim. Nullam id varius nunc id varius
//                                       nunc.
//                                     </p>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="item">
//                               <div className="product_wrap">
//                                 <div className="product_img">
//                                   <Link href="shop-product-detail.php">
//                                     <img
//                                       src="assets/images/el_img7.jpg"
//                                       alt="el_img7"
//                                     />
//                                     <img
//                                       className="product_hover_img"
//                                       src="assets/images/el_hover_img7.jpg"
//                                       alt="el_hover_img7"
//                                     />
//                                   </Link>
//                                   <div className="product_action_box">
//                                     <ul className="list_none pr_action_btn">
//                                       <li className="add-to-cart">
//                                         <Link href="#">
//                                           <i className="icon-basket-loaded"></i>{" "}
//                                           Add To Cart
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-compare.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-shuffle"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-quick-view.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-magnifier-add"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link href="#">
//                                           <i className="icon-heart"></i>
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </div>
//                                 <div className="product_info">
//                                   <h6 className="product_title">
//                                     <Link href="shop-product-detail.php">
//                                       Audio Theaters
//                                     </Link>
//                                   </h6>
//                                   <div className="product_price">
//                                     <span className="price">$45.00</span>
//                                     <del>$55.25</del>
//                                     <div className="on_sale">
//                                       <span>35% Off</span>
//                                     </div>
//                                   </div>
//                                   <div className="rating_wrap">
//                                     <div className="rating">
//                                       <div
//                                         className="product_rate"
//                                         style={{ width: "80%" }}
//                                       ></div>
//                                     </div>
//                                     <span className="rating_num">(21)</span>
//                                   </div>
//                                   <div className="pr_desc">
//                                     <p>
//                                       Lorem ipsum dolor sit amet, consectetur
//                                       adipiscing elit. Phasellus blandit massa
//                                       enim. Nullam id varius nunc id varius
//                                       nunc.
//                                     </p>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="item">
//                               <div className="product_wrap">
//                                 <div className="product_img">
//                                   <Link href="shop-product-detail.php">
//                                     <img
//                                       src="assets/images/el_img5.jpg"
//                                       alt="el_img5"
//                                     />
//                                     <img
//                                       className="product_hover_img"
//                                       src="assets/images/el_hover_img5.jpg"
//                                       alt="el_hover_img5"
//                                     />
//                                   </Link>
//                                   <div className="product_action_box">
//                                     <ul className="list_none pr_action_btn">
//                                       <li className="add-to-cart">
//                                         <Link href="#">
//                                           <i className="icon-basket-loaded"></i>{" "}
//                                           Add To Cart
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-compare.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-shuffle"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-quick-view.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-magnifier-add"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link href="#">
//                                           <i className="icon-heart"></i>
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </div>
//                                 <div className="product_info">
//                                   <h6 className="product_title">
//                                     <Link href="shop-product-detail.php">
//                                       Smart Televisions
//                                     </Link>
//                                   </h6>
//                                   <div className="product_price">
//                                     <span className="price">$45.00</span>
//                                     <del>$55.25</del>
//                                     <div className="on_sale">
//                                       <span>35% Off</span>
//                                     </div>
//                                   </div>
//                                   <div className="rating_wrap">
//                                     <div className="rating">
//                                       <div
//                                         className="product_rate"
//                                         style={{ width: "80%" }}
//                                       ></div>
//                                     </div>
//                                     <span className="rating_num">(21)</span>
//                                   </div>
//                                   <div className="pr_desc">
//                                     <p>
//                                       Lorem ipsum dolor sit amet, consectetur
//                                       adipiscing elit. Phasellus blandit massa
//                                       enim. Nullam id varius nunc id varius
//                                       nunc.
//                                     </p>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="item">
//                               <div className="product_wrap">
//                                 <div className="product_img">
//                                   <Link href="shop-product-detail.php">
//                                     <img
//                                       src="assets/images/el_img12.jpg"
//                                       alt="el_img12"
//                                     />
//                                     <img
//                                       className="product_hover_img"
//                                       src="assets/images/el_hover_img12.jpg"
//                                       alt="el_hover_img12"
//                                     />
//                                   </Link>
//                                   <div className="product_action_box">
//                                     <ul className="list_none pr_action_btn">
//                                       <li className="add-to-cart">
//                                         <Link href="#">
//                                           <i className="icon-basket-loaded"></i>{" "}
//                                           Add To Cart
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-compare.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-shuffle"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link
//                                           href="shop-quick-view.html"
//                                           className="popup-ajax"
//                                         >
//                                           <i className="icon-magnifier-add"></i>
//                                         </Link>
//                                       </li>
//                                       <li>
//                                         <Link href="#">
//                                           <i className="icon-heart"></i>
//                                         </Link>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </div>
//                                 <div className="product_info">
//                                   <h6 className="product_title">
//                                     <Link href="shop-product-detail.php">
//                                       Sound Equipment for Low
//                                     </Link>
//                                   </h6>
//                                   <div className="product_price">
//                                     <span className="price">$45.00</span>
//                                     <del>$55.25</del>
//                                     <div className="on_sale">
//                                       <span>35% Off</span>
//                                     </div>
//                                   </div>
//                                   <div className="rating_wrap">
//                                     <div className="rating">
//                                       <div
//                                         className="product_rate"
//                                         style={{ width: "80%" }}
//                                       ></div>
//                                     </div>
//                                     <span className="rating_num">(21)</span>
//                                   </div>
//                                   <div className="pr_desc">
//                                     <p>
//                                       Lorem ipsum dolor sit amet, consectetur
//                                       adipiscing elit. Phasellus blandit massa
//                                       enim. Nullam id varius nunc id varius
//                                       nunc.
//                                     </p>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* <!-- END SECTION BLOG --> */}
//           <br />
//           <br />
//           <div className="section pt-0 pb_20">
//             <div className="custom-container">
//               <div className="row">
//                 <div className="col-lg-4">
//                   <div className="row">
//                     <div className="col-12">
//                       <div className="heading_tab_header">
//                         <div className="heading_s2">
//                           <h4>Featured Products</h4>
//                         </div>
//                         <div className="view_all">
//                           <Link href="shop.php" className="text_default">
//                             <span>View All</span>
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="col-12">
//                       <div
//                         className="product_slider carousel_slider product_list owl-carousel owl-theme nav_style5"
//                         data-nav="true"
//                         data-dots="false"
//                         data-loop="true"
//                         data-margin="20"
//                         data-responsive='{"0":{"items": "1"}, "380":{"items": "1"}, "640":{"items": "2"}, "991":{"items": "1"}}'
//                       >
//                         <div className="item">
//                           <div className="product_wrap">
//                             <div className="product_img">
//                               <Link href="shop-product-detail.php">
//                                 <img
//                                   src="assets/images/el_img2.jpg"
//                                   alt="el_img2"
//                                 />
//                                 <img
//                                   className="product_hover_img"
//                                   src="assets/images/el_hover_img2.jpg"
//                                   alt="el_hover_img2"
//                                 />
//                               </Link>
//                             </div>
//                             <div className="product_info">
//                               <h6 className="product_title">
//                                 <Link href="shop-product-detail.php">
//                                   Smart Watch External
//                                 </Link>
//                               </h6>
//                               <div className="product_price">
//                                 <span className="price">$55.00</span>
//                                 <del>$95.00</del>
//                                 <div className="on_sale">
//                                   <span>25% Off</span>
//                                 </div>
//                               </div>
//                               <div className="rating_wrap">
//                                 <div className="rating">
//                                   <div
//                                     className="product_rate"
//                                     style={{ width: "68%" }}
//                                   ></div>
//                                 </div>
//                                 <span className="rating_num">(15)</span>
//                               </div>
//                               <div className="pr_desc">
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur
//                                   adipiscing elit. Phasellus blandit massa enim.
//                                   Nullam id varius nunc id varius nunc.
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="product_wrap">
//                             <div className="product_img">
//                               <Link href="shop-product-detail.php">
//                                 <img
//                                   src="assets/images/el_img1.jpg"
//                                   alt="el_img1"
//                                 />
//                                 <img
//                                   className="product_hover_img"
//                                   src="assets/images/el_hover_img1.jpg"
//                                   alt="el_hover_img1"
//                                 />
//                               </Link>
//                             </div>
//                             <div className="product_info">
//                               <h6 className="product_title">
//                                 <Link href="shop-product-detail.php">
//                                   Red &amp; Black Headphone
//                                 </Link>
//                               </h6>
//                               <div className="product_price">
//                                 <span className="price">$45.00</span>
//                                 <del>$55.25</del>
//                                 <div className="on_sale">
//                                   <span>35% Off</span>
//                                 </div>
//                               </div>
//                               <div className="rating_wrap">
//                                 <div className="rating">
//                                   <div
//                                     className="product_rate"
//                                     style={{ width: "80%" }}
//                                   ></div>
//                                 </div>
//                                 <span className="rating_num">(21)</span>
//                               </div>
//                               <div className="pr_desc">
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur
//                                   adipiscing elit. Phasellus blandit massa enim.
//                                   Nullam id varius nunc id varius nunc.
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="product_wrap">
//                             <span className="pr_flash">New</span>
//                             <div className="product_img">
//                               <Link href="shop-product-detail.php">
//                                 <img
//                                   src="assets/images/el_img3.jpg"
//                                   alt="el_img3"
//                                 />
//                                 <img
//                                   className="product_hover_img"
//                                   src="assets/images/el_hover_img3.jpg"
//                                   alt="el_hover_img3"
//                                 />
//                               </Link>
//                             </div>
//                             <div className="product_info">
//                               <h6 className="product_title">
//                                 <Link href="shop-product-detail.php">
//                                   Nikon HD camera
//                                 </Link>
//                               </h6>
//                               <div className="product_price">
//                                 <span className="price">$68.00</span>
//                                 <del>$99.00</del>
//                               </div>
//                               <div className="rating_wrap">
//                                 <div className="rating">
//                                   <div
//                                     className="product_rate"
//                                     style={{ width: "87%" }}
//                                   ></div>
//                                 </div>
//                                 <span className="rating_num">(25)</span>
//                               </div>
//                               <div className="pr_desc">
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur
//                                   adipiscing elit. Phasellus blandit massa enim.
//                                   Nullam id varius nunc id varius nunc.
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="item">
//                           <div className="product_wrap">
//                             <div className="product_img">
//                               <Link href="shop-product-detail.php">
//                                 <img
//                                   src="assets/images/el_img5.jpg"
//                                   alt="el_img5"
//                                 />
//                                 <img
//                                   className="product_hover_img"
//                                   src="assets/images/el_hover_img5.jpg"
//                                   alt="el_hover_img5"
//                                 />
//                               </Link>
//                             </div>
//                             <div className="product_info">
//                               <h6 className="product_title">
//                                 <Link href="shop-product-detail.php">
//                                   Smart Televisions
//                                 </Link>
//                               </h6>
//                               <div className="product_price">
//                                 <span className="price">$45.00</span>
//                                 <del>$55.25</del>
//                                 <div className="on_sale">
//                                   <span>35% Off</span>
//                                 </div>
//                               </div>
//                               <div className="rating_wrap">
//                                 <div className="rating">
//                                   <div
//                                     className="product_rate"
//                                     style={{ width: "80%" }}
//                                   ></div>
//                                 </div>
//                                 <span className="rating_num">(21)</span>
//                               </div>
//                               <div className="pr_desc">
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur
//                                   adipiscing elit. Phasellus blandit massa enim.
//                                   Nullam id varius nunc id varius nunc.
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="product_wrap">
//                             <div className="product_img">
//                               <Link href="shop-product-detail.php">
//                                 <img
//                                   src="assets/images/el_img9.jpg"
//                                   alt="el_img9"
//                                 />
//                                 <img
//                                   className="product_hover_img"
//                                   src="assets/images/el_hover_img9.jpg"
//                                   alt="el_hover_img9"
//                                 />
//                               </Link>
//                             </div>
//                             <div className="product_info">
//                               <h6 className="product_title">
//                                 <Link href="shop-product-detail.php">
//                                   oppo Reno3 Pro
//                                 </Link>
//                               </h6>
//                               <div className="product_price">
//                                 <span className="price">$68.00</span>
//                                 <del>$99.00</del>
//                                 <div className="on_sale">
//                                   <span>20% Off</span>
//                                 </div>
//                               </div>
//                               <div className="rating_wrap">
//                                 <div className="rating">
//                                   <div
//                                     className="product_rate"
//                                     style={{ width: "87%" }}
//                                   ></div>
//                                 </div>
//                                 <span className="rating_num">(25)</span>
//                               </div>
//                               <div className="pr_desc">
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur
//                                   adipiscing elit. Phasellus blandit massa enim.
//                                   Nullam id varius nunc id varius nunc.
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="product_wrap">
//                             <div className="product_img">
//                               <Link href="shop-product-detail.php">
//                                 <img
//                                   src="assets/images/el_img7.jpg"
//                                   alt="el_img7"
//                                 />
//                                 <img
//                                   className="product_hover_img"
//                                   src="assets/images/el_hover_img7.jpg"
//                                   alt="el_hover_img7"
//                                 />
//                               </Link>
//                             </div>
//                             <div className="product_info">
//                               <h6 className="product_title">
//                                 <Link href="shop-product-detail.php">
//                                   Audio Theaters
//                                 </Link>
//                               </h6>
//                               <div className="product_price">
//                                 <span className="price">$45.00</span>
//                                 <del>$55.25</del>
//                                 <div className="on_sale">
//                                   <span>35% Off</span>
//                                 </div>
//                               </div>
//                               <div className="rating_wrap">
//                                 <div className="rating">
//                                   <div
//                                     className="product_rate"
//                                     style={{ width: "80%" }}
//                                   ></div>
//                                 </div>
//                                 <span className="rating_num">(21)</span>
//                               </div>
//                               <div className="pr_desc">
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur
//                                   adipiscing elit. Phasellus blandit massa enim.
//                                   Nullam id varius nunc id varius nunc.
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-4">
//                   <div className="row">
//                     <div className="col-12">
//                       <div className="heading_tab_header">
//                         <div className="heading_s2">
//                           <h4>Top Rated Products</h4>
//                         </div>
//                         <div className="view_all">
//                           <Link href="shop.php" className="text_default">
//                             <span>View All</span>
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="col-12">
//                       <div
//                         className="product_slider carousel_slider product_list owl-carousel owl-theme nav_style5"
//                         data-nav="true"
//                         data-dots="false"
//                         data-loop="true"
//                         data-margin="20"
//                         data-responsive='{"0":{"items": "1"}, "380":{"items": "1"}, "640":{"items": "2"}, "991":{"items": "1"}}'
//                       >
//                         <div className="item">
//                           <div className="product_wrap">
//                             <div className="product_img">
//                               <Link href="shop-product-detail.php">
//                                 <img
//                                   src="assets/images/el_img5.jpg"
//                                   alt="el_img5"
//                                 />
//                                 <img
//                                   className="product_hover_img"
//                                   src="assets/images/el_hover_img5.jpg"
//                                   alt="el_hover_img5"
//                                 />
//                               </Link>
//                             </div>
//                             <div className="product_info">
//                               <h6 className="product_title">
//                                 <Link href="shop-product-detail.php">
//                                   Smart Televisions
//                                 </Link>
//                               </h6>
//                               <div className="product_price">
//                                 <span className="price">$45.00</span>
//                                 <del>$55.25</del>
//                                 <div className="on_sale">
//                                   <span>35% Off</span>
//                                 </div>
//                               </div>
//                               <div className="rating_wrap">
//                                 <div className="rating">
//                                   <div
//                                     className="product_rate"
//                                     style={{ width: "80%" }}
//                                   ></div>
//                                 </div>
//                                 <span className="rating_num">(21)</span>
//                               </div>
//                               <div className="pr_desc">
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur
//                                   adipiscing elit. Phasellus blandit massa enim.
//                                   Nullam id varius nunc id varius nunc.
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="product_wrap">
//                             <div className="product_img">
//                               <Link href="shop-product-detail.php">
//                                 <img
//                                   src="assets/images/el_img12.jpg"
//                                   alt="el_img12"
//                                 />
//                                 <img
//                                   className="product_hover_img"
//                                   src="assets/images/el_hover_img12.jpg"
//                                   alt="el_hover_img12"
//                                 />
//                               </Link>
//                             </div>
//                             <div className="product_info">
//                               <h6 className="product_title">
//                                 <Link href="shop-product-detail.php">
//                                   Sound Equipment for Low
//                                 </Link>
//                               </h6>
//                               <div className="product_price">
//                                 <span className="price">$45.00</span>
//                                 <del>$55.25</del>
//                                 <div className="on_sale">
//                                   <span>35% Off</span>
//                                 </div>
//                               </div>
//                               <div className="rating_wrap">
//                                 <div className="rating">
//                                   <div
//                                     className="product_rate"
//                                     style={{ width: "80%" }}
//                                   ></div>
//                                 </div>
//                                 <span className="rating_num">(21)</span>
//                               </div>
//                               <div className="pr_desc">
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur
//                                   adipiscing elit. Phasellus blandit massa enim.
//                                   Nullam id varius nunc id varius nunc.
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="product_wrap">
//                             <div className="product_img">
//                               <Link href="shop-product-detail.php">
//                                 <img
//                                   src="assets/images/el_img4.jpg"
//                                   alt="el_img4"
//                                 />
//                                 <img
//                                   className="product_hover_img"
//                                   src="assets/images/el_hover_img4.jpg"
//                                   alt="el_hover_img4"
//                                 />
//                               </Link>
//                             </div>
//                             <div className="product_info">
//                               <h6 className="product_title">
//                                 <Link href="shop-product-detail.php">
//                                   Audio Equipment
//                                 </Link>
//                               </h6>
//                               <div className="product_price">
//                                 <span className="price">$69.00</span>
//                                 <del>$89.00</del>
//                                 <div className="on_sale">
//                                   <span>20% Off</span>
//                                 </div>
//                               </div>
//                               <div className="rating_wrap">
//                                 <div className="rating">
//                                   <div
//                                     className="product_rate"
//                                     style={{ width: "70%" }}
//                                   ></div>
//                                 </div>
//                                 <span className="rating_num">(22)</span>
//                               </div>
//                               <div className="pr_desc">
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur
//                                   adipiscing elit. Phasellus blandit massa enim.
//                                   Nullam id varius nunc id varius nunc.
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="item">
//                           <div className="product_wrap">
//                             <span className="pr_flash bg-danger">Hot</span>
//                             <div className="product_img">
//                               <Link href="shop-product-detail.php">
//                                 <img
//                                   src="assets/images/el_img6.jpg"
//                                   alt="el_img6"
//                                 />
//                                 <img
//                                   className="product_hover_img"
//                                   src="assets/images/el_hover_img6.jpg"
//                                   alt="el_hover_img6"
//                                 />
//                               </Link>
//                             </div>
//                             <div className="product_info">
//                               <h6 className="product_title">
//                                 <Link href="shop-product-detail.php">
//                                   Samsung Smart Phone
//                                 </Link>
//                               </h6>
//                               <div className="product_price">
//                                 <span className="price">$55.00</span>
//                                 <del>$95.00</del>
//                                 <div className="on_sale">
//                                   <span>25% Off</span>
//                                 </div>
//                               </div>
//                               <div className="rating_wrap">
//                                 <div className="rating">
//                                   <div
//                                     className="product_rate"
//                                     style={{ width: "68%" }}
//                                   ></div>
//                                 </div>
//                                 <span className="rating_num">(15)</span>
//                               </div>
//                               <div className="pr_desc">
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur
//                                   adipiscing elit. Phasellus blandit massa enim.
//                                   Nullam id varius nunc id varius nunc.
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="product_wrap">
//                             <span className="pr_flash bg-danger">Hot</span>
//                             <div className="product_img">
//                               <Link href="shop-product-detail.php">
//                                 <img
//                                   src="assets/images/el_img8.jpg"
//                                   alt="el_img8"
//                                 />
//                                 <img
//                                   className="product_hover_img"
//                                   src="assets/images/el_hover_img8.jpg"
//                                   alt="el_hover_img8"
//                                 />
//                               </Link>
//                             </div>
//                             <div className="product_info">
//                               <h6 className="product_title">
//                                 <Link href="shop-product-detail.php">
//                                   Surveillance camera
//                                 </Link>
//                               </h6>
//                               <div className="product_price">
//                                 <span className="price">$55.00</span>
//                                 <del>$95.00</del>
//                                 <div className="on_sale">
//                                   <span>25% Off</span>
//                                 </div>
//                               </div>
//                               <div className="rating_wrap">
//                                 <div className="rating">
//                                   <div
//                                     className="product_rate"
//                                     style={{ width: "68%" }}
//                                   ></div>
//                                 </div>
//                                 <span className="rating_num">(15)</span>
//                               </div>
//                               <div className="pr_desc">
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur
//                                   adipiscing elit. Phasellus blandit massa enim.
//                                   Nullam id varius nunc id varius nunc.
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="product_wrap">
//                             <span className="pr_flash bg-success">Sale</span>
//                             <div className="product_img">
//                               <Link href="shop-product-detail.php">
//                                 <img
//                                   src="assets/images/el_img10.jpg"
//                                   alt="el_img10"
//                                 />
//                                 <img
//                                   className="product_hover_img"
//                                   src="assets/images/el_hover_img10.jpg"
//                                   alt="el_hover_img10"
//                                 />
//                               </Link>
//                             </div>
//                             <div className="product_info">
//                               <h6 className="product_title">
//                                 <Link href="shop-product-detail.php">
//                                   classNameical Headphone
//                                 </Link>
//                               </h6>
//                               <div className="product_price">
//                                 <span className="price">$68.00</span>
//                                 <del>$99.00</del>
//                                 <div className="on_sale">
//                                   <span>20% Off</span>
//                                 </div>
//                               </div>
//                               <div className="rating_wrap">
//                                 <div className="rating">
//                                   <div
//                                     className="product_rate"
//                                     style={{ width: "87%" }}
//                                   ></div>
//                                 </div>
//                                 <span className="rating_num">(25)</span>
//                               </div>
//                               <div className="pr_desc">
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur
//                                   adipiscing elit. Phasellus blandit massa enim.
//                                   Nullam id varius nunc id varius nunc.
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-4">
//                   <div className="row">
//                     <div className="col-12">
//                       <div className="heading_tab_header">
//                         <div className="heading_s2">
//                           <h4>On Sale Products</h4>
//                         </div>
//                         <div className="view_all">
//                           <Link href="shop.php" className="text_default">
//                             <span>View All</span>
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="col-12">
//                       <div
//                         className="product_slider carousel_slider product_list owl-carousel owl-theme nav_style5"
//                         data-nav="true"
//                         data-dots="false"
//                         data-loop="true"
//                         data-margin="20"
//                         data-responsive='{"0":{"items": "1"}, "380":{"items": "1"}, "640":{"items": "2"}, "991":{"items": "1"}}'
//                       >
//                         <div className="item">
//                           <div className="product_wrap">
//                             <div className="product_img">
//                               <Link href="shop-product-detail.php">
//                                 <img
//                                   src="assets/images/el_img11.jpg"
//                                   alt="el_img11"
//                                 />
//                                 <img
//                                   className="product_hover_img"
//                                   src="assets/images/el_hover_img11.jpg"
//                                   alt="el_hover_img11"
//                                 />
//                               </Link>
//                             </div>
//                             <div className="product_info">
//                               <h6 className="product_title">
//                                 <Link href="shop-product-detail.php">
//                                   Basics High-Speed HDMI
//                                 </Link>
//                               </h6>
//                               <div className="product_price">
//                                 <span className="price">$69.00</span>
//                                 <del>$89.00</del>
//                                 <div className="on_sale">
//                                   <span>20% Off</span>
//                                 </div>
//                               </div>
//                               <div className="rating_wrap">
//                                 <div className="rating">
//                                   <div
//                                     className="product_rate"
//                                     style={{ width: "70%" }}
//                                   ></div>
//                                 </div>
//                                 <span className="rating_num">(22)</span>
//                               </div>
//                               <div className="pr_desc">
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur
//                                   adipiscing elit. Phasellus blandit massa enim.
//                                   Nullam id varius nunc id varius nunc.
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="product_wrap">
//                             <div className="product_img">
//                               <Link href="shop-product-detail.php">
//                                 <img
//                                   src="assets/images/el_img7.jpg"
//                                   alt="el_img7"
//                                 />
//                                 <img
//                                   className="product_hover_img"
//                                   src="assets/images/el_hover_img7.jpg"
//                                   alt="el_hover_img7"
//                                 />
//                               </Link>
//                             </div>
//                             <div className="product_info">
//                               <h6 className="product_title">
//                                 <Link href="shop-product-detail.php">
//                                   Audio Theaters
//                                 </Link>
//                               </h6>
//                               <div className="product_price">
//                                 <span className="price">$45.00</span>
//                                 <del>$55.25</del>
//                                 <div className="on_sale">
//                                   <span>35% Off</span>
//                                 </div>
//                               </div>
//                               <div className="rating_wrap">
//                                 <div className="rating">
//                                   <div
//                                     className="product_rate"
//                                     style={{ width: "80%" }}
//                                   ></div>
//                                 </div>
//                                 <span className="rating_num">(21)</span>
//                               </div>
//                               <div className="pr_desc">
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur
//                                   adipiscing elit. Phasellus blandit massa enim.
//                                   Nullam id varius nunc id varius nunc.
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="product_wrap">
//                             <span className="pr_flash bg-danger">Hot</span>
//                             <div className="product_img">
//                               <Link href="shop-product-detail.php">
//                                 <img
//                                   src="assets/images/el_img8.jpg"
//                                   alt="el_img8"
//                                 />
//                                 <img
//                                   className="product_hover_img"
//                                   src="assets/images/el_hover_img8.jpg"
//                                   alt="el_hover_img8"
//                                 />
//                               </Link>
//                             </div>
//                             <div className="product_info">
//                               <h6 className="product_title">
//                                 <Link href="shop-product-detail.php">
//                                   Surveillance camera
//                                 </Link>
//                               </h6>
//                               <div className="product_price">
//                                 <span className="price">$55.00</span>
//                                 <del>$95.00</del>
//                                 <div className="on_sale">
//                                   <span>25% Off</span>
//                                 </div>
//                               </div>
//                               <div className="rating_wrap">
//                                 <div className="rating">
//                                   <div
//                                     className="product_rate"
//                                     style={{ width: "68%" }}
//                                   ></div>
//                                 </div>
//                                 <span className="rating_num">(15)</span>
//                               </div>
//                               <div className="pr_desc">
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur
//                                   adipiscing elit. Phasellus blandit massa enim.
//                                   Nullam id varius nunc id varius nunc.
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="item">
//                           <div className="product_wrap">
//                             <div className="product_img">
//                               <Link href="shop-product-detail.php">
//                                 <img
//                                   src="assets/images/el_img5.jpg"
//                                   alt="el_img5"
//                                 />
//                                 <img
//                                   className="product_hover_img"
//                                   src="assets/images/el_hover_img5.jpg"
//                                   alt="el_hover_img5"
//                                 />
//                               </Link>
//                             </div>
//                             <div className="product_info">
//                               <h6 className="product_title">
//                                 <Link href="shop-product-detail.php">
//                                   Smart Televisions
//                                 </Link>
//                               </h6>
//                               <div className="product_price">
//                                 <span className="price">$45.00</span>
//                                 <del>$55.25</del>
//                                 <div className="on_sale">
//                                   <span>35% Off</span>
//                                 </div>
//                               </div>
//                               <div className="rating_wrap">
//                                 <div className="rating">
//                                   <div
//                                     className="product_rate"
//                                     style={{ width: "80%" }}
//                                   ></div>
//                                 </div>
//                                 <span className="rating_num">(21)</span>
//                               </div>
//                               <div className="pr_desc">
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur
//                                   adipiscing elit. Phasellus blandit massa enim.
//                                   Nullam id varius nunc id varius nunc.
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="product_wrap">
//                             <div className="product_img">
//                               <Link href="shop-product-detail.php">
//                                 <img
//                                   src="assets/images/el_img9.jpg"
//                                   alt="el_img9"
//                                 />
//                                 <img
//                                   className="product_hover_img"
//                                   src="assets/images/el_hover_img9.jpg"
//                                   alt="el_hover_img9"
//                                 />
//                               </Link>
//                             </div>
//                             <div className="product_info">
//                               <h6 className="product_title">
//                                 <Link href="shop-product-detail.php">
//                                   oppo Reno3 Pro
//                                 </Link>
//                               </h6>
//                               <div className="product_price">
//                                 <span className="price">$68.00</span>
//                                 <del>$99.00</del>
//                                 <div className="on_sale">
//                                   <span>20% Off</span>
//                                 </div>
//                               </div>
//                               <div className="rating_wrap">
//                                 <div className="rating">
//                                   <div
//                                     className="product_rate"
//                                     style={{ width: "87%" }}
//                                   ></div>
//                                 </div>
//                                 <span className="rating_num">(25)</span>
//                               </div>
//                               <div className="pr_desc">
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur
//                                   adipiscing elit. Phasellus blandit massa enim.
//                                   Nullam id varius nunc id varius nunc.
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="product_wrap">
//                             <div className="product_img">
//                               <Link href="shop-product-detail.php">
//                                 <img
//                                   src="assets/images/el_img1.jpg"
//                                   alt="el_img1"
//                                 />
//                                 <img
//                                   className="product_hover_img"
//                                   src="assets/images/el_hover_img1.jpg"
//                                   alt="el_hover_img1"
//                                 />
//                               </Link>
//                             </div>
//                             <div className="product_info">
//                               <h6 className="product_title">
//                                 <Link href="shop-product-detail.php">
//                                   Red &amp; Black Headphone
//                                 </Link>
//                               </h6>
//                               <div className="product_price">
//                                 <span className="price">$45.00</span>
//                                 <del>$55.25</del>
//                                 <div className="on_sale">
//                                   <span>35% Off</span>
//                                 </div>
//                               </div>
//                               <div className="rating_wrap">
//                                 <div className="rating">
//                                   <div
//                                     className="product_rate"
//                                     style={{ width: "80%" }}
//                                   ></div>
//                                 </div>
//                                 <span className="rating_num">(21)</span>
//                               </div>
//                               <div className="pr_desc">
//                                 <p>
//                                   Lorem ipsum dolor sit amet, consectetur
//                                   adipiscing elit. Phasellus blandit massa enim.
//                                   Nullam id varius nunc id varius nunc.
//                                 </p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* <!-- START SECTION CLIENT LOGO --> */}
//           <div className="section small_pt">
//             <div className="container">
//               <div className="row">
//                 <div className="col-12">
//                   <div
//                     className="client_logo carousel_slider owl-carousel owl-theme"
//                     data-dots="false"
//                     data-margin="30"
//                     data-loop="true"
//                     data-autoplay="true"
//                     data-responsive='{"0":{"items": "2"}, "480":{"items": "3"}, "767":{"items": "4"}, "991":{"items": "5"}}'
//                   >
//                     <div className="item">
//                       <div className="cl_logo">
//                         <img src="assets/images/cl_logo1.png" alt="cl_logo" />
//                       </div>
//                     </div>
//                     <div className="item">
//                       <div className="cl_logo">
//                         <img src="assets/images/cl_logo2.png" alt="cl_logo" />
//                       </div>
//                     </div>
//                     <div className="item">
//                       <div className="cl_logo">
//                         <img src="assets/images/cl_logo3.png" alt="cl_logo" />
//                       </div>
//                     </div>
//                     <div className="item">
//                       <div className="cl_logo">
//                         <img src="assets/images/cl_logo4.png" alt="cl_logo" />
//                       </div>
//                     </div>
//                     <div className="item">
//                       <div className="cl_logo">
//                         <img src="assets/images/cl_logo5.png" alt="cl_logo" />
//                       </div>
//                     </div>
//                     <div className="item">
//                       <div className="cl_logo">
//                         <img src="assets/images/cl_logo6.png" alt="cl_logo" />
//                       </div>
//                     </div>
//                     <div className="item">
//                       <div className="cl_logo">
//                         <img src="assets/images/cl_logo7.png" alt="cl_logo" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* <!-- END SECTION CLIENT LOGO --> */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;
import React from 'react';
import Corousels from "./Corousels";
import Homemain from './Homemain';
import BestSeller from './BestSeller';
import Newarrival from './Newarrival';
import Featured from './Featured';
import Deal from './Deal';
import { Card, CardMedia } from '@mui/material';
import FourCardsInRow from './FourCardsInRow';
import banner2a from '../assets/images/banner2a.jpg';
import ShopByCategories from './ShopByCategories';
import ProductHeading from './ProductHeading';
import ThreeImagesInRow from './FourCardsInRow';
import { Links } from 'react-router-dom';
import Linkedd from './Linkedd';
import ProductHeadingTwo from './ProductHeadingtwo';

const Home = () => {
  return (
    <div>
      <Corousels />

      {/* <div style={{justifyContent: 'center', alignItems: 'center', height: '100vh'}}> */}
      <ProductHeading/>
        <Homemain />

      {/* </div> */}
      <Newarrival /><br /><br />
      <BestSeller /><br /><br />
      <FourCardsInRow/>
      <Featured /><br /><br />
      <Deal /><br /><br />
      {/* <Card style={{ maxWidth: 'full', margin: '0 auto', padding: 16 }}>
        <CardMedia
          component="img"
          src={banner2a} // Use the imported banner3 image here
          alt="Banner Image"
        />
      </Card><br /><br /> */}
      <div>
      <img src={banner2a} alt="hii" />
    </div><br/><br/>
    <ProductHeadingTwo/><br /><br />
    <Linkedd/><br/><br/>
      <ThreeImagesInRow/><br/><br/>
      
      <p style={{margin:'0 40px', marginBottom:'40PX', textAlign: 'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
</p>
      
    </div>
  );
};

export default Home;

