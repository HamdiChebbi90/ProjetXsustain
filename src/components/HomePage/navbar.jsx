// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import fb from "../../assets/icon/fb.svg";
import insta from "../../assets/icon/inst.svg";
import yt from "../../assets/icon/youtube.svg";
import PropTypes from 'prop-types';
import "./style.css"




const Navbar = ({ setActivePage }) => {
  Navbar.propTypes = {
    setActivePage: PropTypes.func.isRequired,
  };
  return (
    <div className="nav">
      <ul className="navbar__links">
        <div className="left_item">
          <li className="navbar__links__item">
            <Link onClick={() => setActivePage("listen")}>LISTEN LIVE</Link>
          </li>
          <li className="navbar__links__item">
            <Link onClick={() => setActivePage("contact")}>CONTACT US</Link>
          </li>
          <li className="navbar__links__item">
            <Link onClick={() => setActivePage("getapp")}>GET THE APP</Link>
          </li>
        </div>
        <div className="right_icon">
          <li className="navbar__links__icon">
            <img src={insta} alt="insta" />
          </li>
          <li className="navbar__links__icon">
            <img src={yt} alt="yt" />
          </li>
          <li className="navbar__links__icon">
            <img src={fb} alt="fb" />
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
