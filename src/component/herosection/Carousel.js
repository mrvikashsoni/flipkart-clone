import React from "react";
import "./Carousel.css";

export default function Carousel() {
  return (
    <section className="container-fluid ">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="hero1.webp" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="hero2.webp" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="hero3.webp" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="hero4.webp" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="hero5.webp" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="hero6.webp" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            // className="carousel-control-prev-icon"
            className="btn_hero btn-hero"
            aria-hidden="true"
          >
            <i
              class="fa-solid fa-angles-left fa-2xl"
              style={{ color: "black" }}
            ></i>
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            //className="carousel-control-next-icon"
            aria-hidden="true"
            className="btn_hero"
          >
            <i
              class="fa-solid fa-angles-right fa-2xl"
              style={{ color: "black" }}
            ></i>
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
