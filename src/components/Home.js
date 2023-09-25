import React from 'react'


import img1 from "../images/img1.png";
import newicon from "../images/icon.png";
import Header from "./Header";
import img2 from "../images/img2.png";
import auto1 from "../images/automate.png";
import vector from "../images/Vector.png";
import accuracy from "../images/accuracy.png";
import Footer from "./Footer";
import Slider1 from "./Slider1";

import logo from "../images/logo.png";
import insta from "../images/insta.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";
import ffsend from "../images/ffsee.png";
import Newsslider from './Newsslider';


const Home = () => {
  return (
    <>
      <section id="main-page">
      <Header />

        <section id="sec2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h6 className="aiboat">AI & Robotic Engineering</h6>

                <h1 className="changing">
                  Changing Your Idea Of What Robots Can Do.
                </h1>
                <p className="leo">
                  Leo scelerisque dolor non ut dignissim aliquet sit nulla.
                  Venenatis leo leo et in lorem netus adipiscing cursus.{" "}
                </p>

<div id='discover'>
<button className="btn1">DISCOVER MORE</button>

</div>
              </div>

              <div className="col-lg-6">
                <img className="img1" src={img1} />
              </div>
            </div>
          </div>
        </section>



        <section id="sec3">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img className="img2" src={img2} />
              </div>

              <div className="col-lg-6">
                <p className="aboutus">ABOUT US</p>
                <h2 className="innovating">
                  Innovating the Future with AI and Robotics
                </h2>

                <div className="sec2flex">
                  <div className="automate">
                    <div>
                      <img src={auto1} className="auto1" />
                    </div>

                    <div>
                      <h4 className="h4auto">Automation</h4>
                      <p className="tincidunt">
                        Tincidunt nisi orci sodales non. Netus integer
                        nunc mi nibh cursus vitae ut nulla lobortis.
                         Risus duis bibendum.
                      </p>
                    </div>
                  </div>

                  <div className="automate" style={{ marginLeft: "20px" }}>
                    <div>
                      <img src={vector} className="auto1" />
                    </div>

                    <div>
                      <h4 className="h4auto">Precision</h4>
                      <p className="tincidunt">
                        Tincidunt nisi orci sodales non. Netus integer
                        nunc mi nibh cursus vitae ut nulla lobortis.
                         Risus duis bibendum.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="sec2flex">
                  <div className="automate">
                    <div>
                      <img src={accuracy} className="auto1" />
                    </div>

                    <div>
                      <h4 className="h4auto">Accuracy</h4>
                      <p className="tincidunt">
                        Tincidunt nisi orci sodales non. Netus integer
                        nunc mi nibh cursus vitae ut nulla lobortis.
                        Risus duis bibendum.
                      </p>
                    </div>
                  </div>

                  <div className="automate" style={{ marginLeft: "20px" }}>
                    <div>
                      <img src={vector} className="auto1" />
                    </div>

                    <div>
                      <h4 className="h4auto">Precision</h4>
                      <p className="tincidunt">
                        Tincidunt nisi orci sodales non. Netus integer
                        nunc mi nibh cursus vitae ut nulla lobortis.
                        Risus duis bibendum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sec4">
          <h5 className="our">OUR TESTIMONIAL</h5>
          <h3 className="Trusted">
            Trusted by <span className="threek"> 30k+ World Class </span>{" "}
            Companies
          </h3>

          <Slider1 />

{/* ================================================= slider1 code start from here ============================= */}






{/* ================================================= slider1 code start end here ============================= */}


          
        </section>

<section id='news-sec5'>
<Newsslider/>

</section>

        {/* <Footer/> */}

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


</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
