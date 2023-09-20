import React from "react";
import Header from "./Header";

import { NavLink } from "react-router-dom";


import logo from "../images/logo.png";
import insta from "../images/insta.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";

import imgord1 from "../images/small-tim1.png";
import imgord2 from "../images/small-tim2.png";

const Order2 = () => {
  return (
    <>
      <section id="order-page-2">
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
            <div className="col-lg-8" id="order-sec2">
              <div className="order2-back">
                <h4 className="h4-bill">Billing Information</h4>

                <div>
                  <label className="label-ord">User name</label>
                </div>
                <div className="d-flex">
                  <div className="flex-fill">
                    <input
                      className="ord-inp1"
                      type="text"
                      placeholder="First name"
                      required
                    />
                  </div>

                  <div className="flex-fill mx-2">
                    <input
                      className="ord-inp2"
                      type="text"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="label-ord1">Address</label>
                </div>
                <input
                  className="ord-inp3"
                  type="text"
                  placeholder="Last name"
                  required
                />

                <div class="d-flex">
                  <div class="mb-3 mx-2">
                    <label for="inputField1" className="inp-coun">
                      Country
                    </label>
                    <div class="input-group">
                      <input
                        type="text"
                        className="form-control ord-inp4"
                        id="inputField1"
                        placeholder="Select"
                      />
                      <button
                        class="btn btn-outline-secondary dropdown-toggle order-btn-col"
                        type="button"
                        data-toggle="dropdown"
                      >
                        <span class="caret"></span>
                      </button>
                      <div class="dropdown-menu">
                        {/* <!-- Dropdown items go here --> */}
                      </div>
                    </div>
                  </div>
                  <div class="mb-3 mx-2">
                    <label for="inputField2" className="inp-coun">
                      Region/State
                    </label>
                    <div class="input-group">
                      <input
                        type="text"
                        className="form-control ord-inp4"
                        id="inputField2"
                        placeholder="Select"
                      />
                      <button
                        class="btn btn-outline-secondary dropdown-toggle order-btn-col"
                        type="button"
                        data-toggle="dropdown"
                      >
                        <span class="caret"></span>
                      </button>
                      <div class="dropdown-menu">
                        {/* <!-- Dropdown items go here --> */}
                      </div>
                    </div>
                  </div>
                  <div class="mb-3 mx-2">
                    <label for="inputField3" className="inp-coun">
                      City
                    </label>
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control ord-inp4"
                        id="inputField3"
                        placeholder="Select"
                      />
                      <button
                        class="btn btn-outline-secondary dropdown-toggle order-btn-col"
                        type="button"
                        data-toggle="dropdown"
                      >
                        <span class="caret"></span>
                      </button>

                      <div class="dropdown-menu">
                        {/* <!-- Dropdown items go here --> */}
                      </div>
                    </div>
                  </div>
                  <div class="mb-3 mx-2">
                    <label for="inputField4" className="inp-coun">
                      Zip Code
                    </label>
                    <div class="input-group">
                      <input
                        type="text"
                        className="form-control ord-inp4"
                        id="inputField4"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                </div>

                <div class="d-flex justify-content-between">
                  <div class="flex-fill me-2">
                    <label className="label-ord">Email</label>

                    <input
                      className="ord-inp1"
                      type="text"
                      placeholder="Enter Your Email"
                      required
                    />
                  </div>

                  <div class="flex-fill ms-2">
                    <label className="label-ord">Phone Number</label>

                    <input
                      className="ord-inp2"
                      type="text"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                </div>

                <div className="form-check check-btn">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="shipToDifferentAddress"
                  />
                  <label
                    class="form-check-label label-con"
                    for="shipToDifferentAddress"
                  >
                    Ship to a different address
                  </label>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="back-md-2">
                <h6 className="h6-ordd">Order Summery</h6>

                <div className="d-flex">
                  <img src={imgord1} className="img-ord2" />

                  <p className="timtim11">
                    TimTim Blue color 2258 Camera Body+ 18-...
                  </p>
                </div>

                <div className="d-flex">
                  <img src={imgord2} className="img-ord2" />

                  <p className="timtim11">
                    TimTim Blue color 2258 Camera Body+ 18-...
                  </p>
                </div>

                <div class="d-flex justify-content-between">
                  <p className="p-sub">Sub-total</p>
                  <p className="p-sub">$320</p>
                </div>

                <div class="d-flex justify-content-between">
                  <p className="p-sub">Shipping</p>
                  <p className="p-sub">free</p>
                </div>

                <div class="d-flex justify-content-between">
                  <p className="p-sub">Discount</p>
                  <p className="p-sub">$24</p>
                </div>

                <div class="d-flex justify-content-between">
                  <p className="p-sub">Tax</p>
                  <p className="p-sub">$61.99</p>
                </div>

                <div className="line"></div>

                <div class="d-flex justify-content-between" id="tax-top">
                  <p className="p-sub">Total</p>
                  <p className="p-sub">$375.99 USD</p>
                </div>

                <div className="ord-place-btn">
                <NavLink to="/order3"  className="nav-link" href="#">
                  <button className="place-btn">
                 PLACE ORDER

                    </button>
                    </NavLink>
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

export default Order2;