import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/smallLogoLangMarket.png"
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <Link to="/" className="navbar-brand">
            <img src={Logo} alt="Logo" width="50px" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Đăng nhập
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                Đăng ký
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
