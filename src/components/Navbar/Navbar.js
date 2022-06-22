import React from "react";
import { Search } from "react-feather";
import { Link } from "react-router-dom";
import Logo from "./RandomLogo.png"
import { MdSearch, MdTitle } from 'react-icons/md';
import { useState } from "react";
import { getMovieImages } from "../../api/movies";

import "./Navbar.css";

const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };



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
          <input type="text" placeholder='Enter movie' onChange={handleChange}  className="search-bar"/>
          <button type="submit" className="submit"><MdSearch /></button>
        </div>
      </form>
    </div>
  </section>
        <p className="link">
          <Link to="/explore">Explore</Link>
        </p>
        <p className="link">
          <Link to="/favorites">Favorites</Link>
        </p>
      </div>
    </div>
  );
}

export default Navbar;