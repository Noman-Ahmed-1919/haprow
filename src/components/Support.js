import React from "react";
import Header from "./Header";

import search from "../images/search.png";
import pro4 from "../images/roboside.png";
import supimg1 from "../images/support1.png";

import book1 from "../images/book1.png";
import book2 from "../images/book2.png";
import book3 from "../images/book3.png";


import logo from "../images/logo.png";
import insta from "../images/insta.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";

const Support = () => {
  return (
    <>
      <section id="support-main-sec">
        <Header />

        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="h3-get">Get Support</h3>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12" id="sup">
              <div className="back-support-search">
                <div class="search-container">
                  <input
                    type="text"
                    placeholder="Search what you are looking for"
                  />
                  <img src={search} alt="Search Icon" class="search-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="h3-what">What are you looking for today?</h3>
           
           
           <div className="mainsupport-flex">

            <div className="support-book">

              <img src={book1}/>

              <p className="p-user">User Manual (PDF)</p>

            </div>

            <div className="support-book">

<img src={book2}/>

<p className="p-user">User Guide (PDF)</p>


</div>

<div className="support-book">

<img src={book3}/>

<p className="p-user">Tim Tim Tutorial</p>


</div>

           </div>
           
           
           
           
           
            </div>
          </div>
        </div>

        {/*======================== faqs section start from here ==================================*/}

        <section id="prosec7">
          <div className="container">
            <div className="row">
              <div className="col-md-6 faq-backks">
                <h6 className="h6faqs">Faqs</h6>

                <h4 className="h4looking">Looking for Answers?</h4>

                <div id="boot-back">
                  <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item">
                      <h2
                        class="accordion-header"
                        id="panelsStayOpen-headingOne"
                      >
                        <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseOne"
                          aria-expanded="true"
                          aria-controls="panelsStayOpen-collapseOne"
                        >
                          What is Artificial Intelligence?{" "}
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseOne"
                        class="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-headingOne"
                      >
                        <div class="accordion-body">
                          Vivamus sodales sollicitudin ullamcorper faucibus. Id
                          dictumst a natoque a. Metus vitae proin scelerisque
                          posuere nunc. Etiam id cras scelerisque in. Tellus
                          eget hendrerit imperdiet neque sed arcu in nisi.
                        </div>
                      </div>
                    </div>

                    <div className="colored-underline"> </div>

                    <div class="accordion-item">
                      <h2
                        class="accordion-header"
                        id="panelsStayOpen-headingTwo"
                      >
                        <button
                          style={{ backgroundColor: "black", color: "white" }}
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseTwo"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseTwo"
                        >
                          What is robotic engineering?{" "}
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingTwo"
                      >
                        <div class="accordion-body">
                          Vivamus sodales sollicitudin ullamcorper faucibus. Id
                          dictumst a natoque a. Metus vitae proin scelerisque
                          posuere nunc. Etiam id cras scelerisque in. Tellus
                          eget hendrerit imperdiet neque sed arcu in nisi.
                        </div>
                      </div>
                    </div>

                    <div className="colored-underline"> </div>

                    <div class="accordion-item">
                      <h2
                        class="accordion-header"
                        id="panelsStayOpen-headingThree"
                      >
                        <button
                          style={{ backgroundColor: "black", color: "white" }}
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseThree"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseThree"
                        >
                          How does AI intersect with robotic?{" "}
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingThree"
                      >
                        <div class="accordion-body">
                          Vivamus sodales sollicitudin ullamcorper faucibus. Id
                          dictumst a natoque a. Metus vitae proin scelerisque
                          posuere nunc. Etiam id cras scelerisque in. Tellus
                          eget hendrerit imperdiet neque sed arcu in nisi.
                        </div>
                      </div>
                    </div>

                    <div className="colored-underline"> </div>

                    <div class="accordion-item">
                      <h2
                        class="accordion-header"
                        id="panelsStayOpen-headingfour"
                      >
                        <button
                          style={{ backgroundColor: "black", color: "white" }}
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseThree"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseThree"
                        >
                          What are the applications of robotics?{" "}
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapsefour"
                        class="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingThree"
                      >
                        <div class="accordion-body">
                          Vivamus sodales sollicitudin ullamcorper faucibus. Id
                          dictumst a natoque a. Metus vitae proin scelerisque
                          posuere nunc. Etiam id cras scelerisque in. Tellus
                          eget hendrerit imperdiet neque sed arcu in nisi.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="box-center">
                  <div className="siderobo1">
                    <img className="proimg4" src={pro4} />

                    <h4 className="h4still">Still Have Questions?</h4>
                    <p className="ptincidunt">
                      Tincidunt nisi orci sodales non. Netus integer nunc mi
                      nibh cursus vitae ut nulla lobortis.
                    </p>
                    <div style={{ textAlign: "left" }}>
                      <button className="btnpro5">CONTACT US</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*======================== faqs section end from here ==================================*/}

        <div className="container">
          <div className="row" id="supp-back">
            <div className="col-lg-6">
              <img className="supimg1" src={supimg1} />
            </div>

            <div className="col-lg-6">
              <h2 className="h2-coon">Contact Us</h2>

              <div className="adjust-name">
                <label>Full Name</label>
              </div>

              <div>
                <input
                  className="inputfield"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="adjust-name">
                <label>Email Address</label>
              </div>

              <div>
                <input
                  className="inputfield"
                  type="text"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="adjust-name">
                <label>Your Message</label>
              </div>

              <div>
                <textarea className="inputfield1" placeholder="Write here" />
              </div>

              <div className="sup-btn-cen">
                <button className="sup-btn">SEND MESSAGE</button>
              </div>
            </div>
          </div>
        </div>

        <div className="container" id="footer-res">
          <div className="row">
            <div className="col-lg-3">
              <img id="logo" src={logo} width={135} height={35} alt="" />

              <p className="copy">Copyright © 2023 Haprow.</p>
              <p className="all">All rights reserved</p>

              <div className="social">
                <img src={insta} />
                <img src={twitter} style={{ marginLeft: "15px" }} />
                <img src={youtube} style={{ marginLeft: "15px" }} />
                <img src={linkedin} style={{ marginLeft: "15px" }} />
              </div>
            </div>

            <div className="col-lg-2" id="col1">
              <h2>Company</h2>

              <p style={{ marginTop: "30px" }}>About us</p>
              <p>Blog</p>
              <p>Contact us</p>
              <p>Pricing</p>
              <p>Testimonials</p>
            </div>

            <div className="col-lg-2" id="col2">
              <h2>Resources</h2>

              <p style={{ marginTop: "30px" }}>Case Studies</p>
              <p>Webinars</p>
              <p>Developer</p>
              <p>Documentation</p>
            </div>

            <div className="col-lg-2" id="col3">
              <h2>Support</h2>

              <p style={{ marginTop: "30px" }}>Help center</p>
              <p>Terms of service</p>
              <p>Legal</p>
              <p>Privacy policy</p>
            </div>

            <div className="col-lg-3" id="col3">
              <h2>Stay up to date</h2>

              <input className="input" placeholder="Your email address" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Support;
