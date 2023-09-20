import React from "react";
import orderimg1 from "../images/ordimg1.png";
import orderimg2 from "../images/star.png";

import logo from "../images/logo.png";
import insta from "../images/insta.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";

import { NavLink } from "react-router-dom";

import Header from "./Header";

const Order = () => {
  return (
    <>
      <section id="main-sec-order">
        <Header />

        <div className="container">
          <div className="row">
            <div className="col-md-8" id="order-top">
              <img src={orderimg1} className="orderimg1" />
            </div>

            <div className="col-md-4" id="order-top">
              <h6 className="h6-robot">Robot</h6>
              <h2 className="h2-tim-tim">Tim Tim Ai Robot</h2>
              <img src={orderimg2} className="orderimg2" />
              <p className="p-thearu">
                The argument in favor of use filler text goes something like
                this you use real content a design process an time you reach
                review point you end up review an negotiating a content itself
                and the design inevitable argumentation.
              </p>

              <h2 className="h2-color">Color:</h2>

              <h2 className="h2-color">$69.00</h2>

              <div className="order-btns">
                <div>
                  <button className="order-btn1">1</button>
                </div>

                <div>
                  <NavLink to="/order2" className="" href="#">
                    <button className="order-btn2">ADD TO CART</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="order-three-btn">
                <div>
                  <button className="btn-ord-3">Description</button>
                </div>

                <div>
                  <button className="btn-ord-4">Additional Information</button>
                </div>

                <div>
                  <button className="btn-ord-5">Reviews (3)</button>
                </div>
              </div>

              <h2 className="description">Description:</h2>

              <p className="p-autism">
                Autism Spectrum Disorder (ASD) is a complex neurodevelopmental
                condition that affects millions of people worldwide. It is
                characterized by a range of challenges related to communication,
                social interaction, and repetitive behaviors.For individuals
                with autism and their caregivers, navigating these challenges
                can be both rewarding and demanding.
              </p>
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

export default Order;
