import React from "react";
import "./Electronic.css";

export default function Electronic() {
  return (
    <section className="container-fluid ">
      <div className="row align-items-center justify-content-center ">
        <div className="col-xl-10 col-lg-12  bg-white py-3 ">
          <div className="m-2">
            <div className="row align-items-center  ">
              <div className="col-11">
                <h4>Best of Electronics</h4>
              </div>
              <div className="col-1 text-end">
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
            <div className="row  row-cols-xl-6 row-cols-lg-4 row-cols-md-3 row-cols-sm-2">
              <div className="col p-4">
                <div
                  className=" card mb-3 text-center "
                  style={{ width: "12rem" }}
                >
                  <img
                    src="./ele1.webp"
                    className="card-img-top  img-adj"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">Top Mirrorless Cameras</p>
                    <h6>Shop Now!</h6>
                  </div>
                </div>
              </div>
              <div className="col p-4">
                <div
                  className=" card mb-3 text-center"
                  style={{ width: "12rem" }}
                >
                  <img
                    src="./ele2.webp"
                    className="card-img-top  img-adj"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">
                      <br />
                      Projecter
                      <br />
                    </p>
                    <h6>From ₹9999</h6>
                  </div>
                </div>
              </div>
              <div className="col p-4">
                <div
                  className=" card mb-3 text-center"
                  style={{ width: "12rem" }}
                >
                  <img
                    src="./ele3.webp"
                    className="card-img-top  img-adj"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">
                      <br />
                      Trimmer
                      <br />
                    </p>
                    <h6>From ₹999</h6>
                  </div>
                </div>
              </div>
              <div className="col p-4">
                <div
                  className=" card mb-3 text-center"
                  style={{ width: "12rem" }}
                >
                  <img
                    src="./ele4.webp"
                    className="card-img-top img-adj "
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">
                      <br />
                      Power Bank
                      <br />
                    </p>
                    <h6>From ₹1999</h6>
                  </div>
                </div>
              </div>
              <div className="col p-4">
                <div
                  className=" card mb-3 text-center"
                  style={{ width: "12rem" }}
                >
                  <img
                    src="./ele5.webp"
                    className="card-img-top img-adj "
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">
                      <br />
                      Printer
                      <br />
                    </p>
                    <h6>From ₹7999</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2 flightAds pb-1">
          <img
            src="./flightads.webp"
            alt="fightAds"
            className=" w-100 "
            style={{ height: "30rem" }}
          />
        </div>
      </div>
    </section>
  );
}
