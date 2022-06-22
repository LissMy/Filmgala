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
        <p className="link">
          <Link to="/explore">Explore</Link>
        </p>
        <p className="link">
          <Link to="/favorites">Favourites</Link>
        </p>
      </div>
    </div>
  );
}

export default Navbar;