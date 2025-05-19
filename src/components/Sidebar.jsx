// import CoatOfArm from "../Images/Nigeria coat of arm.jfif";
import logo from "../Images/logoyct.png";
import { Link } from "react-router-dom";
import Logout from "./Authentication/Logout";

export default function Sidebar({ user }) {
  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <Link to="/">
          <img
            src={logo}
            className="img-fluid coat-of-arm"
            alt="Nigeria Coat of Arm"
          />
        </Link>{" "}
        <button
          className="navbar-toggler"
          style={{ border: "none", outline: "none" }}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body p-3 mt-3">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item dropdown">
                <Link
                  to="/Executive positions"
                  style={{ color: "white", fontSize: "20px" }}
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Executive position
                </Link>
                <ul
                  className="dropdown-menu dropdown-menu-dark p-3"
                  style={{ borderRadius: "0px" }}
                >
                  <li>
                    <Link
                      to="/how-to-vote"
                      className="dropdown-item"
                      style={{ fontSize: "18px" }}
                    >
                      How to vote
                    </Link>
                    {user ? (
                      <>
                        {console.log("User is authenticated:", user)}
                        <Link
                          to="/fci-voting-dashboard"
                          className="dropdown-item"
                          style={{ fontSize: "18px" }}
                        >
                          Student Voting Dashboard
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/Auth/login"
                          className="dropdown-item"
                          style={{ fontSize: "18px", color: "green" }}
                        >
                          Login
                        </Link>
                      </>
                    )}
                  </li>
                </ul>
                <li>
                  <button type="button" className="logoutbtn" onClick={Logout}>
                    Log out
                  </button>
                </li>
              </li>
            </ul>
            <form className="d-flex mt-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ borderRadius: "0px", height: "40px" }}
              />
              <button
                className="btn btn-success"
                style={{ borderRadius: "0px", height: "40px" }}
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}
