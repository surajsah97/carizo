import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div>
        <div className="section bg_dark small_pt small_pb">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="heading_s1 mb-md-0 heading_light">
                  <h3>Subscribe Our Newsletter</h3>
                </div>
              </div>
              <div className="col-md-6">
                <div className="newsletter_form">
                  <form>
                    <input
                      type="text"
                      required=""
                      className="form-control rounded-0"
                      placeholder="Enter Email Address"
                    />
                    <button
                      type="submit"
                      className="btn btn-fill-out rounded-0"
                      name="submit"
                      value="Submit"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- START SECTION SUBSCRIBE NEWSLETTER --> */}
      </div>
      {/* <!-- END MAIN CONTENT --> */}

      {/* <!-- START FOOTER --> */}
      <footer className="bg_gray">
        <div className="footer_top small_pt pb_20">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="widget">
                  <div className="footer_logo">
                    <Link to="/#">
                      <img
                        src="assets/images/logo22.jpg"
                        style={{ width: "182px", height: "47px" }}
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <p className="mb-3">
                    If you are going to use of Lorem Ipsum need to be sure there
                    isn't anything hidden of text
                  </p>
                  <ul className="contact_info">
                    <li>
                      <i className="ti-location-pin"></i>
                      <p>123 Street, Old Trafford, NewYork, USA</p>
                    </li>
                    <li>
                      <i className="ti-email"></i>
                      <Link to="/mailto:info@sitename.com">
                        info@sitename.com
                      </Link>
                    </li>
                    <li>
                      <i className="ti-mobile"></i>
                      <p>+ 457 789 789 65</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="widget">
                  <h6 className="widget_title">Useful Links</h6>
                  <ul className="widget_links">
                    <li>
                      <Link to="/about.php">About Us</Link>
                    </li>
                    <li>
                      <Link to="/faq.php">FAQ</Link>
                    </li>
                    <li>
                      <Link to="/#">Location</Link>
                    </li>
                    <li>
                      <Link to="/#">Affiliates</Link>
                    </li>
                    <li>
                      <Link to="/contact.php">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="widget">
                  <h6 className="widget_title">My Account</h6>
                  <ul className="widget_links">
                    <li>
                      <Link to="/my-account.php">My Account</Link>
                    </li>
                    <li>
                      <Link to="/#">Discount</Link>
                    </li>
                    <li>
                      <Link to="/#">Returns</Link>
                    </li>
                    <li>
                      <Link to="/#">Orders History</Link>
                    </li>
                    <li>
                      <Link to="/#">Order Tracking</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="widget">
                  <h6 className="widget_title">Instagram</h6>
                  <ul className="widget_instafeed instafeed_col4">
                    <li>
                      <Link to="/#">
                        <img
                          src="assets/images/insta_img1.jpg"
                          alt="insta_img"
                        />
                        <span className="insta_icon">
                          <i className="ti-instagram" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <img
                          src="assets/images/insta_img2.jpg"
                          alt="insta_img"
                        />
                        <span className="insta_icon">
                          <i className="ti-instagram" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <img
                          src="assets/images/insta_img3.jpg"
                          alt="insta_img"
                        />
                        <span className="insta_icon">
                          <i className="ti-instagram" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <img
                          src="assets/images/insta_img4.jpg"
                          alt="insta_img"
                        />
                        <span className="insta_icon">
                          <i className="ti-instagram" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <img
                          src="assets/images/insta_img5.jpg"
                          alt="insta_img"
                        />
                        <span className="insta_icon">
                          <i className="ti-instagram" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <img
                          src="assets/images/insta_img6.jpg"
                          alt="insta_img"
                        />
                        <span className="insta_icon">
                          <i className="ti-instagram" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <img
                          src="assets/images/insta_img7.jpg"
                          alt="insta_img"
                        />
                        <span className="insta_icon">
                          <i className="ti-instagram" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/#">
                        <img
                          src="assets/images/insta_img8.jpg"
                          alt="insta_img"
                        />
                        <span className="insta_icon">
                          <i className="ti-instagram" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="middle_footer">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="shopping_info">
                  <div className="row justify-content-center">
                    <div className="col-md-4">
                      <div className="icon_box icon_box_style2">
                        <div className="icon">
                          <i className="flaticon-shipped"></i>
                        </div>
                        <div className="icon_box_content">
                          <h5>Free Delivery</h5>
                          <p>
                            Phasellus blandit massa enim elit of passage varius
                            nunc.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="icon_box icon_box_style2">
                        <div className="icon">
                          <i className="flaticon-money-back"></i>
                        </div>
                        <div className="icon_box_content">
                          <h5>30 Day Returns Guarantee</h5>
                          <p>
                            Phasellus blandit massa enim elit of passage varius
                            nunc.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="icon_box icon_box_style2">
                        <div className="icon">
                          <i className="flaticon-support"></i>
                        </div>
                        <div className="icon_box_content">
                          <h5>27/4 Online Support</h5>
                          <p>
                            Phasellus blandit massa enim elit of passage varius
                            nunc.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_footer border-top-tran">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <p className="mb-lg-0 text-center">
                  © 2020 All Rights Reserved by Bestwebcreator
                </p>
              </div>
              <div className="col-lg-4 order-lg-first">
                <div className="widget mb-lg-0">
                  <ul className="social_icons text-center text-lg-left">
                    <li>
                      <Link to="/#" className="sc_facebook">
                        <i className="ion-social-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/#" className="sc_twitter">
                        <i className="ion-social-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/#" className="sc_google">
                        <i className="ion-social-googleplus"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/#" className="sc_youtube">
                        <i className="ion-social-youtube-outline"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/#" className="sc_instagram">
                        <i className="ion-social-instagram-outline"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <ul className="footer_payment text-center text-lg-right">
                  <li>
                    <Link to="/#">
                      <img src="assets/images/visa.png" alt="visa" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/#">
                      <img src="assets/images/discover.png" alt="discover" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/#">
                      <img
                        src="assets/images/master_card.png"
                        alt="master_card"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="/#">
                      <img src="assets/images/paypal.png" alt="paypal" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/#">
                      <img
                        src="assets/images/amarican_express.png"
                        alt="amarican_express"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- END FOOTER -->
    <!-- END FOOTER --> */}

      <Link to="/#" className="scrollup" style={{ display: "none" }}>
        <i className="ion-ios-arrow-up"></i>
      </Link>

      {/* <!-- Latest jQuery -->  */}
      <script src="assets/js/jquery-3.6.0.min.js"></script>
      {/* <!-- jquery-ui -->  */}
      <script src="assets/js/jquery-ui.js"></script>
      {/* <!-- popper min js --> */}
      <script src="assets/js/popper.min.js"></script>
      {/* <!-- Latest compiled and minified Bootstrap -->  */}
      <script src="assets/bootstrap/js/bootstrap.min.js"></script>
      {/* <!-- owl-carousel min js  -->  */}
      <script src="assets/owlcarousel/js/owl.carousel.min.js"></script>
      {/* <!-- magnific-popup min js  -->  */}
      <script src="assets/js/magnific-popup.min.js"></script>
      {/* <!-- waypoints min js  -->  */}
      <script src="assets/js/waypoints.min.js"></script>
      {/* <!-- parallax js  -->  */}
      <script src="assets/js/parallax.js"></script>
      {/* <!-- countdown js  -->  */}
      <script src="assets/js/jquery.countdown.min.js"></script>
      {/* <!-- imagesloaded js -->  */}
      <script src="assets/js/imagesloaded.pkgd.min.js"></script>
      {/* <!-- isotope min js -->  */}
      <script src="assets/js/isotope.min.js"></script>
      {/* <!-- jquery.dd.min js --> */}
      <script src="assets/js/jquery.dd.min.js"></script>
      {/* <!-- slick js --> */}
      <script src="assets/js/slick.min.js"></script>
      {/* <!-- elevatezoom js --> */}
      <script src="assets/js/jquery.elevatezoom.js"></script>
      {/* <!-- scripts js -->  */}
      <script src="assets/js/scripts.js"></script>
    </>
  );
};

export default Footer;
