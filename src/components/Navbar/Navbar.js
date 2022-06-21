import React from "react";
import { Search } from "react-feather";
import { Link } from "react-router-dom";
import Logo from "./RandomLogo.png"

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img className="Logo" src={Logo} alt="" />
      </Link>

      <div className="right">
          {/* search */}
      <section className='section'>
    <div className='secction-center'>
      <form>
        <div className='form-control'>
          
          <input type="text" placeholder='Enter movie'  className="search-bar"/>
          <button type="submit" className="submit"><MdSearch /></button>
        </div>
      </form>
    </div>
  </section>
        <p className="link">
          <Link to="/explore">Explore</Link>
        </p>
      </div>
    </div>
  );
}

export default Navbar;
