import React from "react";
import Header from "./Header";
import aboutimg1 from "../images/aboutauto.png";
import aboutimg2 from "../images/aboutvector.png";
import aboutimg3 from "../images/arroww.png";
import aboutimg4 from "../images/abouttim2.png";
import aboutimg5 from "../images/sicon.png";
import aboutimg6 from "../images/frame1.png";
import aboutimg7 from "../images/image-box.png";


import logo from "../images/logo.png";
import insta from "../images/insta.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";
import ffsend from "../images/ffsee.png";


import Footer from "./Footer";
import Teamslider from "./Teamslider";

const About = () => {
  return (
    <>

      <section id="aboutsec1">

      <Header />

        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5 className="usabout">ABOUT US</h5>
              <h2 className="inno">
                Innovating the Future with<br></br> AI and Robotics
              </h2>
              <p className="inage">
                In the age of technological marvels, "Haprow" stands as a
                shining testament to the rapid progress of <br></br> robotics.
                Combining cutting-edge engineering with AI sophistication,
                Haprow emerges as a symbol of <br></br> the future, where
                machinery seamlessly integrates with human lives.
              </p>
            </div>
          </div>
        </div>

        <div className="container" id="aboutsec2">
          <div className="row">
            <div className="col-lg-4">
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
                    Tincidunt nisi orci sodales non. Netus integer nunc mi nibh
                    cursus vitae ut nulla lobortis. Risus duis bibendum.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
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
                    Tincidunt nisi orci sodales non. Netus integer nunc mi nibh
                    cursus vitae ut nulla lobortis. Risus duis bibendum.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
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
                    Tincidunt nisi orci sodales non. Netus integer nunc mi nibh
                    cursus vitae ut nulla lobortis. Risus duis bibendum.
                  </p>
                </div>
              </div>
            </div>

            {/* </div> */}
          </div>
        </div>

        <section id="aboutsec3">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h6 className="vision">Vision & Mission</h6>
                <h4 className="shapp">
                  Shaping the Future with Robot <br></br> Intelligent
                  Technologies
                </h4>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img className="aboutimg4" src={aboutimg4} />
              </div>

              <div className="col-lg-6">
                <h4 className="h4our">Our Vision</h4>

                <div className="colored-underline"> </div>

                <p className="top">
                  To be a global leader in AI & Robotic Engineering, driving
                  technological advancements that revolutionize industries,
                  enhance human lives, and create a sustainable future.
                </p>

                <h4 className="mission">Our Mission</h4>

                <div className="colored-underline"> </div>

                <div id="flex-icons">
                  <div>
                    <img src={aboutimg5} />
                  </div>

                  <div style={{ marginLeft: "20px" }}>
                    <h5 className="h5develop">
                      Develop Cutting-Edge Technology
                    </h5>
                    <p className="suspen">
                      Suspendisse enim condimentum odio praesent. Sodales nisl
                      amet vulputate magna donec.
                    </p>
                  </div>
                </div>

                <div id="flex-icons">
                  <div>
                    <img src={aboutimg5} />
                  </div>

                  <div style={{ marginLeft: "20px" }}>
                    <h5 className="h5develop">
                      Enable Automation and Efficiency
                    </h5>
                    <p className="suspen">
                      Suspendisse enim condimentum odio praesent. Sodales nisl
                      amet vulputate magna donec.
                    </p>
                  </div>
                </div>

                <div id="flex-icons">
                  <div>
                    <img src={aboutimg5} />
                  </div>

                  <div style={{ marginLeft: "20px" }}>
                    <h5 className="h5develop">
                      Enhance Safety and Reliability
                    </h5>
                    <p className="suspen">
                      Suspendisse enim condimentum odio praesent. Sodales nisl
                      amet vulputate magna donec.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <Teamslider/>


        <section id="aboutsec4">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h6 className="journey">JOURNEY</h6>
                <h4 className="ways">Ways We Can Help</h4>

                <div className="about-flex1">
                  <div>
                    <img className="aboutimg6" src={aboutimg6} />
                  </div>

                  <div>
                    <p className="research1">
                      Research and Development - In non vel fermentum aliquam
                      sed amet lorem ultrices lacus. Cras eget tincidunt lectus
                      risus id ultrices.
                    </p>
                    <p className="research2">
                      Research and Development - In non vel fermentum aliquam
                      sed amet lorem ultrices lacus. Cras eget tincidunt lectus
                      risus id ultrices.
                    </p>
                    <p className="research3">
                      Research and Development - In non vel fermentum aliquam
                      sed amet lorem ultrices lacus. Cras eget tincidunt lectus
                      risus id ultrices.
                    </p>
                  </div>
                </div>

                <div className="dic-flex">
                  <div className="cebbbtt">
                    <button className="discover-button">DISCOVER MORE</button>
                  </div>

                  <div>
                    <p className="sem">
                      Sem leo a sagittis nulla. Pulvinar aenean <br></br>{" "}
                      viverra sed varius accumsan.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6" id="colimg">
                <img className="aboutimg7" src={aboutimg7} />
              </div>
            </div>
          </div>
        </section>

        <section id="aboutsec5">
          <div className="container">
            <div className="row">
             
             {/* <div className="col-lg-6"> */}

              <div className="col-lg-3 col-md-6">
                <div className="seccpro">
                  <h1 className="k">1k +</h1>
                  <p className="succp">Success Projects</p>
                </div>
              </div>


              <div className="col-lg-3 col-md-6" id="set-gape01">
                <div className="seccpro1">
                  <h1 className="k">54 +</h1>
                  <p className="succp">Expert Team</p>
                </div>
              </div>
              {/* </div> */}


              <div className="col-lg-3 col-md-6" id="set-gape">
                <div className="seccpro">
                  <h1 className="k">36k +</h1>
                  <p className="succp">Satisfied Clients</p>
                </div>
              </div>


              <div className="col-lg-3 col-md-6" id="set-gape">
                <div className="seccpro">
                  <h1 className="k">15 +</h1>
                  <p className="succp">Awards Wining</p>
                </div>
              </div>




            </div>
          </div>
        </section>


        {/* <Footer /> */}
        <div className="container" id='footer-res'>
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

              <div class="custom-search-container1">

<input className="input" class="custom-search-input1" placeholder="Your email address" />
<img src={ffsend} alt="Search Icon" className="custom-search-icon1" />


</div>            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
