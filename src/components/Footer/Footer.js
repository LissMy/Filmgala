import React from "react";
import { Search } from "react-feather";
import { Link } from "react-router-dom";
import Logo from "./RandomLogo.png"
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <img src={Logo} alt="" />
            <div className="linksDiv">
                <p><Link className="link" to="/">Home</Link></p>
                <p><Link className="link" to="/explore">Explore</Link></p>
            </div>
            <div className="cpDiv">
                <p>Copyright | All Rights Reserved</p>
            </div>
        </div>)
        ;
};

export default Footer;