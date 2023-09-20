import React from "react";
import Header from "./Header";

import pay1 from "../images/pay1.png";
import pay2 from "../images/pay2.png";
import pay3 from "../images/pay3.png";
import pay4 from "../images/pay4.png";
import pay5 from "../images/pay5.png";

import line from "../images/linee.png";

import logo from "../images/logo.png";
import insta from "../images/insta.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";

const Order3 = () => {
  return (
    <>
      <section id="main-order-3">
        <Header />

        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="h1-check">Checkout Your Order</h1>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="order-back-3">
                <h4 className="h4-payyment">Payment Options</h4>

                <div class="d-flex justify-content-evenly" id="bac-orde-3">
                  <img src={pay1} />

                  <img src={line} />

                  <img src={pay2} />

                  <img src={line} />

                  <img src={pay3} />

                  <img src={line} />

                  <img src={pay4} />

                  <img src={line} />

                  <img src={pay5} />
                </div>

                <div>
                  <label className="label-ord1">Name on Card</label>
                </div>
                <input
                  className="ord-inp3"
                  type="text"
                  placeholder="Name on Card"
                  required
                />

                <div>
                  <label className="label-ord1">Card Number</label>
                </div>
                <input
                  className="ord-inp3"
                  type="text"
                  placeholder="Card Number"
                  required
                />




<div class="d-flex justify-content-between" id="gap-ord1">
                  <div class="flex-fill me-2">
                    <label className="label-ord">Expire Date</label>

                    <input
                      className="ord-inp1"
                      type="text"
                      placeholder="DD/YY"
                      required
                    />
                  </div>

                  <div class="flex-fill ms-2">
                    <label className="label-ord">CVC</label>

                    <input
                      className="ord-inp2"
                      type="text"
                      placeholder="CVC"
                      required
                    />
                  </div>
                </div>


<div id="ord-gap">

                <div className="ord-place-btn">
                  <button className="place-btn">
                 PLACE ORDER

                    </button>
                </div>
                </div>



              </div>
            </div>
          </div>
        </div>

       
       
       
       <div className="container">
        <div className="row">
            <div className="col-12">

                <div className="ord3-sec2">

                <h4 className="h4-add">Additional Information</h4>
                
 <div className="">
                  <label className="h6-not">Order Notes (optional)</label>
                </div>

                <div>
                  <textarea className="text-area-ord" placeholder="Write here" />
                </div>



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

export default Order3;