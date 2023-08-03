import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div>
        {/* <!-- START SECTION BREADCRUMB --> */}
        <div className="breadcrumb_section bg_gray page-title-mini">
          <div className="container">
            {/* <!-- STRART CONTAINER --> */}
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="page-title">
                  <h1>About Us</h1>
                </div>
              </div>
              <div className="col-md-6">
                <ol className="breadcrumb justify-content-md-end">
                  <li className="breadcrumb-item">
                    <Link href="index.php">Home</Link>
                  </li>
                  {/* <!--<li className="breadcrumb-item"><Link  href="#">Pages</Link ></li>--> */}
                  <li className="breadcrumb-item active">About</li>
                </ol>
              </div>
            </div>
          </div>
          {/* <!-- END CONTAINER--> */}
        </div>
        {/* <!-- END SECTION BREADCRUMB --> */}

        {/* <!-- START MAIN CONTENT --> */}
        <div className="main_content">
          {/* <!-- STAT SECTION ABOUT -->  */}
          <div className="section">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="about_img scene mb-4 mb-lg-0">
                    <img src="assets/images/el_img5.jpg" alt="about_img" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="heading_s1">
                    <h2>Who We are</h2>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    consequuntur quibusdam enim expedita sed nesciunt incidunt
                    accusamus adipisci officia libero laboriosam!
                  </p>
                  <p>
                    Proin gravida nibh vel velit auctor aliquet. nec sagittis
                    sem nibh id elit. Duis sed odio sit amet nibh vultate cursus
                    a sit amet mauris. Duis sed odio sit amet nibh vultate
                    cursus a sit amet mauris.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- END SECTION ABOUT -->  */}

          {/* <!-- START SECTION WHY CHOOSE -->  */}
          <div className="section bg_light_blue2 pb_70">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8">
                  <div className="heading_s1 text-center">
                    <h2>Why Choose Us?</h2>
                  </div>
                  <p className="text-center leads">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-sm-6">
                  <div className="icon_box icon_box_style4 box_shadow1">
                    <div className="icon">
                      <i className="ti-pencil-alt"></i>
                    </div>
                    <div className="icon_box_content">
                      <h5>Creative Design</h5>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="icon_box icon_box_style4 box_shadow1">
                    <div className="icon">
                      <i className="ti-layers"></i>
                    </div>
                    <div className="icon_box_content">
                      <h5>Flexible Layouts</h5>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="icon_box icon_box_style4 box_shadow1">
                    <div className="icon">
                      <i className="ti-email"></i>
                    </div>
                    <div className="icon_box_content">
                      <h5>Email Marketing</h5>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- END SECTION WHY CHOOSE --> 
    
    
    <!-- START SECTION TESTIMONIAL --> */}
          <div className="section bg_redon">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="heading_s1 text-center">
                    <h2>Our Client Say!</h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <div
                    className="testimonial_wrap testimonial_style1 carousel_slider owl-carousel owl-theme nav_style2"
                    data-nav="true"
                    data-dots="false"
                    data-center="true"
                    data-loop="true"
                    data-autoplay="true"
                    data-items="1"
                  >
                    <div className="testimonial_box">
                      <div className="testimonial_desc">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. A aliquam amet animi blanditiis consequatur
                          debitis dicta distinctio, enim error eum iste libero
                          modi nam natus perferendis possimus quasi sint sit
                          tempora voluptatem.
                        </p>
                      </div>
                      <div className="author_wrap">
                        <div className="author_img">
                          <img
                            src="assets/images/user_img1.jpg"
                            alt="user_img1"
                          />
                        </div>
                        <div className="author_name">
                          <h6>Lissa Castro</h6>
                          <span>Designer</span>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial_box">
                      <div className="testimonial_desc">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. A aliquam amet animi blanditiis consequatur
                          debitis dicta distinctio, enim error eum iste libero
                          modi nam natus perferendis possimus quasi sint sit
                          tempora voluptatem.
                        </p>
                      </div>
                      <div className="author_wrap">
                        <div className="author_img">
                          <img
                            src="assets/images/user_img2.jpg"
                            alt="user_img2"
                          />
                        </div>
                        <div className="author_name">
                          <h6>Alden Smith</h6>
                          <span>Designer</span>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial_box">
                      <div className="testimonial_desc">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. A aliquam amet animi blanditiis consequatur
                          debitis dicta distinctio, enim error eum iste libero
                          modi nam natus perferendis possimus quasi sint sit
                          tempora voluptatem.
                        </p>
                      </div>
                      <div className="author_wrap">
                        <div className="author_img">
                          <img
                            src="assets/images/user_img3.jpg"
                            alt="user_img3"
                          />
                        </div>
                        <div className="author_name">
                          <h6>Daisy Lana</h6>
                          <span>Designer</span>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial_box">
                      <div className="testimonial_desc">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. A aliquam amet animi blanditiis consequatur
                          debitis dicta distinctio, enim error eum iste libero
                          modi nam natus perferendis possimus quasi sint sit
                          tempora voluptatem.
                        </p>
                      </div>
                      <div className="author_wrap">
                        <div className="author_img">
                          <img
                            src="assets/images/user_img4.jpg"
                            alt="user_img4"
                          />
                        </div>
                        <div className="author_name">
                          <h6>John Becker</h6>
                          <span>Designer</span>
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
    </>
  );
};

export default About;
