import React from "react";
import "./Offers.css";

export default function Offers() {
  return (
    <section className="container-fluid ">
      <div className="row align-items-center ">
        <div className="col-xl-4 col-lg-6 py-3 bg-white ">
          <div>
            <div className="row align-items-center  ">
              <div className="col-10 mb-3">
                <h4>Offers on Nation’s Favorites</h4>
              </div>
              <div className="col-2 mb-3 text-center">
                <spam>
                  <i
                    className="fa-solid fa-circle-chevron-right fa-xl"
                    style={{ color: "#1C41D6" }}
                  ></i>
                </spam>
              </div>
            </div>
          </div>
          <div className="ms-3">
            <div className="row gy-4 align-items-center ">
              <div className="col ">
                <div className="card text-center" style={{ width: "12rem" }}>
                  <img
                    src="./product/7.jpeg"
                    className="card-img-top  img-adj"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">Top Mirrorless Cameras</p>
                    <h6>Shop Now!</h6>
                  </div>
                </div>
              </div>
              <div className="col ">
                <div className="card text-center" style={{ width: "12rem" }}>
                  <img
                    src="./product/8.jpeg"
                    className="card-img-top  img-adj"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">Top Mirrorless Cameras</p>
                    <h6>Shop Now!</h6>
                  </div>
                </div>
              </div>
              <div className="col ">
                <div className="card text-center" style={{ width: "12rem" }}>
                  <img
                    src="./product/9.jpg"
                    className="card-img-top img-adj "
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">Top Mirrorless Cameras</p>
                    <h6>Shop Now!</h6>
                  </div>
                </div>
              </div>
              <div className="col ">
                <div className="card text-center" style={{ width: "12rem" }}>
                  <img
                    src="./product/10.jpg"
                    className="card-img-top img-adj "
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">Top Mirrorless Cameras</p>
                    <h6>Shop Now!</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-8 col-lg-6">
          <img
            src="./mobads.png"
            alt="fightads"
            className="w-100 img-fluid "
            style={{ height: "47rem" }}
          />
        </div>
      </div>
    </section>
  );
}
