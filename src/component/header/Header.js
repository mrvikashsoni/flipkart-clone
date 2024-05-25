import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="./flipkartlogo.svg" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse align-items-center ms-5 me-5"
            id="navbarSupportedContent"
          >
            <form className="d-flex " role="search">
              <div class="input-group input-group-lg">
                <span className="input-group-text " id="inputGroup-sizing-lg">
                  <i
                    class="fa-solid fa-magnifying-glass"
                    style={{ color: "rgba(0,0,0,0.4)" }}
                  ></i>
                </span>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  placeholder="Search for Products, Brands and More"
                />
              </div>
              {/* <input
              className="form-control me-2 "
              type="search"
              placeholder="Search for Products, Brands and More"
              aria-label="Search"
            /> */}
            </form>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown ">
                <div>
                  <img src="./profileicon.svg" />
                </div>
                <a
                  className="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Login
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      New customer?
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      My Profile
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      FlipkarPlusZone
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Orders
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      WiseLists
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Rewards
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Gift Cards
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <div>
                  <img src="./cart.svg" />
                </div>
                <a className="nav-link " aria-current="page" href="#">
                  Cart
                </a>
              </li>
              <li className="nav-item">
                <div>
                  <img src="./shop.svg" />
                </div>
                <a className="nav-link" href="#">
                  Seller
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
