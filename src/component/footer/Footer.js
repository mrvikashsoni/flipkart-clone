import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="container-fluid bg-dark text-white mt-4 pb-4">
      <div>
        <div class="container-fluid text-center ps-5 py-4 ">
          <div class="row align-items-start">
            <div class="col">
              <div class="sub_foot_tittle">About</div>
              <div class="text-start">
                <ul>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Flipkart Stories</a>
                  </li>
                  <li>
                    <a href="#">Press</a>
                  </li>
                  <li>
                    <a href="#">Flipkart Wholesale</a>
                  </li>
                  <li>
                    <a href="#">Cleartrip</a>
                  </li>
                  <li>
                    <a href="#">Corporate Information</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col">
              <div class="sub_foot_tittle">Help</div>
              <div class="text-start">
                <ul>
                  <li>
                    <a href="#">Payments</a>
                  </li>
                  <li>
                    <a href="#">Shipping</a>
                  </li>
                  <li>
                    <a href="#">Cancellation & Returns</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Report Infringement</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col">
              <div class="sub_foot_tittle">Consumer Policy</div>
              <div class="text-start">
                <ul>
                  <li>
                    <a href="#">Cancellation & Returns</a>
                  </li>
                  <li>
                    <a href="#">Terms of Use</a>
                  </li>
                  <li>
                    <a href="#">Security</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Sitemap</a>
                  </li>
                  <li>
                    <a href="#">Grievance Redressal</a>
                  </li>
                  <li>
                    <a href="#">EPR Compliance</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col">
              <div class="sub_foot_tittle">Social</div>
              <div class="text-start">
                <ul>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">Youtube</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col">
              <div class="sub_foot_tittle">Mail Us:</div>
              <div class="text-start">
                <ul>
                  <li>
                    <address>
                      <small>
                        Flipkart LTD, <br />
                        Building Alyssa, <br />
                        outer Ring Road Bengalure 560103 <br />
                        Karnataka, India
                      </small>
                    </address>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col">
              <div class="sub_foot_tittle">Registered Office Address</div>
              <div class="text-start">
                <ul>
                  <li>
                    <address>
                      <small>
                        Flipkart LTD, <br />
                        Building Alyssa, <br />
                        outer Ring Road Bengalure 560103 <br />
                        Karnataka, India
                      </small>
                    </address>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div class="container-fluid text-center  ">
          <div class="row align-items-start row-cols-xxl-5 row-cols-xl-3 row-cols-md-2 row-cols-1">
            <div class="col">
              <span>
                <i
                  class="fa-solid fa-shop fa-xs me-1"
                  style={{ color: "#FFD43B" }}
                ></i>
              </span>
              <span class="last-text">Become a Seller</span>
            </div>
            <div class="col">
              <span>
                <i
                  class="fa-solid fa-star fa-xs me-1"
                  style={{ color: "#FFD43B" }}
                ></i>
              </span>
              <span class="last-text">Advertise</span>
            </div>
            <div class="col">
              <span>
                <i
                  class="fa-solid fa-gift fa-xs me-1"
                  style={{ color: "#FFD43B" }}
                ></i>
              </span>
              <span class="last-text">Gift Cards</span>
            </div>
            <div class="col">
              <span>
                <i
                  class="fa-solid fa-circle-info fa-xs me-1"
                  style={{ color: "#FFD43B" }}
                ></i>
              </span>
              <span class="last-text">Help Center</span>
            </div>
            <div class="col">
              <span class="last-text">
                © 2007-2024 <span class="last-text">Flipkart.com</span>
              </span>
            </div>
            <div class="col-xxl-12">
              <img src="./cards.svg" alt="cards" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
