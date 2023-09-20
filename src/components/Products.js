import React from "react";
import Header from "./Header";
import pro1 from "../images/timboat.png";
import pro2 from "../images/prorobo2.png";
import pro3 from "../images/pro3.png";
import pro4 from "../images/roboside.png";
import logo from "../images/logo.png";
import insta from "../images/insta.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";

import { Modal, Button } from "react-bootstrap";

import aboutimg1 from "../images/aboutauto.png";
import aboutimg2 from "../images/aboutvector.png";
import aboutimg3 from "../images/arroww.png";

import gallery1 from "../images/gallery1.png";
import gallery2 from "../images/gallery2.png";
import gallery3 from "../images/gallery3.png";

import video from "../images/video.png";
import Footer from "./Footer";

const Products = () => {
  return (
    <>
      <section id="proback">
        <Header />

        <div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h5 className="usapro">OUR PRODUCTS</h5>
                <h2 className="inno">Robots for The Real World</h2>
                <p className="inage">
                  Tincidunt duis suspendisse euismod integer aenean. Suspendisse
                  aliquet diam ut<br></br> vulputate eu metus nulla facilisi.
                  Tristique tincidunt nisi.
                </p>
              </div>
            </div>
          </div>

          <div className="container" id="prosec2">
            <div className="row">
              <div className="col-md-6" id="modalback">
                <h6 className="h6modal">Model Tim Tim</h6>
                <h4 className="h4tim">TimTim Bot </h4>
                <p className="pthe">
                  The argument in favor of use filler text goes<br></br>{" "}
                  something like this you use real content a design<br></br>{" "}
                  process an time you reach review point you end<br></br> up
                  review an negotiating a content itself and the<br></br> design
                  inevitable argumentation.
                </p>
                <button className="btnpro1">LEARN MORE</button>
              </div>

              <div className="col-md-6" style={{ padding: "0px" }}>
                <img className="pro1img" src={pro1} />
              </div>
            </div>
          </div>

          <section id="prosec3">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  {/* <div id="flex-all"> */}

                  <div className="autoback">
                    <div className="aboutautomate">
                      <div>
                        <img className="aboutimg1" src={aboutimg1} alt="" />
                      </div>

                      <div>
                        <h4 className="h4autom">Automation</h4>
                      </div>
                    </div>

                    <div>
                      <p className="tinciduntabout">
                        Tincidunt nisi orci sodales non. Netus integer nunc mi
                        nibh cursus vitae ut nulla lobortis. Risus duis
                        bibendum.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="autoback">
                    <div className="aboutautomate">
                      <div>
                        <img className="aboutimg1" src={aboutimg2} alt="" />
                      </div>

                      <div>
                        <h4 className="h4autom">Precision</h4>
                      </div>
                    </div>

                    <div>
                      <p className="tinciduntabout">
                        Tincidunt nisi orci sodales non. Netus integer nunc mi
                        nibh cursus vitae ut nulla lobortis. Risus duis
                        bibendum.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="autoback">
                    <div className="aboutautomate">
                      <div>
                        <img className="aboutimg1" src={aboutimg3} alt="" />
                      </div>

                      <div>
                        <h4 className="h4autom">Accuracy</h4>
                      </div>
                    </div>

                    <div>
                      <p className="tinciduntabout">
                        Tincidunt nisi orci sodales non. Netus integer nunc mi
                        nibh cursus vitae ut nulla lobortis. Risus duis
                        bibendum.
                      </p>
                    </div>
                  </div>
                </div>

                {/* </div> */}
              </div>
            </div>
          </section>

          <section id="prosec4">
            <div className="container proinfo">
              <div className="row">
                <div className="col-12 ">
                  <h1 className="h1proinfo">Product Information</h1>
                  <p className="pourrobo">
                    Our Robot has following unique design and technology
                    features:
                  </p>
                </div>

                <div className="col-md-6">
                  <img src={pro2} />
                </div>

                <div className="col-md-6" id="iconpro">
                  <div style={{ display: "flex" }}>
                    <div>
                      <img src={pro3} />
                    </div>

                    <div>
                      <h4 className="h4light1">Lightweight A1 grade frame</h4>
                    </div>
                  </div>

                  <div style={{ display: "flex" }}>
                    <div className="pro3icon">
                      <img src={pro3} />
                    </div>

                    <div>
                      <h4 className="h4light">Lightweight A1 grade frame</h4>
                    </div>
                  </div>

                  <div style={{ display: "flex" }}>
                    <div className="pro3icon">
                      <img src={pro3} />
                    </div>

                    <div>
                      <h4 className="h4light">Lightweight A1 grade frame</h4>
                    </div>
                  </div>

                  <div style={{ display: "flex" }}>
                    <div className="pro3icon">
                      <img src={pro3} />
                    </div>

                    <div>
                      <h4 className="h4light">Plug and Play</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="prosec5">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h4 className="h4gallery">Gallery</h4>
                  <p className="pview">
                    View gallery of our products and make yourself satisfied
                    with our creation.
                  </p>
                </div>

                <div className="col-md-6" id="gallerysec1">
                  <img className="gallery1" src={gallery1} />
                </div>

                <div className="col-md-6" id="gallerysec1">
                  <img className="gallery2" src={gallery2} />
                </div>

                <div className="col-md-6" id="gallerysec11">
                  <div style={{ textAlign: "center" }}>
                    <button className="probtn2">Battery Images</button>
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <button className="probtn3">Spare Parts Images</button>
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <button className="probtn4">Charging Cable Images</button>
                  </div>
                </div>

                <div className="col-md-6" id="gallerysec11">
                  <img className="gallery3" src={gallery3} />
                </div>
              </div>
            </div>
          </section>

          <section id="prosec6">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <img style={{ width: "100%" }} src={video} />
                </div>
              </div>
            </div>
          </section>

          <section id="prosec7">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
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
                            Vivamus sodales sollicitudin ullamcorper faucibus.
                            Id dictumst a natoque a. Metus vitae proin
                            scelerisque posuere nunc. Etiam id cras scelerisque
                            in. Tellus eget hendrerit imperdiet neque sed arcu
                            in nisi.
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
                            Vivamus sodales sollicitudin ullamcorper faucibus.
                            Id dictumst a natoque a. Metus vitae proin
                            scelerisque posuere nunc. Etiam id cras scelerisque
                            in. Tellus eget hendrerit imperdiet neque sed arcu
                            in nisi.
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
                            Vivamus sodales sollicitudin ullamcorper faucibus.
                            Id dictumst a natoque a. Metus vitae proin
                            scelerisque posuere nunc. Etiam id cras scelerisque
                            in. Tellus eget hendrerit imperdiet neque sed arcu
                            in nisi.
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
                            Vivamus sodales sollicitudin ullamcorper faucibus.
                            Id dictumst a natoque a. Metus vitae proin
                            scelerisque posuere nunc. Etiam id cras scelerisque
                            in. Tellus eget hendrerit imperdiet neque sed arcu
                            in nisi.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="box-center">
                    <div className="siderobo">
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

          <div className="container">
            <div className="row">
              <div className="col-md-3">
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

              <div className="col-md-2" id="col1">
                <h2>Company</h2>

                <p style={{ marginTop: "30px" }}>About us</p>
                <p>Blog</p>
                <p>Contact us</p>
                <p>Pricing</p>
                <p>Testimonials</p>
              </div>

              <div className="col-md-2" id="col2">
                <h2>Resources</h2>

                <p style={{ marginTop: "30px" }}>Case Studies</p>
                <p>Webinars</p>
                <p>Developer</p>
                <p>Documentation</p>
              </div>

              <div className="col-md-2" id="col3">
                <h2>Support</h2>

                <p style={{ marginTop: "30px" }}>Help center</p>
                <p>Terms of service</p>
                <p>Legal</p>
                <p>Privacy policy</p>
              </div>

              <div className="col-md-3" id="col3">
                <h2>Stay up to date</h2>

                <input className="input" placeholder="Your email address" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
