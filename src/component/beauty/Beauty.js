import React from "react";
import "./Beauty.css";

export default function Beauty() {
  return (
    <section className="container-fluid ">
      <div className="row align-items-center ">
        <div className="col-12 bg-white py-3">
          <div className="m-2">
            <div className="row align-items-center  ">
              <div className="col-11">
                <h4>Beauty, Food, Toys & more</h4>
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

          <div className="row  row-cols-xl-6 row-cols-lg-4 row-cols-md-3 row-cols-sm-2  ">
            <div className="col p-4">
              <div className="card text-center" style={{ width: "12rem" }}>
                <img
                  src="./product/1.jpeg"
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
              <div className="card text-center" style={{ width: "12rem" }}>
                <img
                  src="./product/2.jpeg"
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
              <div className="card text-center" style={{ width: "12rem" }}>
                <img
                  src="./product/3.jpeg"
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
              <div className="card text-center" style={{ width: "12rem" }}>
                <img
                  src="./product/4.jpeg"
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
              <div className="card text-center" style={{ width: "12rem" }}>
                <img
                  src="./product/5.jpeg"
                  className="card-img-top img-adj "
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">Top Mirrorless Cameras</p>
                  <h6>Shop Now!</h6>
                </div>
              </div>
            </div>
            <div className="col p-4">
              <div className="card text-center" style={{ width: "12rem" }}>
                <img
                  src="./product/6.jpeg"
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
    </section>
  );
}
