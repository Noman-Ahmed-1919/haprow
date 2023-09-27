import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

import Header from "./Header";
import Footer from "./Footer";

import logo from "../images/logo.png";

import cont1 from "../images/time.png";
import cont2 from "../images/map-pin.png";
import cont3 from "../images/briefcase.png";
import cont4 from "../images/phone.png";

import insta from "../images/insta.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";
import ffsend from "../images/ffsee.png";


const Contact = () => {
  return (
    <>
      <section id="contpage">
        <Header />

        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h5 className="h5con">CONTACT US</h5>

              <h2 className="h2get">
                Get in Touch with Our<br></br> Hapro Office
              </h2>

              <div className="two-div">
                <div className="time-display">
                  <div id="ziet-res">
                    <img src={cont1} />
                  </div>

                  <div className="office-hr">
                    <h5>Office Hours</h5>
                    <p>Monday-Friday</p>
                    <p>8:00 am to 5:00 pm</p>
                  </div>
                </div>

                <div className="time-display">
                  <div id="ziet-res">
                    <img src={cont2} />
                  </div>

                  <div className="office-hr">
                    <h5>Our Address</h5>
                    <p>484 Roboc XZ. Future</p>
                    <p>Hapro 98380, ID</p>
                  </div>
                </div>
              </div>

              <div className="two-div1">
                <div className="time-display">
                  <div id="ziet-res">
                    <img src={cont3} />
                  </div>

                  <div className="office-hr">
                    <h5>Office 2</h5>
                    <p>363 Intel GT. Matrix </p>
                    <p>Robokop 98380, ID</p>
                  </div>
                </div>

                <div className="time-display" id="left-one">
                  <div id="ziet-res">
                    <img className="cont4" src={cont4} />
                  </div>

                  <div className="office-hr">
                    <h5>Get In Touch</h5>
                    <p>+1-357-888-0653</p>
                    <p>+1-246-999-0987</p>
                  </div>
                </div>
              </div>

              <h2 className="follow">FOLLOW Our SOCIALS </h2>

              <div className="social">
                <img src={insta} />
                <img src={twitter} style={{ marginLeft: "15px" }} />
                <img src={youtube} style={{ marginLeft: "15px" }} />
                <img src={linkedin} style={{ marginLeft: "15px" }} />
              </div>
            </div>

            <div className="col-lg-6 center">
              <div className="back-color">
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
        </div>

        <div className="container" id="consec3">
          <div className="row">
            <div className="col-12">
              <h1 className="h1we">We are located here</h1>
            </div>
          </div>
        </div>

        <div className="container" id="seccont">
          <div className="row">
            <div className="col-12">
              <div className="gmap_canvas">
                <iframe
                  id="map"
                  class="gmap_iframe"
                  width="100%"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=650&amp;height=850&amp;hl=en&amp;q=sole solution for ielts R-805 block 9&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="container" id='footer-res'>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <img id="logo" src={logo} width={135} height={35} alt="" />

              <p className="copy">Copyright © 2023 Haprow.</p>
              <p className="all">All rights reserved</p>

              <div className="social">
                <img src={insta} />
                <img src={twitter} id='twitterr'/>
                <img src={youtube} id='twitterr'/>
                <img src={linkedin} id='twitterr' />
              </div>
            </div>

            <div className="col-lg-2 col-sm-6" id="col1">
              <h2 className='com11'>Company</h2>

              <p style={{ marginTop: "30px" }}>About us</p>
              <p>Blog</p>
              <p>Contact us</p>
              <p>Pricing</p>
              <p>Testimonials</p>
            </div>

            <div className="col-lg-2 col-sm-6" id="col2">
              <h2 className='res11'>Resources</h2>

              <p style={{ marginTop: "30px" }}>Case Studies</p>
              <p>Webinars</p>
              <p>Developer</p>
              <p>Documentation</p>
            </div>

            <div className="col-lg-2 col-sm-6" id="col3">
              <h2 className='supp11'>Support</h2>

              <p style={{ marginTop: "30px" }}>Help center</p>
              <p>Terms of service</p>
              <p>Legal</p>
              <p>Privacy policy</p>
            </div>

            <div className="col-lg-3 col-sm-6" id="col31">
              <h2 className='stay11'>Stay up to date</h2>

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

export default Contact;
